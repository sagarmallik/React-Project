// import logo from './logo.svg';
// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// var a = 10;
function App() {
  return (
    <>

    {/* Some Testing Stuffs ====================================> */}
    {/* <h6>{a}</h6> */}
    {/* <h1><i>hello</i></h1> */}

    {/* <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloaddd.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
          
        >
          Learn React
        </a>
      </header>
    </div> */}

    {/* Navabar Component Here ========================> */}
    
    <Navbar/>
    <br></br>
    <TextForm heading = "Enter text here :" />










    </>
  );
}

export default App;
