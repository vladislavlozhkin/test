import styled, {css} from 'styled-components/macro';
import Rating from './Rating';

interface Props {
  title: string;
  photo: string;
  rating: number;
  className?: string;
}

const PhotoContainer = styled.div`
  margin-bottom: ${({theme}) => theme.spacing.sm};
`;

const Photo = styled.img``;

const Title = styled.div`
  font-weight: 500;
  margin-bottom: ${({theme}) => theme.spacing.sm};
`;

const MealCard: React.FC<Props> = ({ title, photo, className }) => (
  <div className={className}>
    <PhotoContainer>
      <Photo src={photo} />
    </PhotoContainer>

    <Title>{title}</Title>
    <Rating value={3} />
  </div>
);

export default styled(MealCard)`
  ${({theme}) => css`
    padding: ${theme.spacing.sm};
    border: 1px solid ${theme.colors.grey3};
    border-radius: ${theme.borderRadius.lg};
  `}
`;
