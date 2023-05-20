import RecipeDetail from '@/Components/RecipeDetail';

import { getAsyncRecipeDetail } from '@/Helpers/RecipeDetail';
import { Box, Grid } from '@mui/material';
import React, { FC } from 'react';
import Head from 'next/head';
import { RecipeTypeObj } from '@/models/Recipes';
import { GetServerSideProps } from 'next';
import BreadCrumbsList from '@/Components/BreadCrumbs/BreadCrumbsList.tsx';

type RecipeDetailPageProps = {
  recipeDetailData: RecipeTypeObj;
};

const RecipeDetailPage: FC<RecipeDetailPageProps> = ({ recipeDetailData }) => {
  const { name, _id } = recipeDetailData;
  return (
    <>
      <Head>
        <title>ورگانتی | دستور پخت {name}</title>
      </Head>
      <Grid container p={3} spacing={1}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <BreadCrumbsList
              breadcrumbsLink={[
                {
                  id: 1,
                  title: 'دستور پخت',
                  href: `/recipes/${_id}`,
                  active: true,
                },
                { id: 2, title: 'غذاها', href: '/recipes', active: false },
                { id: 2, title: 'خانه', href: '/', active: false },
              ]}
            />
          </Box>
        </Grid>
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
