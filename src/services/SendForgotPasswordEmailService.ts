import { injectable, inject } from 'tsyringe';

import IMailProvider from '../shared/container/providers/MailProvider/models/IMailProvider';
// import IUserRepository from '../repositories/UsersRepository';
import User from '../models/Users';
import AppError from '../errors/AppError';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default SendForgotPasswordEmailService;
