import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@stuchieditora.com';
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash('Admin@12345', salt);

    await prisma.user.create({
      data: {
        email,
        password,
        name: 'Admin',
      },
    });
    console.log('✅ Admin user created');
  } else {
    console.log('ℹ️ Admin user already exists');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
