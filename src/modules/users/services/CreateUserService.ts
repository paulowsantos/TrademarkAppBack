import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/Users';
// import People from '../models/People';

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
