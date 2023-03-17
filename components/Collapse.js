import { Collapse, Text, Grid, Avatar, Link } from "@nextui-org/react";

export default function App({image,items}) {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Collapse.Group>
         {
          items.map(item => (
            <Collapse
            key={item.title}
            title={<Text h4>{item.title}</Text>}
            subtitle="Click to read more"
            contentLeft={
              <Avatar
                size="lg"
                src={image}
                color="success"
                borderWeight={1}
                bordered
                squared
              />
            }
          >
            <Text className="glow-green">
            {item.desc}
            </Text>
          </Collapse>
          ))
         }
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
}
