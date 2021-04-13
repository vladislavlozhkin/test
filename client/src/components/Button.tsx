import styled, { css } from 'styled-components/macro';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  type: 'button' | 'submit' | 'reset';
}

const ButtonLink: React.FC<Props> = ({ fullWidth, ...props }) => (
  <button {...props} />
);

export default styled(ButtonLink)`
  text-decoration: none;
  font-weight: 500;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:disabled {
    background: ${({theme}) => theme.colors.grey2};
  }

  ${({ theme, fullWidth }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0 ${theme.spacing.sm};
    width: ${fullWidth ? '100%' : 'auto'};
    border-radius: ${theme.borderRadius.lg};
  `}
`;
