import styled from 'styled-components'
import { float, glowPulse } from '../styles/animations'

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  position: relative;
  
  &:hover::before {
    opacity: 1;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.1), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`

const ProfilePhoto = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url('/Portfolio/pic.png');
  background-size: cover;
  background-position: center;
  border: 2px solid rgba(100, 255, 218, 0.3);
  animation: ${float} 6s ease-in-out infinite;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    border-color: rgba(100, 255, 218, 0.8);
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.4);
    animation: ${glowPulse} 2s ease-in-out infinite;
  }
`

const Photo = () => {
  return (
    <PhotoContainer>
      <ProfilePhoto />
    </PhotoContainer>
  )
}

export default Photo 