import Modal from 'components/Modal';
import ReviewFormContainer from 'containers/ReviewFormContainer';
import CenteredContent from 'layouts/CenteredContent';
import { withRouter } from 'react-router';

const ReviewPage: React.FC = (props: any) => {
  const handleClose = () => {
    props.history.push('/');
  };

  return (
    <CenteredContent>
      <Modal isOpen title="Meal Review" onClose={handleClose}>
        <ReviewFormContainer />
      </Modal>
    </CenteredContent>
  );
};

export default withRouter(ReviewPage);
