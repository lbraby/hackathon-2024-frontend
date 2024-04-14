import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Components/Login.js';
import Register from './Components/Register.js';
import OnYourMenu from './Components/OnYourMenu.js';
import Home from './Components/Home.js';

function App() {
  return (
    <div className="App font-mono font-display bg-my-background">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/OnYourMenu" element={<OnYourMenu/>} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <h1>404 Not Found</h1>
                <p>I'm the error handling page! Add some gibberish to the url to see me!</p>
                <p>
                  Let's get you back to <Link to="/">home.</Link>
                </p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
