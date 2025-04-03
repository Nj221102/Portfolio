import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { darkTheme, lightTheme } from '../styles/theme'

const ProjectItem = styled.div<{ theme: any }>`
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const ProjectLink = styled.a<{ theme: any }>`
  color: ${props => props.theme.primary};
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary};
  text-underline-offset: 3px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`

const ProjectTitle = styled.h3<{ theme: any }>`
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProjectType = styled.div<{ theme: any }>`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
  font-style: italic;
  margin: 8px 0;
  opacity: 0.9;
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

const Duration = styled.span<{ theme: any }>`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
  font-weight: normal;
`

const Projects = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <>
      <ProjectItem theme={theme}>
        <ProjectTitle theme={theme}>
          <ProjectLink 
            href="https://github.com/scarpe-team/scarpe/pulls?q=is%3Apr+author%3ANj221102"
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            Scarpe
          </ProjectLink>
          <Duration theme={theme}>Dec 2023 – Present</Duration>
        </ProjectTitle>
        <ProjectType theme={theme}>Ruby, Open Source Contribution</ProjectType>
        <Description theme={theme}>
          <li>Contributed to Scarpe, an early-stage prototype aimed at resurrecting the Shoes library.</li>
          <li>Successfully merged 10 pull requests, improving functionality and fixing critical bugs.</li>
          <li>Added new features such as tooltip, font-family, and font-weight, enhancing the library's user experience.</li>
        </Description>
      </ProjectItem>

      <ProjectItem theme={theme}>
        <ProjectTitle theme={theme}>
          <ProjectLink 
            href="https://github.com/Rdatatable/data.table/pulls?q=is%3Apr+author%3ANj221102"
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            R/data.table
          </ProjectLink>
          <Duration theme={theme}>Jan 2024 – Present</Duration>
        </ProjectTitle>
        <ProjectType theme={theme}>R, C, Open Source Contribution, Data Analysis</ProjectType>
        <Description theme={theme}>
          <li>Enhanced the data.table package by addressing critical issues and resolving bugs.</li>
          <li>Successfully merged 20+ pull requests during Google Summer of Code 2024.</li>
          <li>Implemented new features and improved documentation for better usability.</li>
        </Description>
      </ProjectItem>
    </>
  )
}

export default Projects 