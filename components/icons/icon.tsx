import Image from "next/image";
import insomniaIcon from "../../public/mvp-icons/insomnia-icon.svg";

type IconProps = {
  src: string;
  alt?: string;
  height?: string;
  width?: string;
};

const Icon = ({
  src = insomniaIcon,
  alt = "icon",
  height = "20px",
  width = "20px",
}: IconProps) => <Image src={src} alt={alt} height={height} width={width} />;

export default Icon;