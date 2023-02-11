import { useState } from 'react';
import Landing from './components/landing/Landing';
import Coding from './components/coding/Coding';

function App() {
  const [count, setCount] = useState(0);
  const [navTab, setNavTab] = useState(0);

  return (
    <div className="">
		{/* <Landing/> */}
    <Coding 
      question= "Welcome to the potato nursery! <br> First you must help name our potato children, for this we’ll need the print command.Here is an example of the syntax"
      chat = "Your output will show up here"/>
    </div>
  )
}

export default App;
