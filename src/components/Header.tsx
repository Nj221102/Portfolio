import styled from 'styled-components'
import { typing, blink } from '../styles/animations'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { darkTheme, lightTheme } from '../styles/theme'

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const NameContainer = styled.div`
  display: inline-block;
  margin-bottom: 10px;
`

const Name = styled.h1<{ theme: any }>`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid ${props => props.theme.primary};
  animation: 
    ${typing} 2s steps(40, end),
    ${blink} 0.75s step-end infinite;
`

const Title = styled.h2<{ theme: any }>`
  font-size: 1.2rem;
  color: ${props => props.theme.secondaryText};
  margin: 8px 0;
  font-weight: 400;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
`

const ContactItem = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background: ${props => props.theme.buttonBg};
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover {
    background: ${props => props.theme.buttonHoverBg};
    transform: translateY(-2px);
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.accent};
    }
  }

  span {
    color: ${props => props.theme.secondaryText};
  }

  &.nostr-key {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 12px;
    
    .key-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.8rem;
      color: ${props => props.theme.primary};
      width: 100%;
      justify-content: space-between;
    }

    .key-value {
      font-family: 'Roboto Mono', monospace;
      font-size: 0.75rem;
      padding: 6px 8px;
      background: ${props => props.theme.cardBg};
      border-radius: 4px;
      border: 1px solid ${props => props.theme.cardBorder};
      width: 100%;
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-width: thin;
      scrollbar-color: ${props => `${props.theme.cardBorder} transparent`};

      &::-webkit-scrollbar {
        height: 4px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.cardBorder};
        border-radius: 2px;
      }
    }
  }
`

const CopyTooltip = styled.div<{ show: boolean; theme: any }>`
  position: absolute;
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  border: 1px solid ${props => props.theme.cardBorder};
`

const Header = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  const nostrKey = 'npub1f2xq7aqvu6c53dlsnlptgd960ls9glhczm7juuh9tjx6nf4cr5qsz4lmaj';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(nostrKey);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <HeaderContainer>
      <NameContainer>
        <Name theme={theme}>Nitish Jha</Name>
      </NameContainer>
      <Title theme={theme}>Software Engineer</Title>
      <ContactInfo>
        <ContactItem theme={theme}>
          <span>📞</span>
          <span>+91-7678303875</span>
        </ContactItem>
        <ContactItem theme={theme}>
          <span>📧</span>
          <a href="mailto:Nitishj221102@gmail.com">Nitishj221102@gmail.com</a>
        </ContactItem>
        <ContactItem onClick={copyToClipboard} style={{ position: 'relative' }} className="nostr-key" theme={theme}>
          <div className="key-label">
            <span>🔑 Nostr Public Key</span>
            <span style={{ fontSize: '0.7rem' }}>(Click to Copy)</span>
          </div>
          <div className="key-value">{nostrKey}</div>
          <CopyTooltip show={showTooltip} theme={theme}>Copied!</CopyTooltip>
        </ContactItem>
        <ContactItem theme={theme}>
          <span>📍</span>
          <span>New Delhi, India</span>
        </ContactItem>
      </ContactInfo>
    </HeaderContainer>
  )
}

export default Header 