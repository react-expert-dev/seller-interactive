import React from 'react'
import BlogItem from './blogItem'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

import {
  Container,
  Box,
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
} from '@mui/material'
import { fontSize } from '@mui/system'
//Images
const pic1 = '/images/amazon-digital-marketing-agency.jpg'
const pic2 = '/images/amazon-fba-consultant-scaled.jpeg'
const pic3 = '/images/amazon-product-listing-optimization.jpg'
const pic4 = '/images/optimize-amazon-listing.jpg'
const pic5 = '/images/amazon-seller-scaled.jpg'
const pic6 = '/images/amazon-seller-services-scaled.jpg'
const pic7 = '/images/amazon-wholesale-business-scaled.jpg'
const pic8 = '/images/how-to-sell-on-amazon-scaled.jpg'
const pic9 = '/images/amazon-ppc-management.jpg'
const pic10 = '/images/amazon-advertising-agencies.jpg'
const pic11 = '/images/full-service-digital-marketing-agency.jpg'
const pic12 = '/images/amazon-review-manipulation-appeal.jpg'

const footerImg = ' /images/Mask-Group-1.png'
const today = new Date()
const blogData = [
  {
    blogImage: pic1,
    blogTitle:
      'Beyond The eCommerce Platform: This Year’s Marketing Tasks That An Amazon Digital Marketing Agency Can Help You With',
    blogDescription: `A year ago, there were many tasks you needed to accomplish on Amazon in order to rise above the stiff competition. You need to have an Amazon SEO service, market research, competitor analysis, inventory management, fulfillment choice, returns and refunds, and a whole lot more. Yet, despite these numerous tasks, you were able to survive and thrive! You are still here, figuring out how to increase your Amazon sales. Good job!

    Since you could optimize your store for the Amazon algorithm, the changes that occurred this year brought another batch of to-dos in your list outside the platform. So what are these tasks? Let’s check!`,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic2,
    blogTitle: '5 Ways Amazon FBA Consultants Can Help Your Business',
    blogDescription: `If you want to be a successful Amazon seller, you have to work smarter than harder. One of the ways to do this is through delegation. You can delegate many tasks, like order fulfillment management, at which an Amazon FBA consultant is extremely good.

Why do you need an Amazon consultant? Can't you do it on your own? How can they help your Amazon FBA business? Let us find out in this article.`,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic3,
    blogTitle:
      'Top 4 Seller Mistakes When Doing Amazon Product Listing Optimization',
    blogDescription: `Have you wondered how Amazon recommends products to you when you search for them? For example, even if you only put “shoes” on your search query, they are most likely to recommend boots or platform shoes, both of which are very specific types of shoes. 
    The answer is Amazon product listing optimization. 
    As an Amazon seller, you should be well-versed in optimizing your listings. Thus, this article will answer the question “What is Amazon listing optimization?” and discuss the top mistakes most sellers make when they optimize their listings.`,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic4,
    blogTitle: `Optimize Amazon Listing: Improve Your Brand's Visibility`,
    blogDescription: `Whether you're a new seller or not, learning how "Amazon listing optimization" is always one of the first approaches to improve product searchability. Knowing how the algorithm works and what it looks for in terms of product data is critical to optimizing your listing on Amazon. Although optimizing your product listings is not an Amazon requirement, it's how your target audience will be able to find your products throughout the marketplace. 

    This article addresses brand visibility, its importance, and how to optimize Amazon listing to increase exposure. Regardless of your selling experience, you will find these tips helpful, especially if you struggle to generate traffic to your listings. Read further to learn more. `,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic5,
    blogTitle: 'Successful Entrepreneurs: What to Know as an Amazon Seller',
    blogDescription: `Diving headfirst into the e-commerce world is no easy feat., but if you're ready to start your own business, risks are all part of the process. 
    Numerous platforms and marketplaces exist to list your products online, but selecting the right one will give your brand the best chance for success. Because of its broad audience and variety in selection, Amazon is often considered the best platform giving you access to global marketplaces - it's no wonder why many Amazon sellers have become successful entrepreneurs throughout the years. 
    So whether you are an entrepreneur looking for a new challenge or someone who has been struggling to find success in your current venture, selling on Amazon could be the perfect opportunity for you. This post will give you some insight into what it takes to be successful as an Amazon seller.`,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic6,
    blogTitle: 'Successful Business Venture with Amazon Seller Services',
    blogDescription: `Whether you’re a startup or professional seller, wanting to grow your business means facing new challenges from increasing customer demand to heavy competition. Growth is why many e-commerce sellers turn to Amazon FBA, a well-structured marketplace that provides the resources to expand.
    To accomplish your FBA business goals, making the decisions that fuel progress is critical, which means relying on a solid platform that will support scaling up. That’s what makes the Amazon marketplace such an excellent channel for so many small and medium-sized businesses that are ready to take their business to the next level.
    Amazon seller services help sellers make the right move by proposing the most suitable approach to their business goals. There are subcategories of services to specify the support needed, including Amazon seller consulting services.`,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic7,
    blogTitle:
      'The Entrepreneur’s Simple Guide to Starting an Amazon Wholesale Business',
    blogDescription: `Starting a wholesale business can be very profitable.
    You decide to jump in. After all, you have the capital and the will to make it work. You're also eyeing to join Amazon because everyone has taken their business there. Naturally, you think that's where you can succeed in times of crisis.
    But you have too many things to consider, and the scale of what you're trying to start overwhelms you. Add to that the complexity of the known and the uncertainty of the unknown in the Amazon marketplace.
    Worry no more. We're here to help you uncomplicate things and give you simple steps on matters related to starting your Amazon wholesale business.`,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic8,
    blogTitle: 'How to Sell on Amazon: Practical Tips for Aspiring Sellers',
    blogDescription: `Whether you want to sell a couple of items or start with a few things more, delving into e-commerce can be overwhelming. Not knowing where to start or what to do are only some of the few setbacks beginners might encounter. If you’re clouded with these thoughts but proactively taking in as much information as you can, then you’re on the right track. This only shows how interested and determined you are to give it a shot.
    Throughout the years, Amazon has been the leading big retail giant satisfying the needs of many, both sellers and customers. Through its innovative processes and features, Amazon takes care of you as the seller, your packages, and your customers—the more reason you can entrust your business to them.
    So what exactly are the basics in learning how to start selling on Amazon?
    In this ever-evolving world, competition has been burning hotter. Moreso, 2019 gave business owners the most challenging times due to the worldwide health crisis. The COVID-19 pandemic drove businesses to shut down; some even led to bankruptcy. But, on the other hand, the year 2020 ignited many startup ideas, including those of surviving companies and aspiring entrepreneurs.
    So, in this era, many individuals and organizations opt for starting businesses best fitting to the new normal, foreseeing possibilities and strategies for the long term.`,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic9,
    blogTitle: `Optimizing Your Retail Readiness for an Effective Amazon PPC Management`,
    blogDescription: `What makes a customer click on an ad? Brand popularity, reasonable pricing, nice visuals, and human-to-human marketing—those are factors you'd often see and hear. Indeed, they're things proven important to consider in creating an ad campaign. 
    However, it takes more than just that. In Amazon PPC management, you must work on nitty-gritty details to build a campaign successfully. They include determining the objective, selecting the pay-per-click (PPC) type, setting a budget and duration, researching keywords, and sorting out the Amazon Standard Identification Number (ASIN). 
    You might overlook or poorly implement the small details, sending your efforts to waste. One of these is the retail readiness of your ASINs. 
    You must carefully choose from your product listings and sort out the best- to worst-selling products. Then, focus on the items with higher sales and click-through rates. By doing this, your PPC campaigns in the making will be more effective and worth the investment.
    This article discusses retail readiness and how to get retail-ready for your Amazon PPC campaign.`,
    blogDate: today.toLocaleDateString('en-US'),
  },

  {
    blogImage: pic10,
    blogTitle: `Increase Your Brand’s Visibility and Sales by Working With Amazon Advertising Agencies`,
    blogDescription: `Whether you're new to selling on Amazon or not, you might find yourself thinking it would be nice to have some help around here. Unfortunately, certain processes might require a knowledgeable team that's been in the business for a while. This is where Amazon advertising agencies come to your rescue. 
    If there's anyone you should direct your Amazon-related questions to, it's the professionals who have tons of experience managing seller accounts. These are the people who truly know the ins and outs of Amazon, including the different guidelines to avoid suspension. As a seller, you would know that there are many rules and regulations you should at least familiarize yourself with. Failure to comply with Amazon's guidelines may result in your listings' or accounts' suspension, which would put a halt to your operations. 
    And to put it on a more specific scale, if there's anyone who knows best how you can succeed by selling on Amazon, these are digital marketing professionals who have explored numerous strategies for seller accounts just like yours. Enlisting their help may be beneficial not only for evading problems with your account; rather, they're here to help you grow. 
    But, how exactly can a full-service digital marketing agency boost your visibility and sales? Why are these things important when selling on Amazon? This article talks about how these marketing agencies can help you out and the concrete steps to go about this. Read on to know more!`,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic11,
    blogTitle: `Inclusive Branding Tips With a Full Service Digital Marketing Agency`,
    blogDescription: `“Do you feel recognized and valued?” sounds like a personal question, but this is a significant point that will help a brand gain a strong competitive advantage in marketing. 
    The winds are changing. Some marketing strategies that worked for the past decades have come to an end, and brands are beginning to realize the need to exert a lot of effort in digital marketing to keep a profitable business. One of these realizations is the demand for diverse marketing, which means people expect brands to cater to various audiences. 
    They want a brand to take a significant role beyond selling products— to treat customers as humans, understand their culture and perspective, and create a sense of belonging. This article discusses what inclusion is in e-commerce and how you can start inclusive branding with the help of a full service digital marketing agency`,
    blogDate: today.toLocaleDateString('en-US'),
  },
  {
    blogImage: pic12,
    blogTitle: `The How-Tos of Feedback and The Amazon Review Manipulation Appeal`,
    blogDescription: `Suppose you’re looking into product reviews of competitor brands within your niche. You find one with plenty of positive reviews, a lot of adjectives like “wow” and “amazing” and “incredible” written on them. You wonder if they are all true and, if yes, how can you get similar reviews for your brand?
What you see is what you get—in the world of e-commerce, you realize that this is not always the case. In fact, deceitful product reviews have been rampant through the years. Many sellers today still practice prohibited ways to get feedback, but the reasons vary. 
    Some might do such tricks on purpose, but others are simply confused with what’s allowed and what’s not. If you’re one of them, this is the perfect time to learn a bit more about encouraging product reviews on Amazon and the right way to do it. 
    “What if I’m at risk of account suspension?” In that case, you can go for an Amazon review manipulation appeal. This article discusses this solution as well, so keep reading!`,
    blogDate: today.toLocaleDateString('en-US'),
  },
]

const Blog = () => {
  return (
    <div>
      <h1>Blog page</h1>
      <Card sx={{ margin: 4, borderRadius: 4 }}>
        <Grid container direction='row'>
          <Grid item sm={4} md={4} lg={4} xl={4}>
            <CardHeader
              subheader={blogData[0].blogDate && blogData[0].blogDate}
            />
            <CardContent>
              <Link to='#' underline='none'>
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
              height='100%'
              image={blogData[0].blogImage}
              alt='Image'
              sx={{}}
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
      <Container maxWidth='md'>
        <Box
          sx={{
            borderRadius: 4,
            bgcolor: '#fb3767',
            height: '50vh',
            backgroundImage: `url(${footerImg})`,

            marginTop: '4px',
          }}
        >
          <Container
            style={{
              width: '65%',
              padding: '50px',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <h1 style={{ marginBottom: '8px' }}>
              Go from surviving to thriving on Amazon.
            </h1>
            <p style={{ marginBottom: '20px' }}>
              Use the power and influence of advertising to increase sales.
              Learn more about how you can benefit from our management
              expertise.
            </p>
            <Button>Talk Us</Button>
          </Container>
        </Box>
      </Container>
    </div>
  )
}

export default Blog
