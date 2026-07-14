import type { FactoryContext, Gender, User } from "../types";
import { uuidv4, pick, randInt } from "../utils/random";
import { generateAge, generateDOB } from "../utils/weighted";
import { stateData } from "../datasets/cities";
import { maleFirstNames, femaleFirstNames } from "../datasets/names";
import { lastNamesByRegion } from "../datasets/surnames";
import { occupations } from "../datasets/occupations";
import { companies } from "../datasets/companies";

const EMAIL_DOMAINS = ["gmail.com", "outlook.com", "icloud.com", "yahoo.com", "proton.me"] as const;
const VALID_PREFIXES = ["6", "7", "8", "9"] as const;

/**
 * Generates a single synthetic Indian user.
 *
 * @param ctx             The generation context (options + trackers)
 * @param gender          The assigned gender for this user
 * @param stateAssignment The assigned state for this user
 * @returns A completely populated `User` object
 */
export function userFactory(
  ctx: FactoryContext,
  gender: Gender,
  stateAssignment: string
): User {
  // 1. Unique ID
  let id: string;
  do {
    id = uuidv4();
  } while (ctx.trackers.ids.has(id));
  ctx.trackers.ids.add(id);

  // 2. Address & Regional match
  const sd = stateData[stateAssignment];
  if (!sd) {
    throw new Error(`Unknown state: "${stateAssignment}".`);
  }
  const loc = pick(sd.cities);

  // 3. Name (tied to gender and region, ensuring uniqueness)
  const namePool = gender === "male" ? maleFirstNames : femaleFirstNames;
  const regionLastNames = lastNamesByRegion[sd.region] ?? lastNamesByRegion.north;

  let firstName: string;
  let lastName: string;
  let fullName: string;
  let attempts = 0;

  do {
    firstName = pick(namePool);
    lastName = pick(regionLastNames);
    fullName = `${firstName} ${lastName}`;
    attempts++;

    if (attempts > 500) {
      // Emergency fallback: add a middle initial to break collisions
      const initial = String.fromCharCode(65 + randInt(0, 25));
      fullName = `${firstName} ${initial}. ${lastName}`;
    }
  } while (
    ctx.trackers.fullNames.has(fullName) ||
    (ctx.trackers.firstNameCounts[firstName] ?? 0) >= 3
  );

  ctx.trackers.fullNames.add(fullName);
  ctx.trackers.firstNameCounts[firstName] =
    (ctx.trackers.firstNameCounts[firstName] ?? 0) + 1;

  // 4. Age & Date of Birth
  const age = generateAge(ctx.options.averageAge);
  const dateOfBirth = generateDOB(age);

  // 5. Contact - Unique Phone
  let phone: string;
  do {
    const prefix = pick(VALID_PREFIXES);
    const rest = String(randInt(100000000, 999999999)).padStart(9, "0");
    phone = `+91${prefix}${rest}`;
  } while (ctx.trackers.phones.has(phone));
  ctx.trackers.phones.add(phone);

  // 6. Contact - Unique Email
  const fnClean = firstName.toLowerCase().replace(/[^a-z]/g, "");
  const lnClean = lastName.toLowerCase().replace(/[^a-z]/g, "");
  let email: string;
  do {
    const num = randInt(1, 999);
    const domain = pick(EMAIL_DOMAINS);
    email = `${fnClean}.${lnClean}${num}@${domain}`;
  } while (ctx.trackers.emails.has(email));
  ctx.trackers.emails.add(email);

  // 7. Occupation & Company
  const occupation = pick(occupations);
  const company = occupation === "Student" ? null : pick(companies);

  return {
    id,
    firstName,
    lastName,
    fullName,
    gender,
    dateOfBirth,
    age,
    phone,
    email,
    city: loc.city,
    district: loc.district,
    state: stateAssignment,
    pincode: loc.pincode,
    language: sd.language,
    occupation,
    company,
    profilePhoto: null,
  };
}
