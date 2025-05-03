
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { use } from 'react';

const Login = () => {

    const {login} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const handleLogin = (e) =>{
       
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // login
        login(email, password)
        .then(result => {
            console.log(result)
            navigate(location.state || '/')
        })
        .catch(error =>{
            console.log(error)
        })

    }

    
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
                <h1 className='text-2xl font-semibold text-center'>Login your account</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' required className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" required name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p className='font-semibold mt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;