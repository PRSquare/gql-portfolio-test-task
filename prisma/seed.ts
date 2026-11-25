import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({adapter});

const data = {
  name: "Ivan Loznitsa",
  description: "Backend developer",
  links: {
    create: [
      {label: "linkedin", url: "https://linkedin.com"},
      {label: "hh", url: "https://hh.ru"},
    ]
  },
  skills: ["TypeScript", "Node.js"],
  experience: {
    create: [
      {company: "RYABOV.MARKETING", title: "Backend developer", beginTime: "2025-10-01T00:00:00.000Z", endTime: "2026-08-01T00:00:00.000Z", achivements: "Trading platform development"},
      {company: "Startupfoto", title: "Fullstack developer", beginTime: "2024-03-01T00:00:00.000Z", endTime: "2025-09-01T00:00:00.000Z", achivements: "CRM development, legacy support and modernization"},
    ]
  },
  projects: {
    create: [
      {name: "vibe-coded online callendar consturctor", url: "https://github.com/PRSquare/calendar-constructor"},
    ],
  },
} 

async function main() {
  const profile = await prisma.Profile.upsert({
    where: { id: 1 },
    update: data,
    create: data,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
