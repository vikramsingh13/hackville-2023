import { useState, useEffect } from "react";
import Landing from "./components/landing/Landing";
import Coding from "./components/coding/Coding";
import utils from "./utils";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [navTab, setNavTab] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasRequested, setHasRequested] = useState(false);

  useEffect(() => {
    if (!hasRequested) {
      fetchData();
      setQuestionIndex(utils.getLocalStorage());
    }
  }, [hasRequested]);

  return (
    <div className="bg-orange-300">
      {/*  */}

      {/* <Landing/> */}
      <Landing />
      
      {/*<Coding
        question="Welcome to the potato nursery! <br><br> First you must help name our potato children, for this we’ll need the print command.Here is an example of the syntax"
        chat="Your output will show up here"
  />*/}
    </div>
  );
}

const fetchData = async () => {
  setLoading(true);
  if (!hasRequested) {
    try {
      const response = await axios.get(
        "https://hackville-2023.vercel.app/api/localDialogues"
      );
      setData(response.data);
      setHasRequested(true);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
};
  




export default App;
