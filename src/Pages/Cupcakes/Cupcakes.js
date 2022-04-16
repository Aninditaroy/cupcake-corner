import React, { useEffect, useState } from 'react';
import Cupcake from '../Cupcake/Cupcake';
import { Row, Container, Toast } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import logo from '../../../src/images/logo/logo.png';
import './Cupcakes.css';
const Cupcakes = () => {
    const [cupcakes, setCupcakes] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCupcakes(data));
    }, []);
    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);
    return (
        <>
            <Toast show={show} onClose={toggleShow} className='cupcake-toasst' >
                <Toast.Header>
                    <img src={logo}
                        width="20" className="rounded" alt="" />
                    <strong className="me-auto">Cupcake Corner</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>
                    <h6>Hello!! Upto 50% sale is going on!Grab your desired cupcake🧁.</h6>
                </Toast.Body>
            </Toast>
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
            <Footer />
        </>
    );
};

export default Cupcakes;