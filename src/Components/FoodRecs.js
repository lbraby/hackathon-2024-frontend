import { Link } from 'react-router-dom';

const FoodRecs = ({id, name, img, ingredients, uri}) => {

  const likes = ['mutton', 'turmeric', 'beef', 'cumin', 'okra leaves'];
  // ingredients: chicken, mutton, tumeric
  // dishes: pie, pollo asada, grilled pork ribs
  // exclusions: peanuts

  return(
    <Link to={uri} target="_blank" className="w-72 mx-16 my-8 rounded-lg flex flex-col items-center text-[#4c651e]"> 
      <div className="font-bold text-3xl mb-4 underline">
        <Link to={uri} target="_blank" className="hover:text-my-orange">
          {name} 
        </Link>
      </div>
        <div className="w-80 h-80 flex flex-col items-center justify-center bg-plate bg-cover">
          <img src={img} alt="food" className="w-52 h-52 rounded-full"/>
        </div>
      <div className="font-bold mt-2">Ingredients:</div>
      <div className="px-6 w-full">
        {ingredients.map((item, index) => {
          let name = item.name;
          let space = ', ';

          if (index === ingredients.length-1) {
            space = '';
          }

          if (likes.includes(item.name)) {
            return (
              <span>
                <span id={index} className="text-my-orange font-bold">{name}</span>
                <span>{space}</span>
              </span>
            );
          }

          return (
              <span>
                <span id={index}>{name}</span>
                <span>{space}</span>
              </span>
          );
        })}
      </div>
    </Link>
  );
};

export default FoodRecs;