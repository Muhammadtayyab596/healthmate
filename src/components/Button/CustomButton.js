import React from 'react'
import Button from '@mui/material/Button';
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles';


const ButtonStyle = styled(Button)({
    boxShadow: 'none',
    fontWeight: 400,
    borderRadius: "10px",
    fontSize: 15,
    padding: "9px 0px",
    color: "#fff",
    width : "100%",
    background: "linear-gradient(180deg, #528AC8 0%, #322B80 100%)",
})


function CustomButton(props) {
    const {text , sx , type } = props;
    return (
        <ButtonStyle sx={sx} type={type} >{text}</ButtonStyle>
    )
}



CustomButton.propTypes = {
    text: PropTypes.any,
    sx: PropTypes.any,
    type: PropTypes.any,
};

export default CustomButton