const { Configuration, OpenAIApi } = require("openai");
const OPENAI_API_KEY = `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`;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const cors = require('cors')
const express = require("express");
const app = express();

app.use(cors())
app.use(express.json())


app.post("/get", (request, response) => {
  openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: request.body.query,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    .then((_response) => {
      response.json(_response.data);
    });
});

app.listen(3000, () => {
  console.log("app is ruinning");
});
