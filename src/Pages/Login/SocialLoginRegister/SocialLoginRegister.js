import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';
import './SocialLoginRegister.css';
import { useSignInWithGoogle, useSignInWithGithub, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
const SocialLoginRegister = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebokError] = useSignInWithFacebook(auth);
    if(googleLoading || githubLoading || facebookLoading){
        return <Loading/>
    }
    return (
        <div>
              <div className='d-flex align-items-center my-2'>
                    <div className='social-bg w-50'></div>
                    OR
                    <div className='social-bg w-50'></div>
                </div>
             <div className='d-flex justify-content-center mx-auto'>
                <button onClick={() => signInWithGoogle()} className='btn'>
                    <img style={{ width: "30px", height: "30px" }} src={google} alt="" />
                </button>
                <button onClick={() => signInWithGithub()} className='btn'>
                    <img style={{ width: "30px", height: "30px" }} src={github} alt="" />
                </button>
                <button onClick={() => signInWithFacebook()} className='btn'>
                    <img style={{ width: "30px", height: "30px" }} src={facebook} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLoginRegister;