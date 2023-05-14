import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const card = (
    <>
        <CardContent>
            <Typography variant="h6" component="div">
                <Box component="span" sx={{ color: "#322B80", fontWeight: "bold" }} m="{1}">
                    Health
                </Box>
                <Box component="span" sx={{ color: "#528AC8", fontWeight: "bold" }} m="{1}">
                    Mate
                </Box>
            </Typography>

            <Typography variant="h4" sx={{ mb: 0, mt: 2 }} color="#000">
                Destazine
                <Box component="span" sx={{ fontSize: 14, ml: 1 }}>
                    (name)
                </Box>
            </Typography>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Sante (Brand)
            </Typography>

            <Typography variant="body2" sx={{ mt: 1.5, mb: 2.5, color: "#000", fontWeight: "bold" }}>
                Desloratadine (5mg)
                <br />
                {'(Formula)'}
            </Typography>

            <Divider />
            <Typography sx={{ mt: 2, color: "#000" }} variant="body2" color="text.secondary">
                Category
            </Typography>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h3" sx={{ lineHeight: 1, color: "#528AC8" }} color="#000">
                    D
                </Typography>
                <Link>
                    <KeyboardArrowRightIcon sx={{ color: "#528AC8" }} fontSize="large" />
                </Link>
            </Stack>
        </CardContent>
    </>
);



function MedicineCards() {
    return (
        <Box>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}

export default MedicineCards