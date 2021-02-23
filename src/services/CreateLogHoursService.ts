import { getRepository } from 'typeorm';

import Loghours from '../models/Loghours';
// import AppError from '../errors/AppError';

interface Request {
  people_id: string;
  project_id: string;
  date: Date;
  hoursAmount: number;
  otAmount?: number;
}

class CreateLogHoursService {
  public async execute({
    people_id,
    project_id,
    date,
    hoursAmount,
    otAmount,
  }: Request): Promise<Loghours> {
    const logHoursRepository = getRepository(Loghours);

    const loghour = logHoursRepository.create({
      people_id,
      project_id,
      date,
      hoursAmount,
      otAmount,
    });

    await logHoursRepository.save(loghour);

    return loghour;
  }
}

export default CreateLogHoursService;
