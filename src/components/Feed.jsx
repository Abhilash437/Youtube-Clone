import React,{useState, useEffect} from 'react';
import {Stack, Box, Typography} from "@mui/material";
import {Sidebar, Videos} from '../components';
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>{setVideos(data.items)})
  },[selectedCategory])
  return (
    <Stack 
      sx={{
        flexDirection: {sx: "column", md:"row"},
      }}
    >
      <Box 
        sx={{
          height: {sx: 'auto', md:'92vh'},
          borderRight: '1px solid grey',
          px: {sx: 0, md: 2}
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{
            color:'white',
            mt:1.5
          }}
        >
          CopyRights Abhilash 2022
        </Typography>
      </Box>
      <Box p={2} sx={{overflow:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' sx={{color:'white'}}>
          {selectedCategory} <span style={{color:"red"}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed