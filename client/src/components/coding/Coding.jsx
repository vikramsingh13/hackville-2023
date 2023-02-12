import React from 'react';
import Chat from './Chat';
import Console from './Console';
import Question from './Question';

const Coding = ({question, chat}) => {
    return (
        <div class="flex h-screen">
            <Question 
                question={question}
                class="w-1/3 border-2 border-dark-orange-500"                
            />
            <div class="flex-1 flex-col border-2 h-1/2 border-dark-orange-500">
                <Console
                    class=""
                />
                <Chat 
                    chat={chat}
                    class=""
                />
            </div>
        </div>
    )
}

export default Coding;

