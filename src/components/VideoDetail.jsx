import React from 'react';
import {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import {Typography, Box, Stack} from "@mui/material";
import {Videos} from "../components";
import { fetchFromApi } from '../utils/fetchFromApi';


const VideoDetail = () => {
  const {id} = useParams();
  const [videoDetails, setVideoDetails] = useState('');
  const [videos,setVideos] = useState(null);
  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetails(data.items[0]));
    fetchFromApi(`search?part=snipper&relatedToVideoId=${id}&type=video`).then((data)=>setVideos(data.items))
  },[id])
  if(!videoDetails?.snippet) return "Loading..."
  const {snippet: {title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetails;
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
            <Typography color='white' variant='h5' fontWeight='bold'>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:"white"}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'subtitle1', md:'h6'}} color='white'>
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction='row' alignItems='center' gap='20px'>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} y={{md:1, hs:5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction="column"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail