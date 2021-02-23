import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddPeopleIDFieldtoUsers1613798251230
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'people_id',
        type: 'uuid',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'people_id');
  }
}
