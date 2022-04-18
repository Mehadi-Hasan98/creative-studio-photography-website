import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {FcGoogle} from 'react-icons/fc';
import {VscGithub} from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

    const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      }

      if(user){
        navigate('/home');
      }
    return (
       <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button 
                onClick={() => signInWithGoogle()}
                className='btn btn-dark w-50 d-block my-2 mx-auto'>
                <FcGoogle/><span className='ps-4'>Google Sign In</span>
                </button>
                <button className='btn btn-dark w-50 d-block mx-auto'>
                <VscGithub/><span className='ps-4'>Github Sign In</span>
                </button>
            </div>
       </div>
    );
};

export default SocialLogin;