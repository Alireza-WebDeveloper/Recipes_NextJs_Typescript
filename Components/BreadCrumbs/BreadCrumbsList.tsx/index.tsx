import { FC } from 'react';
import { Breadcrumbs, Button, Color } from '@mui/material';
import * as Icons from 'react-icons/md';
import Link from 'next/link';
import BreadCrumbsItem from '../BreadCrumbsItem.tsx';
import { breadcrumbsTypeList } from '@/models/BreadCrumbs/index.js';

type BreadCrumbsListProps = {
  breadcrumbsLink: breadcrumbsTypeList;
};

const BreadCrumbsList: FC<BreadCrumbsListProps> = ({ breadcrumbsLink }) => {
  const renderBreadCrumbsItem = () => {
    return breadcrumbsLink.map((brdLink) => {
      return <BreadCrumbsItem key={brdLink.id} brdLink={brdLink} />;
    });
  };
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<Icons.MdNavigateNext />}>
      {renderBreadCrumbsItem()}
    </Breadcrumbs>
  );
};

export default BreadCrumbsList;
