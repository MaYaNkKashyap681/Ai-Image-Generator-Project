const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const api__key = "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";
const router = express.Router();

const configuration = new Configuration({
  apiKey: api__key,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;