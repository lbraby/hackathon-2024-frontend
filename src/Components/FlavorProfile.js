import { useState } from "react";
import SelectedFood from "./SelectedFood";
const FlavorProfile = () => {
    const [myDishes, setMyDishes] = useState([
        {
            id: 0,
            title: "dish1",
            territory: "USA babyyyy"
        },
        {
            id: 1,
            title: "dish2",
            territory: "USA babyyyy"
        },
        {
            id: 2,
            title: "dish3",
            territory: "USA babyyyy"
        }
    ]);

    const removeDish = (id) => {
        setMyDishes(myDishes.filter(dish => dish.id !== id));
    };

    return(
        <div>
            {myDishes.map((item, index) => {
                return (
                    <SelectedFood key={index} id={index} item={item} removeDish={removeDish}/>
                );
            })}
            <button className="border-green-500 border-2 w-8 m-2" onClick={() => setMyDishes(myDishes.concat({id: 3, title: "dish4", territory: "canada (eww)"}))}>+</button>
        </div>
    );
};

export default FlavorProfile;