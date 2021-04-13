import styled, { css } from 'styled-components/macro';
import { Link, LinkProps } from 'react-router-dom';

interface Props {
  fullWidth?: boolean;
}

const ButtonLink: React.FC<Props & LinkProps> = ({fullWidth, ...props}) => <Link {...props} />;

export default styled(ButtonLink)`
  text-decoration: none;
  font-weight: 500;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, fullWidth }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0 ${theme.spacing.sm};
    width: ${fullWidth ? '100%' : 'auto'};
    border-radius: ${theme.borderRadius.lg};
  `}
`;
