import React, { FC } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { useRouter } from 'next/router';
import * as Icons from 'react-icons/md';
import { useState } from 'react';
import { CategoriesType } from '@/models/Catgories';

type RecipesCategoriesRegion2Props = {
  categoriesRegionData: CategoriesType;
};

const RecipesCategoriesRegion2: FC<RecipesCategoriesRegion2Props> = ({
  categoriesRegionData,
}) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const {
    query: { categories, q },
  } = router;

  /// Check Router And Push
  const handlerFilerCategories = (titleCategories: string) => {
    if (q) {
      router.push(`/recipes?q=${q}&categories=${titleCategories}`, undefined, {
        scroll: false,
      });
    } else {
      router.push(`/recipes?categories=${titleCategories}`, undefined, {
        scroll: false,
      });
    }
  };
  // Render Categories Item
  const renderCategoriesRegionItem = () => {
    return categoriesRegionData.map((region, index) => {
      return (
        <Button
          size="large"
          key={index}
          onClick={() => handlerFilerCategories(region)}
          sx={{
            /// Check Categories Active
            backgroundColor: (theme) => {
              if (!categories || categories === '') {
                return region === 'تمامی'
                  ? theme.palette.secondary.main
                  : theme.palette.info.main;
              }
              return region === categories
                ? theme.palette.secondary.main
                : theme.palette.info.main;
            },
            color: 'black',
            fontSize: '1.4rem',
          }}
        >
          {region}
        </Button>
      );
    });
  };
  // View
  return (
    <Stack
      sx={{ width: '80%', m: 'auto', display: { lg: 'none', xs: 'block' } }}
    >
      <Accordion
        id="panel1"
        aria-controls="panel1"
        expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <AccordionSummary expandIcon={<Icons.MdExpandMore />}>
          <Typography variant="h4" component="p">
            دسته های استانی
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              flexWrap: 'wrap',
            }}
          >
            {renderCategoriesRegionItem()}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default RecipesCategoriesRegion2;
