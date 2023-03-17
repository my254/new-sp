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
      title:"A Digital Marketing Strategy",
      desc:"As Shiftpulse digital marketers , we believe that a successful digital marketing strategy is tailored to the unique needs and goals of each business.That's why we don't just hand our clients a one-size-fits-all marketing plan.  Instead, we take the time to thoroughly analyse your business and your existing online presence, including your website and social media platforms, to fully understand your brand, your target audience, and your competition.         This deep understanding allows us to develop a customised marketing strategy that is specifically designed to achieve your business goals. We work with you every step of the way, from initial planning to ongoing optimization and analysis, to ensure that your digital marketing efforts are effective and aligned with your business objectives. Contact us today to start creating a digital marketing strategy that's tailored to    your business needs"
    },
    {
      title:"Content Generation And Optimisation ",
      desc:"Shiftpulse marketers know that simply creating content is not enough to drive traffic and engagement to your website. That's why we specialise in creating highly optimised content that is tailored to your specific target audience and optimised for search engines. Shiftpulse marketers team of experienced content writers and SEO experts work together to research and identify the most relevant keywords and associated links for your business, ensuring that your content is highly discoverable and easily found by potential customers. By creating content that is both engaging and optimised, we can help you reach a wider audience and increase the overall effectiveness of your digital marketing efforts.  Contact us today to learn more about how we can help you create highly optimised content that resonates with your target audience."
    },
    {
      title:"Social Media Management",
      desc:"Shiftpulse Marketers understand that social media management is a crucial component of any digital marketing strategy. Our  digital marketing experts will work to develop a customised  social media management plan that aligns with your overall marketing strategy and brand voice. Shiftpulse Marketers will oversee every aspect of your company’s social media presence , from planning and scheduling content to monitoring and analysing engagement data.Our goal is to build a thriving online community around your brand, by providing relevant and engaging content, responding to customer inquiries, and fostering positive interactions.We also provide detailed analysis and reporting so that you can track the success of your social media campaigns and make data-driven decisions to optimise your strategy.  Let Shiftpulse help you take your business to the next level and meet all of your digital marketing goals   ."
    },
    {
      title:"Curating SEO Friendly  And Engaging Blogs ",
      desc:"Blogging not only helps to establish your brand's voice and authority, but it's also a critical component of search engine optimization (SEO).  By creating high-quality, informative blog content that's relevant to your target audience, you can increase your website's visibility and drive organic trafficOur team of expert writers at Shifpulse marketers will work with you to provide highly optimised blogs  by including effective keywords, page metadata, and imagery designed to draw interest which will in turn increase your website’s visibility and drive organic traffic."
    }
  ]
  return (
   <main>
    <Head>
      <title>Digital Marketing Services - Increase Your Online Presence</title>
      <meta name="description" content="We provide expert digital marketing services to help you boost your online visibility and reach your target audience. Contact us today to get started!" />
      <meta name="keywords" content="digital marketing, online marketing, SEO, SEM, PPC, social media marketing" />
      <meta name="author" content="Your Company Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href="https://www.shiftmarketers.co.ke/digital-marketing" />
      <meta name="og:title" content="Digital Marketing Services - Increase Your Online Presence" />
      <meta name="og:description" content="We provide expert digital marketing services to help you boost your online visibility and reach your target audience. Contact us today to get started!" />
      <meta name="og:url" content="https://www.shiftmarketers.co.ke/digital-marketing" />
      <meta name="og:image" content="https://www.shiftmarketers.co.ke/digital.jpg" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="SHITPULSE MARKETERS" />
      <meta name="twitter:title" content="Digital Marketing Services - Increase Your Online Presence" />
      <meta name="twitter:description" content="We provide expert digital marketing services to help you boost your online visibility and reach your target audience. Contact us today to get started!" />
      <meta name="twitter:image" content="https://www.shiftmarketers.co.ke/digital.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@YourTwitterHandle" />
      <meta name="twitter:creator" content="@YourTwitterHandle" />
      <link rel="icon" href='/logo.png' />
    </Head>
    <Header  />
    <Container>
    <Grid.Container>
        <Grid lg={6} md={6} sm={12} xs={12} >
         <Container style={{marginTop:30}}>
         <motion.h1  initial="hidden" whileInView="show" style={{marginTop:40,fontWeight:'bolder'}} variants={textVariant2}>
          Digital Marketing
        </motion.h1>
        <motion.h4  initial="hidden" whileInView="show" style={{fontWeight:'bolder'}} variants={textVariant2}>
          Connecting you to the world, one click at a time.
        </motion.h4>
        <motion.p  initial="hidden" whileInView="show" style={{fontWeight:'bolder'}} variants={textVariant2}>
       <br /> Given how rapidly the business landscape is shifting the question isn’t whether you should shift to the digital era rather, how best to navigate your business in the digital landscape.

        Congratulations,  on taking your business into the digital landscape! However, a mere online presence may not be enough to compete in today’s fast-paced digital world.

        <br />   <br />    To succeed , it’s crucial to have a comprehensive digital marketing strategy that encompasses: Search engine optimization (SEO) to increase your website’s visibility and organic traffic, optimise your website and content for search engines .
        <br /><br />Social media marketing to build a strong media  presence, content marketing with the aim of attracting and engaging a target audience, building brand awareness, and driving website traffic, email marketing, and more.

        At Shiftpulse Marketers  we understand the importance of a solid digital marketing strategy for any business that wants to thrive in the digital era. 

        <br />   <br />   Our experienced team of digital marketing experts can work with you to develop a customised digital marketing plan that fits your specific needs and goals.

        From optimising your website for search engines to creating engaging content, managing your social media profiles, and implementing effective email campaigns, we have the expertise to take your digital marketing efforts to the next level.

        <br />   <br />  With our help, you can stay ahead of the competition and take your business to new heights in the digital landscape. 

        Contact us today and let's work together to achieve your digital marketing goals!
  
        </motion.p>

         </Container>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12}>
        <div className='image-container'>
         <Image src={"/digital_2.jpg"} className="image" fill/>
         </div>
        </Grid>
     </Grid.Container>
          <motion.h4  initial="hidden" whileInView="show" style={{marginTop:40,fontWeight:'bolder'}} variants={textVariant2}>
          SHIFTPULSE   DIGITAL MARKETING SERVICES 

        </motion.h4>
     <Collapse image="/digital_2.jpg" items={items}/>
    </Container>
    <Footer />
   </main>
  )
}

export default Digitalmarketing