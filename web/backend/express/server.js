import express from 'express';
import cors from 'cors';  
import bodyParser from 'body-parser';  
import axios from 'axios';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {

    // res.send("hello world")

    // const response = await axios.get('http://localhost:5000/');
    const response = await axios.get('https://demo-tqeb.onrender.com/');
    res.json(response.data)
  });

app.post('/predict', async (req, res) => {

  try {
    const { inputsymptoms }  = req.body;

    // const response = await axios.post('http://127.0.0.1:5000/predict' ,{
    //   symp: inputsymptoms
    // });
    const response = await axios.post('https://demo-tqeb.onrender.com/predict' ,{
      symp: inputsymptoms
    });

    res.json(response.data)
  }
  catch (error) {
    res.status(500).json({ error: 'An error occurred while making the prediction.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
