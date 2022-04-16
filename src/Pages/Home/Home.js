import React, { useState } from 'react';
import { Carousel, Col, Container, Row, Toast } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.png';
import banner2 from '../../images/banner/banner2.png';
import banner3 from '../../images/banner/banner3.png';
import logo from '../../../src/images/logo/logo.png';
import mainpic from '../../images/main/main2.png';
import Footer from '../Shared/Footer/Footer';

import './Home.css';
const Home = () => {
    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);
    return (
        <>
            <div className="carousel-container">
                <Carousel variant="dark" className='w-100 '>
                    <Carousel.Item className=''>
                        <img
                            className="d-block carousel-img"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5 className='carousel-heading'>EAT ME!</h5>
                            <p className='carousel-info'>We make the best cupcakes. Check some of them out for yourself!.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" carousel-img"
                            src={banner2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5 className='carousel-heading'>PICK  YOUR<br /> OWN</h5>
                            <p className='carousel-info'>We make the best cupcakes. Check some of them out for yourself!.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-img"
                            src={banner3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5 className='carousel-heading'>ORDER  <br /> CUPCAKES</h5>
                            <p className='carousel-info'>We make the best cupcakes. Check some of them out for yourself!.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Toast show={show} onClose={toggleShow} className='cupcake-toast' >
                <Toast.Header>
                    <img src={logo}
                        width="20" className="rounded me-2 " alt="" />
                    <strong className="me-auto">Cupcake Corner</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>
                    <h6>Hello!! Upto 50% sale is going on!Grab your desired cupcake🧁.</h6>
                </Toast.Body>
            </Toast>
            <Container className='mt-5'>
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        <img
                            className="img-fluid w-100 main-pic"
                            src={mainpic}
                            alt=""
                        />
                    </Col>
                    <Col className='main-area'>
                        <h2 className='main-heading ps-5'>FRESHLY BAKED</h2>
                        <p className='main-info ps-5'>Every day we bake and deliver amazing cupcakes and muffins across everywhere. Using only the finest available ingredients we bake fresh to order in small batches, making our cupcakes the BEST around. Choose from amazing cakes including Biscoff, Unicorn, Rainbow, Velvet Volcano and more, or mix & match to create a custom 2-tier or 3-tier cake. Whether you're looking for a personalised birthday cake, corporate cupcakes branded with your company logo, or a show-stopping tiered wedding cake, we’ve got you covered. Order your perfect cupcakes and muffins online today for delivery or collection from our Cupcake Corner, or our main bakery.</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Home;