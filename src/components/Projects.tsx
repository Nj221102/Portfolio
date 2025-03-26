import styled from 'styled-components'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ProjectTitle = styled.h3`
  color: #64ffda;
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`

const ProjectSubtitle = styled.div`
  color: #8892b0;
  font-size: 0.9rem;
  font-style: italic;
`

const Date = styled.span`
  color: #8892b0;
  font-size: 0.9rem;
`

const Description = styled.ul`
  color: #8892b0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 8px 0 0 20px;
  list-style-type: disc;
`

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectItem>
        <ProjectTitle>Scarpe</ProjectTitle>
        <ProjectSubtitle>Ruby, Open Source Contribution</ProjectSubtitle>
        <Date>Dec 2023 – Present</Date>
        <Description>
          <li>Contributed to Scarpe, an early-stage prototype aimed at resurrecting the Shoes library.</li>
          <li>Successfully merged 10 pull requests, improving functionality and fixing critical bugs.</li>
          <li>Added new features such as tooltip, font-family, and font-weight, enhancing the library's user experience.</li>
        </Description>
      </ProjectItem>

      <ProjectItem>
        <ProjectTitle>R/data.table</ProjectTitle>
        <ProjectSubtitle>R, C, Open Source Contribution, Data Analysis</ProjectSubtitle>
        <Date>Jan 2024 – Present</Date>
        <Description>
          <li>Enhanced the data.table package by addressing critical issues and resolving bugs.</li>
          <li>Successfully merged 20+ pull requests during Google Summer of Code 2024.</li>
          <li>Implemented new features and improved documentation for better usability.</li>
        </Description>
      </ProjectItem>
    </ProjectsContainer>
  )
}

export default Projects 