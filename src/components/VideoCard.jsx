import React from 'react';
import { Link } from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoProfilePicture } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet}, width}) => {
  return (
    <Card sx={{width: {xs:width,sm:'320px', md:'320px'}, boxShadow:'none', borderRadius:5}}>
        <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
            alt={snippet?.title}
            image={snippet?.thumbnails?.high?.url}
            sx={{width: {xs: width || "384px", sm:'358px'}, height:'180px'}}
            />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e', height:106, display:'fex', flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:0}}>
            <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
            <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={snippet?.title}
                    sx={{borderRadius:'50%', height:40, width:40, mb:2, border:'1px solid gray'}}
                    
            />
            </Link>
            <CardContent sx={{display:'flex', flexDirection:'column', mr:2}}>
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
        </CardContent>
    </Card>
  )
}

export default VideoCard