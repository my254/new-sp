import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Lottie from 'react-lottie';
import * as animationData from '@/components/1'
import Tainer from '@/components/Container'
import { motion } from "framer-motion"
import { slideIn, textVariant, textVariant2, zoomIn } from '@/components/motion'
import Footer from '@/components/Footer'
import { Avatar, Badge, Button, Card, Container, Grid, Text } from '@nextui-org/react'
import { useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 const ref = useRef(null)
 const publicr = useRef(null)
 const web = useRef(null)
 const brand = useRef(null)

 const scroll = () => {
  ref.current.scrollIntoView({behavior:"smooth"})
 }
  return (
    <>
     <Head>
     <title>ShiftPulse | Digital Marketing Company</title>
     <meta name="description" content="ShiftPulse is a digital marketing company that helps businesses grow through SEO, PPC, and social media marketing. Contact us today to learn more." />
        <meta name="keywords" content="digital marketing, SEO, PPC, social media marketing" />
        <meta name="author" content="ShiftPulse" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="Jix1tWprvdwTRAwvvb8-L4y4nZCkldLB4fiKkDCdpZU" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://shiftmarketers.co.ke/.co.ke/" />
        <meta property="og:title" content="ShiftPulse | Digital Marketing Company" />
        <meta property="og:description" content="ShiftPulse is a digital marketing company that helps businesses grow through SEO, PPC, and social media marketing. Contact us today to learn more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shiftmarketers.co.ke/.co.ke/" />
        <meta property="og:image" content="https://shiftmarketers.co.ke/.co.ke/logo.png" />
        <meta property="og:image:alt" content="ShiftPulse logo" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="ShiftPulse" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ShiftPulse | Digital Marketing Company" />
        <meta name="twitter:description" content="ShiftPulse is a digital marketing company that helps businesses grow through SEO, PPC, and social media marketing. Contact us today to learn more." />
        <meta name="twitter:image" content="https://shiftmarketers.co.ke/.co.ke/logo.png" />
        <meta name="twitter:image:alt" content="ShiftPulse logo" />
        <meta name="twitter:image:width" content="400" />
        <meta name="twitter:image:height" content="400" />
        <link rel="icon" href='/logo.png' />
     </Head>
       <main className='parent'  style={{marginTop:100}}>
        <Header />
         <img style={{
           width: "100vw",
           height:" 100vh",
           objectFit:" cover",
           position: "fixed",
           left: 0,
           right: 0,
           top: 0,
           bottom: 0,
           zIndex: -1
         }} src="/bg3.jpg"/>
         <div>
         
         <Container size="lg">
        <Grid.Container gap={5}>
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
          <div style={{height:300,width:'100%',background:'white',borderRadius:8}}>
           
          </div>
          </Grid>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
          <div style={{height:300,width:'100%',background:'white',borderRadius:8}}>

           </div>
          </Grid>  
        </Grid.Container>
        <Grid.Container gap={5}>
        <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
          <div style={{height:300,width:'100%',background:'white',borderRadius:8}}>

           </div>
          </Grid> 
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
          <div style={{height:300,width:'100%',background:'white',borderRadius:8}}>
           
          </div>
          </Grid>
          
        </Grid.Container>
          </Container>
        
         </div>
          
      </main>
    </>
  )
}
