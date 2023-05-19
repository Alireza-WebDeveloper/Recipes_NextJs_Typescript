import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import SearchBar from '../Forms/SearchBar';
import Typewriter from 'typewriter-effect';
import { BannerType } from '@/models/Banner';

type BannerProps = {
  bannerData: BannerType;
};

type myLoaderProps = {
  src: any;
  width: any;
  quality: any;
};

const Banner: FC<BannerProps> = ({ bannerData }) => {
  const { titles, img } = bannerData;

  const myLoader = ({ src, width, quality }: Partial<myLoaderProps>) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Stack
      component="div"
      sx={{
        // backgroundColor: (theme) => theme.palette.default.main,
        position: 'relative',
      }}
    >
      <Box
        component="section"
        sx={{
          height: { lg: '85vh', md: '80vh', sm: '75vh', xs: '60vh' },
          position: 'relative',
        }}
      >
        <Image
          loader={myLoader}
          src={img}
          alt={titles.t1}
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="(max-width: 1200px) 100vw"
        />
      </Box>
      <Stack
        component="section"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h1"
            color="white"
            textAlign="center"
          >
            <Typewriter
              options={{
                strings: [titles.t1, titles.t2],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 20,
              }}
            />
          </Typography>
        </Box>
        {/* SearchBar Component */}
        <SearchBar />
      </Stack>
    </Stack>
  );
};

export default Banner;
