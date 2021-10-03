import { Router } from 'express';

import CreateProjectCrewService from '@modules/projects/services/CreateProjectCrewService';
// import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const projectcrewRouter = Router();

projectcrewRouter.post('/', async (req, res) => {
  const { people_id, project_id } = req.body;

  const createProject = new CreateProjectCrewService();

  const project = await createProject.execute({
    people_id,
    project_id,
  });

  return res.json(project);
});

export default projectcrewRouter;
