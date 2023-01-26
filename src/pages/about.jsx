import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */
import { useWiggle } from "../hooks/wiggle";
import { animated } from "react-spring";

/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/




export default function About() {
  /* DECLARE STYLE const [style, trigger] = useWiggle({ x: 50, rotation: 1, scale: 1.2 });
AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const [style, trigger] = useWiggle({ x: 50, rotation: 1, scale: 1.2 });

  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
<animated.h1 className="title" style={style}>
How can I set up my own site?
</animated.h1>

      <p onMouseEnter={trigger}>

        <em>
          If you're completely new to React, learning the{" "}
          <a href="https://reactjs.org/docs/hello-world.html">main concepts</a>{" "}
          will get you off to a great start. You'll also see comments and links
          to supporting resources throughout the code.
        </em>
      </p>
      <p>
        This is a great way to break into the world of web development, or programming in general.  It's probably worth nothing that a lot of this content was written by AI, so if any of the constrcutions dont make sense... Just blame Elon


      </p>
      <ul>
        <li>
          🎉 Right now, this site is <strong>live on the web</strong> 🌐 with a
          real URL (a secure HTTPS address!) that updates as soon as I want to make any kinds of charges
          changes.
        </li>
        <li>
          💥 <strong>Lets learn</strong> what I've done in the last 15 minutes to go from 0 to deployed
        </li>
      </ul>

      <p>
        
      </p>
      <p>
        Also <a href="https://reactjs.org/">Check out this cool article on why AI matters in the dev world</a>
      </p>
    </div>
  );
}
