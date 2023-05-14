import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import { OutlinedInput, InputAdornment, Toolbar } from '@mui/material';
import Iconify from '../iconify/Iconify';

const StyledRoot = styled(Toolbar)(({ theme }) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    // padding: theme.spacing(0, 1, 0, 3),
}));


const InputSearch = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': {
        width: "100%",
        boxShadow: theme.customShadows.z8,
    },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
}));


const SearchInput = () => {
    return (
        <InputSearch
            placeholder="Search user..."
            startAdornment={
                <InputAdornment position="start">
                    <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                </InputAdornment>
            }
        />
    )
}

export default SearchInput