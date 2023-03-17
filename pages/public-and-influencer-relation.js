import React from 'react'
import Header from '@/components/Header'
import Collapse from '@/components/Collapse'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Container, Grid } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { textVariant2 } from '@/components/motion'
import Blog from '@/components/Card'
import Head from 'next/head'

const Digitalmarketing = () => {
  const items = [
    {
      title:"BRAND AWARENESS CAMPAIGNS ",
      desc:"Shiftpulse  understands that building a strong brand is essential for business success. Our team works closely with clients to define their target audience and identify the platforms where they are most active. We then create tailored messaging and content that speaks directly to their audience and leverages the right platforms to maximise impact.Additionally, we track the success of brand awareness campaigns using Google Analytics, which allows us to measure website traffic, engagement, and other key metrics to ensure that our efforts are achieving the desired results. Whether you're looking to attract new customers, build loyalty among existing customers, or simply raise awareness of your brand, Shiftpulse is here to help you achieve your goals and build a strong foundation for future growth"
    },
    {
      title:"MEDIA EVENTS  ",
      desc:"Shiftpulse helps in creating and executing successful media events for businesses looking to generate buzz and enhance their brand identity. Our team of experienced professionals work closely with clients to understand their unique messaging and goals, and develop a tailored strategy to ensure the event achieves maximum impact. By leveraging our extensive network of media contacts and utilising cutting-edge technology, we can help businesses generate media coverage and public attention, increasing their visibility and ultimately strengthening their brand identity.Our end-to-end event management services include everything from concept creation and planning to logistics and media outreach. We take care of every detail, ensuring a seamless and successful event that leaves a lasting impression on attendees and the media alike. Contact us today to learn more about how we can help your business achieve its media event objectives."
    },
    {
        title:'INFLUENCER RELATIONS',
        desc:"At Shiftpulse we understand that influencer marketing is a powerful way to build brand awareness and connect with your target audience.Shiftpulse will help identify the right influencers for your target audience, We then create tailored campaigns and collaborations that allow influencers to authentically promote our clients' brand, products, and services to their followers.  By leveraging the power of influencer marketing, Shiftpulse will help your business increase brand awareness, reach new audiences, and drive engagement with their brand. Whether you're looking to launch a new product, raise awareness of your brand, or build a loyal community of followers, our influencer relations services can help you achieve your goals and take your business to the next level. "
      },
      {
        title:'LAUNCHING PRODUCTS ',
        desc:"Launching a new product is both exciting and challenging. That's why Shiftpulse offers comprehensive product launch services to help your business successfully introduce new products to their target audience in the most effective and efficient way possible.Our team works closely with you to develop a strategic product launch plan that takes into account the target audience, messaging, and timing. We then execute the plan using a variety of marketing channels, such as social media, email marketing, and influencer partnerships, to ensure maximum impact and reach. Additionally, we provide post-launch analysis to evaluate the success of the campaign and identify opportunities for improvement.With Shiftpulse you  can confidently launch new products and capture the attention of your target audience, while driving sales and building a strong foundation for future growth. "
      }
  ]
  return (
   <main>
    <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <meta name="description" content="Shift Marketers offers top-notch public and influencer relations services to help your business reach its full potential. Contact us today to learn more!" />
    <meta name="keywords" content="public relations, influencer relations, marketing services, shift marketers, kenya" />
    <meta name="author" content="Shift Marketers" />
    <meta name="robots" content="index,follow" />
    
    <meta property="og:title" content="Public & Influencer Relations Services | Shift Marketers" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://shiftmarketers.co.ke/public-influencer-relation.html" />
    <meta property="og:image" content="https://shiftmarketers.co.ke/public.jpg" />
    <meta property="og:description" content="Shift Marketers offers top-notch public and influencer relations services to help your business reach its full potential. Contact us today to learn more!" />
    <meta property="og:site_name" content="Shift Marketers" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Public & Influencer Relations Services | Shift Marketers" />
    <meta name="twitter:image" content="https://shiftmarketers.co.ke/public.jpg" />
    <meta name="twitter:description" content="Shift Marketers offers top-notch public and influencer relations services to help your business reach its full potential. Contact us today to learn more!" />
    <meta name="twitter:site" content="@shiftmarketers" />
    <link rel="icon" href='/logo.png' />
    <title>Public & Influencer Relations Services | Shift Marketers</title>
    </Head>
    <Header  />
    <Container>
    <Grid.Container>
        <Grid lg={6} md={6} sm={12} xs={12} >
         <Container style={{marginTop:30,paddingLeft:40}}>
         <motion.h1  initial="hidden" whileInView="show" style={{marginTop:40,fontWeight:'bolder',textTransform:'initial'}} variants={textVariant2}>
         Public and Influencer Relations
        </motion.h1>
        <motion.h4  initial="hidden" whileInView="show" style={{fontWeight:'bolder'}} variants={textVariant2}>
        Your reputation is our top priority.
        </motion.h4>
        <motion.p  initial="hidden" whileInView="show" style={{fontWeight:'bolder'}} variants={textVariant2}>
        Is your business looking to make an impact? Shiftpulse can help you maximise media coverage and build your brand with standout PR.

      <br/><br />  We grow your business relationships with the media and influencers that matter. We proactively manage press activities and seek out opportunities to keep your message moving, even when there isn’t a big budget campaign.

      <br/><br /> Shiftpulse will work  with you to craft compelling narratives that showcase your brand's unique value proposition and resonate with your target customers. 

      <br/><br />  Through targeted outreach to the media and key influencers in your industry, we help you gain exposure, build credibility, and establish your brand as a thought leader in your space.

      <br/><br />  The Shiftpulse team of experienced PR professionals is skilled at navigating the ever-changing media landscape, and we know how to create campaigns that generate buzz and drive results.

      <br/><br />   As a business owner or marketer, you know how important it is to stay ahead of the competition and make a lasting impression on your target audience. But with so many brands vying for attention in today's crowded market, it can be challenging to break through the noise and get noticed. 
      <br /><br/>That's where Shiftpulse comes in - our team of experienced public and influencer relations specialists can help you craft a compelling message, connect with key influencers in your industry, and generate the buzz you need to get your brand noticed.
      <br /><br /> Whether you're a startup looking to make a splash or an established brand seeking to revitalize your image, we have the expertise and resources to help you achieve your goals. Contact us today to learn more about how Shiftpulse can help take your brand to the next level.

        </motion.p>

         </Container>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12}>
        <div style={{marginTop:100}} className='image-container'>
         <Image src={"/pr2.jpg"} className="image" fill/>
         </div>
        </Grid>
     </Grid.Container>
          <motion.h4  initial="hidden" whileInView="show" style={{marginTop:40,fontWeight:'bolder'}} variants={textVariant2}>
          SHIFTPULSE  PUBLIC RELATION SERVICES

        </motion.h4>
     <Collapse image="/pr2.jpg" items={items}/>
    </Container>
    <Footer />
   </main>
  )
}

export default Digitalmarketing