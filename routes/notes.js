const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.post('/' , noteController.createNode);
router.get('/:id' , noteController.getNoteById);
router.get('/' , noteController.queryNotesByTitle);
router.put('/:id' , noteController.updateNote);

module.exports = router;