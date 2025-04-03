import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { darkTheme, lightTheme } from '../styles/theme'

const Description = styled.p<{ theme: any }>`
  color: ${props => props.theme.text};
  line-height: 1.6;
  margin-bottom: 10px;
  font-size: 0.95rem;

  strong {
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`

const About = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <>
      <Description theme={theme}>
        I'm a passionate <strong>Software Engineer</strong> with a deep interest in <strong>blockchain technology</strong> and <strong>decentralized systems</strong>. Currently focused on developing <strong>Nostr client applications</strong> and contributing to the <strong>Bitcoin Core</strong> ecosystem.
      </Description>
      <Description theme={theme}>
        My expertise spans <strong>full-stack development</strong>, <strong>distributed systems</strong>, and <strong>cryptography</strong>. I'm particularly enthusiastic about building tools that enhance privacy and decentralization in the digital world.
      </Description>
    </>
  )
}

export default About 