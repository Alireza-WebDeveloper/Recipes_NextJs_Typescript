import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import * as Icons from 'react-icons/md';
import { useState } from 'react';
import RecipeCooksItem from '../RecipeCooksItem';
type RecipeCooksListProps = {
  steps: { stepName: string; stepBody: string; _id: string }[];
};

const RecipeCooksList: FC<RecipeCooksListProps> = ({ steps }) => {
  const renderCookItems = () => {
    return steps.map((step, index) => {
      return <RecipeCooksItem key={step._id} step={step} index={index} />;
    });
  };
  const [expanded, setExpanded] = useState(true);
  return (
    <Accordion
      sx={{ border: (theme) => `solid 1px ${theme.palette.default?.main}` }}
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
          دستور پخت غذا
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {renderCookItems()}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default RecipeCooksList;
