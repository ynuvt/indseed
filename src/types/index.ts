/** Schema for a synthetic Indian user record. */
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: Gender;
  dateOfBirth: string;
  age: number;
  phone: string;
  email: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  language: string;
  occupation: string;
  company: string | null;
  profilePhoto: null;
}

export type Gender = "male" | "female";

export type Region = "north" | "south" | "west" | "east" | "northeast" | "punjab";

export interface CityEntry {
  city: string;
  district: string;
  pincode: string;
}

export interface StateInfo {
  language: string;
  region: Region;
  cities: CityEntry[];
}

export type StateDataMap = Record<string, StateInfo>;

export type SurnameMap = Record<Region, string[]>;

// ── Options & factory context ───────────────────────────────────────────

/**
 * Options for `generateUsers()`.
 *
 * Every field is optional — sensible defaults are applied when omitted.
 */
export interface GenerateUsersOptions {
  /** Number of users to generate (default: `1000`). */
  count?: number;

  /**
   * Gender ratio as percentages. Must sum to 100.
   * @default { male: 52, female: 48 }
   */
  gender?: { male: number; female: number };

  /**
   * Target average age for the generated users.
   * Actual ages will follow a realistic distribution centred on this value.
   * @default 28
   */
  averageAge?: number;

  /**
   * Restrict all users to a single Indian state.
   * When omitted, users are distributed across all 30 states weighted by population.
   */
  state?: string;
}

/** Sets used to guarantee uniqueness across a generation run. */
export interface UniqueTrackers {
  ids: Set<string>;
  phones: Set<string>;
  emails: Set<string>;
  fullNames: Set<string>;
}

/**
 * Shared context passed to every factory during a single `generateUsers()` call.
 * Contains the resolved options plus uniqueness trackers.
 */
export interface FactoryContext {
  options: Required<GenerateUsersOptions>;
  trackers: UniqueTrackers;
}
