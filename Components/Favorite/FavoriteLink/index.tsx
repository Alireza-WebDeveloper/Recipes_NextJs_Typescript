import React from 'react';
import Link from 'next/link';
import { IconButton, Badge, Typography } from '@mui/material';
import * as Icons from 'react-icons/md';
import { FavoriteContext } from '@/Context/Favorite';
const FavoriteLink = () => {
  const { state } = FavoriteContext();
  return (
    <Link href={`/favorite`}>
      <IconButton color="primary">
        <Badge
          badgeContent={
            <Typography variant={'body1'}>
              {state.length === 0 ? '' : state.length}
            </Typography>
          }
          color="primary"
        >
          <Icons.MdOutlineShoppingBasket />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default FavoriteLink;
