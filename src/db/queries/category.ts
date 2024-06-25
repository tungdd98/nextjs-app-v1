import { Category } from '@prisma/client';
import { db } from '../db';

export const getCategories = async (): Promise<Category[]> => {
  return await db.category.findMany({
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  });
};
