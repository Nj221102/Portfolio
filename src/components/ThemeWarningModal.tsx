import styled from 'styled-components'
import { darkTheme } from '../styles/theme'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const ModalContent = styled.div`
  background: ${darkTheme.cardBg};
  border: ${darkTheme.sectionBorder};
  border-radius: 16px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  box-shadow: ${darkTheme.cardShadow};
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const Title = styled.h2`
  color: ${darkTheme.primary};
  font-size: 1.5rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const Message = styled.p`
  color: ${darkTheme.text};
  margin-bottom: 20px;
  line-height: 1.6;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${props => props.variant === 'primary' ? darkTheme.primary : darkTheme.buttonBg};
  color: ${props => props.variant === 'primary' ? darkTheme.cardBg : darkTheme.text};

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.variant === 'primary' ? darkTheme.accent : darkTheme.buttonHoverBg};
  }
`

interface ThemeWarningModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ThemeWarningModal = ({ onConfirm, onCancel }: ThemeWarningModalProps) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>
          <span role="img" aria-label="warning">⚠️</span>
          Warning: You're about to enable Light Mode!
        </Title>
        <Message>
          Are you sure you want to blind yourself?
          <br />
          9 out of 10 developers recommend staying in the dark... like your soul. 🦇
          <br />
          <br />
          Proceed with caution (and sunglasses)? 😎
        </Message>
        <ButtonGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <Button variant="primary" onClick={onConfirm}>OK</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ThemeWarningModal