import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from 'typeorm';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  contact_info!: string;

  @Column()
  owner_type!: 'INDIVIDUAL' | 'COMPANY';

  @Column()
  company_name!: string;

  @DeleteDateColumn()
  deletedAt?: Date;
}
