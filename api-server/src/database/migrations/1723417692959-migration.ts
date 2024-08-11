import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1723417692959 implements MigrationInterface {
    name = 'Migration1723417692959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`full_name\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`owner\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`contact_info\` varchar(255) NOT NULL, \`owner_type\` varchar(255) NOT NULL, \`company_name\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`location\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`state\` varchar(255) NOT NULL, \`postal_code\` varchar(255) NOT NULL, \`country\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`device\` (\`id\` int NOT NULL AUTO_INCREMENT, \`serial_number\` varchar(255) NOT NULL, \`ui_software_version\` varchar(255) NOT NULL, \`camera_software_version\` varchar(255) NOT NULL, \`make\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`version\` varchar(255) NOT NULL, \`special_info\` varchar(255) NOT NULL, \`manufacture_date\` datetime NOT NULL, \`warranty_expiration\` datetime NOT NULL, \`device_status\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, \`location_id\` int NULL, \`owner_id\` int NULL, UNIQUE INDEX \`IDX_c7f756679d925ed3d51af6cb8f\` (\`serial_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`maintenance_log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`maintenance_type\` varchar(255) NOT NULL, \`timestamp\` int NOT NULL, \`notes\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, \`device_serial_number\` int NULL, \`performed_by\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`event_type\` varchar(255) NOT NULL, \`event_severity\` varchar(255) NOT NULL, \`timestamp\` int NOT NULL, \`json_payload\` text NOT NULL, \`deletedAt\` datetime(6) NULL, \`device_serial_number\` int NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`metrics\` (\`id\` int NOT NULL AUTO_INCREMENT, \`timestamp\` int NOT NULL, \`snapshots_number\` int NOT NULL, \`snapshots_size\` int NOT NULL, \`recordings_number\` int NOT NULL, \`recordings_size\` int NOT NULL, \`incident_reports_number\` int NOT NULL, \`incident_reports_size\` int NOT NULL, \`disk_total\` int NOT NULL, \`disk_used\` int NOT NULL, \`disk_available\` int NOT NULL, \`analytics_byte_size\` int NOT NULL, \`hours_source_usage\` int NOT NULL, \`hours_system_usage\` int NOT NULL, \`cpu_usage_percent\` int NOT NULL, \`memory_usage_percent\` int NOT NULL, \`network_bandwidth_usage\` int NOT NULL, \`deletedAt\` datetime(6) NULL, \`device_serial_number\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`device_configuration\` (\`id\` int NOT NULL AUTO_INCREMENT, \`configuration_name\` varchar(255) NOT NULL, \`configuration_value\` varchar(255) NOT NULL, \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`device_serial_number\` int NULL, \`updated_by\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`device\` ADD CONSTRAINT \`FK_133d3795779b0d900f862831801\` FOREIGN KEY (\`location_id\`) REFERENCES \`location\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`device\` ADD CONSTRAINT \`FK_8690bc91e4e5daf29493dcb9ce9\` FOREIGN KEY (\`owner_id\`) REFERENCES \`owner\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance_log\` ADD CONSTRAINT \`FK_08f0531d6bbc64483435d2643a4\` FOREIGN KEY (\`device_serial_number\`) REFERENCES \`device\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`maintenance_log\` ADD CONSTRAINT \`FK_0b173c85bd3bb4cd67840c993f4\` FOREIGN KEY (\`performed_by\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_dab29f15609597a2418b1d02d71\` FOREIGN KEY (\`device_serial_number\`) REFERENCES \`device\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_e6358bd3df1b2874637dca92bcf\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`metrics\` ADD CONSTRAINT \`FK_be48ac423e3240e2061cf765042\` FOREIGN KEY (\`device_serial_number\`) REFERENCES \`device\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`device_configuration\` ADD CONSTRAINT \`FK_ca3fd014ba3bb30e6cd6bf99f6c\` FOREIGN KEY (\`device_serial_number\`) REFERENCES \`device\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`device_configuration\` ADD CONSTRAINT \`FK_34d200ea51b04da6131ce3b990d\` FOREIGN KEY (\`updated_by\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`device_configuration\` DROP FOREIGN KEY \`FK_34d200ea51b04da6131ce3b990d\``);
        await queryRunner.query(`ALTER TABLE \`device_configuration\` DROP FOREIGN KEY \`FK_ca3fd014ba3bb30e6cd6bf99f6c\``);
        await queryRunner.query(`ALTER TABLE \`metrics\` DROP FOREIGN KEY \`FK_be48ac423e3240e2061cf765042\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_e6358bd3df1b2874637dca92bcf\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_dab29f15609597a2418b1d02d71\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_log\` DROP FOREIGN KEY \`FK_0b173c85bd3bb4cd67840c993f4\``);
        await queryRunner.query(`ALTER TABLE \`maintenance_log\` DROP FOREIGN KEY \`FK_08f0531d6bbc64483435d2643a4\``);
        await queryRunner.query(`ALTER TABLE \`device\` DROP FOREIGN KEY \`FK_8690bc91e4e5daf29493dcb9ce9\``);
        await queryRunner.query(`ALTER TABLE \`device\` DROP FOREIGN KEY \`FK_133d3795779b0d900f862831801\``);
        await queryRunner.query(`DROP TABLE \`device_configuration\``);
        await queryRunner.query(`DROP TABLE \`metrics\``);
        await queryRunner.query(`DROP TABLE \`event\``);
        await queryRunner.query(`DROP TABLE \`maintenance_log\``);
        await queryRunner.query(`DROP INDEX \`IDX_c7f756679d925ed3d51af6cb8f\` ON \`device\``);
        await queryRunner.query(`DROP TABLE \`device\``);
        await queryRunner.query(`DROP TABLE \`location\``);
        await queryRunner.query(`DROP TABLE \`owner\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
