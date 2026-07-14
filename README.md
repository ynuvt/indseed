# IndSeed

Generate realistic synthetic Indian user data for development, testing, and database seeding.

> IndSeed generates synthetic data only. No real person's personal information is used or stored.

---

## Features

- India-first synthetic user generation
- Generate thousands of users on demand
- Regionally consistent names and surnames
- Real Indian cities, districts, states and pincodes
- State-aware language mapping
- Configurable gender distribution
- Configurable average age
- Realistic Indian companies and occupations
- Unique UUIDs, emails and phone numbers
- Written in TypeScript
- Lightweight with zero runtime dependencies

---

## Installation

```bash
npm install indseed
```

---

## Quick Start

```ts
import { generateUsers } from "indseed";

const users = generateUsers();

console.log(users[0]);
```

Example

```ts
{
  id: "c7c503d5-13e9-46a8-ad69-a42a384320c1",
  firstName: "Aarav",
  lastName: "Sharma",
  fullName: "Aarav Sharma",
  gender: "male",
  age: 24,
  dateOfBirth: "2001-04-18",
  phone: "+919876543210",
  email: "aarav.sharma482@gmail.com",
  city: "Mumbai",
  district: "Mumbai",
  state: "Maharashtra",
  pincode: "400001",
  language: "Marathi",
  occupation: "Software Engineer",
  company: "Infosys",
  profilePhoto: null
}
```

---

## API

### `generateUsers(options?)`

Returns an array of synthetic Indian users.

```ts
const users = generateUsers({
    count: 1000,
    gender: {
        male: 70,
        female: 30
    },
    averageAge: 23,
    state: "Maharashtra"
});
```

---

## Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `count` | `number` | `1000` | Number of users to generate |
| `gender` | `{ male: number; female: number }` | `{ male: 52, female: 48 }` | Gender ratio |
| `averageAge` | `number` | `28` | Target average age |
| `state` | `string` | Random | Restrict generation to one state |

---

## User Schema

| Field | Type | Description |
|------|------|-------------|
| `id` | `string` | UUID v4 |
| `firstName` | `string` | First name |
| `lastName` | `string` | Regionally consistent surname |
| `fullName` | `string` | Full name |
| `gender` | `"male" \| "female"` | Gender |
| `dateOfBirth` | `string` | YYYY-MM-DD |
| `age` | `number` | Age |
| `phone` | `string` | Indian mobile number |
| `email` | `string` | Unique email |
| `city` | `string` | City |
| `district` | `string` | District |
| `state` | `string` | State |
| `pincode` | `string` | Pincode |
| `language` | `string` | Primary language |
| `occupation` | `string` | Occupation |
| `company` | `string \| null` | Company |
| `profilePhoto` | `null` | Reserved for future use |

---

## Examples

Generate 100 users

```ts
const users = generateUsers({
    count: 100
});
```

Generate users from Maharashtra

```ts
const users = generateUsers({
    count: 500,
    state: "Maharashtra"
});
```

Generate users with a custom gender ratio

```ts
const users = generateUsers({
    count: 1000,
    gender: {
        male: 60,
        female: 40
    }
});
```

Generate younger users

```ts
const users = generateUsers({
    count: 1000,
    averageAge: 22
});
```

---

## Project Structure

```text
indseed/
├── src/
│   ├── datasets/
│   ├── factories/
│   │   └── userFactory.ts
│   ├── generators/
│   │   └── user.ts
│   ├── utils/
│   ├── types/
│   └── index.ts
├── README.md
├── LICENSE
├── package.json
└── tsconfig.json
```

---

## Contributing

Contributions are welcome.

If you'd like to improve datasets, add features, or report bugs, feel free to open an issue or pull request.

---

## License

MIT License. See the [LICENSE](LICENSE) file for details.

---

## Disclaimer

IndSeed generates synthetic data for software development and testing.

The generated records are intended to resemble realistic Indian data but are not based on or intended to identify any real individual. Any resemblance to actual persons is purely coincidental.