const SelectedFood = ({id, item, removeDish}) => {
    return(
        <div className="flex flex-row justify-center h-12 my-2 border-2" key={id}>
            <img 
                alt="jerbear" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxVT_sCuN7ZS4qERjiX5lDyV5SV-azuOnFBpY73zp8w&s"
                className="h-full mx-1"
            />
            <div className="flex flex-col items-start mx-1">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.territory}</p>
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