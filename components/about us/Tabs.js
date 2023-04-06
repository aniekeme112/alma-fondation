import { useState } from "react";
import "./about_s.css";
import vision from './asset/vision.jpeg'
import love from './asset/love.jpeg'
import philosophy from './asset/philosophy.jpeg'
import one from './asset/one.jpg'
import two from './asset/two.jpg'
import three from './asset/three.jpg'
import { render } from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './fontawesome';
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <span className="span">                 </span>

          <span className="header">            About </span>

        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
                    <span className="span">         
          </span>
          <span className="header">            Vision </span>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <span className="span">         
          </span>          
          <span className="header">            Philosophy </span>

        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Who Are We</h2>
          <hr />
          <div className="flex">

          <p>
          <FontAwesomeIcon icon={faAnglesRight} className="move" />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
          <img className="billbord" src={one} />
          </div>

        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Our Vission</h2>
          <hr />
          <div className="flex">

          <p>
          <FontAwesomeIcon icon={faAnglesRight} className="move" />

            Lorem ipsum dolor sit amet consectetur  adipisicing elit. Sapiente
            
          </p>


          <img className="billbord" src={two} />
          </div>

        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Our Philosophy</h2>
          <hr />
          <div className="flex">

          <p>
          <FontAwesomeIcon icon={faAnglesRight} className="move" />

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>

          <img className="billbord" src={three} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tabs;
