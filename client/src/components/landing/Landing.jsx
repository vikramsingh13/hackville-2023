import React from "react";
import './Landing.css';

export default function Landing() {
  return (
    <div id="container">
      <div id="wrapper">
        <div id="sky"></div>
        <img className="prop first" src="/images/prop1.png" />
        <img className="prop third" src="/images/prop1.png" />
        <img className="prop2 fifth" src="/images/prop2.png" />
        <img className="prop2 sixth" src="/images/prop2.png" />
        <a className="first" data-fixed="broken">
          <img className="building hover" src="/images/building1.png" />
          <div className="tag">Print()</div>
          <div className="tag2">FIX ME</div>
        </a>
        <a className="second" data-fixed="broken">
          <img className="building smaller hover" src="/images/building2.png" />
          <div className="tag">I/O</div>
          <div className="tag2">FIX ME</div>
        </a>
        <a className="third" data-fixed="broken">
          <img className="building hover" src="/images/building3.png" />
          <div className="tag">Vars</div>
          <div className="tag2">FIX ME</div>
        </a>
        <a className="fourth" data-fixed="broken">
          <img className="building smaller hover" src="/images/building4.png" />
          <div className="tag">Dict</div>
          <div className="tag2">FIX ME</div>
        </a>
      </div>
    </div>
  );
}
