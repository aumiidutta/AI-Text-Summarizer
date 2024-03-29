const axios = require('axios');
// This is the function where the call to the API is made. Returns the summarized text as a string.
async function summarizeText(text) {
  // INSERT CODE SNIPPET FROM POSTMAN BELOW
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 250,
      "min_length": 50
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/philschmid/bart-large-cnn-samsum',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
    },
    data : data
  };

    try {
      const response = await axios.request(config);
      return response.data[0].summary_text;
    }
    catch (error) {
      console.log(error);
    }
}

// Allows for summarizeText() to be called outside of this file
module.exports = summarizeText;