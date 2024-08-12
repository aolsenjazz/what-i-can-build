import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  full_name!: string;

  @Column()
  role!: 'ADMIN' | 'TECHNICIAN' | 'USER';

  @CreateDateColumn()
  created_at!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
