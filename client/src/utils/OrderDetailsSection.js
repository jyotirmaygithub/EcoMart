import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { dispalyMoney } from '../components/DisplayMoney/displayMoney';

const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
  border: '1px solid #e1e1e1', // Light border
  maxWidth: 300,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TotalBox = ({ totalQuantity, totalPrice }) => {
  const price = dispalyMoney(totalPrice)
  return (
    <StyledCard className='space-y-4'>
      <ShoppingCartIcon style={{ fontSize: 60, color: '#F1C40F' }} />
      <Typography variant="h5" gutterBottom>
        Payment Summary
      </Typography>
      <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <MonetizationOnIcon style={{ marginRight: '0.5rem', color: 'brown' }} />
        <Typography variant="body1">
          Total Quantity: {totalQuantity}
        </Typography>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <MonetizationOnIcon style={{ marginRight: '0.5rem', color: 'green' }} />
        <Typography variant="body1">
          Total Price: {price}
        </Typography>
      </Box>
    </StyledCard>
  );
};

export default TotalBox;
