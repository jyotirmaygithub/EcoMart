import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

// Sample images for each category (replace with actual image URLs)
const categoryImages = [
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MDYyNjYxNTB8&ixlib=rb-4.0.3&q=85', // Electronics
  'https://images.unsplash.com/photo-1535269414141-739bf0054cde?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MjA1MjkxODZ8&ixlib=rb-4.0.3&q=85', // Books
  'https://images.unsplash.com/photo-1602810319428-019690571b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHwyM3x8c2hpcnR8ZW58MHx8fHwxNzIwNTI5MjM4fDA&ixlib=rb-4.0.3&q=80&w=1080', // Clothing
  'https://images.unsplash.com/photo-1565620731358-e8c038abc8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHwyNnx8a2l0Y2hlbnxlbnwwfHx8fDE3MjA1MjkyNjZ8MA&ixlib=rb-4.0.3&q=80&w=1080', // Home & Kitchen
  'https://images.unsplash.com/photo-1577741314755-048d8525d31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHwzfHxnYW1lcyUyMHxlbnwwfHx8fDE3MjA1MjkzMDl8MA&ixlib=rb-4.0.3&q=80&w=1080', // Toys & Games
  'https://images.unsplash.com/photo-1612817288484-6f916006741a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0cyUyMHxlbnwwfHx8fDE3MjA1MjkzNTl8MA&ixlib=rb-4.0.3&q=80&w=1080', // Beauty & Personal Care
  'https://images.unsplash.com/photo-1590502160462-58b41354f588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHwxN3x8c3BvcnRzJTIwaW5zdHJ1bWVudHMlMjB8ZW58MHx8fHwxNzIwNTI5NDExfDA&ixlib=rb-4.0.3&q=80&w=1080', // Sports & Outdoors
  'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHwyMXx8dmVnZXRhYmxlc3xlbnwwfHx8fDE3MjA1Mjk0NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080', // Automotive
];

const categories = [
  'Electronics',
  'Books',
  'Clothing',
  'Home & Kitchen',
  'Toys & Games',
  'Beauty & Personal Care',
  'Sports & Outdoors',
  'vegetables'
  // Add more categories as needed
];

const CategorySlider = () => {
  return (
    <div className="px-2 my-5 mt-32 ">
      <TableContainer style={{ overflowX: 'auto', display: 'flex' }}>
        <Table style={{ minWidth: '600px' }}>
          <TableBody>
            <TableRow>
              {categories.map((category, index) => (
                <TableCell key={index} style={{ border: 'none', minWidth: '80px', padding: '0 8px' }}>
                  <div className="flex flex-col items-center">
                    <img
                      src={categoryImages[index]}
                      alt={category}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                    />
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CategorySlider;
