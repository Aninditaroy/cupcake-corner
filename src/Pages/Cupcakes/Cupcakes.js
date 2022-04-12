import React, { useEffect, useState } from 'react';
import Cupcake from '../Cupcake/Cupcake';
import { Row, Container } from 'react-bootstrap';

const Cupcakes = () => {
    const [cupcakes, setCupcakes] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCupcakes(data));
    }, []);
    return (
        <Container>
        <Row xs={1} md={2} lg={3} className="g-4 mt-5 mb-5">
            {
                cupcakes.map(cupcake => <Cupcake
                    key={cupcake.id}
                    cupcake={cupcake}
                />)
            }
        </Row>
        </Container>
    );
};

export default Cupcakes;