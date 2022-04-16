import React from 'react';
import { Link } from 'react-router-dom';
import register from '../../../images/header/sign-up.png';
import SocialLoginRegister from '../SocialLoginRegister/SocialLoginRegister';
import './Register.css';
const Register = () => {
    const navigateLogin = () =>{
        navigateLogin('/login')
    }
    return (
        <div>
            <form className='m-auto my-5 login-inner'>
                <h3 className='text-center fw-bold'>
                <img src={register}  alt="" />
                </h3>
                <div className="form-group">
                    <label className='login-label'>Email address</label>
                    <input type="email" className="form-control w-75 mx-auto" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label className='login-label'>Password</label>
                    <input type="password" className="form-control w-75 mx-auto" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label className='login-label'>Confirm Password</label>
                    <input type="password" className="form-control w-75 mx-auto" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input login-label" id="customCheck1" />
                        <label className="custom-control-label ps-2 " htmlFor="customCheck1">Accept terms & conditions</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark w-75 d-flex justify-content-center mx-auto mt-3">Submit</button>
                <p className="forgot-password text-center login-label me-5 my-2">
                    Forgot password?
                </p>
                <p className='login-label'>Already registered? <Link to="/login" className='text-secondary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
               <SocialLoginRegister/>
            </form>
        </div>
    );
};

export default Register;