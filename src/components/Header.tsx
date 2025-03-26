import styled from 'styled-components'
import { typing, blink } from '../styles/animations'

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const NameContainer = styled.div`
  display: inline-block;
  margin-bottom: 10px;
`

const Name = styled.h1`
  font-size: 2rem;
  color: #64ffda;
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #64ffda;
  animation: 
    ${typing} 2s steps(40, end),
    ${blink} 0.75s step-end infinite;
`

const Title = styled.h2`
  font-size: 1.2rem;
  color: #8892b0;
  margin: 8px 0;
  font-weight: 400;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.15);
    transform: translateY(-2px);
  }

  a {
    color: #64ffda;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #9effeb;
    }
  }

  span {
    color: #8892b0;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <NameContainer>
        <Name>Nitish Jha</Name>
      </NameContainer>
      <Title>Software Engineer</Title>
      <ContactInfo>
        <ContactItem>
          <span>📧</span>
          <a href="mailto:Nitishj221102@gmail.com">Nitishj221102@gmail.com</a>
        </ContactItem>
        <ContactItem>
          <span>📱</span>
          <span>7678303875</span>
        </ContactItem>
        <ContactItem>
          <span>📍</span>
          <span>New Delhi, India</span>
        </ContactItem>
      </ContactInfo>
    </HeaderContainer>
  )
}

export default Header 