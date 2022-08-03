import Image from "next/image";
import insomniaIcon from "../../public/mvp-icons/insomnia-icon.svg";

export type IconProps = {
  src: any;
  alt?: string;
  height?: string;
  width?: string;
};

const defaultProps: IconProps = {
  src: insomniaIcon,
  alt: "icon",
  height: "20px",
  width: "20px",
};

const Icon = ({
  src = defaultProps.src,
  alt = defaultProps.alt,
  height = defaultProps.height,
  width = defaultProps.width,
}: IconProps) => <Image src={src} alt={alt} height={height} width={width} />;

export default Icon;
