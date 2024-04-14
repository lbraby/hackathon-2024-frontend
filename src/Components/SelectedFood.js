const SelectedFood = ({type, id, item, removeDish}) => {
    return(
        <div key={id}>
            {(type === 0) ? (
                <div className="flex flex-row justify-center my-2 h-16">
                    <img 
                        alt="food pic" 
                        src={item.image_url}
                        className="h-16 mx-1"
                    />
                    <div className="flex flex-col items-start mx-1">
                        <h3 className="font-bold text-my-dark-purple">{item.name}</h3>
                        <p className="text-my-dark-purple">{item.cuisine_type}</p>
                    </div>
                    <div className="flex flex-col justify-center mx-1" onClick={() => removeDish(item.id)}>
                        <p className="font-bold text-my-dark-purple" >
                            x
                        </p>
                    </div>
                </div>
                
            )
            : (
            // bug fix: small styling problem
            <div className="flex flex-row justify-center h-12">
                <div className="flex flex-col items-start mx-1">
                    <h3 className="font-bold text-my-dark-purple">{item.name}</h3>
                </div>
                <div className="flex flex-col justify-center mx-1" onClick={() => removeDish(item.id)}>
                    <p className="font-bold text-my-dark-purple" >
                        x
                    </p>
                </div>
            </div>
            )}    
        </div>
    );
};

export default SelectedFood;