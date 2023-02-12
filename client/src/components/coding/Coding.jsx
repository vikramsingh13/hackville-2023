import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import Console from "./Console";
import Question from "./Question";
import axios from "axios";
import { getCurrentPrompt, getCurrentText } from "../../utils";

const Coding = ({ handleNavClick }) => {
  const [chatArray, setChatArray] = useState([
    ["ai", "hello"],
    ["human", "world"],
  ]);

  const conCater = async (consoleIn) => {
    let prompt = getCurrentPrompt();
    if(prompt === "undefined"){
      prompt = "";
      return;
    }
    let request = prompt + " " + consoleIn;

    let aiResponse = await axios.get(
      'https://hackville-2023.vercel.app/api/prompts?prompt="' + request + '"'
    );

    setChatArray([
      ...chatArray,
      ["ai", aiResponse.data.message.body.generations[0].text],
    ]);
  };

  const conCaterHuman = async (chatIn) => {
    setChatArray([...chatArray, ["human", chatIn]]);
    console.log(chatArray);
  };

  return (
    <div className="flex h-screen">
      <Question
        question={getCurrentText()}
        className="w-1/3 border-2 border-dark-orange-500"
      />
      <div className="flex-1 flex-col border-2 h-1/2 border-dark-orange-500">
        <Console className="" conCater={conCater} />
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
      <button className="w-2/12 bg-green-600 text-xl rounded-full active:bg-green-400 text-white p-3 fixed bottom-5 left-20">
        Next
      </button>
    </div>
  );
};

export default Coding;
