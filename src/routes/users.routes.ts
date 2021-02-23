import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import CreateUserService from '../services/CreateUserService';
import CreatePeopleService from '../services/CreatePeopleService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

// usersRouter.use(ensureAuthenticated);

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createPeople = new CreatePeopleService();

  const people = await createPeople.execute({
    name,
    email,
  });

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
    people_id: people.id,
  });

  delete user.password;

  return res.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: req.user.id,
      avatarFilename: req.file.filename,
    });

    delete user.password;

    return res.json(user);
  },
);

export default usersRouter;
