import styled from 'styled-components'
import { fadeIn, glowPulse } from '../styles/animations'

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  animation: ${fadeIn} 0.5s ease-in-out;
`

const SkillCategory = styled.div`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.3);
  }
`

const CategoryTitle = styled.h3`
  color: rgba(100, 255, 218, 0.9);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, rgba(100, 255, 218, 0.8), transparent);
  }
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const SkillItem = styled.li`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  color: #e0e0e0;
  transition: color 0.3s ease;

  &:before {
    content: '▹';
    color: rgba(100, 255, 218, 0.8);
    margin-right: 0.5rem;
  }

  &:hover {
    color: rgba(100, 255, 218, 0.9);
  }
`

const Skills = () => {
  const skills = {
    'Programming Languages': [
      'JavaScript/TypeScript',
      'Python',
      'Java',
      'C++',
      'SQL'
    ],
    'Web Technologies': [
      'React.js',
      'Node.js',
      'HTML5/CSS3',
      'Express.js',
      'RESTful APIs'
    ],
    'Tools & Platforms': [
      'Git',
      'Docker',
      'AWS',
      'Linux',
      'VS Code'
    ],
    'Other Skills': [
      'Agile Development',
      'CI/CD',
      'System Design',
      'Problem Solving',
      'Team Leadership'
    ]
  }

  return (
    <SkillsContainer>
      {Object.entries(skills).map(([category, items]) => (
        <SkillCategory key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <SkillList>
            {items.map((skill) => (
              <SkillItem key={skill}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCategory>
      ))}
    </SkillsContainer>
  )
}

export default Skills 