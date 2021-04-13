import styled from 'styled-components/macro';
import CloseIcon from './icons/CloseIcon';

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;

  padding: ${({ theme }) => theme.spacing.lg};
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.08),
    0px 8px 24px rgba(0, 0, 0, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.04),
    0px 4px 4px rgba(0, 0, 0, 0.02);
  width: 776px;
  box-sizing: border-box;
  padding: 0 68px 56px;
  position: relative;
  margin: ${({ theme }) => theme.spacing.lg} auto;
`;

const Header = styled.div``;

const Title = styled.div`
  padding-top: 50px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 22px;
  right: 22px;
  cursor: pointer;
`;

const Content = styled.div``;

interface Props {
  isOpen: boolean;
  title?: string;
  onClose?: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, title, children, onClose }) => (
  <Overlay>
    <Container>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>

      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  </Overlay>
);

export default Modal;
