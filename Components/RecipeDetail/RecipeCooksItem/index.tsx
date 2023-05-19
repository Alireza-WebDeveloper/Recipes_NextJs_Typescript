import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

type RecipeCooksItemProps = {
  step: {
    stepName: string;
    stepBody: string;
    _id: string;
  };
  index: number;
};
const RecipeCooksItem: FC<RecipeCooksItemProps> = ({ step, index }) => {
  const { stepBody, stepName } = step;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start' }}>
        <Typography gutterBottom variant="h5" component="p">
          مرحله {index + 1} : {stepName}
        </Typography>{' '}
      </Box>
      <Typography textAlign="justify" variant="h6" component="p">
        {stepBody}
      </Typography>
    </Box>
  );
};

export default RecipeCooksItem;
