import { InputHTMLAttributes } from "react";
import styled, {css} from "styled-components";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<Props> = props => (
  <textarea {...props} />
);

export default styled(Textarea)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  outline: 0;
  font-family: Sora, sans-serif;

  ${({theme}) => css`
    color: ${theme.colors.grey4};
    font-size: ${theme.fontSize.md};
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.grey3};
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing.sm};
  `}
`;
