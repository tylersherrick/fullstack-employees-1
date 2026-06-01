import { faker } from "@faker-js/faker";

import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for(let i = 0; i < 10; i++) {
    const employee = {
      fullname: faker.person.fullName(),
      birthday: faker.date.birthdate(),
      salary: faker.number.int({ min: 30000, max: 150000 }),
    };
    await createEmployee(employee);
  }
}