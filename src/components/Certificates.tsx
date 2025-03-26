import styled from 'styled-components'

const CertificatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const CertificateItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CertificateLink = styled.a`
  color: #64ffda;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: #9effeb;
  }
`

const Certificates = () => {
  return (
    <CertificatesContainer>
      <CertificateItem>
        <CertificateLink 
          href="https://docs.google.com/document/d/1QOcN2W-jsp9ekdjn8nybrAkG_svYSdt-Rt_dUhamAPw/edit?tab=t.0" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Google Summer of Code 2024 Certificate
        </CertificateLink>
      </CertificateItem>
    </CertificatesContainer>
  )
}

export default Certificates 