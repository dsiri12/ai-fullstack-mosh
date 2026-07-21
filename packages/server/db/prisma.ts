import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
   connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({
   adapter,
});

// In Prisma, you normally do not create a connection pool manually.
// Prisma Client already uses a built-in connection pool through the underlying database driver.
