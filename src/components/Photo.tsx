import styled from 'styled-components'
import { float, glowPulse } from '../styles/animations'

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(45deg, #64ffda, #0a192f);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`

const ProfilePhoto = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  animation: ${float} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: url('/pic.png') center/cover;
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
    animation: ${glowPulse} 4s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    background: linear-gradient(45deg, #64ffda, #0a192f);
    z-index: -1;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
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