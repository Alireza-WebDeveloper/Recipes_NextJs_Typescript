import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { breadcrumbsTypeObj } from '@/models/BreadCrumbs';

type BreadCrumbsItemProps = {
  brdLink: breadcrumbsTypeObj;
};

const BreadCrumbsItem: FC<BreadCrumbsItemProps> = ({ brdLink }) => {
  return brdLink.active ? (
    <Button
      variant="text"
      sx={{ color: (theme) => theme.palette.error.main, fontSize: '1.5rem' }}
      disabled
    >
      {brdLink.title}
    </Button>
  ) : (
    <Link
      href={brdLink.href}
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <Button
        variant="text"
        sx={{
          color: (theme) => theme.palette.primary.main,
          fontSize: '1.5rem',
        }}
      >
        {brdLink.title}
      </Button>
    </Link>
  );
};

export default BreadCrumbsItem;
