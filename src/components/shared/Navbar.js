"use client";
import * as React from 'react';
import { Ubuntu } from 'next/font/google';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const pages = [
  'HOURS & LOCATION',
  'MENU',
  'RESTAURANT',
  'WINE-BAR',
  'PRIVATE-DINING',
  'GALLERY',
];

function Navbar() {
  return (
    <AppBar position="static" className="bg-[#0B1519] h-[4.8175rem] flex justify-center items-center">
      <Container maxWidth="" className="flex justify-center items-center">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: { xs: 'row', md: 'row' }, // Stack buttons vertically on mobile
              flexWrap: 'wrap'
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                sx={{
                  color: '#BCA263',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.25rem 1.5rem',
                  height: 'auto',
                  lineHeight: '1rem',
                  fontSize: { xs: '1rem', md: '1.375rem' }, 
                  borderRight: {
                    md: index !== pages.length - 1 ? '3.5px solid' : 'none',
                  },
                  borderRadius: 0,
                  fontFamily: ubuntu.style.fontFamily,
                }}
                className="text-[#BCA263] tracking-widest"
                style={{ fontWeight: '500' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
