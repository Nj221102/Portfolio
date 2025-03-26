import styled from 'styled-components'

const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const AchievementItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Description = styled.div`
  color: #8892b0;
  font-size: 0.95rem;
  line-height: 1.6;
`

const Date = styled.span`
  color: #8892b0;
  font-size: 0.9rem;
`

const Achievements = () => {
  return (
    <AchievementsContainer>
      <AchievementItem>
        <Description>
          Google Summer of Code 2024 (GSoC): Successfully completed a project with the data.table package in collaboration
          with the R Project. Contributed extensively to resolving issues, improving documentation, and implementing new
          features in the open-source package
        </Description>
      </AchievementItem>

      <AchievementItem>
        <Description>
          President of Training and Placement Club: Led and mentored the club to improve placement preparation strategies and
          engagement, fostering a collaborative environment among students
        </Description>
        <Date>(Oct 2023 – Present)</Date>
      </AchievementItem>

      <AchievementItem>
        <Description>
          Programming Challenges: Solved 300+ CodeWars challenges with an average rank of 2000-4000 and mastered 350+
          LeetCode problems with notable achievements in competitive programming
        </Description>
      </AchievementItem>
    </AchievementsContainer>
  )
}

export default Achievements 