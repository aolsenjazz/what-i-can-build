import AppDataSource from '../database';
import { User } from '../database/entities/User';

export const UserRepository = AppDataSource.getRepository(User).extend({
  /**
   * Find a user by username.
   * @param username The username of the user.
   */
  findByUsername(username: string) {
    return this.createQueryBuilder('user').where('user.username = :username', { username }).getOne();
  },

  /**
   * Find a user by email.
   * @param email The email of the user.
   */
  findByEmail(email: string) {
    return this.createQueryBuilder('user').where('user.email = :email', { email }).getOne();
  },

  /**
   * Find all users with a specific role.
   * @param role The role of the users to find.
   */
  findByRole(role: 'ADMIN' | 'TECHNICIAN' | 'USER') {
    return this.createQueryBuilder('user').where('user.role = :role', { role }).getMany();
  },

  /**
   * Soft delete a user by marking the `deletedAt` field with the current date.
   * @param id The id of the user to soft delete.
   */
  async softDeleteUser(id: number) {
    return this.update(id, { deletedAt: new Date() });
  },

  /**
   * Restore a soft-deleted user by setting the `deletedAt` field to null.
   * @param id The id of the user to restore.
   */
  async restoreUser(id: number) {
    return this.update(id, { deletedAt: undefined });
  },
});
