import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#322B80',
        fontSize: 16
    },
    '& label': {
        color: '#A1A1A1',
        fontSize: 15
    },
    '& fieldset': {
        borderRadius: '13px',
        color: 'red',
    },
    // '& .MuiInput-underline:after': {
    //     borderBottomColor: 'green',
    // },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#e0e0e0',
        },
        '&:hover fieldset': {
            borderColor: '#528AC8',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#322B80',
        },
    },
});

function InputField(props) {
    const {
        InputProps,
        margin,
        label,
        type,
        name,
        id,
    } = props;
    return (
        <CssTextField
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            type={type}
            margin={margin}
            InputProps={InputProps}
        />
    )
}


InputField.propTypes = {
    name: PropTypes.any,
    InputProps: PropTypes.any,
    margin: PropTypes.any,
    label: PropTypes.any,
    type: PropTypes.any,
    id: PropTypes.any,

};
export default InputField;