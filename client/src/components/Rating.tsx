import { useMemo } from 'react';
import styled, {useTheme} from 'styled-components/macro';
import StarIcon from './icons/StarIcom';

interface Props {
  value: number;
  className?: string;
}

const Col = styled.div`
  margin-right: ${({ theme }) => theme.spacing.xs};

  &:last-child {
    margin-right: 0;
  }
`;

const Rating: React.FC<Props> = ({ value, className }) => {
  const theme = useTheme();

  const items = useMemo(() => {
    return new Array(5).fill(false).map((item, index) => {
      return (index < value ? true : false)
    });
  }, [value]);

  return (
    <div className={className}>
      {items.map((isActive, i) => (
        <Col key={i}>
          <StarIcon color={isActive ? theme.colors.orange : theme.colors.grey3} />
        </Col>
      ))}
    </div>
  );
};

export default styled(Rating)`
  display: flex;
`;
