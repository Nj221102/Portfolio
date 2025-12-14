import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { darkTheme, lightTheme } from '../styles/theme'

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const EducationItem = styled.div<{ theme: any }>`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const SchoolName = styled.h3<{ theme: any }>`
  color: ${props => props.theme.primary};
  font-size: 1.2rem;
  margin-bottom: 8px;
  font-weight: 600;
`

const Degree = styled.div<{ theme: any }>`
  color: ${props => props.theme.text};
  font-size: 1rem;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span.grade {
    color: ${props => props.theme.primary};
    font-weight: 500;
  }
`

const Location = styled.div<{ theme: any }>`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Education = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <EducationContainer>
      <EducationItem theme={theme}>
        <SchoolName theme={theme}>StarexUniversity</SchoolName>
        <Degree theme={theme}>
          <span>BTech in Computer Science</span>
          <span className="grade">SGPA: 8.59</span>
        </Degree>
        <Location theme={theme}>
          <span>Gurugram, Haryana</span>
          <span>Aug 2023 - Present</span>
        </Location>
      </EducationItem>
    </EducationContainer>
  )
}

export default Education