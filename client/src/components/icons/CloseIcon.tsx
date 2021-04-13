import IconProps from "typescript/IconProps";
import { useTheme } from "styled-components/macro";

const CloseIcon: React.FC<IconProps> = props => {
  const theme = useTheme();
  const color = props.color ? props.color : theme.colors.black;

  return (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.96967 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L7 5.93934L11.9697 0.96967C12.2626 0.676777 12.7374 0.676777 13.0303 0.96967C13.3232 1.26256 13.3232 1.73744 13.0303 2.03033L8.06066 7L13.0303 11.9697C13.3232 12.2626 13.3232 12.7374 13.0303 13.0303C12.7374 13.3232 12.2626 13.3232 11.9697 13.0303L7 8.06066L2.03033 13.0303C1.73744 13.3232 1.26256 13.3232 0.96967 13.0303C0.676777 12.7374 0.676777 12.2626 0.96967 11.9697L5.93934 7L0.96967 2.03033C0.676777 1.73744 0.676777 1.26256 0.96967 0.96967Z"
      fill={color}
    />
  </svg>
)};

export default CloseIcon;
