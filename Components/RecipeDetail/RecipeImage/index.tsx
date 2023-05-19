import React, { FC } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

type RecipeImageProps = {
  src: string;
};

type myLoaderProps = {
  src: any;
  quality: any;
  width: any;
};

const RecipeImage: FC<RecipeImageProps> = ({ src }) => {
  const myLoader = ({ src, width, quality }: Partial<myLoaderProps>) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Box
      component="section"
      sx={{
        height: { md: '70vh', sm: '60vh', xs: '50vh' },
        position: 'relative',
      }}
    >
      <Image
        loader={myLoader}
        src={`${process.env.Image_URL}${src}`}
        alt={'image'}
        fill
        style={{ objectFit: 'fill', borderRadius: '0.2rem' }}
        priority
        sizes="(max-width: 1200px) 100vw"
      />
    </Box>
  );
};

export default RecipeImage;
