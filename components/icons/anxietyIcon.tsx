import Icon from "./icon";
import insomniaIcon from "../../public/mvp-icons/insomnia-icon.svg";

type IconProps = {
  src: string;
  alt?: string;
  height?: string;
  width?: string;
};

const AnxietyIcon = ({
  src = insomniaIcon,
  alt = "icon",
  height = "20px",
  width = "20px",
}: IconProps) => <Icon src={src} alt={alt} height={height} width={width} />;

export default AnxietyIcon;
