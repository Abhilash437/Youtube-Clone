import React from 'react';
import { Link } from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {xs:'380px',sm:'58px', md:'320px'}, boxShadow:'none', borderRadius:0}}>
        <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
            alt={snippet?.title}
            image={snippet?.thumbnails?.high?.url}
            sx={{width: {xs:'380px', sm:'358px'}, height:'180px'}}
            />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e', height:106, }}>
            <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='white'>
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                    {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard