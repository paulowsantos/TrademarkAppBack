import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AddForeignKeysProjectCrew1613803132881
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'projectcrew',
      new TableForeignKey({
        name: 'ProjectCrewProjects',
        columnNames: ['project_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'projects',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'projectcrew',
      new TableForeignKey({
        name: 'ProjectCrewPeople',
        columnNames: ['people_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'people',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('projectcrew', 'ProjectCrewPeople');
    await queryRunner.dropForeignKey('projectcrew', 'ProjectCrewProjects');
  }
}
