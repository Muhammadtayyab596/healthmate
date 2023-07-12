import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

const Custumbreadcrumbs = (props) => {
  return (
    <>
      <div role="presentation">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/dashboard/app">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/dashboard/app">
            Dashboard
          </Link>
          <Typography color="text.primary">{props.breadcrumbsName}</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
};

export default Custumbreadcrumbs;
