import React, { FC } from 'react';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import * as Icons from 'react-icons/md';
import { FavoriteContext } from '@/Context/Favorite';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { RecipeTypeObj } from '@/models/Recipes';

type FavoriteItemProps = {
  favorite: RecipeTypeObj;
};

type myLoaderProps = {
  src: any;
  quality: any;
  width: any;
};
const FavoriteItem: FC<FavoriteItemProps> = ({ favorite }) => {
  const { images, name, _id, body } = favorite;
  const src = images[0];
  /// Dispatch Remove Favorite(Recipe)
  const { dispatch } = FavoriteContext();
  const handlerRemoveRecipe = () => {
    dispatch({ type: 'removeRecipe', payload: _id });
    toast.error(`حذف شدن از قسمت مورد علاقه`, {
      autoClose: 1000,
      position: 'top-center',
      closeOnClick: true,
      draggable: true,
      pauseOnHover: false,
      style: {
        textAlign: 'justify',
        fontSize: '1rem',
      },
    });
  };
  // Load Image
  const myLoader = ({ src, width, quality }: Partial<myLoaderProps>) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Stack
      sx={{
        backgroundColor: (theme) => theme.palette.default?.main,
        borderRadius: '1rem',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        gap: 0.5,
      }}
    >
      <Link href={`/recipes/${_id}`}>
        <Box
          component="section"
          sx={{
            height: {
              xl: '25vh',
              lg: '30vh',
              md: '35vh',
              xs: '40vh',
            },
            position: 'relative',
          }}
        >
          <Image
            loader={myLoader}
            src={`http://localhost:3000${src}`}
            alt={'image'}
            fill
            style={{
              objectFit: 'fill',
              borderRadius: '0.5rem',
            }}
            priority
            sizes="(max-width: 1200px) 100vw"
          />
        </Box>
      </Link>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography textAlign="center" variant="h5" component="p">
          {name}
        </Typography>
        <Box>
          <IconButton
            size="large"
            sx={{ filter: `blur(${blur})` }}
            color="error"
            onClick={handlerRemoveRecipe}
          >
            <Icons.MdFavorite />
          </IconButton>
        </Box>
      </Stack>
      <Typography textAlign="justify" component="p" variant="body2">
        {body.slice(0, 45)}...
      </Typography>
    </Stack>
  );
};

export default FavoriteItem;
