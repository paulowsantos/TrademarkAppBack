import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/Users';
// import People from '../models/People';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
  people_id: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    people_id,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);
    // const peopleRepository = getRepository(People);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      people_id,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
