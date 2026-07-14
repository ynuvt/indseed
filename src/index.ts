/**
 * IndSeed — Generate realistic synthetic Indian user data
 * for development, testing, and database seeding.
 *
 * @example
 * ```ts
 * import { generateUsers } from "indseed";
 *
 * const users = generateUsers({ count: 1000 });
 * console.log(JSON.stringify(users, null, 2));
 * ```
 */

export { generateUsers } from "./generators/user";
export type {
  User,
  Gender,
  Region,
  CityEntry,
  StateInfo,
  GenerateUsersOptions,
} from "./types";

