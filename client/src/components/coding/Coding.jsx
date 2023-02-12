import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import Console from "./Console";
import Question from "./Question";
import axios from "axios";
import setQuestionIndexLS, { getCurrentPrompt, getCurrentText, getQuestionIndexLS, isCheckCode, setLocalDialoguesLS } from "../../utils";

const Coding = ({ handleNavClick }) => {
  const [chatArray, setChatArray] = useState([]);
  const [consoleDisabled, setConsoleDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [question, setQuestion] = useState("");
  const [checkCode, setCheckCode] = useState(false);

  useEffect(() => {
    let temp = getCurrentText();
    setQuestion(temp);
  },[]);

  useEffect(() => {
    console.log("checkCode: " + isCheckCode());
    if(!isCheckCode()){
      conCater("");
    }
  },[question]);

  const updateQuestion = async() => {
    let temp = getCurrentText();
    setQuestion(temp);
  }

  const conCater = async (consoleIn) => {
    let reqPrompt = getCurrentPrompt();
    if(!reqPrompt){
      reqPrompt = "";
    }
    let request = reqPrompt + " " + consoleIn;

    console.log("AI REQUEST: " + request);
    let aiResponse = await axios.get(
      'https://hackville-2023.vercel.app/api/prompts?prompt="' + request + '"'
    );

    setChatArray([
      ...chatArray,
      ["ai", aiResponse.data.message.body.generations[0].text],
    ]);
  };

  const conCaterHuman = async (chatIn) => {
    setChatArray([...chatArray, ["human", chatIn], ["ai", "Processing..."]]);
    try{
      let aiResponse = await axios.get(
        'https://hackville-2023.vercel.app/api/prompts?prompt="' + chatIn + '"'
      );
      //human is added double for a reason
      //to prevent override from async or react nonsense
      setChatArray([...chatArray, ["human", chatIn], ["ai", aiResponse.data.message.body.generations[0].text]]);
      }
    catch(err){
      console.log("Following error occurred: " + err.message);
      setChatArray([...chatArray, ["human", chatIn], ["ai", "Sorry something went wrong."]]);
    }
  };

  //handles next button presses
  const handleNext = async() => {
    let prompt = getCurrentPrompt();
    let code = isCheckCode();
    
    if(!code){
      console.log(code);
      //setConsoleDisabled(true);
      await conCater("");
    } else if(code){
      //todo
      //setConsoleDisabled(false);
    }
    let index = getQuestionIndexLS();
    index = parseInt(index);
    setQuestionIndexLS(index + 1);
    updateQuestion();
  }

  return (
    <div className="flex h-screen">
      <Question
        question={question}
        className="w-1/3 border-2 border-dark-orange-500"
      />
      <div className="flex-1 flex-col border-2 h-1/2 border-dark-orange-500">
        <Console className="" conCater={conCater} consoleDisabled={consoleDisabled}/>
        <Chat
          className=""
          chatArray={chatArray}
          conCaterHuman={conCaterHuman}
        />
      </div>

      <button
        className="bg-red-500 text-xl p-3 active:bg-red-300 fixed bottom-5 left-3 rounded-full text-white"
        onClick={handleNavClick}
      >
        &lt;&lt;&lt;
      </button>
      <button 
        className="w-2/12 bg-green-600 text-xl rounded-full active:bg-green-400 text-white p-3 fixed bottom-5 left-20"
        disabled={ nextDisabled ? true : false}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Coding;
