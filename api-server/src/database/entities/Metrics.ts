import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { Device } from './Device';

@Entity()
export class Metrics {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Device)
  @JoinColumn({ name: 'device_serial_number' })
  device!: Device;

  @Column()
  timestamp!: number;

  @Column()
  snapshots_number!: number;

  @Column()
  snapshots_size!: number;

  @Column()
  recordings_number!: number;

  @Column()
  recordings_size!: number;

  @Column()
  incident_reports_number!: number;

  @Column()
  incident_reports_size!: number;

  @Column()
  disk_total!: number;

  @Column()
  disk_used!: number;

  @Column()
  disk_available!: number;

  @Column()
  analytics_byte_size!: number;

  @Column()
  hours_source_usage!: number;

  @Column()
  hours_system_usage!: number;

  @Column()
  cpu_usage_percent!: number;

  @Column()
  memory_usage_percent!: number;

  @Column()
  network_bandwidth_usage!: number;

  @DeleteDateColumn()
  deletedAt?: Date;
}
