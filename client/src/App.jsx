import { useState } from 'react';
import Landing from './components/landing/Landing';
import Coding from './components/coding/Coding';

function App() {
  const [count, setCount] = useState(0);
  const [navTab, setNavTab] = useState(0);

  return (
    <div className="">
		<Landing/>
    <Coding 
      question= "Print the color red in python"
      chat = "Your output will show up here"/>
    </div>
  )
}

export default App;
