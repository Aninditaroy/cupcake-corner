import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Cupcake.css';
const Cupcake = ({ cupcake }) => {
    const { name, details, img, price } = cupcake;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} className="h-75"/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           {price}
                        </Card.Text>
                        <Card.Text>
                            {details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Cupcake;