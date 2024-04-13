import { useEffect, useState } from "react";
import SelectedFood from "./SelectedFood";
import Autosuggest from "react-autosuggest";
const FlavorProfile = () => {
    const [suggestions, setSuggestions] = useState([]);
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
        console.log(dishes.filter(dish => dish.title.includes(myValue)));
        setSuggestions(dishes.filter(dish => dish.title.includes(myValue)));
    }, [myValue]);

    const removeDish = (id) => {
        setMyDishes(myDishes.filter(dish => dish.id !== id));
    };

    const handleClick = (suggestion) => {
        return(suggestion.title);
    }

    // autosuggest functions
    const renderSuggestion = suggestion => (
        <div key={suggestion.id}>
          {suggestion.title}
        </div>
    );
    // works when typing, breaks when clicking. Clicking passes different value
    const onChangeSuggestion = (e) => {
        console.log(`onChange: ${e.target.value}`)
        setMyValue(e.target.value);
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
            <button className="border-green-500 border-2 w-8 m-2" onClick={() => setMyDishes(myDishes.concat({id: 3, title: "dish4", territory: "canada (eww)"}))}>+</button>
        </div>
    );
};

export default FlavorProfile;