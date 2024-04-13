import NavBar from "./NavBar";
import FlavorProfile from "./FlavorProfile";
// import { useState } from "react";
const Register = () => {
    // const [dishes, setDishes] = useState([]);
    return(
        <div className="w-full min-h-screen bg-blue-500">
            <NavBar/>
            <div className="w-full bg-green-500 flex flex-row justify-center">
                <form className="w-1/2 bg-red-500 border-blue-500 border-2">
                    <p>First Name</p>
                    <input
                        type="text"
                        className="form-control"
                        id="first-name-input"
                        name="firstName"
                        required
                    />
                    <p>Last Name</p>
                    <input
                        type="text"
                        className="form-control"
                        id="last-name-input"
                        name="lastName"
                        required
                    />
                    <p>Email Address</p>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        min="0"
                        required
                    />
                    <p>ReType-Password</p>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        min="0"
                        required
                    />
                    <FlavorProfile/>
                    <div className="form-group">
                        <button className="btn btn-primary bg-green-500">
                            Submit
                        </button>
                    </div>
                </form> 
            </div>
        </div>
    );
};

export default Register;