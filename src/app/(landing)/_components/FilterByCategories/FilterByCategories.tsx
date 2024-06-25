'use client';

import React, { FC, useCallback } from 'react';
import { Category } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createQueryString } from '@/utils/create-query-string';
import { Chip } from '@mui/material';

type FilterByCategoriesProps = {
  categories: Category[];
};

const FilterByCategories: FC<FilterByCategoriesProps> = ({ categories }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');

  const handleFilterByCategory = useCallback(
    (item: Category) => {
      router.push(
        `${pathname}?${createQueryString(
          'category',
          item.id === categoryId ? '' : item.id,
          searchParams,
        )}`,
      );
    },
    [categoryId, pathname, router, searchParams],
  );

  return (
    <div className="no-scrollbar my-4 flex gap-1 overflow-x-auto">
      {categories.map((item) => (
        <Chip
          key={item.id}
          label={item.displayName}
          sx={{
            borderRadius: '6px',
            bgcolor: categoryId === item.id ? 'grey.300' : 'grey.50',
            color: 'grey.700',
            fontSize: 14,
            fontWeight: 600,
          }}
          onClick={() => handleFilterByCategory(item)}
        />
      ))}
    </div>
  );
};

export default FilterByCategories;
