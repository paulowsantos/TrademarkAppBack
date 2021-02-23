import { Router } from 'express';
import usersRouter from './users.routes';
import peopleRouter from './people.routes';
import projectRouter from './projects.routes';
import projectcrewRouter from './projectcrew.routes';
import loghoursRouter from './loghours.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/people', peopleRouter);
routes.use('/project', projectRouter);
routes.use('/projectcrew', projectcrewRouter);
routes.use('/loghours', loghoursRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
