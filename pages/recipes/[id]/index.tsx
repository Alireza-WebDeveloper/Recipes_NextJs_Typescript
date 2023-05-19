import RecipeDetail from '@/Components/RecipeDetail';

import { getAsyncRecipeDetail } from '@/Helpers/RecipeDetail';
import { Grid } from '@mui/material';
import React, { FC } from 'react';
import Head from 'next/head';
import { RecipeTypeObj } from '@/models/Recipes';
import { GetServerSideProps } from 'next';

type RecipeDetailPageProps = {
  recipeDetailData: RecipeTypeObj;
};

const RecipeDetailPage: FC<RecipeDetailPageProps> = ({ recipeDetailData }) => {
  const { name } = recipeDetailData;
  return (
    <>
      <Head>
        <title>ورگانتی | دستور پخت {name}</title>
      </Head>
      <Grid container p={3}>
        <Grid item xs={12}>
          <RecipeDetail recipeDetailData={recipeDetailData} />
        </Grid>
      </Grid>
    </>
  );
};

export default RecipeDetailPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;
  if (params && 'id' in params) {
    const { id } = params;
    const { data: recipeDetailData, error } = await getAsyncRecipeDetail(id);
    if (error) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        recipeDetailData,
      },
    };
  }
  return {
    notFound: true,
  };
};
