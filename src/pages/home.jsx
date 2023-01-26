import React, {useState}  from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

// Our language strings for the header
const strings = [
  "Moo",
  "Moooo",
  "Mo",
  "Mooo",
  "Mooooo",
  "Moooooo"
];


// Utility function to choose a random value from the language array
function randomText() {
  return strings[Math.floor(Math.random() * strings.length)];
}

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  /* We use state to set the text string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setText when the user clicks to change the string
  */
  const [text, setText] = useState(strings[0]);
  var [clickCount, setClickCount] = useState(0);

  
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  function incrementCounter(){
    setClickCount(clickCount+1)
    console.log(clickCount)
  }
  
  // When the user clicks we change the header language
  const handleChangeText = () => {
    
    // Choose a new Hello from our languages
    const newText = randomText();
    
    // Call the function to set the state string in our component
    setText(newText);
  };
  return (
    <>
      <h1 className="title">{text}</h1>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src='https://cdn.glitch.global/e64104a7-99d2-4826-b87d-9858f0b40667/SheepHalfWool.png?v=1674717847082'
          className="illustration"
          onClick={handleChangeText}
          alt="Illustration click to change language"
        />
      </animated.div>
      <div className="navigation">
        {/* When the user hovers over this text, we apply the wiggle function to the image style */}
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me" onClick={handleChangeText}>
            Psst, click me
          </a>
        </animated.div>
      </div>
      <div className="instructions">
        <h2>Sheps React Playground</h2>
        <p>
          This is a Sheep <strong>Hello React</strong> project.  It's a custom web application running on a Node.js server for free with Glitch. 
        </p>
                  <a className="btn--click-me" onClick={incrementCounter}>
{clickCount}</a>
      </div>
    </>
  );
}
