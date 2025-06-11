const express = require('express');
const router = express.Router();
const openaiService = require('../services/openaiService');

// ChatGPT API integration
router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required.' });
    // Use OpenAI to get a chat completion
    const response = await openaiService.summarize(prompt); // You may want a different method for chat
    res.json({ result: response });
  } catch (err) {
    res.status(500).json({ error: 'Chat error', details: err.message });
  }
});

module.exports = router;
