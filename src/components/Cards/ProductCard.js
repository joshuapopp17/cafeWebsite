import React from 'react'
import './ProductCard.css'
import { Card } from 'react-bootstrap'

function ProductCard({url, title, description, price}) {
  return (
    <Card> 
        <Card.Img variant="top" src={url} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <button className='addButton'>Add to Cart - ${price}</button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard