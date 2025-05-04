import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const LoginWhit = () => {
    const {signInWithGoogle, setUser} = use(AuthContext);
    const handleGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            // console.log(result)
            console.log(result.user)
            // setUser(result.user)
            // if(!result.user.emailVerified){
            //     return alert('email not verified')
            // }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h1  className='text-2xl font-bold my-4'>Login Whit</h1>
            <button onClick={handleGoogle} className='btn text-secondary w-full'>Login Whit Google</button>
            <button className='btn text-primary mt-3 w-full'>Login Whit Github</button>
        </div>
    );
};

export default LoginWhit;