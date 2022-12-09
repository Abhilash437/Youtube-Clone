import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material';
import {Videos, ChannelCard} from "../components";
import { fetchFromApi } from '../utils/fetchFromApi';


const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([])
  const {id} = useParams();
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>setchannelDetail(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setvideos(data?.items));
  },[id])
  return (
    <Box 
      minHeight='95vh'
    >
      <Box>
        <div
          style={{
            background: 'rgb(2,0,36)',
            background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(67,9,121,1) 35%, rgba(255,128,0,1) 100%)',
            zIndex:10,
            height:'300px'
          }}
        />
        /<ChannelCard channelDetail={channelDetail} marginTop='-93px'/>
      </Box>
      <Box display='flex' p='2'>
          <Box
            
            alignItems="center"
            justifyContent="center"
            sx={{
              mr : {sm:'50px', xs:'6px'},
            }}
          />
            <Videos videos={videos} width="100%"/>
      </Box>
    </Box>
  )
}

export default ChannelDetail