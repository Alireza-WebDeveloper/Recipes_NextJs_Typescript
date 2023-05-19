import {
  Grid,
  Stack,
  Typography,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import { colors } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import * as Icons from 'react-icons/md';
import { useState } from 'react';
import { CategoriesType } from '@/models/Catgories';

type RecipesCategoriesRegionProps = {
  categoriesRegionData: CategoriesType;
};

const RecipesCategoriesRegion: FC<RecipesCategoriesRegionProps> = ({
  categoriesRegionData,
}) => {
  const router = useRouter();
  const {
    query: { categories, q },
  } = router;
  // Collapse Control
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  /// Check Open And Push
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
        <ListItemButton
          key={index}
          onClick={() => handlerFilerCategories(region)}
        >
          <ListItemText
            primary={
              <Typography variant="h5" component="span">
                {region}
              </Typography>
            }
          />
          <ListItemIcon sx={{ color: (theme) => theme.palette.primary.main }}>
            {!categories && region === 'تمامی' ? (
              <Icons.MdArrowRight size={'3rem'} color={colors.red['A700']} />
            ) : categories === '' ? (
              <Icons.MdArrowRight size={'3rem'} color={colors.red['A700']} />
            ) : categories === region ? (
              <Icons.MdArrowRight size={'3rem'} color={colors.red['A700']} />
            ) : (
              <Icons.MdArrowLeft size={'3rem'} />
            )}
          </ListItemIcon>
        </ListItemButton>
      );
    });
  };
  // View
  return (
    <Stack sx={{ p: 2, display: { lg: 'block', xs: 'none' } }}>
      <List
        component="nav"
        sx={{
          backgroundColor: (theme) => theme.palette.default?.main,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '0.1rem',
          gap: 3,
        }}
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primary={<Typography variant="h5">دسته های استانی</Typography>}
          />
          {open ? <Icons.MdExpandLess /> : <Icons.MdExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {renderCategoriesRegionItem()}
        </Collapse>
      </List>
    </Stack>
  );
};

export default RecipesCategoriesRegion;
