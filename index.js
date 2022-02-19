import express from 'express';
import bodyParser from 'body-parser'; //take in incoming POST request bodies

const app = express(); //using express
const PORT = 9000; //backend port

app.use(bodyParser.json()) //initialize bodyParser called as a function

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))//listen for incoming requests