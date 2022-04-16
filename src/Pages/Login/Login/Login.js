import React from 'react';
import user from '../../../images/header/user.png';
import { Link, useNavigate } from 'react-router-dom';
import SocialLoginRegister from '../SocialLoginRegister/SocialLoginRegister';

import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    const navigateRegister = () =>{
        navigate('/register');
    }
    return (
        <>
            <form className='m-auto my-5 login-inner'>
                <h3 className='text-center fw-bold'>
                    <img src={user} alt="" />
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
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input login-label" id="customCheck1" />
                        <label className="custom-control-label ps-2 " htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark w-75 d-flex justify-content-center mx-auto mt-3">Submit</button>
                <p className="forgot-password text-center login-label me-5 my-2">
                    Forgot password?
                </p>
                <p className='login-label'>New to Cupcake Corner? <Link to="/register" className='text-secondary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
               <SocialLoginRegister/>
            </form>
             
        </>
    );
};

export default Login;