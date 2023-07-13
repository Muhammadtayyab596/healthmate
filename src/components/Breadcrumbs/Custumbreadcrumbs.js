import React from 'react';
import { Breadcrumbs, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Custumbreadcrumbs = (props) => {
  return (
    <>
      <div role="presentation">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <MuiLink style={{ color: '#212B36', textDecoration: 'none' }} color="inherit" href="https://www.google.com/">
            Home
          </MuiLink>
          <RouterLink style={{ color: '#212B36', textDecoration: 'none' }} color="inherit" to="/dashboard/app">
            Dashboard
          </RouterLink>
          <Typography color="text.primary">{props.breadcrumbsName}</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
};

export default Custumbreadcrumbs;
