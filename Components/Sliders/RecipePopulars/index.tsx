import React, { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import useBrokenMatch from '@/Hook/useBrokenMatch';
import { RecipePopularsTypeList } from '@/models/RecipePopulars';

type RecipePopularsProps = {
  recipePopularData: RecipePopularsTypeList;
};

type myLoaderProps = {
  src: any;
  width: any;
  quality: any;
};

const RecipePopulars: FC<RecipePopularsProps> = ({ recipePopularData }) => {
  const { isMatching } = useBrokenMatch();
  // Loader Image
  const myLoader = ({ src, width, quality }: Partial<myLoaderProps>) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  // render Items
  const renderSwiperRecipePopulars = () => {
    return recipePopularData.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <Link
            href={`/recipes?q=${item.title}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Box
              component="section"
              sx={{
                height: { md: '50vh', sm: '55vh', xs: '50vh' },
                position: 'relative',
              }}
            >
              <Image
                loader={myLoader}
                src={item.img}
                alt={'image'}
                fill
                style={{ objectFit: 'fill', borderRadius: '0.3rem' }}
                priority
                sizes="(max-width: 1200px) 100vw"
              />
            </Box>
            <Box sx={{ position: 'absolute', bottom: 10, left: 7 }}>
              <Typography variant="h4" component="span" color="white">
                {item.title}
              </Typography>
            </Box>
          </Link>
        </SwiperSlide>
      );
    });
  };
  // View
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        دسته های محبوب
      </Typography>
      <Grid container>
        <Grid xs={12} item>
          <Swiper
            style={{ cursor: 'pointer' }}
            slidesPerView={
              isMatching.lg && isMatching.md && isMatching.sm
                ? 1
                : isMatching.lg && isMatching.md
                ? 2
                : isMatching.lg
                ? 3
                : 3
            }
            spaceBetween={15}
            autoplay={{
              delay: 1800,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {renderSwiperRecipePopulars()}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
};

export default RecipePopulars;
