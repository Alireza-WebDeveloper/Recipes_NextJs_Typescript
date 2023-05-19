import React, { FC } from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import * as Icons from 'react-icons/md';

type BtnDefaultRecipesProps = {
  title: string;
};

// MdOutlineKeyboardArrowLeft
const BtnDefaultRecipes: FC<BtnDefaultRecipesProps> = ({ title }) => {
  const router = useRouter();
  /// Push Router Default Mode
  const handleDefaultRecipesPage = () => {
    router.push('/recipes');
  };
  return (
    <Button
      onClick={handleDefaultRecipesPage}
      variant="text"
      sx={{ fontSize: '1.4rem', width: { lg: '90%', xs: '80%' }, mb: 2 }}
      endIcon={<Icons.MdOutlineKeyboardArrowLeft />}
    >
      {title}
    </Button>
  );
};

export default BtnDefaultRecipes;
