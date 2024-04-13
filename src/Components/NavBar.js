import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <div class="w-full h-16 bg-red-100 flex flex-row justify-between px-20">
      <div class="w-1/4 flex border-green-800 border-dashed border-2"> 
        <p className='text-green-900'><Link to="/">lol i go home</Link></p>
      </div>
      <div class="w-1/4 flex justify-around border-green-800 border-dashed border-2"> 
        <p className='text-blue-900'><Link to="/login">Login</Link></p>
        <p className='text-blue-900'><Link to="/register">Register</Link></p>
      </div> 
    </div>
  );
};

export default NavBar;

