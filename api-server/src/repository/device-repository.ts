import AppDataSource from '../database';
import { Device } from '../database/entities/Device';

export const DeviceRepository = AppDataSource.getRepository(Device).extend({
  /**
   * Find a device by serial number.
   * @param serialNumber The serial number of the device.
   */
  findBySerialNumber(serialNumber: string) {
    return this.createQueryBuilder('device').where('device.serial_number = :serialNumber', { serialNumber }).getOne();
  },

  /**
   * Find all devices by their status.
   * @param status The status of the devices to find.
   */
  findByStatus(status: 'ACTIVE' | 'INACTIVE' | 'RETIRED') {
    return this.createQueryBuilder('device').where('device.device_status = :status', { status }).getMany();
  },

  /**
   * Find all devices at a specific location.
   * @param locationId The id of the location.
   */
  findByLocation(locationId: number) {
    return this.createQueryBuilder('device').where('device.location_id = :locationId', { locationId }).getMany();
  },

  /**
   * Find all devices owned by a specific owner.
   * @param ownerId The id of the owner.
   */
  findByOwner(ownerId: number) {
    return this.createQueryBuilder('device').where('device.owner_id = :ownerId', { ownerId }).getMany();
  },

  /**
   * Soft delete a device by marking the `deletedAt` field with the current date.
   * @param id The id of the device to soft delete.
   */
  async softDeleteDevice(id: number) {
    return this.update(id, { deletedAt: new Date() });
  },

  /**
   * Restore a soft-deleted device by setting the `deletedAt` field to null.
   * @param id The id of the device to restore.
   */
  async restoreDevice(id: number) {
    return this.update(id, { deletedAt: undefined });
  },
});
