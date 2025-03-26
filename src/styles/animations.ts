import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(100, 255, 218, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(100, 255, 218, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(100, 255, 218, 0.2);
  }
`

export const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`

export const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

export const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

export const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
` 