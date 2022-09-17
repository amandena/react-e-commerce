import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div` 
  display: flex;
`
const Left = styled.div` 
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
  
`
const Desc = styled.p`
  
`
const SocialContainer = styled.div` 

`
const SocialIcon = styled.div`
  
`
const Center = styled.div` 
  flex: 1;
`
const Right = styled.div` 
  flex: 1;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ringsnthingsbyamanda</Logo>
        <Desc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomized words which don't look even slightly believable.</Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook/>
          </SocialIcon>
          <SocialIcon>
            <Instagram/>
          </SocialIcon>
          <SocialIcon>
            <Twitter/>
          </SocialIcon>
          <SocialIcon>
            <LinkedIn/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer
