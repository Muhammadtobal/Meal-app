import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1739774769650 implements MigrationInterface {
    name = 'Migration1739774769650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`facebookId\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_7989eba4dafdd5322761765f2b\` (\`facebookId\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`firstName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`lastName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`reservation\` DROP FOREIGN KEY \`FK_d221f3398a0352970306b3dc676\``);
        await queryRunner.query(`ALTER TABLE \`reservation\` CHANGE \`reservationTime\` \`reservationTime\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`reservation\` CHANGE \`totalTime\` \`totalTime\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`reservation\` CHANGE \`tableId\` \`tableId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_d5456fd7e4c4866fec8ada1fa10\``);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`image\` \`image\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`parentId\` \`parentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`discount\` \`discount\` decimal(10,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`paymentDate\` \`paymentDate\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_6994cb6e22c6de89b02919ee6fa\``);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`reservationId\` \`reservationId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password\` \`password\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`otp\` \`otp\` varchar(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`otpExpires\` \`otpExpires\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`reservation\` ADD CONSTRAINT \`FK_d221f3398a0352970306b3dc676\` FOREIGN KEY (\`tableId\`) REFERENCES \`table\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_d5456fd7e4c4866fec8ada1fa10\` FOREIGN KEY (\`parentId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_6994cb6e22c6de89b02919ee6fa\` FOREIGN KEY (\`reservationId\`) REFERENCES \`reservation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_6994cb6e22c6de89b02919ee6fa\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_d5456fd7e4c4866fec8ada1fa10\``);
        await queryRunner.query(`ALTER TABLE \`reservation\` DROP FOREIGN KEY \`FK_d221f3398a0352970306b3dc676\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`otpExpires\` \`otpExpires\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`otp\` \`otp\` varchar(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`reservationId\` \`reservationId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_6994cb6e22c6de89b02919ee6fa\` FOREIGN KEY (\`reservationId\`) REFERENCES \`reservation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`paymentDate\` \`paymentDate\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`discount\` \`discount\` decimal(10,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`parentId\` \`parentId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`image\` \`image\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_d5456fd7e4c4866fec8ada1fa10\` FOREIGN KEY (\`parentId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reservation\` CHANGE \`tableId\` \`tableId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`reservation\` CHANGE \`totalTime\` \`totalTime\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`reservation\` CHANGE \`reservationTime\` \`reservationTime\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`reservation\` ADD CONSTRAINT \`FK_d221f3398a0352970306b3dc676\` FOREIGN KEY (\`tableId\`) REFERENCES \`table\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`lastName\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`firstName\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_7989eba4dafdd5322761765f2b\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`facebookId\``);
    }

}
