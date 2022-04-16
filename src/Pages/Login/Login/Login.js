import React, { useRef } from 'react';
import userImg from '../../../images/header/user.png';
import { Link, useNavigate } from 'react-router-dom';
import SocialLoginRegister from '../SocialLoginRegister/SocialLoginRegister';

import './Login.css';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import Loading from '../../Shared/Loading/Loading';
const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigateRegister = () => {
        navigate('/register');
    }
    if (user) {
        console.log(user);
    }
    if(loading){
        return <Loading/>
    }
    const submitAlert = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You successfully logged in',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <>
            <form onSubmit={handleLogin} className='m-auto my-5 login-inner'>
                <h3 className='text-center fw-bold'>
                    <img src={userImg} alt="" />
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
                <button type="submit" className="btn btn-dark w-75 d-flex justify-content-center mx-auto mt-3" onClick={submitAlert}>Submit</button>
                <p className="forgot-password text-center login-label me-5 my-2">
                    Forgot password?
                </p>
                <p className='login-label'>New to Cupcake Corner? <Link to="/register" className='text-secondary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                <SocialLoginRegister />
            </form>
        </>
    );
};

export default Login;