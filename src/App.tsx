import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Photo from './components/Photo'
import About from './components/About'
import FocusAreas from './components/FocusAreas'
import ResumeLinks from './components/ResumeLinks'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import BackgroundPattern from './components/BackgroundPattern'
import ThemeSwitcher from './components/ThemeSwitcher'
import { useTheme } from './context/ThemeContext'
import { fadeIn, gradientMove, scaleIn } from './styles/animations'

const lightTheme = {
  bg: 'linear-gradient(-45deg, #f0f9ff, #e0f2fe, #dbeafe, #e0f2fe)',
  text: '#1e293b',
  primary: '#0284c7',
  accent: '#0ea5e9',
  card: 'rgba(255, 255, 255, 0.95)',
  cardBorder: 'rgba(2, 132, 199, 0.1)',
  secondaryText: '#475569',
  highlight: '#0284c7',
  cardBg: 'rgba(255, 255, 255, 0.95)',
  cardHoverBg: 'rgba(255, 255, 255, 1)',
  cardShadow: '0 10px 30px -10px rgba(2, 132, 199, 0.15)',
  buttonBg: 'rgba(2, 132, 199, 0.1)',
  buttonHoverBg: 'rgba(2, 132, 199, 0.2)',
  bulletColor: '#0284c7',
  sectionBorder: '1px solid rgba(2, 132, 199, 0.1)'
};

const darkTheme = {
  bg: 'linear-gradient(-45deg, #0a0a0a, #1a1a1a, #0a192f, #1a1a1a)',
  text: '#e0e0e0',
  primary: '#64ffda',
  accent: '#64ffda',
  card: 'rgba(17, 17, 17, 0.9)',
  cardBorder: 'rgba(100, 255, 218, 0.1)',
  secondaryText: '#8892b0',
  highlight: '#64ffda',
  cardBg: 'rgba(17, 17, 17, 0.9)',
  cardHoverBg: 'rgba(17, 17, 17, 0.95)',
  cardShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
  buttonBg: 'rgba(100, 255, 218, 0.1)',
  buttonHoverBg: 'rgba(100, 255, 218, 0.2)',
  bulletColor: '#64ffda',
  sectionBorder: '1px solid rgba(100, 255, 218, 0.1)'
};

const AppContainer = styled.div<{ theme: typeof lightTheme }>`
  font-family: 'Roboto', sans-serif;
  background: ${props => props.theme.bg};
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  color: ${props => props.theme.text};
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, ${props => props.theme.cardBorder} 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, ${props => props.theme.cardBorder} 0%, transparent 50%);
    pointer-events: none;
  }
`

const Container = styled.div<{ isVisible: boolean; theme: typeof lightTheme }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  position: relative;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: opacity 0.6s ease, transform 0.6s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`

const Sidebar = styled.aside<{ theme: typeof lightTheme }>`
  position: sticky;
  top: 20px;
  height: fit-content;
  background: ${props => props.theme.cardBg};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 25px;
  box-shadow: ${props => props.theme.cardShadow};
  animation: ${fadeIn} 0.6s ease;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.cardShadow};
    background: ${props => props.theme.cardHoverBg};
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
`

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: ${fadeIn} 0.6s ease 0.3s backwards;
`

const Section = styled.section<{ theme: typeof lightTheme }>`
  background: ${props => props.theme.cardBg};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  box-shadow: ${props => props.theme.cardShadow};
  border: ${props => props.theme.sectionBorder};
  transition: all 0.3s ease;
  animation: ${scaleIn} 0.5s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.cardShadow};
    background: ${props => props.theme.cardHoverBg};
  }
`

const Title = styled.h2<{ theme: typeof lightTheme }>`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
  display: inline-block;
  font-weight: 600;
  letter-spacing: 0.5px;

  &::before {
    content: '{ ';
    color: ${props => props.theme.accent};
    margin-right: 5px;
    opacity: 0.8;
  }

  &::after {
    content: ' }';
    color: ${props => props.theme.accent};
    margin-left: 5px;
    opacity: 0.8;
  }
`

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AppContainer theme={theme}>
      <BackgroundPattern />
      <Container isVisible={isVisible} theme={theme}>
        <Sidebar theme={theme}>
          <Photo />
          <Header />
          <ResumeLinks />
        </Sidebar>
        <MainContent>
          <Section theme={theme}>
            <Title theme={theme}>Focus Areas</Title>
            <FocusAreas />
          </Section>
          <Section theme={theme}>
            <Title theme={theme}>About</Title>
            <About />
          </Section>
          <Section theme={theme}>
            <Title theme={theme}>Education</Title>
            <Education />
          </Section>
          <Section theme={theme}>
            <Title theme={theme}>Experience</Title>
            <Experience />
          </Section>
          <Section theme={theme}>
            <Title theme={theme}>Open Source Contributions</Title>
            <Projects />
          </Section>
          <Section theme={theme}>
            <Title theme={theme}>Skills</Title>
            <Skills />
          </Section>
          <Section theme={theme}>
            <Title theme={theme}>Achievements</Title>
            <Achievements />
          </Section>
          <Section theme={theme}>
            <Title theme={theme}>Certificates</Title>
            <Certificates />
          </Section>
        </MainContent>
      </Container>
      <ThemeSwitcher />
    </AppContainer>
  )
}

export default App
