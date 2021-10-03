import React from 'react'
//Material UI imports
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia,
} from '@mui/material'
const BlogItem = ({ data }) => {
  return (
    <>
      <div style={{ padding: '', margin: 4 }}>
        <Card
          sx={{ maxWidth: 345, borderRadius: 4 }}
          style={{ padding: '20px' }}
        >
          <CardMedia
            component='img'
            height='140'
            image={data.blogImage}
            alt='Image'
            sx={{ borderRadius: 4 }}
          />
          <CardHeader subheader={data.blogDate && data.blogDate} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {data.blogTitle && data.blogTitle}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {data.blogDescription && data.blogDescription}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default BlogItem
