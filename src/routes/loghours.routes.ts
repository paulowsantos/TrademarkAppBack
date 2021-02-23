import { Router } from 'express';

import CreateLogHoursService from '../services/CreateLogHoursService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const loghoursRouter = Router();

loghoursRouter.post('/', async (req, res) => {
  const { people_id, project_id, date, hoursAmount, otAmount } = req.body;

  const createLogHours = new CreateLogHoursService();

  const loghour = await createLogHours.execute({
    people_id,
    project_id,
    date,
    hoursAmount,
    otAmount,
  });

  return res.json(loghour);
});

export default loghoursRouter;
