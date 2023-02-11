const express = require('express');
const router = express.Router();
const { getCohereData} = require('../controllers/promptController');

router.route('/').get(getCohereData);

module.exports = router;