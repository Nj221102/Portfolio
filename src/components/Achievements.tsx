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
        <Highlight theme={theme}>Summer of Bitcoin 2025:</Highlight> Successfully completed a project with Shopstr, developing production-ready API backends in TypeScript and Rust for their merchant-username project, involving Lightning Network (BOLT12) and Bitcoin (BIP353, NIP-05/49) protocols.
      </li>
      <li>
        <Highlight theme={theme}>Google Summer of Code 2024 (GSoC):</Highlight> Successfully completed a project with the data.table package in collaboration with the R Project. Contributed extensively to resolving issues, improving documentation, and implementing new features in the open-source package.
      </li>
      <li>
        <Highlight theme={theme}>Open Source Impact:</Highlight> Successfully merged 35+ total Pull Requests across Shopstr, R Project (data.table), and Scarpe repositories.
      </li>
    </AchievementList>
  )
}

export default Achievements 