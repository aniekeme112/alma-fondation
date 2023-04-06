import "./App.css";
import './index.css'
import Tabs from './Tabs';
import ALMA from './asset/ALMA.png'
import Footer from "./components/Footer/Footer";
import About_us from "./components/about us/about_us"
import { render } from "react-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {

  return (
    <div className="App">
                {/* <h1 className='h1-project font-bold text-4xl' >Ongoing Project</h1>
      <hr className="hr" />
          <img className='top-project' src={ALMA} alt="logo" />

        <Tabs />
        <Footer /> */}

        {/* About page */}
        <About_us />
    </div>
  );
}
    
export default App;
