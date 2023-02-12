import React, { useState, useEffect } from "react";
import Request from "./bubbles/Request";
import Response from "./bubbles/Response";
import uuid from "react-uuid";

export default function Chat({ chatArray, conCaterHuman }) {
  const [chatValue, setChatValue] = useState("");
  const [chatArrayState, setChatArrayState] = useState(chatArray);
  const [formattedChat, setFormattedChat] = useState([]);

  const handleOnTextChange = (e) => {
    setChatValue(e.target.value);
  };

  const handleSend = () => {
    conCaterHuman(chatValue);
    setChatValue("");
  };

  useEffect(() => {
    setChatArrayState([...chatArray]);
  }, [chatArray]);

  useEffect(() => {
    let temp = [];
    chatArrayState.map((chatEl) => {
      if (chatEl[0] === "ai") {
        temp.push(<Response text={chatEl[1]} key={uuid()} />);
      } else {
        temp.push(<Request text={chatEl[1]} key={uuid()} />);
      }
    })
    setFormattedChat(temp);
  }, [chatArrayState]);

  return (
    <div className="w-full bg-orange-300">
      <div className="flex justify-around h-full">
        {/* chat area with input*/}
        <div className=" bg-orange-200 m-6 w-2/3 h-72 rounded-3xl flex flex-col-reverse justify-start ">
          {/* Input area (should be first in HTML)*/}
          <div className="flex m-3 justify-around">
            <textarea
              className="pl-3 w-5/6 resize-none text-lg rounded-full"
              name="chat-input"
              id="chat-input"
              cols="30"
              rows="1"
              onChange={(e) => handleOnTextChange(e)}
              value={chatValue}
            ></textarea>
            <button
              className="bg-green-300 p-1 rounded-full pl-6 pr-6 active:bg-green-400"
              onClick={handleSend}
            >
              Send
            </button>
          </div>

          {/* Bubbles */}
          <div className="overflow-y-scroll flex flex-col">
            {...formattedChat}
          </div>
        </div>

        {/* potato area */}
        <div className="w-1/3 h-full">
          <img
            className="h-24 transform -scale-x-100 fixed bottom-1 right-1"
            src="/images/potatoTutor.png"
            alt="potato tutor"
          />
        </div>
      </div>
    </div>
  );
}
