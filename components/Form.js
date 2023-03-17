import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { textVariant2 } from './motion'
import { motion } from "framer-motion"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [from,setForm] = useState("")
  const [f2,setForm2] = useState("")
  const [f3,setForm3] = useState("")
  const [f4,setForm4] = useState("")
  async function send(){
    const data = {
      name:from,
      email:f2,
      phone:f4,
      mode:f3
    }
    try {
      const res = await axios.post(`/send`,data)
    
      toast('Thank you for contacting us.')
  } catch (error) {
     toast('something went wrong,please try again !')
  }
  }
  return (
     <div style={{width:"100%",display:'flex',gap:30,flexDirection:'column'}}>
      <ToastContainer  theme='dark'/>
           <motion.h4  initial="hidden" whileInView="show" style={{fontWeight:'bolder'}} variants={textVariant2}>
             Drop Us A Line !
            </motion.h4>
      <Input  
          value={from}
          onChange={(e) => setForm(e.currentTarget.value)}
          labelPlaceholder="Name" 
          shadow
          status='success'
          size='md'
          color='primary'
          style={{width
        :"100%",marginTop:10}}
        />
        <Input  
          value={f2}
          onChange={(e) => setForm2(e.currentTarget.value)}
          labelPlaceholder="Email" 
          shadow
          status='success'
          size='md'
          color='primary'
          style={{width
        :"100%",marginTop:10}}
        />
        <Input  
        value={f3}
        onChange={(e) => setForm3(e.currentTarget.value)}
          labelPlaceholder="Message" 
          shadow
          status='success'
          size='md'
          color='primary'
          style={{width
        :"100%",marginTop:10}}
        />
        <Input  
        value={f4}
        onChange={(e) => setForm4(e.currentTarget.value)}
          labelPlaceholder="Phone" 
          shadow
          status='success'
          size='md'
          color='primary'
          style={{width
        :"100%",marginTop:10}}
        />
         <Button onPress={send}  disabled={from.length === 0 || f2.length === 0 || f3.length === 0 || f4.length === 0 ? true : false}  flat  color="primary" bordered shadow>
            Send
            </Button> 
    </div>
  )
}

export default Form