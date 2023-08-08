const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

const app = express()
const port = 8000
app.use(express.static("public"));
const bodyParser = require('body-parser')

app.use(bodyParser.json())
// app.post("/api/user", async (res) => {
//   res.send(user)
// })
app.post("/api/generate-text", async (req, res) => {
try{
  const { message } = req.body;
  const configuration = new Configuration({
    apiKey: process.env['openai_api_key'],
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    temperature: 0.7,
    max_tokens: 4000,
  });
  const data = response.data;
  console.log(data.choices[0].text);
  res.send(data.choices[0].text);
} catch (error){
  res.send("Sorry bu  t an error occured! Please try clicking on New Chat...")
}
})

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`)
})