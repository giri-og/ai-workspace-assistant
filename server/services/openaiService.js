const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

module.exports = {
  summarize: async (content) => {
    // Use OpenAI to summarize file content
    const prompt = `Summarize the following file content in a few sentences:\n${content}`;
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200
    });
    return response.data.choices[0].message.content.trim();
  },
  modify: async (content, instructions) => {
    // Use OpenAI to modify file content based on user instructions
    const prompt = `Given the following file content, perform these instructions: ${instructions}\nFile Content:\n${content}`;
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2048
    });
    return response.data.choices[0].message.content.trim();
  }
};
