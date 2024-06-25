'use client';

import React, { FC, useEffect, useState } from 'react';
import { HeartIcon } from '@/components/icons';
import { trpc } from '@/trpc/client/client';
import { TRestaurant } from '@/types/restaurant/restaurant.types';
import { cn } from '@/utils/merge-class';

type FavoriteBtnProps = {
  item: TRestaurant;
};

const FavoriteBtn: FC<FavoriteBtnProps> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(() => item.isFavorite);
  const { mutate, isLoading, isSuccess } =
    trpc.updateFavoriteRestaurant.useMutation();

  const handleUpdateFavorite = () => {
    if (isLoading) return;

    mutate({
      id: item.id,
      isFavorite: !item.isFavorite,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setIsFavorite((prev) => !prev);
    }
  }, [isSuccess]);

  return (
    <div
      className={cn(
        'absolute right-2 top-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full backdrop-blur',
        isFavorite ? 'bg-error-dark' : 'bg-white/25',
      )}
      onClick={handleUpdateFavorite}
      aria-hidden="true"
    >
      <HeartIcon />
    </div>
  );
};

export default FavoriteBtn;
