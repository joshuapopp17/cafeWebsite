import React from 'react'
import { Container, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './Locations.css'
import LogoBlack from '../../assets/LogoBlack.png'
import Footer from '../../components/Footer/Footer'

function Locations() {
  return (
    <div>
    <Container style={{minHeight: '100vh'}}>
        <div className='section'>
          <h1 className='header'>Location</h1>
          <h3 className='text'>Muster Strasse 13, Berlin, 90902</h3>
          <div className='section'>
            <h1 className='header'>Store Hours</h1>
            <h3 className='text'>Mo-Fr: 10 - 5 PM</h3>
            <h3 className='text'>Sat: 10 - 7 PM</h3>
            <h3 className='text'>Sun: Closed</h3>
          </div>
        </div>
        <Image width={"100%"} className={"image"} src={"https://www.materials-inc.com/media/coffee-shop-highlights-three-interior-design-ideas.jpg"}></Image>
    </Container>
    <Footer></Footer>
  </div>
  )
}

export default Locations