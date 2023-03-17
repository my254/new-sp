import { Avatar, Card, Container, Grid, Row, Text } from '@nextui-org/react'
import React from 'react'
import Form from './Form'
import { motion } from 'framer-motion'
import { textVariant2 } from './motion'

const Footer = () => {
  return (
   <footer style={{background:"#1c1b1bba",backdropFilter:'blur(20px)',padding:20}}>
      <Container >
      <div style={{display:'flex',flexDirection:'column'}}>
        <motion.h4 className='glow-green'  initial="hidden" whileInView="show" style={{marginBottom:30,fontWeight:'bolder'}} variants={textVariant2}>
          Fun Fact
        </motion.h4>
        <motion.p className='glow-green'  initial="hidden" whileInView="show" style={{marginBottom:30}} variants={textVariant2}>
        Did you know that the first-ever email marketing campaign was sent by computer manufacturer Digital Equipment Corporation (DEC) in 1978? The company sent promotional emails to a few hundred users on the ARPANET, a precursor to the internet, to promote their new computer systems. The campaign was successful, and email marketing became a popular digital marketing tactic in the years that followed.
        </motion.p>
        </div>
       <Form />
       <Grid.Container justify='start' mt={10}  gap={2}>
      <Grid>
        <Avatar
         as='a'
         href="https://web.facebook.com/ShiftPulse"
         squared
          size="lg"
          src="/fb.jpg"
          color="primary"
          bordered
        />
      </Grid>
      <Grid>
        <Avatar
         as='a'
         href="https://twitter.com/shiftpulsemark1"
         squared
          size="lg"
          src="tw.jpg"
          color="secondary"
          bordered
        />
      </Grid>
      <Grid>
        <Avatar
         as='a'
         href="https://api.whatsapp.com/send?text=Hello%20shiftpulse&phone=+254%20734826535"
         squared
          size="lg"
          src="wa.jpg"
          color="success"
          bordered
        />
      </Grid>
      <Grid>
        <Avatar
         as='a'
         href="https://www.instagram.com/shiftpulsemarketers/"
         squared
          size="lg"
          src="ig.jpg"
          color="warning"
          bordered
        />
      </Grid>
      <Grid>
        <Avatar
         as='a'
         href="https://www.youtube.com/channel/UCwjDRbW7XpesWX9JHDYK2Aw"
         squared
          size="lg"
          src="yt.jpg"
          color="error"
          bordered
        />
      </Grid>
        </Grid.Container>
    </Container>
   </footer>
  )
}

export default Footer