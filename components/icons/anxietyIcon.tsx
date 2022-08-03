import Icon, { IconProps } from "./icon";
import insomniaIcon from "../../public/mvp-icons/insomnia-icon.svg";

const AnxietyIcon = ({ src = insomniaIcon, alt, height, width }: IconProps) => (
  <Icon src={src} alt={alt} height={height} width={width} />
);

export default AnxietyIcon;
