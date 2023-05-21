import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardActions,
  Stack,
  IconButton,
} from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import * as Icons from 'react-icons/md';
import Link from 'next/link';
import { FavoriteContext } from '@/Context/Favorite';
import { toast } from 'react-toastify';
import { RecipeTypeObj } from '@/models/Recipes';
import { myLoaderPartialImageType } from '@/models/myLoaderImage';

type RecipesItemProps = {
  recipe: RecipeTypeObj;
};

const RecipesItem: FC<RecipesItemProps> = ({ recipe }) => {
  const { body, images, _id, name, categories } = recipe;
  //// Update Item favorite List
  const { state: favoriteData, dispatch } = FavoriteContext();
  const [favorite, setFavorite] = useState(false);

  const [blur, setBlur] = useState('3rem');
  useEffect(() => {
    const find = favoriteData.find((item) => item._id === _id);
    if (find) {
      setFavorite(true);
      setBlur('0');
    } else {
      setFavorite(false);
      setBlur('0');
    }
  }, [favoriteData]);

  /// Load Image
  const myLoader = ({ src, width, quality }: myLoaderPartialImageType) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const src = images[0];
  /// Handler Dispatch FavoriteProvrider

  const handlerAddRecipe = () => {
    dispatch({ type: 'addRecipe', payload: recipe });
    toast.success(`اضافه شدن به قسمت مورد علاقه`, {
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

  return (
    <Card>
      <CardActionArea>
        <Link
          href={`/recipes/${_id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Box
            component="section"
            sx={{
              height: {
                md: '45vh',
                sm: '50vh',
                xs: '60vh',
              },
              position: 'relative',
            }}
          >
            <Image
              loader={myLoader}
              src={`${process.env.Image_URL}${src}`}
              alt={'image'}
              fill
              style={{ objectFit: 'cover', borderRadius: '0.3rem' }}
              priority
              sizes="(max-width: 1200px) 100vw"
            />
          </Box>
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography variant="h5" component="h1">
          {name}
        </Typography>
        <Typography textAlign={'justify'}>{body.slice(0, 100)}...</Typography>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Icons.MdLocationCity />
            {categories.map((name, index, array) => {
              return (
                <Typography
                  color="warning"
                  key={index}
                  variant="body2"
                  component="span"
                >
                  {name}
                  {index === array.length - 1 ? '' : '-'}
                </Typography>
              );
            })}
          </Box>
          <Box>
            {favorite === true ? (
              <IconButton
                sx={{ filter: `blur(${blur})` }}
                color="error"
                onClick={handlerRemoveRecipe}
              >
                <Icons.MdFavorite />
              </IconButton>
            ) : (
              <IconButton
                sx={{ filter: `blur(${blur})` }}
                color="error"
                onClick={handlerAddRecipe}
              >
                <Icons.MdFavoriteBorder />
              </IconButton>
            )}
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Link
          href={`/recipes/${_id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Button
            sx={{ fontSize: '1.2rem' }}
            size="large"
            variant="text"
            startIcon={<Icons.MdArrowBack />}
          >
            دستور پخت
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default RecipesItem;
