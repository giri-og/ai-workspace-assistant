const express = require('express');
const router = express.Router();
const copilotService = require('../services/copilotService');

// Copilot API integration
router.post('/', async (req, res) => {
  try {
    const { prompt, context } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required.' });
    const result = await copilotService.getCopilotResponse(prompt, context);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: 'Copilot error', details: err.message });
  }
});

module.exports = router;
