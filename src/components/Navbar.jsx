import React from 'react';
import {Stack, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import {SearchBar} from '../components';
import { useState } from 'react';

const Navbar = () => {
  
  return (
    <Stack
      direction = 'row' 
      alignItems = 'center'
      p={2}
      sx={{position:'sticky', backgroundColor:'#000', justifyContent:'space-between', top:0}}
    >
      <Link to='/' styles={{display: 'flex', alignItems:'center'}}>
        <img src={logo} alt="youtoobe" height={45}></img>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar