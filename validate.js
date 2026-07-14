const fs = require('fs');
const { generateUsers } = require('./dist/index.js');

console.log("Generating test users...");
const d = generateUsers({ count: 1000 });
fs.writeFileSync('./data.json', JSON.stringify(d, null, 2));
console.log("Written to data.json\n");

console.log("=== FINAL VALIDATION ===");
console.log("Total:", d.length);
console.log("Unique IDs:", new Set(d.map(u => u.id)).size);
console.log("Unique emails:", new Set(d.map(u => u.email)).size);
console.log("Unique phones:", new Set(d.map(u => u.phone)).size);
console.log("Unique fullNames:", new Set(d.map(u => u.fullName)).size);

const m = d.filter(u => u.gender === "male").length;
console.log("Gender: " + m + " male (" + (m/10).toFixed(1) + "%), " + (1000-m) + " female (" + ((1000-m)/10).toFixed(1) + "%)");

const ages = d.map(u => u.age);
console.log("Age: min=" + Math.min(...ages) + " max=" + Math.max(...ages) + " avg=" + (ages.reduce((a,b)=>a+b)/ages.length).toFixed(1));

// DOB validation
let dobErrors = 0;
d.forEach(u => {
  const ref = new Date(2026, 6, 14);
  const dob = new Date(u.dateOfBirth);
  let calcAge = ref.getFullYear() - dob.getFullYear();
  const mDiff = ref.getMonth() - dob.getMonth();
  if (mDiff < 0 || (mDiff === 0 && ref.getDate() < dob.getDate())) calcAge--;
  if (calcAge !== u.age) {
    dobErrors++;
    if (dobErrors <= 5) console.log("  DOB mismatch:", u.fullName, "age=" + u.age, "dob=" + u.dateOfBirth, "calc=" + calcAge);
  }
});
console.log("DOB mismatches:", dobErrors);

// First name max 3
const fn = {};
d.forEach(u => { fn[u.firstName] = (fn[u.firstName] || 0) + 1; });
const over3 = Object.entries(fn).filter(([k, v]) => v > 3);
console.log("First names >3:", over3.length === 0 ? "NONE (PASS)" : JSON.stringify(over3));

// States
const st = {};
d.forEach(u => { st[u.state] = (st[u.state] || 0) + 1; });
console.log("States:", Object.keys(st).length);
Object.entries(st).sort((a, b) => b[1] - a[1]).forEach(([s, c]) => console.log("  " + s + ": " + c));

// Students
const stu = d.filter(u => u.occupation === "Student");
console.log("Students:", stu.length, "all null company:", stu.every(u => u.company === null));
const nonStu = d.filter(u => u.occupation !== "Student");
console.log("Non-students with null company:", nonStu.filter(u => u.company === null).length);

// Phone validation
const badPhones = d.filter(u => !/^\+91[6-9]\d{9}$/.test(u.phone));
console.log("Invalid phones:", badPhones.length);
if (badPhones.length > 0) badPhones.slice(0, 5).forEach(u => console.log("  Bad phone:", u.phone));

// Email validation
const badEmails = d.filter(u => !/^[a-z.]+\d+@(gmail\.com|outlook\.com|icloud\.com|yahoo\.com|proton\.me)$/.test(u.email));
console.log("Invalid emails:", badEmails.length);
if (badEmails.length > 0) badEmails.slice(0, 5).forEach(u => console.log("  Bad email:", u.email));

// Email domain distribution
const domains = {};
d.forEach(u => { const dom = u.email.split("@")[1]; domains[dom] = (domains[dom] || 0) + 1; });
console.log("Email domains:", JSON.stringify(domains));

// profilePhoto
console.log("profilePhoto all null:", d.every(u => u.profilePhoto === null));

// Schema check
const requiredKeys = ["id","firstName","lastName","fullName","gender","dateOfBirth","age","phone","email","city","district","state","pincode","language","occupation","company","profilePhoto"];
const schemaErrors = d.filter(u => !requiredKeys.every(k => k in u) || Object.keys(u).length !== requiredKeys.length);
console.log("Schema errors:", schemaErrors.length);

console.log("\n=== VALIDATION COMPLETE ===");
