const DefaultRoute = () => {
    return(
        <div>
            <h1 className='text-red-500 text-3xl font-bold'>im the default route!</h1>
            <p>im the component at the base of this "directory", thats why my path is root</p>
            <p>in app.js my component has the "index" parameter, thats why i am the root component for this "directory"</p>
        </div>
    );
};

export default DefaultRoute;