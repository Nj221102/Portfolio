import styled from 'styled-components'

const AboutContainer = styled.div`
  color: #8892b0;
  line-height: 1.6;
  font-size: 0.95rem;
`

const About = () => {
  return (
    <AboutContainer>
      <p>
        I am a passionate Software Engineer with a strong foundation in web development and a keen interest in building scalable applications. 
        My expertise includes React, TypeScript, and modern web technologies. I enjoy solving complex problems and creating elegant solutions 
        that make a difference.
      </p>
      <p>
        Currently, I am focused on developing full-stack applications and exploring new technologies in the web development ecosystem. 
        I am always eager to learn and contribute to innovative projects.
      </p>
    </AboutContainer>
  )
}

export default About 