'use server';

import { db } from '../db';

export const updateFavoriteRestaurant = async (
  id: string,
  isFavorite: boolean,
) => {
  try {
    return await db.restaurant.update({
      where: {
        id,
      },
      data: {
        isFavorite,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
