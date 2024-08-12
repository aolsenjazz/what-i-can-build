import AppDataSource from '../database';
import { Location } from '../database/entities/Location';

export const LocationRepository = AppDataSource.getRepository(Location).extend({
  /**
   * Find a location by name.
   * @param name The name of the location.
   */
  findByName(name: string) {
    return this.createQueryBuilder('location').where('location.name = :name', { name }).getOne();
  },

  /**
   * Find all locations in a specific city.
   * @param city The city where the locations are found.
   */
  findByCity(city: string) {
    return this.createQueryBuilder('location').where('location.city = :city', { city }).getMany();
  },

  /**
   * Find all locations in a specific state.
   * @param state The state where the locations are found.
   */
  findByState(state: string) {
    return this.createQueryBuilder('location').where('location.state = :state', { state }).getMany();
  },

  /**
   * Find all locations in a specific country.
   * @param country The country where the locations are found.
   */
  findByCountry(country: string) {
    return this.createQueryBuilder('location').where('location.country = :country', { country }).getMany();
  },

  /**
   * Soft delete a location by marking the `deletedAt` field with the current date.
   * @param id The id of the location to soft delete.
   */
  async softDeleteLocation(id: number) {
    return this.update(id, { deletedAt: new Date() });
  },

  /**
   * Restore a soft-deleted location by setting the `deletedAt` field to null.
   * @param id The id of the location to restore.
   */
  async restoreLocation(id: number) {
    return this.update(id, { deletedAt: undefined });
  },
});
