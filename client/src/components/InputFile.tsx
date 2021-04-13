import { InputHTMLAttributes } from 'react';
import styled from 'styled-components/macro';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export const Wrapper = styled.label`
  display: block;
  border: 2px solid ${({theme}) => theme.colors.grey2};
  border-radius: ${({theme}) => theme.borderRadius.lg};
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputFile: React.FC<Props> = (props) => (
  <Wrapper>
    <input type="file" {...props} />
  </Wrapper>
);

export default InputFile;
