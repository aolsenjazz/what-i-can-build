import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Device } from './Device';
import { User } from './User';

@Entity()
export class DeviceConfiguration {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Device)
  @JoinColumn({ name: 'device_serial_number' })
  device!: Device;

  @Column()
  configuration_name!: string;

  @Column()
  configuration_value!: string;

  @CreateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'updated_by' })
  updatedBy!: User;

  @DeleteDateColumn()
  deletedAt?: Date;
}
