import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { darkTheme, lightTheme } from '../styles/theme'

const CertificateList = styled.ul<{ theme: any }>`
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

const Certificates = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <CertificateList theme={theme}>
      <li>
        <StyledLink
          href="https://docs.google.com/document/d/1JWwgZg78PurZUUAlWKSSPLXvCrf6-q2p37HQw7mUGmU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          Summer of Bitcoin 2025 Certificate
        </StyledLink>
        <Duration theme={theme}>(Sep 2025)</Duration>
      </li>
      <li>
        <StyledLink
          href="https://docs.google.com/document/d/1QOcN2W-jsp9ekdjn8nybrAkG_svYSdt-Rt_dUhamAPw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          Google Summer of Code 2024 Certificate
        </StyledLink>
        <Duration theme={theme}>(Aug 2024)</Duration>
      </li>
      <li>
        <StyledLink
          href="https://docs.google.com/document/d/1QOcN2W-jsp9ekdjn8nybrAkG_svYSdt-Rt_dUhamAPw/edit?page=2&tab=t.0#bookmark=id.2tnz9zrix96x"
          target="_blank"
          rel="noopener noreferrer"
          theme={theme}
        >
          Classplus Intership Certificate
        </StyledLink>
        <Duration theme={theme}>(Jan 2025)</Duration>
      </li>
    </CertificateList>
  )
}

export default Certificates 