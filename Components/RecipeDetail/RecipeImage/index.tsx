import React, { FC } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { myLoaderPartialImageType } from '@/models/myLoaderImage';

type RecipeImageProps = {
  src: string;
};

const RecipeImage: FC<RecipeImageProps> = ({ src }) => {
  const myLoader = ({ src, width, quality }: myLoaderPartialImageType) => {
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
        src={`${process.env.NEXT_PUBLIC_Image_URL}${src}`}
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
