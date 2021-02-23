import { getRepository } from 'typeorm';

import People from '../models/People';

interface Request {
  name: string;
  email: string;
}

class CreatePeopleService {
  public async execute({ name, email }: Request): Promise<People> {
    const peopleRepository = getRepository(People);

    const checkPeopleExists = await peopleRepository.findOne({
      where: { email },
    });

    if (checkPeopleExists) {
      return checkPeopleExists;
    }

    const people = peopleRepository.create({
      name,
      email,
    });

    await peopleRepository.save(people);

    return people;
  }
}

export default CreatePeopleService;
