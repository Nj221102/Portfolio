import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { darkTheme, lightTheme } from '../styles/theme'

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SkillCategory = styled.div<{ theme: any }>`
  background: ${props => props.theme.cardBg};
  border-radius: 12px;
  padding: 20px;
  border: ${props => props.theme.sectionBorder};

  h3 {
    color: ${props => props.theme.primary};
    font-size: 1.2rem;
    margin-bottom: 15px;
    padding-bottom: 8px;
    border-bottom: 2px solid ${props => props.theme.cardBorder};
  }
`

const SkillItem = styled.div<{ theme: any }>`
  margin-bottom: 15px;

  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .skill-name {
    color: ${props => props.theme.text};
    font-size: 0.9rem;
  }

  .skill-bar {
    height: 6px;
    background: ${props => props.theme.buttonBg};
    border-radius: 3px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    background: ${props => props.theme.primary};
    border-radius: 3px;
    transition: width 1s ease;
  }
`

const Skills = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const skillCategories = {
    'Programming Languages': [
      { name: 'R', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C', level: 80 },
      { name: 'Ruby', level: 75 },
      { name: 'Go', level: 80 }
    ],
    'Frameworks & Libraries': [
      { name: 'Node.js', level: 90 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Ruby on Rails', level: 75 },
      { name: 'Nostr', level: 85 }
    ],
    'Tools & Platforms': [
      { name: 'Git', level: 90 },
      { name: 'GitHub/GitLab', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Postman', level: 85 }
    ],
    'Databases & Others': [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Time Management', level: 90 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Leadership', level: 85 }
    ]
  };

  return (
    <SkillsGrid>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <SkillCategory key={category} theme={theme}>
          <h3>{category}</h3>
          {skills.map(skill => (
            <SkillItem key={skill.name} theme={theme}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </SkillItem>
          ))}
        </SkillCategory>
      ))}
    </SkillsGrid>
  );
};

export default Skills; 