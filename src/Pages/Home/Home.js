import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.png';
import banner2 from '../../images/banner/banner2.png';
import banner3 from '../../images/banner/banner3.png';
import mainpic from '../../images/main/main2.png';
import './Home.css';
const Home = () => {
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
        </>
    );
};

export default Home;