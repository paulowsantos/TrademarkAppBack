import { getRepository } from 'typeorm';

import ProjectCrew from '../infra/typeorm/entities/ProjectCrew';

interface Request {
  people_id: string;
  project_id: string;
}

class CreateProjectService {
  public async execute({
    people_id,
    project_id,
  }: Request): Promise<ProjectCrew> {
    const projectcrewRepository = getRepository(ProjectCrew);

    const projectCrew = projectcrewRepository.create({
      people_id,
      project_id,
    });

    await projectcrewRepository.save(projectCrew);

    return projectCrew;
  }
}

export default CreateProjectService;
