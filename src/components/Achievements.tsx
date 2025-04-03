import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { darkTheme, lightTheme } from '../styles/theme'

const AchievementList = styled.ul<{ theme: any }>`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: ${props => props.theme.text};
    margin-bottom: 20px;
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

const Highlight = styled.span<{ theme: any }>`
  color: ${props => props.theme.primary};
  font-weight: 500;
`

const StyledLink = styled.a<{ theme: any }>`
  color: ${props => props.theme.primary};
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary};
  text-underline-offset: 3px;
  font-weight: 500;
  
  &:hover {
    opacity: 0.8;
  }
`

const Duration = styled.span<{ theme: any }>`
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;
  margin-left: 8px;
`

const Achievements = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <AchievementList theme={theme}>
      <li>
        <Highlight theme={theme}>Google Summer of Code 2024 (GSoC):</Highlight> Successfully completed a project with the data.table package in collaboration with the R Project. Contributed extensively to resolving issues, improving documentation, and implementing new features in the open-source package.
      </li>
      <li>
        <Highlight theme={theme}>President of Training and Placement Club</Highlight> Led and mentored the club to improve placement preparation strategies and engagement, fostering a collaborative environment among students <Duration theme={theme}>(Oct 2023 – Present)</Duration>
      </li>
      <li>
        <Highlight theme={theme}>Programming Achievements:</Highlight> Solved <Highlight theme={theme}>300+</Highlight> CodeWars challenges with an average rank of <Highlight theme={theme}>2000–4000</Highlight> and mastered <Highlight theme={theme}>350+</Highlight> LeetCode problems, demonstrating strong problem-solving capabilities.
      </li>
    </AchievementList>
  )
}

export default Achievements 