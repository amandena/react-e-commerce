import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

const Slide = styled.div` 
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

const ImgContainer = styled.div` 
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div` 
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://vitalcy-images.s3.amazonaws.com/website/home/ladyguyjump.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://variety.com/wp-content/uploads/2022/01/Lady-Gaga-Variety-Actors-on-Actors-3-16x9-1.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>FALL SALE</Title>
            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://variety.com/wp-content/uploads/2022/01/Lady-Gaga-Variety-Actors-on-Actors-3-16x9-1.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
