import React, {useEffect, useState} from "react";
import { getQuestionIndexLS } from "../../utils";
import './Landing.css';

export default function Landing({handleNavClick}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let temp = getQuestionIndexLS();
    setProgress(temp);

  });
  return (
    <div id="container">
      <div id="wrapper">
        <div id="sky"></div>
        <img className="prop first" src="/images/prop1.png" />
        <img className="prop third" src="/images/prop1.png" />
        <img className="prop2 fifth" src="/images/prop2.png" />
        <img className="prop2 sixth" src="/images/prop2.png" />
        <a className="first" data-fixed={progress < 3 ? "broken" : "fixed"} onClick={handleNavClick}>
          <img className="building hover" src="/images/building1.png" />
          <div className="tag">Print()</div>
          <div className="tag2">FIX ME</div>
        </a>
        <a className="second" data-fixed={progress < 6 ? "broken" : "fixed"} onClick={handleNavClick}>
          <img className="building smaller hover" src="/images/building2.png" />
          <div className="tag">I/O</div>
          <div className="tag2">FIX ME</div>
        </a>
        <a className="third" data-fixed={progress < 9 ? "broken" : "fixed"} onClick={handleNavClick}>
          <img className="building hover" src="/images/building3.png" />
          <div className="tag">Vars</div>
          <div className="tag2">FIX ME</div>
        </a>
        <a className="fourth" data-fixed={progress < 12 ? "broken" : "fixed"} onClick={handleNavClick}>
          <img className="building smaller hover" src="/images/building4.png" />
          <div className="tag">Dict</div>
          <div className="tag2">FIX ME</div>
        </a>
      </div>
    </div>
  );
}
