const express = require('express');
const router = express.Router();
const { getCohereData, getDialogues} = require('../controllers/promptController');

router.route('/prompts').get(getCohereData);
router.route('/dialogues').get(getDialogues);

module.exports = router;