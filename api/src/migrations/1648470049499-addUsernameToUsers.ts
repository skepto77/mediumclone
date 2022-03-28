import {MigrationInterface, QueryRunner} from "typeorm";

export class addUsernameToUsers1648470049499 implements MigrationInterface {
    name = 'addUsernameToUsers1648470049499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }

}