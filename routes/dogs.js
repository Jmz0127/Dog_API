import express from 'express';
import { v4 as uuidv4 } from 'uuid'; // id generator


const router = express.Router();

let dogs = [];

// all routes mentioned below start with /dogs - see index.js under usersRouter
router.get('/', (req, res) => {
    res.send(dogs);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundDog = dogs.find((dog) => dog.id === id)
    res.send(foundDog);
});

router.post('/', (req, res) => {
    const dog = req.body;
    dogs.push({ ...dog, id: uuidv4()});
   
    res.send(`Dog with the dog name of ${dog.dogsName} has been successfully added to the database. Woof!`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;


    dogs = dogs.filter((dog) => dog.id !== id); //filter for users where the id doesn't match the delete request, leaving the non-deleted dogs intact
    res.send(`Dog with the id of ${id} has been successfully removed from the database. Woof!`);
});

router.patch('/:id', (req, res) => { //partial updating of a resource via PATCH instead of a full override via PUT
    const { id } = req.params;
    const { dogsName, breedType, age } = req.body;
    const dog = dogs.find((dog) => dog.id === id)

    if(dogsName) {
        dog.dogsName = dogsName;
    }

    if(breedType) {
        dog.breedType = breedType;
    }

    if(age) {
        dog.age = age;
    }

    res.send(`Dog with the id of ${id} has been successfully updated within the database. Woof!`)
})

export default router;
