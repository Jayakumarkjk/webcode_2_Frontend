import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Product = ({ product }) => {
    return (
        
        <div className='flex-container'>
            <div className='flex-item'>  
            <div>  
 <Card style={{ width: '18rem' }}>
      <Card.Img className='imag1' variant="top" src={product.Image} />
      <Card.Body>
        <Card.Title className='flex-item flex-item-1'>{product.name}</Card.Title>
        <Card.Text className='flex-item flex-item-2'>{product.price}</Card.Text>
        <Card.Text className='flex-item flex-item-3'>{product.oldprice}</Card.Text>
        <Button variant="primary">{product.Rating}</Button>
      </Card.Body>
    </Card>
  
    </div>
        </div>
        </div> 
)
}
export default Product;