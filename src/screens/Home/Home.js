import React from 'react'
import { Container, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './Home.css'
import LogoBlack from '../../assets/LogoBlack.png'
import Footer from '../../components/Footer/Footer'

function Home() {

  return (
    <div>
      <Container style={{height: '100vh'}}>
          <Image width={"100%"} className={"image"} src={"https://perfectdailygrind.com/wp-content/uploads/2019/04/bonanzacoffee_1_4_2019_17_52_0_351-1080x560-1.jpg"}></Image>
          <div className='section'>
            <h1 className='header'>A modern balance of depth and simplicity.</h1>
            <h3 className='text'>Our beans are ethically sourced from small farms in Columbia and Brazil
              and are grounded daily to maintain rich and deep flavors.
              Due to the many farms we work with you can discover new flavors and roasts monthly.
              </h3>
  
            <br></br>
            <h3 className='text'>Work, Study, or just hang out!</h3>
          </div>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Home