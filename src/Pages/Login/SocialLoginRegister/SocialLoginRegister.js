import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';
import './SocialLoginRegister.css';
const SocialLoginRegister = () => {
    return (
        <div>
              <div className='d-flex align-items-center my-2'>
                    <div className='social-bg w-50'></div>
                    OR
                    <div className='social-bg w-50'></div>
                </div>
             <div className='d-flex justify-content-center mx-auto'>
                <button  className='btn'>
                    <img style={{ width: "30px", height: "30px" }} src={google} alt="" />
                </button>
                <button  className='btn'>
                    <img style={{ width: "30px", height: "30px" }} src={github} alt="" />
                </button>
                <button  className='btn'>
                    <img style={{ width: "30px", height: "30px" }} src={facebook} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLoginRegister;