import { Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

type RecipesEmptyProps = {
  title: string;
};

const RecipesEmpty: FC<RecipesEmptyProps> = ({ title }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" textAlign="center">
        {title}
      </Typography>
    </Stack>
  );
};

export default RecipesEmpty;
