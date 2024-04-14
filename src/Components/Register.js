import NavBar from "./NavBar";
import Footer from "./Footer";
import FlavorProfile from "./FlavorProfile";

const Register = () => {
    return(
        <div className="w-full min-h-screen">
            <NavBar/>
            <div className="w-full mb-16">
                <form>
                    <div className="flex flex-row w-2/3 mx-auto">
                        <div className="w-1/2">
                            <h1 className="text-my-dark-purple text-3xl font-bold mt-4">Personal Information</h1>
                            <p className="text-my-dark-purple">First Name</p>
                            <input
                                type="text"
                                className="rounded-lg my-2"
                                id="first-name-input"
                                name="firstName"
                                required
                            />
                            <p className="text-my-dark-purple">Last Name</p>
                            <input
                                type="text"
                                className="rounded-lg my-2"
                                id="last-name-input"
                                name="lastName"
                                required
                            />
                            <p className="text-my-dark-purple">Email Address</p>
                            <input
                                type="text"
                                className="rounded-lg my-2"
                                id="email"
                                name="email"
                                required
                            />
                            <p className="text-my-dark-purple">Password</p>
                            <input
                                type="password"
                                className="rounded-lg my-2"
                                required
                            />
                            <p className="text-my-dark-purple">ReType-Password</p>
                            <input
                                type="password"
                                className="rounded-lg my-2"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-my-dark-purple text-3xl font-bold mt-4">Food Preferences</h1>
                            <p className="text-my-dark-purple my-2">Add Your Favorite Dishes!</p>
                            <FlavorProfile type={0}/>
                            <p className="text-my-dark-purple my-2">Add Your Favorite Ingredients!</p>
                            <FlavorProfile type={1}/>
                            <p className="text-my-dark-purple my-2">Add Dietary Restrictions/Exclusions</p>
                            <FlavorProfile type={1}/>
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <p className='text-white bg-[#EC9D3F] font-bold rounded-md py-2 w-2/12 mx-auto'>Sign Up!</p>
                    </div>
                </form> 
            </div>
            <Footer />
        </div>
    );
};

export default Register;