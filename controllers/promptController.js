const asyncHandler = require('express-async-handler');
const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);
//const dialogueModel = require('../models/dialogueModel')

const localDb = [{
    "_id": {
      "$oid": "63e820400c033c145aa263cd"
    },
    "dialogueID": 0,
    "text": "Welcome to the potato nursery! First you must help name our potato children, for this we’ll need the print command.Here is an example of the syntax",
    "prompt": "How to use print in python for kids"
  },{
    "_id": {
      "$oid": "63e8206f0c033c145aa263ce"
    },
    "dialogueID": 1,
    "text": "Now that you know our syntax, name our first child this harvest!",
    "checkCode": true,
    "prompt": "Does the following code print a string in python? : "
  },{
    "_id": {
      "$oid": "63e820a60c033c145aa263cf"
    },
    "dialogueID": 2,
    "text": "Great job, I would’ve come up with a better name but you are only human so your inferiority is expected! Move to the next section when you’re ready!"
  },{
    "_id": {
      "$oid": "63e8312223bf6e8ca2d6bfb3"
    },
    "dialogueID": 3,
    "text": "Since you know how to output string it's time for you to learn how to assign variables! We need to ensure as our children are in the womb they get all the water they need. You need to assign a water level to a potato in dire need of water! Here is a guide on how to create variables.",
    "prompt": "how to name variables in python"
  },{
    "_id": {
      "$oid": "63e8342206c6f7d7e57ae205"
    },
    "dialogueID": 4,
    "text": "Now assign the necessary water level to our child",
    "checkCode": true,
    "prompt": "What does this code do in python:"
  },{
    "_id": {
      "$oid": "63e834de06c6f7d7e57ae206"
    },
    "dialogueID": 5,
    "text": "Great job! For a human of course… our child should be able to grow to be big and strong. Move to the next section when you’re ready!"
  },{
    "_id": {
      "$oid": "63e8355406c6f7d7e57ae207"
    },
    "dialogueID": 6,
    "text": "This is the resource depot, here you will learn input and output to control the flow of resources in and out of the building. Here is a short explanation of the input and output process in python.",
    "prompt": "Explain input and output in python for kids"
  },{
    "_id": {
      "$oid": "63e835cf06c6f7d7e57ae208"
    },
    "dialogueID": 7,
    "text": "Now go ahead and write a program that takes user input and outputs it! You will need to use some knowledge from previous sections.",
    "prompt": "What does this python code do:",
    "checkCode": true
  },{
    "_id": {
      "$oid": "63e8364206c6f7d7e57ae209"
    },
    "dialogueID": 8,
    "text": "You did fine! Move to the next section when you’re ready!"
  },{
    "_id": {
      "$oid": "63e836b706c6f7d7e57ae20a"
    },
    "dialogueID": 9,
    "text": "Welcome to the oxygen level regulation room! This is one of the most important buildings since it’s our lifeline. In here you will learn conditional statements",
    "prompt": "Explain conditional statements in python for kids"
  },{
    "_id": {
      "$oid": "63e8380206c6f7d7e57ae20b"
    },
    "dialogueID": 10,
    "text": "Now create a conditional that increases or decreases oxygen based off the current oxygen levels",
    "prompt": "What does this python code do:",
    "checkCode": true
  },{
    "_id": {
      "$oid": "63e8386f06c6f7d7e57ae20c"
    },
    "dialogueID": 11,
    "text": "This is all we need you to do today! Get some rest and be ready for an early start tomorrow"
  }];

//@desc Get data from co:here ai
//@path GET /api/prompts
//access PRIVATE
const getCohereData = asyncHandler(async(req, res) => {
    //model is command-xlarge-nightly by defualt
    const model = "command-xlarge-nightly"
    if(req.query.prompt){
        cohere.init(process.env.COHERE_API_KEY);
        const response = await cohere.generate({
            model: model,
            prompt: req.query.prompt,
            max_tokens: 50,
            temperature: 1,
        });
        res.status(200).json({"message" : response});
    } else {
        res.status(400)
        throw new Error("Please add a prompt key with value to the request body json");
    }
});

//@desc Get dialogues for tutorial from database
//@path GET /api/dialogues
//ACCESS PRIVATE
/*const getDialogues = asyncHandler(async(req, res) => {
    const dialogues = await dialogueModel.find();
    if(dialogues){
        res.status(200).json(dialogues);
    } else {
        res.status(400)
        throw new Error("Please add a prompt key with value to the request body json");
    }
})*/

//@desc Get dialogues from local db
//@path GET /api/localDialogues
//ACCESS PRIVATE
const getLocalDialogues = asyncHandler(async(req,res) => {
    res.status(200).send(localDb);
});

module.exports = {getCohereData, getLocalDialogues}
