import styled from 'styled-components/macro';
import Rating from './Rating';

const Title = styled.div`
  font-weight: 500;
  line-height: 20px;
  margin-bottom: ${({theme}) => theme.spacing.xxs};
`;

const PhotoContainer = styled.div`
  width: 72px;
  height: 72px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  width: 136px;
  height: 136px;
`;

const LeftPart = styled.div`
  margin-right: ${({theme}) => theme.spacing.xs};
`;

const RightPart = styled.div``;

interface Props {
  title: string;
  photo: string;
  rating: number;
  className?: string;
}

const MealComponent: React.FC<Props> = ({title, photo, rating, className}) => (
  <div className={className}>
    <LeftPart>
      <PhotoContainer>
        <Photo src={photo} />
      </PhotoContainer>
    </LeftPart>
    <RightPart>
      <Title>{title}</Title>
      <Rating value={3} />
    </RightPart>
  </div>
);

export default styled(MealComponent)`
  display: flex;
`;
