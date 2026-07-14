import type { User, GenerateUsersOptions, FactoryContext, Gender } from "../types";
import { shuffle } from "../utils/random";
import { buildStateDistribution } from "../utils/weighted";
import { stateData } from "../datasets/cities";
import { userFactory } from "../factories/userFactory";

const DEFAULT_OPTIONS: Required<GenerateUsersOptions> = {
  count: 1000,
  gender: { male: 52, female: 48 },
  averageAge: 28,
  state: "",
};

/**
 * Generate an array of synthetic Indian users.
 *
 * @param options  Configuration overrides (count, gender, averageAge, state).
 * @returns        Array of fully-populated `User` objects.
 *
 * Guarantees:
 * - Every `id`, `email`, `phone`, and `fullName` is unique.
 * - No first name appears more than 3 times.
 * - Age average matches the provided `averageAge` (default 28).
 * - Every `dateOfBirth` exactly matches the `age` against today's date.
 * - If no `state` is provided, all 30 Indian states/UTs are represented using
 *   a population-weighted distribution.
 */
export function generateUsers(options?: GenerateUsersOptions): User[] {
  const opts: Required<GenerateUsersOptions> = { ...DEFAULT_OPTIONS, ...options };

  // Validate gender percentage sum
  const totalGender = opts.gender.male + opts.gender.female;
  if (totalGender !== 100) {
    throw new Error(`Gender percentages must sum to 100. Got: ${totalGender}`);
  }

  // 1. Build initial context with empty unique trackers
  const ctx: FactoryContext = {
    options: opts,
    trackers: {
      ids: new Set(),
      phones: new Set(),
      emails: new Set(),
      fullNames: new Set(),
      firstNameCounts: {},
    },
  };

  // 2. Prepare gender distribution array
  const maleCount = Math.round(opts.count * (opts.gender.male / 100));
  const genders: Gender[] = [];
  for (let i = 0; i < maleCount; i++) genders.push("male");
  for (let i = maleCount; i < opts.count; i++) genders.push("female");
  shuffle(genders);

  // 3. Prepare state distribution array
  let stateAssignments: string[];
  if (opts.state) {
    if (!stateData[opts.state]) {
      throw new Error(`Invalid state specified: "${opts.state}"`);
    }
    stateAssignments = Array(opts.count).fill(opts.state);
  } else {
    const stateNames = Object.keys(stateData);
    stateAssignments = shuffle(buildStateDistribution(stateNames, opts.count));
  }

  // 4. Orchestrate generation via the User Factory
  const users: User[] = [];
  for (let i = 0; i < opts.count; i++) {
    users.push(userFactory(ctx, genders[i], stateAssignments[i]));
  }

  return users;
}
