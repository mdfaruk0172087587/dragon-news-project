import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import UserIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthContext';

const Navbar = () => {
  const {user, logOut} = use(AuthContext);
  const handleLogOut = () =>{
   
    logOut()
    .then(() =>{
      alert('LogOut successfully')
    })
    .catch(error =>{
      console.log(error)
    })
  }
  console.log(user)
    return (
        <div className='flex justify-between'>
          <div>{ user && user?.email}</div>
          <div className='flex items-center gap-5'>
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive? 'underline' : ''}  to='/about'>About</NavLink>
            <NavLink className={({isActive}) => isActive? 'underline' : ''}  to='/career'>Career</NavLink>
          </div>
          <div className='flex gap-3'>
            <img className='w-12 h-12 rounded-full' src={user? user?.photoURL: UserIcon} alt="" />
           {
            user? <button onClick={handleLogOut} className='text-white btn-primary btn px-8  '>LogOut</button>: <Link to='/auth/login' className='text-white btn-primary btn px-8 '>Login</Link>
           }
          </div>
        </div>
    );
};

export default Navbar;