const asyncHandler = require('express-async-handler');
//const promptModel = require('../models/promptModel') //todo

//@desc Get data from co:here ai
//@path GET /api/prompts
//access PRIVATE
const getCohereData = asyncHandler(async(req, res) => {
    //todo
    res.status(200).json({"message" : "This is a sample response."});
})

module.exports = { getCohereData }
