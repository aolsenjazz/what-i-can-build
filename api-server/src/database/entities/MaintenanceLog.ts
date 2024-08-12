import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { Device } from './Device';
import { User } from './User';

@Entity()
export class MaintenanceLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Device)
  @JoinColumn({ name: 'device_serial_number' })
  device!: Device;

  @Column()
  maintenance_type!: 'SOFTWARE_UPDATE' | 'HARDWARE_REPLACEMENT' | 'CLEANING' | 'INSPECTION';

  @ManyToOne(() => User)
  @JoinColumn({ name: 'performed_by' })
  performedBy!: User;

  @Column()
  timestamp!: number;

  @Column()
  notes!: string;

  @DeleteDateColumn()
  deletedAt?: Date;
}
