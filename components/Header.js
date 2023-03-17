import { Navbar, Button, Link, Text, useTheme, styled } from "@nextui-org/react";
import Image from "next/image";
import { Layout } from "./Layout.js";

export default function App() {
  const { isDark } = useTheme();
  const StyledNav = styled(Navbar,{
    backgroundColor:'transparent'
  })
  const click = () => {
    window.location = 'tel:0725965914'
  }
  return (
     <div style={{height:60,background:'transparent',backdropFilter:'blur(10px)',position:'fixed',width:'100%',top:0}}>
       
     </div>
  )
}
