import styled from 'styled-components'

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const School = styled.h3`
  color: #64ffda;
  font-size: 1.1rem;
  margin: 0;
`

const Degree = styled.h4`
  color: #e0e0e0;
  font-size: 1rem;
  margin: 0;
`

const Location = styled.span`
  color: #8892b0;
  font-size: 0.9rem;
`

const Date = styled.span`
  color: #8892b0;
  font-size: 0.9rem;
`

const GPA = styled.span`
  color: #8892b0;
  font-size: 0.9rem;
`

const Education = () => {
  return (
    <EducationContainer>
      <EducationItem>
        <School>StarexUniversity</School>
        <Degree>BTech in Computer Science</Degree>
        <GPA>SGPA: 8.59</GPA>
        <Location>Gurugram, Haryana</Location>
        <Date>Aug 2023 - Present</Date>
      </EducationItem>
      <EducationItem>
        <School>M.B.S International School, Greater Noida</School>
        <Degree>Senior Secondary School (STEM)</Degree>
        <GPA>CGPA: 8.0</GPA>
        <Location>Noida, UP</Location>
        <Date>Mar 2023</Date>
      </EducationItem>
    </EducationContainer>
  )
}

export default Education 