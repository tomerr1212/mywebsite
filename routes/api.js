const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();

router.post('/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.json({ message: 'Contact saved!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save contact' });
    }
});

module.exports = router;
