import { Grid, Typography, Button, Box, Stack } from '@mui/material';
import React, { FC } from 'react';
import RecipesItem from '../RecipesItem';
import * as Icons from 'react-icons/md';
import BtnMoreRecipes from '../BtnMoreRecipes';
import { RecipeTypeList } from '@/models/Recipes';
import BreadCrumbsList from '@/Components/BreadCrumbs/BreadCrumbsList.tsx';

type RecipesListProps = {
  recipesData: RecipeTypeList;
  title: string;
  activeMoreRecipes: boolean;
  activeBreadCrumbs?: boolean;
};

const RecipesList: FC<RecipesListProps> = ({
  recipesData,
  title,
  activeMoreRecipes,
  activeBreadCrumbs,
}) => {
  const renderRecipesItem = () => {
    return recipesData.map((recipe) => {
      return (
        <Grid item xl={3} md={4} sm={6} xs={12} key={recipe._id}>
          <RecipesItem recipe={recipe} />
        </Grid>
      );
    });
  };
  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: { md: 0, xs: 2 },
        }}
      >
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
        {activeBreadCrumbs ? (
          <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
            <BreadCrumbsList
              breadcrumbsLink={[
                { id: 1, title: 'غذاها', href: '/recipes', active: true },
                { id: 2, title: 'خانه', href: '/', active: false },
              ]}
            />
          </Box>
        ) : (
          ''
        )}
        {activeMoreRecipes ? <BtnMoreRecipes /> : ''}
      </Stack>
      <Grid container spacing={3} mt={2}>
        {renderRecipesItem()}
      </Grid>
      {activeMoreRecipes ? <BtnMoreRecipes /> : ''}
    </>
  );
};

export default RecipesList;
