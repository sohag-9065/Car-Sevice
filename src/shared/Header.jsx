import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/logo.svg'
import { AuthContext } from '../Context/UserContext';
import Loading from './Loading';

const Header = () => {
    const { user, logout, loadingUser } = useContext(AuthContext);

    if (loadingUser) {
        return <Loading></Loading>
    }

    const handleLogout = () => {
        logout()
            .then(toast.warning('User logged out!', { autoClose: 1000 }))
            .catch(error => console.log(error))
    }

    const menuItems = <>
        <li><NavLink to="/home" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>Home</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>Blog</NavLink></li>
        {
            user ?
                <>
                    <li><NavLink to="/orders" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>Orders</NavLink></li>
                    {
                        user.photoURL ?
                            <>
                                <div className="dropdown  dropdown-end px-2 cursor-pointer">
                                    <div tabIndex={0} className="avatar m-1">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-6">
                                            <img src={user?.photoURL} alt="" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu mt-2  p-2 shadow bg-stone-300 rounded-box w-52">
                                        <li><NavLink className={({ isActive }) => isActive ? undefined : undefined} >{user?.displayName}</NavLink></li>

                                        <li> <Link onClick={handleLogout} className="w-full" >Sign Out</Link></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                                <li> <NavLink className={({ isActive }) => isActive ? undefined : undefined} onClick={handleLogout} >Sign Out</NavLink></li>
                            </>
                    }
                </>
                :
                <li><NavLink to="/login" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>Login</NavLink></li>
        }

    </>

    return (
        <div className="navbar h-20 my-8 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl h-20">
                    <img src={logo} alt="" className='w-16 ' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/'><button className="btn btn-success">Hello</button></Link>

            </div>
        </div>
    );
};

export default Header;