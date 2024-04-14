import { Link } from 'react-router-dom';
import logo from '../logo.png';

const NavBar = () => {
  return(
    <div className="w-full h-20 bg-[#FDF4E9] flex flex-row justify-between px-8 border-b-2 border-gray-300 sticky top-0">
      <div className="w-1/4 flex justify-start items-center"> 
        <p className='pr-4'>
          <Link to="/"> 
            <img src={logo} alt='logo' className="max-w-14"/> 
          </Link>
        </p>
        <div className="px-4 text-xl font-bold text-[#BB378E]">
          <Link to="/">
            On your menu
          </Link>
        </div>
        <div className="px-4 text-xl font-bold text-[#BB378E]">
          <Link to="/">
            About Us
          </Link>
        </div>
      </div>
      <div className="w-1/4 flex justify-end items-center"> 
        <p className='text-[#BB378E] font-bold'><Link to="/login" className='bg-transparent rounded-md px-4 py-2 mx-2'>Login</Link></p>
        <p><Link to="/register" className='text-white bg-[#EC9D3F] font-bold rounded-md px-4 py-2 mx-2'>Register</Link></p>
      </div> 
    </div>
  );
};

export default NavBar;

