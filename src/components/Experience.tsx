import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { darkTheme, lightTheme } from '../styles/theme'

const ExperienceItem = styled.div<{ theme: any }>`
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const Role = styled.h3<{ theme: any }>`
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    color: ${props => props.theme.primary};
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .company-tag {
    color: ${props => props.theme.text};
    font-size: 1rem;
    opacity: 0.9;
    &:before {
      content: '@';
      opacity: 0.7;
    }
  }
`

const Company = styled.div<{ theme: any }>`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 12px;
`

const Description = styled.ul<{ theme: any }>`
  list-style: none;
  padding: 0;
  margin: 15px 0;

  li {
    color: ${props => props.theme.text};
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
    line-height: 1.6;

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${props => props.theme.primary};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Technologies = styled.div<{ theme: any }>`
  margin-top: 12px;
  padding-left: 20px;
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;

  &:before {
    content: '▹';
    color: ${props => props.theme.primary};
  }

  .tech-list {
    color: ${props => props.theme.primary};
    font-weight: 500;
  }
`

const Duration = styled.span<{ theme: any }>`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
  font-weight: normal;
`

const StyledLink = styled.a<{ theme: any }>`
  color: ${props => props.theme.primary};
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary};
  text-underline-offset: 3px;
  font-weight: 500;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`

const Experience = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <>
      <ExperienceItem theme={theme}>
        <Role theme={theme}>
          <div className="title">
            Software Engineer Intern
            <span className="company-tag">Classplus</span>
          </div>
          <Duration theme={theme}>Nov 2024 – Jan 2025</Duration>
        </Role>
        <Description theme={theme}>
          <li>Developed and maintained microservices using Node.js and Express.js.</li>
          <li>Implemented caching strategies using Redis to improve API response times.</li>
          <li>Collaborated with cross-functional teams to deliver high-quality solutions.</li>
        </Description>
        <Technologies theme={theme}>
          Technologies: <span className="tech-list">Node.js, Express.js, Redis, Git</span>
        </Technologies>
      </ExperienceItem>

      <ExperienceItem theme={theme}>
        <Role theme={theme}>
          <div className="title">
            Google Summer of Code 2024
            <span className="company-tag">R Project</span>
          </div>
          <Duration theme={theme}>May 2024 – Aug 2024</Duration>
        </Role>
        <Description theme={theme}>
          <li>Contributed to the data.table package, resolving issues and enhancing functionality</li>
          <li>Improved performance optimizations and documentation for better user experience.</li>
          <li>Collaborated with a global open-source community, working with R, C, GitHub, and Docker.</li>
          <li>
            <StyledLink 
              href="https://nj221102.github.io/Nitish-gSoc-24/2024-08-24-gsoc'24-summary/"
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              GSoC'24 work report
            </StyledLink>
          </li>
        </Description>
        <Technologies theme={theme}>
          Technologies: <span className="tech-list">R, C, Docker, GitHub</span>
        </Technologies>
      </ExperienceItem>
    </>
  )
}

export default Experience 