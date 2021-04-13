import IconProps from 'typescript/IconProps';
import { useTheme } from 'styled-components';

const PencilIcon: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? props.color : theme.colors.black;
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.6839 17.5527L1.38096 18.2698C0.704137 18.3826 0.117362 17.7958 0.230166 17.119L0.947323 12.8161C0.981588 12.6105 1.07923 12.4207 1.22661 12.2734L12.2929 1.20708C12.6834 0.816554 13.3166 0.816553 13.7071 1.20708L17.2929 4.79286C17.6834 5.18339 17.6834 5.81655 17.2929 6.20708L6.22661 17.2734C6.07923 17.4207 5.88949 17.5184 5.6839 17.5527ZM3.41084 16.4108L2.08917 15.0891L2.40057 13.2207L3.20711 12.4142L6.08579 15.2929L5.27925 16.0994L3.41084 16.4108ZM6.7929 14.5858L13.5858 7.79287L10.7071 4.91419L3.91422 11.7071L6.7929 14.5858ZM11.4142 4.20708L14.2929 7.08576L15.8787 5.49997L13 2.62129L11.4142 4.20708Z"
        fill={color}
      />
    </svg>
  );
};

export default PencilIcon;
