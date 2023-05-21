import { Grid, Stack } from '@mui/material';
import React, { FC } from 'react';
import {
  getAsyncRecipesByAll,
  getAsyncRecipesByCategories,
  getAsyncRecipesByQuery,
  getAsyncRecipesByQueryAndCategories,
} from '@/Helpers/Recipes';
import RecipesList from '@/Components/Recipes/RecipesList';
import RecipesCategoriesRegion from '@/Components/Recipes/RecipesCategoriesRegion';
import RecipesEmpty from '@/Components/Recipes/RecipesEmpty';
import BtnDefaultRecipes from '@/Components/Recipes/BtnDefaultRecipes';
import { useRouter } from 'next/router';
import RecipesCategoriesRegion2 from '@/Components/Recipes/RecipesCategoriesRegion2';
import Head from 'next/head';
import { getAsyncCategoriesByAll } from '@/Helpers/Categories';
import SearchBar2 from '@/Components/Forms/SearchBar2';
import { RecipeTypeList } from '@/models/Recipes';
import { CategoriesType } from '@/models/Catgories';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type RecipesPageProps = {
  recipesData: RecipeTypeList;
  categoriesRegionData: CategoriesType;
};

const RecipesPage = ({
  recipesData,
  categoriesRegionData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Head>
        <title>ورگانتی | دستور غذای جنوبی</title>
      </Head>
      <Grid container>
        <Grid item lg={3} xs={12} p={2}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
            }}
          >
            {'q' in query ? (
              <BtnDefaultRecipes title={'نمایش پیش فرض صفحه'} />
            ) : (
              ''
            )}
          </Stack>
          <SearchBar2 />
          <RecipesCategoriesRegion2
            categoriesRegionData={categoriesRegionData}
          />
          <RecipesCategoriesRegion
            categoriesRegionData={categoriesRegionData}
          />
        </Grid>

        <Grid item lg={9} xs={12} p={2}>
          {recipesData.length === 0 ? (
            <RecipesEmpty title={'همچین غذایی وجود ندارد'} />
          ) : (
            <RecipesList
              recipesData={recipesData}
              title={'غذاهای موجود'}
              activeMoreRecipes={false}
              activeBreadCrumbs={true}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default RecipesPage;

/// Get Async Categories Data (fs)
export const getServerSideProps: GetServerSideProps<RecipesPageProps> = async (
  ctx
) => {
  try {
    const { query } = ctx;
    const categoriesRegionData = await getAsyncCategoriesByAll();
    // Get Recipes By Query And Categories
    if ('q' in query && 'categories' in query) {
      const { q, categories }: any = query;
      const recipesData = await getAsyncRecipesByQueryAndCategories({
        q: q,
        categories: categories === 'تمامی' ? '' : categories,
      });
      return {
        props: {
          recipesData,
          categoriesRegionData,
        },
      };
    }
    // Get recipes by Query Name
    if ('q' in query) {
      const { q }: any = query;
      const recipesData = await getAsyncRecipesByQuery(q);
      return {
        props: {
          recipesData,
          categoriesRegionData,
        },
      };
    }
    // Get Recipes By Categories Name
    if ('categories' in query) {
      const { categories }: any = query;
      const recipesData = await getAsyncRecipesByCategories(
        categories === 'تمامی' ? '' : categories
      );
      return {
        props: {
          recipesData,
          categoriesRegionData,
        },
      };
    }
    // Get All Recipes
    const recipesData = await getAsyncRecipesByAll();
    return {
      props: {
        recipesData,
        categoriesRegionData,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
