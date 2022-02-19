import express from 'express';

const router = express.Router() 

// all routes mentioned below start with /users - see index.js under usersRouter
router.get('/', (req, res) => {
    res.send('Hello');
});



export default router;