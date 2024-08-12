import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { Location } from './Location';
import { Owner } from './Owner';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  serial_number!: string;

  @Column()
  ui_software_version!: string;

  @Column()
  camera_software_version!: string;

  @Column()
  make!: string;

  @Column()
  model!: string;

  @Column()
  version!: string;

  @Column()
  special_info!: string;

  @Column()
  manufacture_date!: Date;

  @Column()
  warranty_expiration!: Date;

  @Column()
  device_status!: 'ACTIVE' | 'INACTIVE' | 'RETIRED';

  @ManyToOne(() => Location)
  @JoinColumn({ name: 'location_id' })
  location!: Location;

  @ManyToOne(() => Owner)
  @JoinColumn({ name: 'owner_id' })
  owner!: Owner;

  @DeleteDateColumn()
  deletedAt?: Date;
}
