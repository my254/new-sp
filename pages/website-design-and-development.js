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
      title:"WEBSITE  DESIGN &  DEVELOPMENT",
      desc:"At Shiftpulse Marketers, we understand the importance of a website’s design and development in creating a lasting impression on visitors. Our experienced team of web developers and designers work closely with clients to craft visually stunning and  intuitive web designs that are tailored to their specific needs.Our web designers are skilled in the use of user experience (UX) and user interface (UI) design principles to ensure that the website is not only visually appealing but also easy to navigate. They also stay up to date with the latest design trends and technologies to deliver a modern and engaging user experience.The web designers work hand in hand with our web developers to ensure that the website’s design is perfectly integrated with its functionality. Our developers are skilled in various programming languages and platforms, and they use their expertise to create a website that is responsive, fast, and secure.With our focus on both design and development, your website is sure to leave a lasting impression on your visitors and enhance your brand’s image. Whether you need a simple one-page website or a complex e-commerce platform, our web design and development team is equipped to deliver a stunning website that meets all your needs. "
    },
    {
      title:"SEARCH ENGINE OPTIMIZATION (SEO) ",
      desc:"Looking to increase your website's organic traffic and online visibility? Shiftpulse Marketers  offers professional SEO services to help you achieve top rankings on search engines using ethical tactics. We begin by conducting a thorough competitor analysis to understand what's working in your industry and identify opportunities for your website to stand out. Then, we create a custom SEO strategy that aligns with your business goals, target audience, and industry trends. Our team of SEO experts will optimise your content and website structure to drive the most traffic to your website.We use only white hat SEO tactics to improve your website's rankings. This means we focus on creating high-quality content, earning backlinks from reputable websites, and optimising your website's structure and metadata. Don't let your website get buried on page two or three of search engine results. Contact us today to learn more about how our unique SEO strategy can help boost your website's organic traffic and grow your business"
    },
    {
        title:'GOOGLE ANALYTICS SET UP ',
        desc:"As a business owner, it's crucial to understand how your website is performing and where your traffic is coming from. That's where Google Analytics comes in. It's a powerful tool that provides valuable insights into your website's traffic, behaviour, and conversions. As Shiftpulse we understand the importance of Google Analytics and how it can help you make data-driven decisions for your business. That's why we offer expert assistance in setting up and configuring Google Analytics for your website. Our team of analytics specialists will work with you to ensure that you're tracking the right metrics and goals that align with your business objectives. We'll also provide you with regular reports and analyses to help you understand how your website is performing and identify areas for improvement. Let Shiftpulse  help you harness the power of Google Analytics to drive more traffic and conversions to your website."
      },
      {
        title:'SITE AUDITS & CHECKER ',
        desc:"A site audit is a crucial component of any successful SEO strategy. It helps identify technical issues that may be hindering your website's performance and provides insights into how you can optimise your content to attract more traffic. Shiftpulse, offers comprehensive site audits that include a thorough technical SEO audit with recommended fixes, a content and keyword analysis, and on-page optimization recommendations.Shiftpulse  team of experts will review your website and provide you with a detailed report outlining any issues we find and actionable recommendations to fix them.We'll also provide you with a roadmap for improving your website's performance and increasing your visibility on search engines.  Let us help you uncover hidden issues and optimise your website to attract more traffic and improve your online presence. "
      }
  ]
  return (
   <main>
            <Head>
            <title>Website Design and Development Services | Shift Marketers</title>
            <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Shift Marketers is a leading website design and development agency in Kenya. We offer custom website solutions to help businesses establish a strong online presence. Contact us to learn more." />
        <meta name="keywords" content="website design, web development, custom websites, responsive design, online presence, Kenya" />
        <meta name="author" content="Shift Marketers" />
     
        <link rel="canonical" href="https://shiftmarketers.co.ke/website-design-development" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Website Design and Development Services | Shift Marketers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shiftmarketers.co.ke/website-design-and-development" />
        <meta property="og:image" content="https://shiftmarketers.co.ke/web.jpg" />
        <meta property="og:description" content="Shift Marketers is a leading website design and development agency in Kenya. We offer custom website solutions to help businesses establish a strong online presence. Contact us to learn more." />
        <meta property="og:site_name" content="Shift Marketers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Design and Development Services | Shift Marketers" />
        <meta name="twitter:description" content="Shift Marketers is a leading website design and development agency in Kenya. We offer custom website solutions to help businesses establish a strong online presence. Contact us to learn more." />
        <meta name="twitter:image" content="https://shiftmarketers.co.ke/web.jpg" />
        </Head>
    <Header  />
    <Container>
    <Grid.Container>
        <Grid lg={6} md={6} sm={12} xs={12} >
         <Container style={{marginTop:30,paddingLeft:40}}>
         <motion.h1  initial="hidden" whileInView="show" style={{marginTop:40,fontWeight:'bolder',textTransform:'initial'}} variants={textVariant2}>
         WEBSITE  DESIGN AND DEVELOPMENT 
        </motion.h1>
        <motion.h4  initial="hidden" whileInView="show" style={{fontWeight:'bolder'}} variants={textVariant2}>
        Bringing your brand to life online
        </motion.h4>
        <motion.p  initial="hidden" whileInView="show" style={{fontWeight:'bolder'}} variants={textVariant2}>
        At ShiftPulse Marketers , we understand the importance of having a website that not only looks great but also functions smoothly and resonates with your brand identity. 

       <br /><br /> We work closely with our clients to ensure that their website is a true reflection of their brand and communicates their message clearly to their target audience.

       <br /><br />   Our team of skilled web designers and developers  combines creativity and technical expertise to develop highly functional and user-friendly websites that are tailored to your specific needs. 

       <br /><br />   From the initial design phase to the final launch, we are committed to delivering a website that not only meets your expectations but exceeds them. 

       <br /><br /> Shiftpulse will also help you  with setting up  Google Analytics to help you track your website's performance and make data-driven decisions. 
        Shiftpulse also provides site Audits to identify technical issues that may be hindering your website's performance and provide insights into how you can optimise your content to attract more traffic. 
        <br /><br /> Our team will also conduct a thorough technical SEO audit with recommended fixes, a content and keyword analysis, and on-page optimization recommendations.

        At Shift Pulse Digital Marketing, we offer a comprehensive link building service that is designed to boost your website's search engine rankings and drive more traffic to your site.
        <br /><br />    Our expert team uses ethical and effective strategies such as guest blogging and broken link building to acquire high-quality links from reputable websites in your industry. 
        <br /><br />  By improving your website's credibility and authority with search engines, we can help you achieve sustainable long-term results and grow your online presence. 
         Trust us to deliver results-driven link building services that align with your business goals.

        </motion.p>

         </Container>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12}>
        <div style={{marginTop:100}} className='image-container'>
         <Image src={"/web2.jpg"} className="image" fill/>
         </div>
        </Grid>
     </Grid.Container>
          <motion.h4  initial="hidden" whileInView="show" style={{marginTop:40,fontWeight:'bolder'}} variants={textVariant2}>
          SHIFTPULSE  MARKETERS WEBSITE  DESIGN AND DEVELOPMENT  SERVICES 


        </motion.h4>
     <Collapse image="/web2.jpg" items={items}/>
    </Container>
    <Footer />
   </main>
  )
}

export default Digitalmarketing