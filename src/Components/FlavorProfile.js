import { useEffect, useState } from "react";
import SelectedFood from "./SelectedFood";
import Autosuggest from "react-autosuggest";
const FlavorProfile = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [myDishes, setMyDishes] = useState([]);
    const [myValue, setMyValue] = useState("");

    useEffect(() => {
        fetch(`http://10.0.0.250:8000/dishes/search/${myValue.replace(/\s/g, "_")}/5`)
            .then(response => response.json())
            .then(data => {
                setSuggestions(data)
            })
    }, [myValue]);

    const updateMyDishes = (input) => {
        if (Object.keys(input).length !== 0) {
            setMyDishes([...myDishes, input]);
        }
    };

    const removeDish = (id) => {
        setMyDishes(myDishes.filter(dish => dish.id !== id));
    };

    const handleClick = (suggestion) => {
        return(suggestion.title);
    }

    // autosuggest functions
    const renderSuggestion = suggestion => (
        <div key={suggestion.id} onClick={() => updateMyDishes(suggestion)} className="text-my-dark-green">
          {suggestion.name}
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
            <div className="rounded-lg">
                <Autosuggest
                    suggestions={suggestions}
                    getSuggestionValue={handleClick}
                    renderSuggestion={renderSuggestion}
                    onSuggestionsFetchRequested={() => {}}
                    onSuggestionsClearRequested={() => {}}
                    inputProps={{
                        value: myValue,
                        onChange: onChangeSuggestion,
                        placeholder: ""
                    }}
                />
            </div>
            <div className="overflow-scroll flex flex-col max-h-24 no-scrollbar">
                {myDishes.map((item, index) => {
                    return (
                        <SelectedFood key={index} id={index} item={item} removeDish={removeDish}/>
                    );
                })}
            </div>
        </div>
    );
};

export default FlavorProfile;