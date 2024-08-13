const Note = require('../models/Note');

exports.createNode = async (req,res)=>{
    const {title , body} = req.body;

    try {

        if(!title && !body) {
            return res.status(400).json({error : 'Note must have valid title and body'});
        }

        const note = new Note({title , body});
        note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({error : 'Failed to create note. Error-> '+ error.message});
    }
};

exports.getNoteById = async (req,res)=>{
    try {
        const note = await Note.findById(req.params.id);

        if(!note) {
            return res.status(404).json({error : 'Note not found'});
        }

        res.status(200).json(note);

    } catch (error) {
        res.status(500).json({error : 'Failed to fetch note. Error-> ' + error.message});
    }
};

exports.queryNotesByTitle = async (req,res)=>{
    const titleSubstr = req.query.title;

    try {
        const notes = await Note.find({title : new RegExp(titleSubstr , 'i')});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({error: 'Failed to query notes. Error-> ' + error.message});
    }
};

exports.updateNote = async (req,res)=>{
    try {

        const updatedData = {
            title: req.body.title,
            body: req.body.body,
            updatedAt: new Date()
        };

        const note = await Note.findByIdAndUpdate(req.params.id , updatedData);

        if(!note){
            return res.status(404).json({ error: 'Note not found' });
        }

        res.status(200).json({message: "Note updated successfully"});
    } catch (error) {
        res.status(500).json({error: 'Failed to update note. Error-> ' + error.message});
    }
};