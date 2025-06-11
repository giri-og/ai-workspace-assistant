const fs = require('fs');
const path = require('path');
const openaiService = require('./openaiService');

module.exports = {
  // file analysis functions
  analyze: async (file) => {
    // Read file content as text
    const content = file.data.toString('utf-8');
    // Summarize using OpenAI (placeholder)
    const summary = await openaiService.summarize(content);
    return {
      name: file.name,
      size: file.size,
      summary,
      content,
    };
  },
  modify: async (file, instructions) => {
    // Use OpenAI to modify file content based on instructions
    const content = file.data.toString('utf-8');
    const modified = await openaiService.modify(content, instructions);
    // Save modified file to temp location
    const tempPath = path.join(__dirname, '../../temp', `modified_${Date.now()}_${file.name}`);
    fs.writeFileSync(tempPath, modified, 'utf-8');
    return tempPath;
  }
};
