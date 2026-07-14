import { randInt } from "./random";

/**
 * Generate a realistic age between 18 and 60.
 *
 * Uses a mixture distribution:
 * - 92% from a normal distribution with the specified mean and sd=7 — produces a young-skewed bulk
 * - 8% uniform across 18–60 — guarantees full range coverage
 *
 * @param targetMean The desired average age (default: 28)
 */
export function generateAge(targetMean: number = 28): number {
  if (Math.random() < 0.08) {
    return randInt(18, 60);
  }
  // The normal distribution's mean is slightly adjusted because
  // the truncation at [18, 60] pushes the actual mean up.
  // Subtracting ~3 from the target yields a closer actual average.
  const adjustedMean = targetMean - 3;
  while (true) {
    const u1 = Math.random();
    const u2 = Math.random();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    const age = Math.round(adjustedMean + z * 7);
    if (age >= 18 && age <= 60) return age;
  }
}

/**
 * Generate a date of birth (YYYY-MM-DD) that exactly matches the given age
 * when calculated against today's date.
 */
export function generateDOB(age: number): string {
  const now = new Date();
  const refYear = now.getFullYear();
  const refMonth = now.getMonth() + 1; // 1-indexed
  const refDay = now.getDate();

  const month = randInt(1, 12);
  const maxDay = month === 2 ? 28 : [4, 6, 9, 11].includes(month) ? 30 : 31;
  const day = randInt(1, maxDay);

  // If the birthday hasn't happened yet this year, the person was born one year earlier
  let birthYear: number;
  if (month > refMonth || (month === refMonth && day > refDay)) {
    birthYear = refYear - age - 1;
  } else {
    birthYear = refYear - age;
  }

  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${birthYear}-${mm}-${dd}`;
}

/**
 * Build a weighted state-distribution array that sums to exactly `total`.
 *
 * Larger states (UP, Maharashtra, etc.) get proportionally more users;
 * every state is guaranteed at least 5 users.
 */
export function buildStateDistribution(
  stateNames: string[],
  total: number
): string[] {
  const stateWeights: Record<string, number> = {
    "Maharashtra": 3, "Karnataka": 2.5, "Tamil Nadu": 2.5, "Kerala": 2,
    "Uttar Pradesh": 3.5, "Rajasthan": 2, "Gujarat": 2, "West Bengal": 2.5,
    "Madhya Pradesh": 2, "Bihar": 2, "Telangana": 2.5, "Andhra Pradesh": 2,
    "Punjab": 1.5, "Haryana": 1.5, "Delhi": 2.5, "Odisha": 1.5,
    "Assam": 1, "Jharkhand": 1, "Chhattisgarh": 1, "Uttarakhand": 1,
    "Himachal Pradesh": 0.8, "Goa": 0.7, "Jammu and Kashmir": 0.8,
    "Tripura": 0.5, "Meghalaya": 0.5, "Manipur": 0.4, "Nagaland": 0.4,
    "Mizoram": 0.3, "Arunachal Pradesh": 0.3, "Sikkim": 0.3,
  };

  const totalWeight = stateNames.reduce((sum, s) => sum + (stateWeights[s] ?? 0.5), 0);
  const stateCounts: Record<string, number> = {};
  let assigned = 0;

  for (const state of stateNames) {
    const w = stateWeights[state] ?? 0.5;
    const count = Math.max(5, Math.round((w / totalWeight) * total));
    stateCounts[state] = count;
    assigned += count;
  }

  // Adjust to hit the exact target
  const diff = total - assigned;
  const bigStates = ["Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Delhi", "West Bengal"];
  if (diff > 0) {
    for (let i = 0; i < diff; i++) stateCounts[bigStates[i % bigStates.length]]++;
  } else if (diff < 0) {
    for (let i = 0; i < -diff; i++) stateCounts[bigStates[i % bigStates.length]]--;
  }

  // Flatten into an assignment array
  const assignments: string[] = [];
  for (const state of stateNames) {
    for (let i = 0; i < stateCounts[state]; i++) {
      assignments.push(state);
    }
  }
  return assignments;
}
