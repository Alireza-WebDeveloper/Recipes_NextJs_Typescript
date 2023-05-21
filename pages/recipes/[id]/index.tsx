import RecipeDetail from '@/Components/RecipeDetail';
import { getAsyncRecipeDetail } from '@/Helpers/RecipeDetail';
import { Box, Grid } from '@mui/material';
import React  from 'react';
import Head from 'next/head';
import { RecipeTypeObj } from '@/models/Recipes';
import {
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import BreadCrumbsList from '@/Components/BreadCrumbs/BreadCrumbsList.tsx';

type RecipeDetailPageProps = {
  recipeDetailData: RecipeTypeObj;
};

const RecipeDetailPage: NextPage<RecipeDetailPageProps> = ({
  recipeDetailData,
}) => {
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { params } = ctx;
  try {
    if (params && 'id' in params) {
      const { id } = params;
      const recipeDetailData = await getAsyncRecipeDetail(id);
      return {
        props: {
          recipeDetailData,
        },
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
