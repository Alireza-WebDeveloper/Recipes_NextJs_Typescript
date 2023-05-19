import { Divider, Stack, Typography, Box } from '@mui/material';
import React, { FC, useState } from 'react';
import * as Icons from 'react-icons/md';
import { IconButton } from '@mui/material';
import { FavoriteContext } from '@/Context/Favorite';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { CategoriesType } from '@/models/Catgories';
import { RecipeTypeObj } from '@/models/Recipes';

type RecipeIntroductionProps = {
  body: string;
  name: string;
  categories: CategoriesType;
  recipe: RecipeTypeObj;
};

const RecipeIntroduction: FC<RecipeIntroductionProps> = (props) => {
  const { body, categories, name, recipe } = props;
  // Update Item Favorite List
  const { state: favoriteData, dispatch } = FavoriteContext();
  const [favorite, setFavorite] = useState(false);
  const [blur, setBlur] = useState('3rem');
  useEffect(() => {
    const find = favoriteData.find((item) => item._id === recipe._id);
    if (find) {
      setFavorite(true);
      setBlur('0');
    } else {
      setFavorite(false);
      setBlur('0');
    }
  }, [favoriteData]);
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
    dispatch({ type: 'removeRecipe', payload: recipe._id });
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
    <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          {name}
        </Typography>
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
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
        component="section"
      >
        <Icons.MdLocationCity />
        {categories.map((name, index, array) => {
          return (
            <Typography
              color="warning"
              key={index}
              variant="h6"
              component="span"
            >
              {name}
              {index === array.length - 1 ? '' : '-'}
            </Typography>
          );
        })}
      </Box>
      <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography variant="h5" component="p" textAlign="justify">
          {body}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RecipeIntroduction;
