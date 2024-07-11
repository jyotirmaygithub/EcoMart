import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff', // White background
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
  border: '1px solid #e1e1e1', // Light border
  maxWidth: 300,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TotalBox = ({ totalQuantity, totalPrice }) => {
  return (
    <StyledCard>
      <ShoppingCartIcon style={{ fontSize: 60, color: '#3f51b5' }} />
      <Typography variant="h5" gutterBottom>
        Payment Summary
      </Typography>
      <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <MonetizationOnIcon style={{ marginRight: '0.5rem', color: '#ff9800' }} />
        <Typography variant="body1">
          Total Quantity: {totalQuantity}
        </Typography>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <MonetizationOnIcon style={{ marginRight: '0.5rem', color: '#ff9800' }} />
        <Typography variant="body1">
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </StyledCard>
  );
};

export default TotalBox;
