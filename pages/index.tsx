import React from 'react';
import { Container, Grid } from '@mui/material';
import Banner from '@/Components/Banner';
import RecipePopulars from '@/Components/Sliders/RecipePopulars';
import { getAsyncRecipesByLimit } from '@/Helpers/Recipes';
import RecipesList from '@/Components/Recipes/RecipesList';
import Head from 'next/head';
import { getAsyncFsData } from '@/Helpers/Fs';
import { FC } from 'react';
import { BannerType } from '@/models/Banner';
import { RecipePopularsTypeList } from '@/models/RecipePopulars';
import { RecipeTypeList } from '@/models/Recipes';
import { GetStaticProps } from 'next';

type HomeProps = {
  bannerData: BannerType;
  recipePopularData: RecipePopularsTypeList;
  recipesData: RecipeTypeList;
};

const Home: FC<HomeProps> = ({
  bannerData,
  recipePopularData,
  recipesData,
}) => {
  return (
    <>
      <Head>
        <title>ورگانتی | آموزش آشپزی</title>
      </Head>
      <Grid container>
        <Grid item xs={12}>
          <Banner bannerData={bannerData} />
        </Grid>
        <Container>
          <Grid item xs={12} mt={2}>
            <RecipePopulars recipePopularData={recipePopularData} />
          </Grid>
          <Grid item xs={12} mt={2}>
            <RecipesList
              recipesData={recipesData}
              title={'غذا های موجود'}
              activeMoreRecipes={true}
            />
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // BannerData
  const bannerData = await getAsyncFsData<BannerType>({
    folderName: 'data',
    fileName: 'banner.json',
  });
  // recipePopularData(Slider)
  const recipePopularData = await getAsyncFsData<RecipePopularsTypeList>({
    folderName: 'data',
    fileName: 'RecipePopulars.json',
  });
  // recipes(Food) With Check Error
  const { data: recipesData, error } = await getAsyncRecipesByLimit(8);
  if (error) {
    return { notFound: true };
  }
  /// Return Props
  return {
    props: {
      bannerData,
      recipePopularData,
      recipesData,
    },
  };
};
