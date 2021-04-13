import styled from 'styled-components/macro';

const Centered = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredContent: React.FC = ({children}) => (
  <Centered>
    {children}
  </Centered>
);

export default CenteredContent;
