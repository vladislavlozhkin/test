import { InputHTMLAttributes } from "react";
import styled, {css} from "styled-components";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = props => (
  <input {...props} />
);

export default styled(Input)`
  box-sizing: border-box;
  display: block;
  height: 56px;
  width: 100%;
  outline: 0;
  ${({theme}) => css`
    color: ${theme.colors.grey4};
    font-size: ${theme.fontSize.md};
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.grey3};
    border-radius: ${theme.borderRadius.lg};
    padding: 0 ${theme.spacing.sm};
  `}
`;
