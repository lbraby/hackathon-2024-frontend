import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import textlogo from "../textlogo.png";
import { Link } from 'react-router-dom';
// import food from "../food.jpg";

const Home = () => {

    const [text, setText] = useState('your city.');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const cities = ['your city.', 'your city.', 'your city.', 'South Bend.', 'Chicago.', 'Philadelphia.', 'Kansas City.', 'St. Louis.'];
        const intervalId = setInterval(() => {
            const nextIndex = (index + 1) % cities.length;
            setIndex(nextIndex);
            setText(cities[nextIndex]);
        }, 1000)

        return () => clearInterval(intervalId);
    }, [text, index]);

    return(
        <div className="bg-[#FDF4E9] min-h-screen w-full">
            <NavBar/>
            <div className="w-full flex justify-center items-center">
                <img src={textlogo} alt="Welcome Logo" className="max-h-128"/>
            </div> 

            <div className="w-full flex flex-row justify-center">
                <div className="text-4xl w-fit text-[#BB378E]">
                    Take your palate around the world in <p className="inline relative font-bold">{text}</p>
                </div>
            </div>

            {/* <img src={food} alt="food of the week"/> */}
            <div className="mt-16 w-full bg-lebanon-food h-screen flex flex-column justify-center items-center text-6xl text-[#BB378E]">
                <div className="bg-[#FDF4E9]  bg-opacity-80 rounded-lg max-w-216 p-16">
                    <p>
                        Country cuisine of the week
                    </p>
                    <p className="text-8xl font-bold mt-12 font-satisfy">
                        Lebanon 
                    </p>
                    <p className="text-lg mt-16 text-[#4c651e]">
Lebanese cuisine is a mix of Mediterranean, middle eastern, and French cuisines, with the Mediterranean influence being the most prominent. The diet is heavy in grains, legumes, vegetables, fruits, and nuts. Olive oil and garlic are essential ingredients in the preparation of almost every dish. The primary animal-based proteins are lamb, chicken, and beef, in that order. The method of preparation usually involves grilling, baking, and to a lesser extent sautéing. Flavor is imparted to the food through fresh spices and copious amounts of fresh herbs as well as lemon juice. Despite the French influences in its history and in the popularity of croissants and flan, Lebanese food rarely involves the use of elaborate sauces, cream, or even butter in its cuisine. 
<Link to="https://en.wikipedia.org/wiki/Lebanese_cuisine#:~:text=Chickpeas%20and%20parsley%20are%20also,%2C%20sfouf%20and%20ka'ak." className="font-bold text-[#7AA331] hover:text-[#EC9D3F]" target="_blank"> [Learn more]</Link>
                    </p>
                </div>
            </div>


            <div className="w-full mt-16 pb-16">
                <div className="flex flex-column text-6xl font-satisfy items-center justify-center text-[#ec9d3f] font-bold">
                    Signature Lebanese Dishes
                </div>

                <div className="overflow-x-scroll no-scrollbar">
                    <div className="flex flex-row w-fit">
                        <div className="w-72 h-96 m-16 bg-[#7AA331] rounded-lg"> hi </div>
                        <div className="w-72 h-96 m-16 bg-[#7AA331] rounded-lg"> hi </div>
                        <div className="w-72 h-96 m-16 bg-[#7AA331] rounded-lg"> hi </div>
                        <div className="w-72 h-96 m-16 bg-[#7AA331] rounded-lg"> hi </div>
                        <div className="w-72 h-96 m-16 bg-[#7AA331] rounded-lg"> hi </div>
                        <div className="w-72 h-96 m-16 bg-[#7AA331] rounded-lg"> hi </div>
                        <div className="w-72 h-96 m-16 bg-[#7AA331] rounded-lg"> hi </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;