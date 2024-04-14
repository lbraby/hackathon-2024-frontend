import NavBar from "./NavBar";
import Footer from "./Footer";

const Login = () => {
    return(
        <div className="bg-my-background w-full min-h-screen">
            <NavBar/>
            <div className="flex flex-col items-center justify-center w-full h-80">
                <form>
                    <p className="text-my-dark-purple">Email</p>
                    <input
                        type="text"
                        name="username"
                        required
                        className="mb-2 rounded-lg"
                    />
                    <p className="text-my-dark-purple">Password</p>
                    <input
                        type="password"
                        name="password"
                        required
                        className="mb-2 rounded-lg"
                    />
                    <div className="form-group w-full">
                        <p className='text-white bg-[#EC9D3F] font-bold rounded-md py-2 w-1/2 mx-auto'>Log In</p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;