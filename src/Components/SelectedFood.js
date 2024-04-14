const SelectedFood = ({id, item, removeDish}) => {
    return(
        <div className="flex flex-row justify-center h-12 my-2 border-2" key={id}>
            <img 
                alt="jerbear" 
                src={item.image_url}
                className="h-full mx-1"
            />
            <div className="flex flex-col items-start mx-1">
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.cuisine_type}</p>
            </div>
            <div className="flex flex-col justify-center mx-1" onClick={() => removeDish(item.id)}>
                <p className="font-bold" >
                    x
                </p>
            </div>
        </div>
    );
};

export default SelectedFood;