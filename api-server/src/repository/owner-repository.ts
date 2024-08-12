import AppDataSource from '../database';
import { Owner } from '../database/entities/Owner';

export const OwnerRepository = AppDataSource.getRepository(Owner).extend({
  /**
   * Find an owner by name.
   * @param name The name of the owner.
   */
  findByName(name: string) {
    return this.createQueryBuilder('owner').where('owner.name = :name', { name }).getOne();
  },

  /**
   * Find all owners by owner type.
   * @param ownerType The type of the owner ('INDIVIDUAL' | 'COMPANY').
   */
  findByOwnerType(ownerType: 'INDIVIDUAL' | 'COMPANY') {
    return this.createQueryBuilder('owner').where('owner.owner_type = :ownerType', { ownerType }).getMany();
  },

  /**
   * Find an owner by company name.
   * @param companyName The company name of the owner.
   */
  findByCompanyName(companyName: string) {
    return this.createQueryBuilder('owner').where('owner.company_name = :companyName', { companyName }).getOne();
  },

  /**
   * Soft delete an owner by marking the `deletedAt` field with the current date.
   * @param id The id of the owner to soft delete.
   */
  async softDeleteOwner(id: number) {
    return this.update(id, { deletedAt: new Date() });
  },

  /**
   * Restore a soft-deleted owner by setting the `deletedAt` field to null.
   * @param id The id of the owner to restore.
   */
  async restoreOwner(id: number) {
    return this.update(id, { deletedAt: undefined });
  },
});
