import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import peopleRouter from '@modules/people/infra/http/routes/people.routes';
import projectRouter from '@modules/projects/infra/http/routes/projects.routes';
import projectcrewRouter from '@modules/projects/infra/http/routes/projectcrew.routes';
import loghoursRouter from '@modules/projects/infra/http/routes/loghours.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/people', peopleRouter);
routes.use('/project', projectRouter);
routes.use('/projectcrew', projectcrewRouter);
routes.use('/loghours', loghoursRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
