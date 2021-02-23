import { Router } from 'express';

import CreateProjectService from '../services/CreateProjectService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const projectRouter = Router();

projectRouter.post('/', async (req, res) => {
  const { name } = req.body;

  const createProject = new CreateProjectService();

  const project = await createProject.execute({
    name,
  });

  return res.json(project);
});

export default projectRouter;
