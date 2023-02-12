import React from "react";

export default function Chat({ chat }) {
  return (
    <div className="w-full bg-orange-300">
      <div className="flex justify-around h-full">
        {/* chat area with input*/}
        <div className=" bg-orange-200 m-6 w-2/3 h-72 rounded-3xl flex flex-col-reverse justify-start">
          <div className="flex m-3 justify-around">

            <div>
                
            </div>

            {/* Input area */}
            <textarea
              className="pl-3 w-5/6 resize-none text-lg rounded-full"
              name="chat-input"
              id="chat-input"
              cols="30"
              rows="1"
            ></textarea>
            <button className="bg-green-300 p-1 rounded-full pl-6 pr-6 active:bg-green-400">
              Send
            </button>
          </div>
        </div>

        {/* potato area */}
        <div className="w-1/3 h-full">
          <img
            className="h-24 transform -scale-x-100 absolute bottom-1 right-1"
            src="/images/potatoTutor.png"
            alt="potato tutor"
          />
        </div>
      </div>
    </div>
  );
}
