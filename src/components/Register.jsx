
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {

    const [errorMessage, setErrorMassage] = useState('');
    const {register, updateUserProfile, setUser, verification} = use(AuthContext);
    const navigate = useNavigate()
    const handleRegister = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        // console.log(name, photo)

        // register
        register(email, password)
        .then(result =>{
            // console.log(result)
            // verification
            verification()
            .then(() =>{
                console.log('verification email')
            })


            // update user profile
            updateUserProfile({displayName: name, photoURL: photo} )
            .then(() =>{
                setUser({...result.user, displayName: name, photoURL: photo})
            })
            .catch(error=>{
                console.log(error)
            })
          navigate('/')
        })
        .catch(error=>{
           setErrorMassage(error.code)
        })
    }
    return (
       
        <div className='flex justify-center items-center min-h-screen'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
            <h1 className='text-2xl font-semibold text-center'>Register your account</h1>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' required className="input" placeholder="Name" />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' required className="input" placeholder="Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" name='email' required className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" required name='password' className="input" placeholder="Password" />
                   

                    <button type='submit' className="btn btn-neutral mt-4">Register</button>

                    {
                        errorMessage && <p className='text-error my-2'>{errorMessage}</p>
                    }
                    <p className='font-semibold mt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;