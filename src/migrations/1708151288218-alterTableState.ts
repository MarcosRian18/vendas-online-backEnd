import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableState1708151288218 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE state
            ADD COLUMN uf VARCHAR(2) NOT NULL;
        `);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE state
            DROP COLUMN uf;
        `);
    }

}