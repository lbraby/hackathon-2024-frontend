import NavBar from "./NavBar";
const Register = () => {
    return(
        <div className="w-full min-h-screen bg-blue-500">
            <NavBar/>
            <form>
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
                <div className="form-group">
                    <button type="submit" className="btn btn-primary bg-green-500">
                        Submit
                    </button>
                </div>
            </form> 
        </div>
    );
};

export default Register;