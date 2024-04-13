const NavBar = () => {
  return(
    <div class="w-full h-16 bg-red-100 flex flex-row justify-between px-20">

      <div class="w-1/4 flex border-green-800 border-dashed border-2"> 
        <a href="/" class="text-green-900"> lol i go home</a>
      </div>
      <div class="w-1/4 flex justify-around border-green-800 border-dashed border-2"> 
        <a href="/a" class="text-blue-900">lol i am go a</a> 
        <a href="/b" class="text-blue-900">lol i am go b</a> 
      </div> 
    </div>
  );
};

export default NavBar;

