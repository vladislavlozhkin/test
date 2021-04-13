import { InputHTMLAttributes } from "react";
import styled from "styled-components/macro";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const CheckBox: React.FC<Props> = props => (
  <input type="checkbox" {...props} />
);

export default styled(CheckBox)``;
