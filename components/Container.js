import { Container, Card, Row, Text,Col,Button, Badge } from "@nextui-org/react";
import { motion } from "framer-motion"
import Link from "next/link";
import { slideIn, textVariant, textVariant2 } from './motion'

export default function Tainer({title,tagline,goal,image,link}) {
  return (  
    <Container   style={{height:'100vh',display:'flex',alignItems:'center'}}>   
     <Card className="shadow" css={{ $$cardColor: '#0000007a' }} style={{backgroundImage:`url(/${image})`,opacity:0.98,backgroundPosition:'center',backgroundSize:'cover',padding:20,height:600}}>
      <Card.Body style={{display:"flex",justifyContent:'center'}}>
      <motion.div variants={slideIn("left","tween",0.2,1)}>
      <Text
        h1
        size={70}
        css={{
          textGradient: "45deg, $green200 -10%, $green400 100%",
        }}
        className="glow-black"
        weight="bold"
      >
     {title}
      </Text>
     <Link href={link}>
     <Button   auto style={{marginTop:30}} bordered shadow  color="primary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                LEARN MORE
              </Text>
            </Button>
     </Link>
     
        </motion.div>
      </Card.Body>
      </Card>
    </Container>
  );
}
