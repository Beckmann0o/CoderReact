import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ItemProduct({ product }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img height="250px" variant="bottom" src={product?.imagen} />
            <Card.Body>
                <Card.Title>{product?.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${product?.precio}</Card.Subtitle>
                <Link to={`/detalle/${product?.id}`}>
                    <Button variant="primary">Ver Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
export default ItemProduct