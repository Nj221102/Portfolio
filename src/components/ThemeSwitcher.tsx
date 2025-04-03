import styled, { keyframes } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { darkTheme, lightTheme } from '../styles/theme';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SwitcherContainer = styled.button<{ theme: any }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.cardBg};
  border: ${props => props.theme.sectionBorder};
  box-shadow: ${props => props.theme.cardShadow};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
  backdrop-filter: blur(10px);

  &:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 0 20px ${props => props.theme.primary}40;
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${props => props.theme.primary};
    transition: all 0.3s ease;
  }

  .sun {
    animation: ${rotate} 10s linear infinite;
  }

  .moon {
    animation: ${rotate} 15s linear infinite reverse;
  }
`

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SwitcherContainer onClick={toggleTheme} theme={theme} aria-label="Toggle theme">
      {isDarkMode ? (
        <svg
          className="sun"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="moon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </SwitcherContainer>
  );
};

export default ThemeSwitcher; 