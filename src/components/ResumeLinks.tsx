import styled from 'styled-components'

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background: #1a1a1a;
  border: 1px solid #222;
  border-radius: 8px;
  color: #64ffda;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #222;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(100, 255, 218, 0.1);
  }
`

const ResumeLinks = () => {
  return (
    <LinksContainer>
      <Link href="https://www.linkedin.com/in/nitish-jha-2b82aa155/" target="_blank" rel="noopener noreferrer">
        <span>🔗</span> LinkedIn
      </Link>
      <Link href="https://github.com/Nj221102" target="_blank" rel="noopener noreferrer">
        <span>🔗</span> GitHub
      </Link>
      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <span>📄</span> Download Resume
      </Link>
    </LinksContainer>
  )
}

export default ResumeLinks 