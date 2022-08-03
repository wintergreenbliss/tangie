import Icon, { IconProps } from "./icon";
import insomniaIcon from "../../public/mvp-icons/insomnia-icon.svg";

const AnxietyIcon = ({
  src = insomniaIcon,
  alt = "icon",
  height = "20px",
  width = "20px",
}: IconProps) => <Icon src={src} alt={alt} height={height} width={width} />;

export default AnxietyIcon;
