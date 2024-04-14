import textlogo from '../textlogo.png';

const Footer = () => {
  return(
    <div className="w-full bg-[#4c651e] flex flex-row justify-between py-8 px-36 border-t-2 border-gray-300">
      <img src={textlogo} alt='text logo' className="max-h-32"/> 
      <div className="text-gray-100 flex flex-col mr-48 items-start">
        {/* <div>ha</div>  444 south beat ave, address, phone number, email */}
        {/* <div>ha</div>  */}

        <div className="flex flex-row justify-around items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/149/149441.png" loading="lazy" className="h-8 invert" alt="location icon"/>
          <div className="flex flex-col items-start px-4"> 
            <div>
              444 South Beat Ave,
            </div>
            <div>
              Shrute, CA
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-around items-center pt-4">
          <img src="https://cdn-icons-png.flaticon.com/128/149/149385.png" loading="lazy" className="h-8 invert" alt="phone icon"/>
          <div className="px-4">
            555-123-4321
          </div>
        </div>

        <div className="flex flex-row justify-around items-center pt-4">
          <img src="https://cdn-icons-png.flaticon.com/128/149/149393.png" loading="lazy" className="h-8 invert" alt="email icon" />
          <div className="px-4">
            beats@support.io
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;

