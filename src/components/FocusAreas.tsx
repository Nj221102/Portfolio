import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { darkTheme, lightTheme } from '../styles/theme'

const BulletList = styled.ul<{ theme: any }>`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 1.5em;
    margin-bottom: 0.8em;
    color: ${props => props.theme.text};
    line-height: 1.6;

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${props => props.theme.primary};
    }
  }
`

const Highlight = styled.span<{ theme: any }>`
  color: ${props => props.theme.primary};
  font-weight: 500;
`

const FocusAreas = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <BulletList theme={theme}>
      <li>
        Building <Highlight theme={theme}>Nostr client applications</Highlight> and exploring decentralized social networking solutions
      </li>
      <li>
        Contributing to <Highlight theme={theme}>Bitcoin Core</Highlight> development through the Summer of Bitcoin program
      </li>
      <li>
        Developing expertise in <Highlight theme={theme}>blockchain technology</Highlight> and <Highlight theme={theme}>distributed systems</Highlight>
      </li>
      <li>
        Working on <Highlight theme={theme}>full-stack web applications</Highlight> using modern technologies and best practices
      </li>
    </BulletList>
  )
}

export default FocusAreas 