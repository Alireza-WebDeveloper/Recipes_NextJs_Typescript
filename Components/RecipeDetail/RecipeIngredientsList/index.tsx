import React, { FC } from 'react';
import RecipeIngredientsItem from '../RecipeIngredientsItem';
import { Stack, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import * as Icons from 'react-icons/md';
import { useState } from 'react';

type RecipeIngredientsListProps = {
  requirements: {
    itemName: string;
    itemNumber: number;
    itemUnit: string;
    _id: string;
  }[];
};
const RecipeIngredientsList: FC<RecipeIngredientsListProps> = ({
  requirements,
}) => {
  const [expanded, setExpanded] = useState(true);
  const renderIngredientItems = () => {
    return requirements.map((ingredient) => {
      return (
        <RecipeIngredientsItem key={ingredient._id} ingredient={ingredient} />
      );
    });
  };
  return (
    <>
      <Accordion
        sx={{
          border: (theme) => `solid 1px ${theme.palette.default?.main}`,
        }}
        aria-controls="panel1"
        expanded={expanded}
      >
        <AccordionSummary
          expandIcon={<Icons.MdExpandMore />}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <Typography variant="h4" component="p">
            مواد لازم برای پخت
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            {renderIngredientItems()}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default RecipeIngredientsList;
