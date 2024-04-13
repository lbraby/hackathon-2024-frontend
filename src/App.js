import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DefaultRoute from './Components/DefaultRoute';
import RouteA from './Components/RouteA';
import RouteB from './Components/RouteB';
import NestedRoute from './Components/NestedRoute';
import NavBar from './Components/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<DefaultRoute/>}/>
            {/* the "index" parameter is what makes this component root for this route */}
            <Route path="/A" element={<RouteA/>}/>
            {/* append /A to the url to see this component */}
            <Route path="/B" element={<RouteB/>}/>
            {/* append /B to the url to see this component */}
            <Route path="folder/">
              <Route index element={<DefaultRoute/>}/>
              <Route path="/folder/nested" element={<NestedRoute/>}/>
            </Route>
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
