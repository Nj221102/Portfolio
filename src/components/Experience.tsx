import styled from 'styled-components'

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Company = styled.h3`
  color: #64ffda;
  font-size: 1.1rem;
  margin: 0;
`

const Position = styled.h4`
  color: #e0e0e0;
  font-size: 1rem;
  margin: 0;
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

const TechStack = styled.div`
  margin-top: 8px;
  color: #8892b0;
  font-size: 0.9rem;
`

const Experience = () => {
  return (
    <ExperienceContainer>
      <ExperienceItem>
        <Company>Software Engineer Intern @Classplus</Company>
        <Date>Nov 2024 - Present</Date>
        <Description>
          <li>Developed and migrated APIs, abstracting database queries using ORMs in TypeScript.</li>
          <li>Built scalable server infrastructure in Go (Golang), supporting SQL (MySQL) and NoSQL (MongoDB) databases.</li>
          <li>Improved backend workflows, optimized CI/CD pipelines, and ensured code quality through regular reviews and testing.</li>
        </Description>
        <TechStack>
          Technologies: TypeScript, Golang, Python, MySQL, MongoDB, ORMs, Docker, Git/GitHub
        </TechStack>
      </ExperienceItem>

      <ExperienceItem>
        <Company>Google Summer of Code 2024 @R Project</Company>
        <Date>May 2024 - Aug 2024</Date>
        <Description>
          <li>Contributed to the data.table package, resolving issues and enhancing functionality</li>
          <li>Improved performance optimizations and documentation for better user experience.</li>
          <li>Collaborated with a global open-source community, working with R, C, GitHub, and Docker.</li>
        </Description>
        <TechStack>
          Technologies: R, C, Docker, GitHub
        </TechStack>
      </ExperienceItem>
    </ExperienceContainer>
  )
}

export default Experience 