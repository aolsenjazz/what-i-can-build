import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { Device } from './Device';
import { User } from './User';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Device)
  @JoinColumn({ name: 'device_serial_number' })
  device!: Device;

  @Column()
  event_type!:
    | 'SOFTWARE_UPDATED'
    | 'INCIDENT_REPORT_GENERATED'
    | 'CRITICAL_ERROR'
    | 'DEVICE_STARTED'
    | 'DEVICE_SHUTDOWN'
    | 'MAINTENANCE_REQUIRED';

  @Column()
  event_severity!: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

  @Column()
  timestamp!: number;

  @Column({ type: 'text' })
  json_payload!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @DeleteDateColumn()
  deletedAt?: Date;
}
