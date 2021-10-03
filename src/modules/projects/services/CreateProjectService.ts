import { getRepository } from 'typeorm';

import Project from '../infra/typeorm/entities/Projects';

interface Request {
  name: string;
}

class CreateProjectService {
  public async execute({ name }: Request): Promise<Project> {
    const projectRepository = getRepository(Project);

    const project = projectRepository.create({
      name,
    });

    await projectRepository.save(project);

    return project;
  }
}

export default CreateProjectService;
