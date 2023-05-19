import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import * as Icons from 'react-icons/md';
import { colors } from '@mui/material';

type RecipeIngredientsItemProps = {
  ingredient: {
    itemName: string;
    itemNumber: number;
    itemUnit: string;
    _id: string;
  };
};
const RecipeIngredientsItem: FC<RecipeIngredientsItemProps> = ({
  ingredient,
}) => {
  const { itemName, itemNumber, itemUnit } = ingredient;

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Icons.MdFoodBank color={colors.deepPurple['A700']} />
      <Box>
        <Typography variant="h6" component="span">
          {itemName} {itemNumber === 0 ? '' : itemNumber} {itemUnit}
        </Typography>
      </Box>
    </Stack>
  );
};

export default RecipeIngredientsItem;
