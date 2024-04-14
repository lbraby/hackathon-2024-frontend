import { useEffect, useState } from "react";
import SelectedFood from "./SelectedFood";
import Autosuggest from "react-autosuggest";
const FlavorProfile = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [newDish, setNewDish] = useState({});
    const [myDishes, setMyDishes] = useState([]);
    const [myValue, setMyValue] = useState("");

    useEffect(() => {
        const dishes = [
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
        ];
        setSuggestions(dishes.filter(dish => dish.title.includes(myValue)));
    }, [myValue]);

    useEffect(() => {
        if (Object.keys(newDish).length !== 0) {
            setMyDishes([...myDishes, newDish]);
        }
    }, [newDish]);

    const removeDish = (id) => {
        setMyDishes(myDishes.filter(dish => dish.id !== id));
    };

    const handleClick = (suggestion) => {
        return(suggestion.title);
    }

    // autosuggest functions
    const renderSuggestion = suggestion => (
        <div key={suggestion.id} onClick={() => setNewDish(suggestion)}>
          {suggestion.title}
        </div>
    );
 
    const onChangeSuggestion = (e) => {
        setMyValue(e.target.value);
        if(e.type === "click") {
            setMyValue("");
        }

    }

    return(
        <div>
            <div className="mt-2">
                <Autosuggest
                    suggestions={suggestions}
                    getSuggestionValue={handleClick}
                    renderSuggestion={renderSuggestion}
                    onSuggestionsFetchRequested={() => {}}
                    onSuggestionsClearRequested={() => {}}
                    inputProps={{
                        value: myValue,
                        onChange: onChangeSuggestion,
                        placeholder: "type a dish..."
                    }}
                />
            </div>
            {myDishes.map((item, index) => {
                return (
                    <SelectedFood key={index} id={index} item={item} removeDish={removeDish}/>
                );
            })}
        </div>
    );
};

export default FlavorProfile;