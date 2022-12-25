import React from 'react'
import { Container, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './Shop.css'
import LogoBlack from '../../assets/LogoBlack.png'
import Footer from '../../components/Footer/Footer'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlackShirt from '../../assets/BlackShirt.png'
import WhiteShirt from '../../assets/WhiteShirt.png'
import LightRoastBag from '../../assets/LightRoastBag.png'
import CoffeeBag from '../../assets/CoffeeBag.png'
import ProductCard from '../../components/Cards/ProductCard'

function Shop() {

  return (
    <div>
      <Container style={{minHeight: '100vh'}}>
        <div className="section">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <ProductCard 
            url={CoffeeBag} 
            title={"Columbian Dark Roast"}
            description={"A dark blend for a strong rich flavor."}
            price={20}
            />
          </Col>
          <Col>
            <ProductCard
             url={LightRoastBag} 
             title={"Brazilian Light Roast"}
             description={"A light blend great for a warmer day."}
             price={20}
             />
          </Col>
          <Col>
            <ProductCard 
            url={BlackShirt} 
            title={"Black Café Shirt"}
            description={"Boxy fit logo shirt"}
            price={30}
            />
          </Col>
          <Col>
            <ProductCard 
            url={WhiteShirt}  
            title={"White Café Shirt"}
            description={"Boxy fit logo shirt"}
            price={30}
            />
          </Col>
        </Row>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Shop