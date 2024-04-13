import NavBar from "./NavBar";
const Login = () => {
    return(
        <div className="bg-red-500 min-h-screen w-full">
            <NavBar/>
            <div>
            <form>
                <p>Email</p>
                <input
                    type="text"
                    name="username"
                    required
                />
                <p>Password</p>
                <input
                    type="password"
                    name="password"
                    required
                />
                <div className="form-group">
                <button type="submit" className="btn btn-primary bg-green-500">
                    Submit
                </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Login;