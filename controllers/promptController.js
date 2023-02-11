const asyncHandler = require('express-async-handler');
const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY)
//const promptModel = require('../models/promptModel') //todo

//@desc Get data from co:here ai
//@path GET /api/prompts
//access PRIVATE
const getCohereData = asyncHandler(async(req, res) => {
    //model can be large or medium
    //medium by default now
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
})

module.exports = { getCohereData }
