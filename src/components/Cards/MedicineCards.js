import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function MedicineCards({ item }) {
  const navigate = useNavigate();
  const getSigleData = (data) => {
    const id = data._id;
    navigate(`/dashboard/formula-comparison/${id}`);
  };

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            <Box component="span" sx={{ color: '#322B80', fontWeight: 'bold' }} m="{1}">
              Health
            </Box>
            <Box component="span" sx={{ color: '#528AC8', fontWeight: 'bold' }} m="{1}">
              Mate
            </Box>
          </Typography>

          <Typography variant="h4" sx={{ mb: 0, mt: 2 }} color="#000">
            {item.ShortName}
            <Box component="span" sx={{ fontSize: 14, ml: 1 }}>
              (name)
            </Box>
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.Brand} (Brand)
          </Typography>

          <Typography variant="body2" sx={{ mt: 1.5, mb: 2.5, color: '#000', fontWeight: 'bold' }}>
            {item.Formula}
            <br />
            {'(Formula)'}
          </Typography>

          <Divider />
          <Typography sx={{ mt: 2, color: '#000' }} variant="body2" color="text.secondary">
            Category
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h3" sx={{ lineHeight: 1, color: '#528AC8' }} color="#000">
              {item.Category}
            </Typography>
            <Box>
              <KeyboardArrowRightIcon
                onClick={() => {
                  getSigleData(item);
                }}
                sx={{ color: '#528AC8', cursor: 'pointer' }}
                fontSize="large"
              />
              {/* <Link to="/dashboard/formula-comparison/medicine-detail">id</Link> */}
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MedicineCards;
