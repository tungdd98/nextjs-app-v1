import React, { FC, useMemo } from 'react';

import FavoriteBtn from './components/FavoriteBtn';
import { TRestaurant } from '@/types/restaurant/restaurant.types';
import { FeatureIcon } from '@/types/restaurant/restaurant.enums';
import { StarOnlyIcon, StarsIcon } from '@/components/icons';
import Image from '@/components/base/Image';
import { Typography } from '@mui/material';

type ProductItemProps = {
  item: TRestaurant;
};

const ProductItem: FC<ProductItemProps> = ({ item }) => {
  const featuredIcon = useMemo(() => {
    if (item.featured.icon === FeatureIcon.STARS_02) {
      return <StarsIcon />;
    }

    return <StarsIcon />;
  }, [item.featured.icon]);

  const imageUrl = useMemo(() => {
    if (!item.images.length) {
      return './images/no-image.png';
    }

    return item.images[0];
  }, [item.images]);

  return (
    <div className="mb-4">
      <div className="relative mb-3">
        <Image
          src={imageUrl}
          width={358}
          height={200}
          loading="lazy"
          alt={item.name}
          className="aspect-video h-auto w-full rounded-2xl object-cover"
        />
        <FavoriteBtn item={item} />
      </div>
      <Typography
        variant="caption"
        color="secondary.dark"
        className="mb-1 flex items-center gap-1"
        fontWeight={500}
      >
        {featuredIcon}
        {item.featured.text}
      </Typography>
      <div className="mb-1 flex items-center justify-between gap-2">
        <Typography
          variant="subtitle1"
          fontWeight={600}
          className="line-clamp-1"
          color="grey.700"
        >
          {item.name}
        </Typography>
        <div className="flex items-center gap-1">
          <StarOnlyIcon />
          <Typography variant="body2">
            {Number(item.rating)}({Number(item.rating_count)})
          </Typography>
        </div>
      </div>
      <Typography
        variant="body2"
        color="grey.100"
        sx={{ mb: 1 }}
        className="line-clamp-1"
      >
        {item.desc}
      </Typography>
      <Typography variant="body2" color="grey.100">
        오사카 나카노시마 · 야키토리 · {item.price_range}만원
      </Typography>
    </div>
  );
};

export default ProductItem;
