const asyncHandler = require('express-async-handler');
const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);
//const dialogueModel = require('../models/dialogueModel')

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
    res.status(200).json(dialogues);
})*/

module.exports = { getCohereData}
