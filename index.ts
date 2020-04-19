import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const test = await prisma.options.create({
    data: {
      file: {
        create: {
          name: "test",
        },
      },
      Routes: {
        create: {
          index: "testj",
        },
      },
      Car: {
        create: {
          carnumber: 12,
        },
      },
      Value: {
        create: {
          value: "test",
        },
      },
    },
  });
  console.log(test);
}

main();
