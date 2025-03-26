import { useState, useEffect } from 'react'
import styled from 'styled-components'

const TrackerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(10, 25, 47, 0.85);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(100, 255, 218, 0.2);
  backdrop-filter: blur(10px);
  color: #e6f1ff;
  font-size: 0.9rem;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(100, 255, 218, 0.5);
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.1);
  }
`

const StatusDot = styled.span<{ isActive: boolean }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? '#64ffda' : '#8892b0'};
  margin-right: 8px;
  transition: background-color 0.3s ease;
`

const CountdownText = styled.div`
  color: #8892b0;
  margin-top: 5px;
  font-size: 0.8rem;
`

const ApiTracker = () => {
  const [callCount, setCallCount] = useState(0)
  const [nextCallIn, setNextCallIn] = useState(14 * 60)
  const [isActive, setIsActive] = useState(false)

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    const makeApiCall = async () => {
      try {
        setIsActive(true)
        const response = await fetch('https://cric-island-backend.onrender.com/cric-island/start', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        
        if (response.ok) {
          setCallCount(prev => prev + 1)
        }
      } catch (error) {
        console.warn('API call failed:', error)
      } finally {
        setIsActive(false)
      }
    }

    // Initial call
    makeApiCall()

    // Set up the countdown timer
    const countdownInterval = setInterval(() => {
      setNextCallIn(prev => {
        if (prev <= 1) {
          makeApiCall()
          return 14 * 60
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(countdownInterval)
  }, [])

  return (
    <TrackerContainer>
      <div>
        <StatusDot isActive={isActive} />
        API Calls: {callCount}
      </div>
      <CountdownText>
        Next call in: {formatTime(nextCallIn)}
      </CountdownText>
    </TrackerContainer>
  )
}

export default ApiTracker 