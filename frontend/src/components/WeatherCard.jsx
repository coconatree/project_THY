import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function WeatherCard(props) {

  return (
    <Box display="flex" justifyContent="space-between" >
    <Card sx={{ width: '30%', minHeight:'220px', minWidth:"250px"}}>
      <CardContent display="flex" >
        <Box component="div">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Weather in {props.geo.name}, {props.geo.country}.
        </Typography>
        <Typography variant="h3" component="div">
          {props.weather.temperature} &deg;C
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.weather.description}
        </Typography>
        <Typography variant="body2">
          H:32&deg; L:23&deg;
          <br />
        </Typography>
        </Box>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Typography maxWidth="30%"
            variant="h4"
            component="div"
            color="#fdfdfd"
            sx={{ textShadow: "3px 3px 4px black" }}
            align="right"
          >
            “It's not the destination, it's the journey.”
            <br/>
            <Typography>― Resulante Özdemiro</Typography>
          </Typography>
    </Box>
    
  );
}