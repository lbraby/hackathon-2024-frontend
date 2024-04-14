import React, { useState, useEffect } from 'react';
import NavBar from './NavBarMenu';
import Footer from './Footer';
import YourMenu from  '../your_menu.json';
import FoodRecs from  './FoodRecs';


const OnYourMenu = () => {

  const [dishes] = useState(YourMenu);
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(1);
    }, 2000);
    return () => clearTimeout(timeout);
  },[]);

  const [text, setText] = useState('.');
  const [index, setIndex] = useState(0);

    useEffect(() => {
        const cities = ['.', '..', '...'];
        const intervalId = setInterval(() => {
            const nextIndex = (index + 1) % cities.length;
            setIndex(nextIndex);
            setText(cities[nextIndex]);
        }, 250)

        return () => clearInterval(intervalId);
    }, [text, index]);


  return(
    <div>
        <NavBar />
        {(loaded === 0) ? (
          <div className="w-full h-screen bg-my-background flex flex-col items-center justify-center">
            <h1 className='text-3xl font-bold text-my-dark-purple'>Loading{text}</h1>
          </div>
        )
        : (
          <div className="w-full bg-my-background">
            <div className="w-full h-48 flex flex-row justify-start bg-menu-header bg-cover">
              <div className="text-7xl font-display text-my-orange pl-48 pt-16 font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                On Your Menu
              </div>
            </div>

            <div className="w-full mt-8 flex flex-col items-center justify-center">
                <div className="text-4xl text-my-dark-purple font-satisfy">
                  Here are Lebanese dish recommendations personalized to your palate:
                </div>
                <div className="w-11/12 rounded-3xl">
                  <div className="flex flex-row justify-center">
                      {dishes.map((item, index) => {
                          // console.log(item.description);
                          return (
                              <FoodRecs key={index} id={index} name={item.name} ingredients={item.ingredients} img={item.image_url} uri={item.uri} />
                          );
                      })}
                  </div>

                </div>
            </div>


          <div className="h-216 w-full flex flex-col items-center justify-center text-my-dark-green">
            <div className="text-4xl">
              Find your dish recommendations near <span className="font-bold">Notre Dame</span>
            </div>
            <iframe title="map" src="https://storymaps.arcgis.com/stories/111200dd0a384c979111154aef89eeee?cover=false" frameborder="0" allowfullscreen allow="geolocation" className="my-10 w-4/5 h-216 py-2"></iframe>
          </div>
        </div>
        )}
        <Footer />
    </div>
  );
};

export default OnYourMenu;