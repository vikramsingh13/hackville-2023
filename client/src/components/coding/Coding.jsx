import React from 'react';
import Chat from './Chat';
import Console from './Console';
import Question from './Question';

const Coding = ({question, chat}) => {
    return (
        <div className="flex h-screen">
            <Question 
                question={question}
                className="w-1/3 border-2 border-dark-orange-500"                
            />
            <div className="flex-1 flex-col border-2 h-1/2 border-dark-orange-500">
                <Console
                    className=""
                />
                <Chat 
                    chat={chat}
                    className=""
                />
            </div>
        </div>
    )
}

export default Coding;

