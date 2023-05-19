import { Grid, Box, Paper, Stack } from '@mui/material';
import React, { FC } from 'react';
import RecipeIngredientsList from './RecipeIngredientsList';
import RecipeCooksList from './RecipeCooksList';
import Image from 'next/image';
import RecipeImage from './RecipeImage';
import RecipeIntroduction from './RecipeIntroduction';
import { RecipeTypeObj } from '@/models/Recipes';

type RecipeDetailProps = {
  recipeDetailData: RecipeTypeObj;
};

const RecipeDetail: FC<RecipeDetailProps> = ({ recipeDetailData }) => {
  const { categories, images, name, requirements, steps, body } =
    recipeDetailData;
  const src = images[0];
  return (
    <Paper sx={{ p: 2 }}>
      <Grid container spacing={1}>
        <Grid item lg={6} xs={12}>
          <RecipeImage src={src} />
        </Grid>
        <Grid item lg={6} xs={12}>
          <RecipeIntroduction
            body={body}
            name={name}
            categories={categories}
            recipe={recipeDetailData}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack p={2}>
            <RecipeIngredientsList requirements={requirements} />
            <RecipeCooksList steps={steps} />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RecipeDetail;
