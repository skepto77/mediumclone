import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRalationsBetweenArticleAndUser1648811186735 implements MigrationInterface {
    name = 'AddRalationsBetweenArticleAndUser1648811186735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ADD "email" character varying NOT NULL`);
    }

}
