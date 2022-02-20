import express from 'express';

const router = express.Router();

const dogs = [
	{
		dogsName: 'Roger',
		breedType: 'Labrador Retriever',
		age: '1.5 years old'
	},
	{
		dogsName: 'Olive',
		breedType: 'Golden Retriever',
		age: '15 weeks old'
	}
];

// all routes mentioned below start with /dogs - see index.js under usersRouter
router.get('/', (req, res) => {
    
    res.send(dogs);
});

router.post('/', (req, res) => {
    

    const dog = req.body
    dogs.push(dog)
   
    res.send(`Dog with the dog name of ${dog.dogsName} successfully added to the database. Woof!`);
})

export default router;
