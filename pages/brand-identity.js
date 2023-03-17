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
      title:"BRAND NAMING ",
      desc:"At Shiftpulse, we take a meticulous approach to brand naming. Our process involves thorough research and analysis to ensure that the name we develop is both unique and memorable.Whether we are working on a new brand or rebranding an existing one, our ultimate goal is to create a name that will withstand the test of time and help you achieve your business objectives. "
    },
    {
      title:"LOGO DESIGN ",
      desc:"A logo is the visual representation of a brand and is often the first thing that comes to mind when people think of a brand. Shiftpulse team of experienced designers will help create a logo that is simple, memorable, and unique, that captures the essence of your brand.  Just like with brand naming, we prioritise in  ensuring that our logos stand the test of time and help you  achieve your business objectives. Shiftpulse Marketers understands that a logo is a critical aspect of brand identity, and we work to create logos that will resonate with your audiences and leave a lasting impression"
    }
  ]
  return (
   <main>
    <Head>
    <title>Brand Identity Services | Shift Marketers Kenya</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Shift Marketers is a leading marketing agency in Kenya, offering brand identity services to help businesses stand out from the competition. Contact us today for a free consultation." />
    <meta name="keywords" content="brand identity, marketing agency, Kenya, Shift Marketers" />
    <meta name="author" content="Shift Marketers" />
    
    <link rel="canonical" href="https://www.shiftmarketers.co.ke/brand-identity" />
    <meta property="og:title" content="Brand Identity Services | Shift Marketers Kenya" />
    <meta property="og:description" content="Shift Marketers is a leading marketing agency in Kenya, offering brand identity services to help businesses stand out from the competition. Contact us today for a free consultation." />
    <meta property="og:image" content="https://www.shiftmarketers.co.ke/brand.jpg" />
    <meta property="og:url" content="https://www.shiftmarketers.co.ke/brand-identity" />
    <meta name="twitter:title" content="Brand Identity Services | Shift Marketers Kenya" />
    <meta name="twitter:description" content="Shift Marketers is a leading marketing agency in Kenya, offering brand identity services to help businesses stand out from the competition. Contact us today for a free consultation." />
    <meta name="twitter:image" content="https://www.shiftmarketers.co.ke/brand.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="robots" content="index,follow" />
    <link rel="icon" href='/logo.png' />
    </Head>
    <Header  />
    <Container>
    <Grid.Container>
        <Grid lg={6} md={6} sm={12} xs={12} >
         <Container style={{marginTop:30,paddingLeft:40}}>
         <motion.h4  initial="hidden" whileInView="show" style={{marginTop:40,fontWeight:'bolder'}} variants={textVariant2}>
         BRAND IDENTITY
        </motion.h4>
        <motion.h4  initial="hidden" whileInView="show" style={{fontWeight:'bolder'}} variants={textVariant2}>
        Building brands that inspire and connect.
        </motion.h4>
        <motion.p  initial="hidden" whileInView="show" style={{fontWeight:'bolder'}} variants={textVariant2}>
        Whether we’re creating a new brand or breathing life into an existing one, the outcome is the same – a brand your audiences can relate to, believe in and engage with.

      <br /><br />  Shiftpulse will help you define your big idea and develop a compelling strategy – the foundation upon which every other piece of activity and consumer touchpoint is based. 

      <br /><br /> With our clearly defined process, we'll help you cut through the complexities of brand development to deliver a cohesive and considered brand-building strategy. It all starts with a period of discovery.


      <br /><br /> We’ll dive deep into your brand’s history, values, and goals. Shiftpulse will also explore your industry, competition, and target audience to gain a comprehensive understanding of your brand’s place in the market. By doing so, we can identify what sets you apart and what drives your audience to engage with your brand.

      <br /><br /> The Shiftpulse team will collaborate with you to define your brand’s unique personality, voice, and messaging. This will help inform every aspect of your brand’s visual identity, from your logo and colour palette to your typography and imagery.

      <br /><br /> But our work doesn’t end there. Shiftpulse will help you develop a comprehensive brand strategy that takes into account every touchpoint where your audience interacts with your brand. This includes everything from your website to your  social media channels.

At Shiftpulse, we believe that a strong brand is more than just a collection of visual elements and marketing tactics. It's a living, breathing entity that embodies your values and connects with your audience on a deeper level. With our expertise in brand development, we can help you create a brand that resonates with your audience and drives your business forward.
  
        </motion.p>

         </Container>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12}>
        <div style={{marginTop:100}} className='image-container'>
         <Image src={"/brand1.jpg"} className="image" fill/>
         </div>
        </Grid>
     </Grid.Container>
          <motion.h1  initial="hidden" whileInView="show" style={{marginTop:40,fontWeight:'bolder'}} variants={textVariant2}>
          SHIFTPULSE   BRAND IDENTITY SERVICES 

        </motion.h1>
     <Collapse image="/brand1.jpg" items={items}/>
    </Container>
    <Footer />
   </main>
  )
}

export default Digitalmarketing