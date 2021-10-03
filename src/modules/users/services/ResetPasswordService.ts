import { injectable, inject } from 'tsyringe';

import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
// import IUserRepository from '../repositories/UsersRepository';
import User from '../infra/typeorm/entities/Users';
import AppError from '@shared/errors/AppError';

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

  public async execute({ token, password }: IRequest): Promise<void> {

  }
}

export default ResetPasswordService;
