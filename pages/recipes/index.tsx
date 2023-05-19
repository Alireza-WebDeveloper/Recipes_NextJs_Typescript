import { Grid, Stack } from '@mui/material';
import React, { FC } from 'react';
import {
  getAsyncRecipesByAll,
  getAsyncRecipesByCategories,
  getAsyncRecipesByQuery,
  getAsyncRecipesByQueryAndCategories,
} from '@/Helpers/Recipes';
import RecipesList from '@/Components/Recipes/RecipesList';
import SearchBar from '@/Components/Forms/SearchBar';
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
import { GetServerSideProps } from 'next';

type RecipesPage = {
  recipesData: RecipeTypeList;
  categoriesRegionData: CategoriesType;
};

const RecipesPage: FC<RecipesPage> = ({
  recipesData,
  categoriesRegionData,
}) => {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Head>
        <title>ورگانتی | دستور غذای جنوبی</title>
      </Head>
      <Grid container>
        <Grid item xs={12} p={2}></Grid>
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
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default RecipesPage;

/// Get Async Categories Data (fs)
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  // categories by All
  const { data: categoriesRegionData, error: errorCategoriesRegion } =
    await getAsyncCategoriesByAll();
  if (errorCategoriesRegion) {
    return { notFound: true };
  }
  /// recipes by Query(Name) And Categories(Name)
  if ('q' in query && 'categories' in query) {
    const { q, categories }: any = query;
    const { data: recipesData, error } =
      await getAsyncRecipesByQueryAndCategories({
        q: q,
        categories: categories === 'تمامی' ? '' : categories,
      });
    if (error) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        recipesData,
        categoriesRegionData,
      },
    };
  }
  // recipes by Query Name
  if ('q' in query) {
    const { q }: any = query;
    const { data: recipesData, error } = await getAsyncRecipesByQuery(q);
    if (error) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        recipesData,
        categoriesRegionData,
      },
    };
  }
  /// recipes by Categories(Name)
  if ('categories' in query) {
    const { categories }: any = query;
    const { data: recipesData, error } = await getAsyncRecipesByCategories(
      categories === 'تمامی' ? '' : categories
    );
    if (error) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        recipesData,
        categoriesRegionData,
      },
    };
  }

  // recipes by default mode
  const { data: recipesData, error } = await getAsyncRecipesByAll();
  if (error) {
    return { notFound: true };
  }
  return {
    props: {
      recipesData,
      categoriesRegionData,
    },
  };
};
