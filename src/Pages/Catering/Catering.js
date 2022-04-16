import React from 'react';
import catering1 from '../../images/catering/catering1.jpg';
import catering2 from '../../images/catering/catering2.jpg';
import catering3 from '../../images/catering/catering3.jpg';
import catering4 from '../../images/catering/catering4.jpg';
import catering5 from '../../images/catering/catering5.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import './Catering.css';
import Footer from '../Shared/Footer/Footer';
const Catering = () => {
    return (
     <>
         
        <Container>
            <Row className='m-5'>
                <Col  xs={{ order: 1 }} lg={{ order: 2 }}>
                 <img className="catering-img" src={catering1} alt="" width={550}/>
                </Col>
                <Col  xs={{ order: 2 }} lg={{ order: 1 }} className='text-center catering'>
                  <h2 className='catering-heading'>WEDDINGS</h2>
                  <p className='catering-para'>Sweeten your wedding day with Cupcake Corner! From flavors that are timeless classics to custom assortments and personalized monograms, decorations, and cupcake display options, Cupcake Corner offers endless possibilities to celebrate your special day.</p>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col  xs={{ order: 2 }} lg={{ order: 2 }} className='text-center catering'>
                  <h2 className='catering-heading'>SPECIAL OCCASIONS</h2>
                  <p className='catering-para'> Cupcake corner is the perfect way to celebrate the special moments in life! From baby showers to birthdays, to anniversaries and family reunions,  Cupcake offers fun and creative assortments and custom decorations for any occasion.</p>
                </Col>
                <Col  xs={{ order: 1 }} lg={{ order: 1 }}>
                 <img className="catering-img" src={catering2} alt="" width={550}/>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col xs={{ order: 1 }} lg={{ order: 2 }}>
                 <img className="catering-img" src={catering3} alt="" width={550}/>
                </Col>
                <Col  xs={{ order: 2 }} lg={{ order: 1 }} className='text-center catering'>
                  <h2 className='catering-heading'>HOLIDAYS</h2>
                  <p className='catering-para'>Celebrate the holidays with Cupcake Corner! From unique fondant decorations to special holiday-themed assortments,  Cupcake Corner offers countless ways to make your holiday gathering truly memorable.</p>
                </Col>  
            </Row>
            <Row className='m-5'>
                <Col xs={{ order: 2 }} lg={{ order: 2 }} className='text-center catering'>
                  <h2 className='catering-heading'>CUSTOM DECORATIONS</h2>
                  <p className='catering-para'>Cupcake Corner offers a wide variety of hand-made fondant decorations to make your cupcakes truly unique. From shapes such as hearts and flowers, to personalized monograms, to corporate emblems and logos, the possibilities are limitless!</p>
                </Col>
                <Col   xs={{ order: 1 }} lg={{ order: 1 }}>
                 <img className="catering-img" src={catering4} alt="" width={550}/>
                </Col>
            </Row>
            <Row className='m-5'> 
                <Col xs={{ order: 1 }} lg={{ order: 2 }}>
                 <img className="catering-img" src={catering5} alt="" width={550}/>
                </Col>
                <Col  xs={{ order: 2 }} lg={{ order: 1 }} className='text-center catering'>
                  <h2 className='catering-heading'>GIFTS</h2>
                  <p className='catering-para'>Cupcakes make the perfect gift! In addition to our extensive menu of daily and seasonal flavors and pre-set assortments,  Cupcake Corner's gift options include single cupcake favor boxes, mini-cupcake assortments, and other custom arrangements, all wrapped in our iconic pink box. In addition, Cupcake Corner ships its award-winning cupcakes nationwide!</p>
                </Col>
            </Row>
        </Container>
        <Footer/>
     </>
    );
};

export default Catering;