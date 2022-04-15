import React from 'react';
import footerimg from '../../../images/footer-icon.webp';
import './Footer.css';
import facebook from '../../../images/social/facebook.png';
import instagram from '../../../images/social/instagram.png';
import twitter from '../../../images/social/twitter.png';
import youtube from '../../../images/social/youtube.png';
const Footer = () => {
    return (
        <div className=''>
            <div className="d-flex align-items-center my-5">
                <div style={{ height: "1px" }} className="footer-bg w-50 ms-4 me-5"></div>
                <img src={footerimg} alt="" />
                <div style={{ height: "1px" }} className="footer-bg w-50 ms-5 me-5"></div>
            </div>
            <div className="footer-bg w-100 h-100 d-flex align-items-center">
                <div className='text-white py-5 px-5'>
                    <h3 className='footer-heading'>CUPCAKE CORNER</h3>
                    About us  <br />
                    FAQs <br />
                    Terms & Conditions <br />
                    Privacy Policy <br />
                    Delivery & Collections <br />
                    Contact Us
                </div>
                <div className='text-white mx-auto py-5 px-5 mt-2'>
                    <h3 className='footer-info'>OPENING TIMES</h3>
                    Mon - Sat: 11am - 7pm <br />
                    Sundays: 12pm - 6pm
                    <div className='pt-5'>
                    <h3 className='footer-info'>FOLLOW US ON</h3>
                      <div>
                      <img src={facebook} alt="" />
                        <img className="ps-3" src={instagram} alt="" />
                        <img className="ps-3" src={twitter} alt="" />
                        <img className="ps-3" src={youtube} alt="" />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;