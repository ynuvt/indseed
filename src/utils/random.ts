import * as crypto from "crypto";

/** Generate a UUID v4 string. */
export function uuidv4(): string {
  return crypto.randomUUID();
}

/** Pick a random element from an array. */
export function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Generate a random integer between min and max (inclusive). */
export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Fisher-Yates shuffle (in-place, returns same array). */
export function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generate a unique Indian mobile number in the format +91XXXXXXXXXX.
 * The first digit after +91 is always 6, 7, 8, or 9 (valid Indian prefixes).
 */
export function generatePhone(usedPhones: Set<string>): string {
  const validPrefixes = ["6", "7", "8", "9"];
  let phone: string;
  do {
    const prefix = pick(validPrefixes);
    const rest = String(randInt(100000000, 999999999)).padStart(9, "0");
    phone = `+91${prefix}${rest}`;
  } while (usedPhones.has(phone));
  usedPhones.add(phone);
  return phone;
}

/**
 * Generate a unique email address in the format firstname.lastnameNNN@domain.
 * Domains are randomly chosen from gmail, outlook, icloud, yahoo, and proton.
 */
export function generateEmail(
  firstName: string,
  lastName: string,
  usedEmails: Set<string>
): string {
  const emailDomains = ["gmail.com", "outlook.com", "icloud.com", "yahoo.com", "proton.me"];
  const fnClean = firstName.toLowerCase().replace(/[^a-z]/g, "");
  const lnClean = lastName.toLowerCase().replace(/[^a-z]/g, "");
  let email: string;
  do {
    const num = randInt(1, 999);
    const domain = pick(emailDomains);
    email = `${fnClean}.${lnClean}${num}@${domain}`;
  } while (usedEmails.has(email));
  usedEmails.add(email);
  return email;
}
