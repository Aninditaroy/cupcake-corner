import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import register from '../../../images/header/sign-up.png';
import SocialLoginRegister from '../SocialLoginRegister/SocialLoginRegister';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
const Register = () => {
    const navigate = useNavigate();
    const [agree,setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigateLogin = () =>{
        navigate('/login')
    }
    if(user){
        console.log(user);
    }
    const handleRegister =  event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if(password !== confirmPassword){
            return alert('Your passwords didn\'t match');
        }
        createUserWithEmailAndPassword(email,password);
        navigate('/home');
    }
    return (
        <div>
            <form onSubmit={handleRegister} className='m-auto my-5 login-inner'>
                <h3 className='text-center fw-bold'>
                <img src={register}  alt="" />
                </h3>
                <div className="form-group">
                    <label className='login-label'>Name</label>
                    <input type="text" name="name" className="form-control w-75 mx-auto" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label className='login-label'>Email address</label>
                    <input type="email" name="email" className="form-control w-75 mx-auto" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label className='login-label'>Password</label>
                    <input type="password" name="password" className="form-control w-75 mx-auto" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label className='login-label'>Confirm Password</label>
                    <input type="password" name="confirmPassword" className="form-control w-75 mx-auto" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input login-label" id="customCheck1" onClick={() => setAgree(!agree)} />
                        <label className="custom-control-label ps-2 " htmlFor="customCheck1" >Accept terms & conditions</label>
                    </div>
                </div>
                <input type="submit" className="btn btn-dark w-75 d-flex justify-content-center mx-auto mt-3" disabled={!agree} value="Submit"/>
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