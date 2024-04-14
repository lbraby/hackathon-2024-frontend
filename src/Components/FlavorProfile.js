import { useEffect, useState } from "react";
import SelectedFood from "./SelectedFood";
import Autosuggest from "react-autosuggest";
const FlavorProfile = ({ type }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [myChoices, setMyChoices] = useState([]);
    const [myValue, setMyValue] = useState("");

    useEffect(() => {
        if (type === 0) {
            fetch(`http://localhost:8000/dishes/search/${myValue.replace(/\s/g, "_")}/5`)
                .then(response => response.json())
                .then(data => {
                    setSuggestions(data)
                })
        } else {
            fetch(`http://localhost:8000/ingredients/search/${myValue.replace(/\s/g, "_")}/5`)
                .then(response => response.json())
                .then(data => {
                    setSuggestions(data)
                })
        }
    }, [myValue, type]);

    const updateMyChoices = (input) => {
        if (Object.keys(input).length !== 0) {
            setMyChoices([...myChoices, input]);
        }
    };

    const removeDish = (id) => {
        setMyChoices(myChoices.filter(dish => dish.id !== id));
    };

    const handleClick = (suggestion) => {
        return(suggestion.title);
    }

    // autosuggest functions
    const renderSuggestion = suggestion => (
        <div key={suggestion.id} onClick={() => updateMyChoices(suggestion)} className="text-my-dark-green">
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
                {myChoices.map((item, index) => {
                    return (
                        <SelectedFood type={type} key={index} id={index} item={item} removeDish={removeDish}/>
                    );
                })}
            </div>
        </div>
    );
};

export default FlavorProfile;