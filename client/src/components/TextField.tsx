import Input, { Props as InputProps } from 'components/Input';
import styled, { css } from 'styled-components/macro';

interface Props extends InputProps {
  label: string;
  className?: string;
}

const Label = styled.label`
  font-weight: 500;
  position: absolute;
  top: -9px;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.xs};
    background: ${theme.colors.white};
    left: ${theme.spacing.sm};
    padding: 0 ${theme.spacing.xxs};
  `}
`;

const TextField: React.FC<Props> = ({ label, className, ...props }) => (
  <div className={className}>
    <Label>{label}</Label>
    <Input {...props} />
  </div>
);

export default styled(TextField)`
  position: relative;
`;
