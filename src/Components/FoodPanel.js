import { Link } from 'react-router-dom';

const FoodPanel = ({id, name, img, description, uri}) => {

    let text = description.substring(0, 200);

    if (description.length > 200) {
      text = `${text}...`;
    }

    return(
      <div className="w-72 h-96 m-16 bg-my-dark-green rounded-lg flex flex-col items-center text-white"> 
        <img src={img} alt="food" className="w-7/12  h-2/5 mt-4"/>
        <div className="font-bold text-xl py-2">
          <Link to={uri} target="_blank" className="hover:text-my-orange">
            {name} 
          </Link>
        </div>
        <div className="px-6">
          {text}
        </div>
      </div>
    );
};

export default FoodPanel;