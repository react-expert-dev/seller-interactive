import React from 'react'
import BlogItem from './blogItem'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia,
} from '@mui/material'
//Images
const pic1 = '/images/amazon-digital-marketing-agency.jpg'
const pic2 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic3 = 'images/amazon-fba-consultant-scaled.jpeg'
const pic4 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic5 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic6 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic7 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic8 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic9 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic10 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic11 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic12 = '/images/amazon-fba-consultant-scaled.jpeg'

const today = new Date()
const blogData = [
  {
    blogImage: pic1,
    blogTitle:
      'Beyond The eCommerce Platform: This Year’s Marketing Tasks That An Amazon Digital Marketing Agency Can Help You With',
    blogDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic2,
    blogTitle: 'Good Title',
    blogDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    blogDate: today.toJSON(),
  },
  {
    blogImage: pic2,
    blogTitle: 'Good Title',
    blogDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic2,
    blogTitle: 'Good Title',
    blogDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic2,
    blogTitle: 'Good Title',
    blogDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic2,
    blogTitle: 'Good Title',
    blogDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic2,
    blogTitle: 'Good Title',
    blogDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic2,
    blogTitle: 'Good Title',
    blogDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic2,
    blogTitle: 'Good Title',
    blogDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    blogDate: today.toLocaleDateString('en-US'),
  },
]

const Blog = () => {
  return (
    <div>
      <h1>Blog page</h1>
      <Card sx={{ borderRadius: 4, padding: 4, margin: 4 }}>
        <Grid container direction='row'>
          <Grid item sm={4} md={4} lg={4} xl={4}>
            <CardHeader
              subheader={blogData[0].blogDate && blogData[0].blogDate}
            />
            <CardContent>
              <Link to='#!'>
                <Typography gutterBottom variant='h5' component='div'>
                  {blogData[0].blogTitle && blogData[0].blogTitle}
                </Typography>
              </Link>

              <Typography variant='body2' color='text.secondary'>
                {blogData[0].blogDescription && blogData[0].blogDescription}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item sm={8} md={8} lg={8} xl={8}>
            <CardMedia
              component='img'
              height='400'
              image={blogData[0].blogImage}
              alt='Image'
              sx={{ borderRadius: 4 }}
            />{' '}
          </Grid>
        </Grid>
      </Card>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        {blogData.map((e, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <BlogItem data={e} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Blog
