import { useState, useEffect } from "react";
import Landing from "./components/landing/Landing";
import Coding from "./components/coding/Coding";
import setQuestionIndexLS, { getQuestionIndexLS, setLocalDialoguesLS} from "./utils";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [navTab, setNavTab] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showCoding, setShowCoding]= useState(true);

  useEffect(() => {
    fetchData();
    setQuestionIndex(getQuestionIndexLS());
  }, []);

  useEffect(() => {
    setLocalDialoguesLS(data);
  }, [data]);

  const handleNavClick = () => {
    if(showCoding){
      setShowCoding(false);
    } else {
      setShowCoding(true);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://hackville-2023.vercel.app/api/localDialogues"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-orange-300">
      {showCoding ? <Coding handleNavClick={handleNavClick}/> : <Landing handleNavClick={handleNavClick}/>}
    </div>
  );
}



export default App;
