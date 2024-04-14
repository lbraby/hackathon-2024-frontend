import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import textlogo from "../textlogo.png";
import { Link } from 'react-router-dom';
import FoodPanel from "./FoodPanel";
import Footer from "./Footer";
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

    const [dishes] = useState([
    {
    "cuisine_type": "Lebanese",
    "description": "Esfiha is a Brazilian savory pie. It is brought to Brazil by  Lebanese immigrants.",
    "id": 1895,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/esfiha_3766.jpg",
    "ingredients": [
      {
        "id": 282,
        "ingredient": "warm milk"
      },
      {
        "id": 54,
        "ingredient": "oil"
      },
      {
        "id": 2794,
        "ingredient": "sugar"
      },
      {
        "id": 248,
        "ingredient": "salt"
      },
      {
        "id": 1788,
        "ingredient": "flour"
      },
      {
        "id": 773,
        "ingredient": "onions"
      },
      {
        "id": 2209,
        "ingredient": "garlic"
      },
      {
        "id": 56,
        "ingredient": "beef"
      },
      {
        "id": 1720,
        "ingredient": "mint"
      }
    ],
    "name": "Esfiha",
    "uri": "https://worldfood.guide/dish/esfiha"
  },
  {
    "cuisine_type": "Lebanese",
    "description": "This is a  bread salad made from toasted or fried pieces of pita bread combined with mixed greens and other vegetables, such as radishes and tomatoes.",
    "id": 1952,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/fattoush_1500.jpg",
    "ingredients": [
      {
        "id": 1581,
        "ingredient": "pita"
      },
      {
        "id": 1136,
        "ingredient": "mixed greens"
      },
      {
        "id": 1051,
        "ingredient": "vegetables"
      }
    ],
    "name": "Fattoush",
    "uri": "https://worldfood.guide/dish/fattoush"
  },
  {
    "cuisine_type": "Lebanese",
    "description": "This is a vegetarian dish served cold or hot, consisting of fried cauliflower, often accompanied by tahini sauce, lettuce, parsley and tomatoes, served on pita bread or sliced bread, often grilled or toasted. Variations include curried and roasted cauliflower, bell peppers, or a garlic lemon vinaigrette. It can also be eaten as a sandwich using pita bread, sprinkled with cumin, salt, and lemon juice.",
    "id": 2061,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/fried_cauliflower_1501.jpg",
    "ingredients": [
      {
        "id": 152,
        "ingredient": "cauliflower"
      },
      {
        "id": 3651,
        "ingredient": "tahini sauce"
      },
      {
        "id": 2891,
        "ingredient": "lettuce"
      },
      {
        "id": 2568,
        "ingredient": "parsley"
      },
      {
        "id": 3162,
        "ingredient": "tomatoes"
      },
      {
        "id": 3799,
        "ingredient": "served on pita"
      },
      {
        "id": 3135,
        "ingredient": "sliced bread"
      }
    ],
    "name": "Fried Cauliflower",
    "uri": "https://worldfood.guide/dish/fried_cauliflower"
  },
  {
    "cuisine_type": "Lebanese",
    "description": "Kibe is a  Lebanese dish made of bulgur (cracked wheat), minced onions, and finely ground lean beef, lamb, goat, or camel meat with Middle Eastern spices.",
    "id": 2921,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/kibe_3798.jpg",
    "ingredients": [
      {
        "id": 773,
        "ingredient": "onions"
      },
      {
        "id": 2732,
        "ingredient": "olive oil"
      },
      {
        "id": 248,
        "ingredient": "salt"
      },
      {
        "id": 2880,
        "ingredient": "lamb"
      },
      {
        "id": 2874,
        "ingredient": "allspice"
      },
      {
        "id": 1125,
        "ingredient": "cinnamon"
      },
      {
        "id": 3571,
        "ingredient": "black pepper"
      },
      {
        "id": 1963,
        "ingredient": "pine nuts"
      }
    ],
    "name": "Kibe",
    "uri": "https://worldfood.guide/dish/kibe"
  },
  {
    "cuisine_type": "Lebanese",
    "description": "The pizza of the Arabic world, manakeesh is a round bread sprinkled with either cheese, ground meat or herbs (zaatar). It's ideal for breakfast or lunch. Varieties come from both fancy Levantine restaurants or street vendors.",
    "id": 3400,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/manakeesh_1686.jpg",
    "ingredients": [
      {
        "id": 3566,
        "ingredient": "dough"
      },
      {
        "id": 116,
        "ingredient": "thyme"
      },
      {
        "id": 1556,
        "ingredient": "cheese"
      },
      {
        "id": 294,
        "ingredient": "ground meat"
      }
    ],
    "name": "Manakeesh",
    "uri": "https://worldfood.guide/dish/manakeesh"
  },
  {
    "cuisine_type": "Lebanese",
    "description": "It is often considered the country's national dish.Green soup prepared in various styles, wherein the mallow leaves are very finely chopped, with ingredients such as garlic and coriander added for a characteristic aromatic taste, then cooked with chicken broth.",
    "id": 3767,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/mulukhiyah_2078.jpg",
    "ingredients": [
      {
        "id": 3230,
        "ingredient": "okra leaves"
      },
      {
        "id": 438,
        "ingredient": "beef stock"
      }
    ],
    "name": "Mulukhiyah",
    "uri": "https://worldfood.guide/dish/mulukhiyah"
  },
  {
    "cuisine_type": "Lebanese",
    "description": "This almond semolina cake consumed on birthdays, family reunions, and religious holidays. It is made from semolina flour flavored with turmeric, sugar, eggs, baking powder, sesame paste, aniseed, and pine nuts. The dessert's yellow color comes from the use of turmeric seasoning in the recipe. It is easy to make and simple and tasty.",
    "id": 5028,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/sfouf_2995.jpg",
    "ingredients": [
      {
        "id": 2759,
        "ingredient": "semolina flour"
      },
      {
        "id": 3570,
        "ingredient": "turmeric"
      },
      {
        "id": 2794,
        "ingredient": "sugar"
      },
      {
        "id": 1963,
        "ingredient": "pine nuts"
      }
    ],
    "name": "Sfouf",
    "uri": "https://worldfood.guide/dish/sfouf"
  },
  {
    "cuisine_type": "Lebanese",
    "description": "Sujuk traditionally stars with a dry, spicy sausage which is eaten from the Balkans to the Middle East and Central Asia.",
    "id": 5397,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/sujuk_3847.png",
    "ingredients": [
      {
        "id": 2732,
        "ingredient": "olive oil"
      },
      {
        "id": 179,
        "ingredient": "sujuk"
      },
      {
        "id": 3045,
        "ingredient": "butter"
      },
      {
        "id": 2472,
        "ingredient": "red onion"
      },
      {
        "id": 2209,
        "ingredient": "garlic"
      },
      {
        "id": 3039,
        "ingredient": "pepper"
      },
      {
        "id": 3162,
        "ingredient": "tomatoes"
      },
      {
        "id": 1343,
        "ingredient": "butter beans"
      },
      {
        "id": 225,
        "ingredient": "oregano"
      },
      {
        "id": 256,
        "ingredient": "harissa paste"
      },
      {
        "id": 1974,
        "ingredient": "cumin"
      },
      {
        "id": 393,
        "ingredient": "bay leaf"
      },
      {
        "id": 2792,
        "ingredient": "tomato paste"
      },
      {
        "id": 2726,
        "ingredient": "stock"
      },
      {
        "id": 3837,
        "ingredient": "wine"
      },
      {
        "id": 3571,
        "ingredient": "black pepper"
      },
      {
        "id": 2794,
        "ingredient": "sugar"
      },
      {
        "id": 3251,
        "ingredient": "fresh parsley"
      }
    ],
    "name": "Sujuk",
    "uri": "https://worldfood.guide/dish/sujuk"
  },
  {
    "cuisine_type": "Lebanese",
    "description": "Stuffed grape leaves known as “Warak Enab” in Arabic, is a Lebanese dish of spiced rice and beef rolled in grape leaves and simmered in a Lemony broth.",
    "id": 5915,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/warak_arish_5078.jpg",
    "ingredients": [
      {
        "id": 2141,
        "ingredient": "grape leaves"
      },
      {
        "id": 1463,
        "ingredient": "rice"
      },
      {
        "id": 2120,
        "ingredient": "meat"
      }
    ],
    "name": "Warak Arish",
    "uri": "https://worldfood.guide/dish/warak_arish"
  },
  {
    "cuisine_type": "Lebanese",
    "description": "Warbat also is known as Shaabiyat is an Arabic sweet pastry (originally from Jordan) similar to baklava, consisting of layers thin phyllo dough filled with custard though it is sometimes also filled with pistachios, walnuts, almonds, or sweet cheese. The dessert is topped with a sweet syrup made from sugar, water, and a hint of lemon brought to a boil and then left to cool and thicken.",
    "id": 5916,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/warbat_6296.jpg",
    "ingredients": [
      {
        "id": 1363,
        "ingredient": "phyllo dough"
      },
      {
        "id": 3045,
        "ingredient": "butter"
      },
      {
        "id": 1313,
        "ingredient": "milk"
      },
      {
        "id": 1030,
        "ingredient": "cream"
      },
      {
        "id": 2860,
        "ingredient": "lemon"
      },
      {
        "id": 1716,
        "ingredient": "corn starch"
      },
      {
        "id": 2794,
        "ingredient": "sugar"
      }
    ],
    "name": "Warbat",
    "uri": "https://worldfood.guide/dish/warbat"
  },{
    "cuisine_type": "Lebanese",
    "description": "Daoud Bacha is a delicious lebanese meatball that is a typical family dish that is available in different variations. It can be served with pine nuts in a rich tomato sauce.",
    "id": 1674,
    "image_url": "https://wfg32p.s3.amazonaws.com/media/dishes/daoud_bacha_2052.jpg",
    "ingredients": [
      {
        "id": 2120,
        "ingredient": "meat"
      },
      {
        "id": 650,
        "ingredient": "raisins"
      },
      {
        "id": 2770,
        "ingredient": "bread"
      },
      {
        "id": 773,
        "ingredient": "onions"
      }
    ],
    "name": "Daoud Bacha",
    "uri": "https://worldfood.guide/dish/daoud_bacha"
  }
    ]
    );


    return(
        <div className="bg-[#FDF4E9] min-h-screen w-full">
            <NavBar />
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
                    <div className="flex flex-row w-fit text-white">
                        {dishes.map((item, index) => {
                            return (
                                <FoodPanel key={index} id={index} name={item.name} description={item.description} img={item.image_url} uri={item.uri} />
                            );
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;