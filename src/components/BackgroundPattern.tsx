import styled, { keyframes } from 'styled-components'

const move = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(50px, 50px) rotate(5deg);
  }
`

const float = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
`

const PatternContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  opacity: 0.3;
`

const Pattern = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: 
    radial-gradient(circle at 2px 2px, rgba(100, 255, 218, 0.1) 1px, transparent 0),
    radial-gradient(circle at 2px 2px, rgba(100, 255, 218, 0.05) 3px, transparent 0);
  background-size: 50px 50px, 100px 100px;
  animation: ${move} 20s linear infinite;
`

const GlowOrb = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
  filter: blur(20px);
  animation: ${float} 10s ease-in-out infinite;

  &:nth-child(1) {
    top: 20%;
    left: 20%;
  }

  &:nth-child(2) {
    top: 60%;
    right: 20%;
    width: 400px;
    height: 400px;
    animation-delay: -5s;
  }
`

const BackgroundPattern = () => {
  return (
    <PatternContainer>
      <Pattern />
      <GlowOrb />
      <GlowOrb />
    </PatternContainer>
  )
}

export default BackgroundPattern 