import styled, { useTheme } from 'styled-components/macro';
import MealComponent from 'components/MealComponent';
import Input from './Input';
import MealCard from './MealCard';
import Textarea from './Textarea';
import TextField from './TextField';
import InputFile from './InputFile';
import CheckBox from './CheckBox';
import Button from './Button';
import PencilIcon from './icons/PencilIcon';

const Container = styled.div`
  ${TextField} {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  margin-bottom: 26px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Col = styled.div`
  &:first-child {
    width: 234px;
    margin-right: ${({ theme }) => theme.spacing.lg};
    flex: 0;
  }

  flex: 1;
`;

const Separator = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const StretchRow = styled(Row)`
  align-items: stretch;
`;

const StretchTextarea = styled(Textarea)`
  height: 100%;
`;

const Upload = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const UploadLabel = styled.div`
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PolicyField = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacing.lg} 0;

  ${CheckBox} {
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

const PolicyFieldLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.grey4};

  a {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

const NickNameField = styled.div`
  position: relative;
`;

const NickNameFieldIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

interface Props {
  values: {
    reviewText: string;
    reviewText1: string;
    reviewText2: string;
    reviewText3: string;
    nickname: string;
  };
  events?: {
    onChangeReviewText?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeReviewText1?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeReviewText2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeReviewText3?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeNickName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: () => void;
  };
  loading?: boolean;
}

const ReviewForm: React.FC<Props> = ({ events = {}, values = {}, loading }) => {
  const {
    onChangeReviewText,
    onChangeReviewText1,
    onChangeReviewText2,
    onChangeReviewText3,
    onChangeNickName,
    onSubmit,
  } = events;

  const {
    reviewText,
    reviewText1,
    reviewText2,
    reviewText3,
    nickname,
  } = values;

  const theme = useTheme();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit && onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Title>Meal Components</Title>

        <Row>
          <Col>
            <MealComponent
              title="Morrocan Chicken"
              photo="/meal/component1.png"
              rating={3}
            />
          </Col>
          <Col>
            <Input
              placeholder="Your thoughts about the component"
              name="reviewText1"
              onChange={onChangeReviewText1}
              value={reviewText1}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <MealComponent
              title="Couscous Pilaf"
              photo="/meal/component2.png"
              rating={3}
            />
          </Col>
          <Col>
            <Input
              placeholder="Your thoughts about the component"
              name="reviewText2"
              onChange={onChangeReviewText2}
              value={reviewText2}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <MealComponent
              title="Turkey Meatloaf"
              photo="/meal/component3.png"
              rating={3}
            />
          </Col>
          <Col>
            <Input
              placeholder="Your thoughts about the component"
              name="reviewText3"
              onChange={onChangeReviewText3}
              value={reviewText3}
            />
          </Col>
        </Row>

        <Separator />

        <Title>Meal Review</Title>

        <StretchRow>
          <Col>
            <MealCard
              title="Morroccan Chicken With Couscous"
              photo="/meal/review.png"
              rating={3}
            />
          </Col>
          <Col>
            <StretchTextarea
              placeholder="Meal Summary Review"
              name="reviewText"
              value={reviewText}
              onChange={onChangeReviewText}
            />
          </Col>
        </StretchRow>

        <Upload>
          <UploadLabel>Add the meal photos</UploadLabel>

          <InputFile />
        </Upload>

        <NickNameField>
          <TextField
            label="Your Nickname (other users will see this)"
            placeholder="Mike Korsky"
            name="nickname"
            onChange={onChangeNickName}
            value={nickname}
          />

          <NickNameFieldIcon>
            <PencilIcon color={theme.colors.lightGreen} />
          </NickNameFieldIcon>
        </NickNameField>

        <PolicyField>
          <CheckBox />
          <PolicyFieldLabel>
            I confirm that I have read and accepted{' '}
            <a href="/">Terms and Conditions</a> and{' '}
            <a href="/">Privacy Policy</a>
          </PolicyFieldLabel>
        </PolicyField>

        <Button type="submit" fullWidth disabled={loading}>
          {loading ? 'Loading...' : 'Submit Review'}
        </Button>
      </Container>
    </form>
  );
};

export default ReviewForm;
