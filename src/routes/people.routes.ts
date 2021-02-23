import { Router } from 'express';

import CreatePeopleService from '../services/CreatePeopleService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const peopleRouter = Router();

peopleRouter.post('/', async (req, res) => {
  const { name, email } = req.body;

  const createPeople = new CreatePeopleService();

  const people = await createPeople.execute({
    name,
    email,
  });

  return res.json(people);
});

export default peopleRouter;
