import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DashboardBoxes = ({ totalusers, products }) => {
  const navigation = useNavigate();

  return (
    <div className="flex flex-wrap justify-around mt-8">
      <div className="w-full md:w-1/3 lg:w-1/4 px-2 mb-4">
        <Card className="w-full p-4 bg-blue-500 text-white hover:bg-blue-700 transition-all cursor-pointer" onClick={() => navigation('/view-users')}>
          <CardContent>
            <Typography variant="h5" component="div" className="text-center">
              Total Users
            </Typography>
            <Typography variant="h3" component="div" className="text-center mt-4">
              {totalusers}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/4 px-2 mb-4">
        <Card className="w-full p-4 bg-green-500 text-white hover:bg-green-700 transition-all cursor-pointer" onClick={() => navigation('/view-products')}>
          <CardContent>
            <Typography variant="h5" component="div" className="text-center">
              Total Products
            </Typography>
            <Typography variant="h3" component="div" className="text-center mt-4">
              {products}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/4 px-2 mb-4">
        <Card className="w-full p-4 bg-red-500 text-white hover:bg-red-700 transition-all">
          <CardContent>
            <Typography variant="h5" component="div" className="text-center">
              Total Orders
            </Typography>
            <Typography variant="h3" component="div" className="text-center mt-4">
              4500
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardBoxes;
