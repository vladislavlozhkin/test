import CenteredContent from 'layouts/CenteredContent';
import Button from 'components/ButtonLink';

const HomePage: React.FC = () => (
  <CenteredContent>
    <Button to="/review">Make review</Button>
  </CenteredContent>
);

export default HomePage;
