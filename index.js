import express from 'express';
import bodyParser from 'body-parser'; //take in incoming POST request bodies
import usersRoutes from './routes/users.js'

const app = express(); //using express
const PORT = 9000; //backend port

app.use(bodyParser.json()) //initialize bodyParser called as a function

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    

    res.send('Hello from the homepage!') //root route message
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))//listen for incoming requests