const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const chatRouter = require('./routes/chat');
const copilotRouter = require('./routes/copilot');

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

// API routes
app.use('/api/chat', chatRouter);
app.use('/api/copilot', copilotRouter);

// Health check
app.get('/', (req, res) => {
  res.send('AI Workspace Assistant backend running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
