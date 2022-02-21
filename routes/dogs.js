import express from 'express';

import { createDog, getDogs, getDog, deleteDog, updateDog } from '../middleware/dogs.js'

const router = express.Router();

// all routes mentioned below start with /dogs - see index.js under usersRouter
router.get('/', getDogs);

router.get('/:id', getDog);

router.post('/', createDog);

router.delete('/:id', deleteDog);

router.patch('/:id', updateDog)

export default router;
