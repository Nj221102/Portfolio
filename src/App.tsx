import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Photo from './components/Photo'
import About from './components/About'
import ResumeLinks from './components/ResumeLinks'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import BackgroundPattern from './components/BackgroundPattern'
import ApiTracker from './components/ApiTracker'
import { fadeIn, gradientMove, scaleIn } from './styles/animations'
import { pingServer, PING_INTERVAL } from './utils/api'

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(
    -45deg,
    #0a0a0a,
    #1a1a1a,
    #0a192f,
    #1a1a1a
  );
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  color: #e0e0e0;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(100, 255, 218, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(100, 255, 218, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`

const Container = styled.div<{ isVisible: boolean }>`
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

const Sidebar = styled.aside`
  position: sticky;
  top: 20px;
  height: fit-content;
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 25px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(100, 255, 218, 0.1);
  animation: ${fadeIn} 0.6s ease;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 6px 25px rgba(0, 0, 0, 0.4),
      inset 0 0 0 1px rgba(100, 255, 218, 0.2);
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

const Section = styled.section`
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  animation: ${scaleIn} 0.5s ease;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 
      0 6px 25px rgba(0, 0, 0, 0.4),
      inset 0 0 0 1px rgba(100, 255, 218, 0.2);
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
  display: inline-block;

  &::before {
    content: '{ ';
    color: rgba(100, 255, 218, 0.5);
    margin-right: 5px;
  }

  &::after {
    content: ' }';
    color: rgba(100, 255, 218, 0.5);
    margin-left: 5px;
  }

  &::before,
  &::after {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${Section}:hover &::before,
  ${Section}:hover &::after {
    opacity: 1;
  }
`

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Effect for periodic API calls
  useEffect(() => {
    // Initial call
    pingServer();

    // Set up interval
    const intervalId = setInterval(pingServer, PING_INTERVAL);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AppContainer>
      <BackgroundPattern />
      <Container isVisible={isVisible}>
        <Sidebar>
          <Photo />
          <Header />
          <ResumeLinks />
        </Sidebar>
        <MainContent>
          <Section>
            <Title>About</Title>
            <About />
          </Section>
          <Section>
            <Title>Education</Title>
            <Education />
          </Section>
          <Section>
            <Title>Experience</Title>
            <Experience />
          </Section>
          <Section>
            <Title>Projects</Title>
            <Projects />
          </Section>
          <Section>
            <Title>Skills</Title>
            <Skills />
          </Section>
          <Section>
            <Title>Achievements</Title>
            <Achievements />
          </Section>
          <Section>
            <Title>Certificates</Title>
            <Certificates />
          </Section>
        </MainContent>
      </Container>
      <ApiTracker />
    </AppContainer>
  )
}

export default App
