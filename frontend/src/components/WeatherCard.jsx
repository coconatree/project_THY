import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";




export default function WeatherCard(props) {
  const CardContentLessPadding = styled(CardContent)(`padding: 1;`);

  return (
    <Grid container spacing={15}>
  <Grid item md={3}>
  <Card sx={{ width: '10%', minHeight:'220px', minWidth:"250px", alignItems:'center', borderRadius: "20px",
    overflow: "hidden"}} >
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <CardContentLessPadding>
        <Typography sx={{ textAlign:'center', fontSize: 17 }} color="text.primary" gutterBottom>
          Weather in {props.geo.name}, {props.geo.country}.
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="h4" component="div">
          {props.weather[0].temperature} &deg;C
        </Typography>
        <Box sx={{display: 'flex'}} alignItems="center">
        <Typography sx={{ textAlign:'center', fontSize: 20, mb: 0, mp: 0, flex: 3}} color="text.secondary">
          {props.weather[0].description}
        </Typography>
        <CardMedia component="img" sx={{ width: 2, flex: 2}} image={props.weather[0].iconLink} alt="Weather in {props.geo.name}, {props.geo.country} "
        />
        </Box>
        <Typography sx={{ textAlign:'center', fontSize: 16 }} color="text.secondary" gutterBottom>
          {props.weather[0].dayAndHour}
        </Typography>
        <Typography sx={{  textAlign:'center', fontSize: 14 }} color="text.secondary" gutterBottom>
          Feels Like: {props.weather[0].feelsLikeTemperature} &deg;C
        </Typography>
        <Typography sx={{  textAlign:'center', fontSize: 14 }} className="underline" color='primary.main' gutterBottom>
          <a onClick={(e) => {e.preventDefault(); window.open("https://www.timeanddate.com/weather/germany/berlin", "_blank");}} >Learn More</a>
        </Typography>
      </CardContentLessPadding>
    </Box>
  </Card>
  </Grid>
  <Grid item md={3}>
  <Card sx={{ width: '10%', minHeight:'220px', minWidth:"250px", alignItems:'center', borderRadius: "20px",
    overflow: "hidden"}} >
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <CardContentLessPadding>
        <Typography sx={{ textAlign:'center', fontSize: 17 }} color="text.primary" gutterBottom>
          Weather in {props.geo.name}, {props.geo.country}.
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="h4" component="div">
          {props.weather[1].temperature} &deg;C
        </Typography>
        <Box sx={{display: 'flex'}} alignItems="center">
        <Typography sx={{ textAlign:'center', fontSize: 20, mb: 0, mp: 0, flex: 3}} color="text.secondary">
          {props.weather[1].description}
        </Typography>
        <CardMedia component="img" sx={{ width: 2, flex: 2}} image={props.weather[1].iconLink} alt="Weather in {props.geo.name}, {props.geo.country} "
        />
        </Box>
        <Typography sx={{ textAlign:'center', fontSize: 16 }} color="text.secondary" gutterBottom>
          {props.weather[1].dayAndHour}
        </Typography>
        <Typography sx={{  textAlign:'center', fontSize: 14 }} color="text.secondary" gutterBottom>
          Feels Like: {props.weather[1].feelsLikeTemperature} &deg;C
        </Typography>
        <Typography sx={{  textAlign:'center', fontSize: 14 }} className="underline" color='primary.main' gutterBottom>
          <a onClick={(e) => {e.preventDefault(); window.open("https://www.timeanddate.com/weather/germany/berlin", "_blank");}} >Learn More</a>
        </Typography>
      </CardContentLessPadding>
    </Box>
  </Card>
  </Grid>
  <Grid item md={3}>
  <Card sx={{ width: '10%', minHeight:'220px', minWidth:"250px", alignItems:'center', borderRadius: "20px",
    overflow: "hidden"}} >
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <CardContentLessPadding>
        <Typography sx={{ textAlign:'center', fontSize: 17 }} color="text.primary" gutterBottom>
          Weather in {props.geo.name}, {props.geo.country}.
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="h4" component="div">
          {props.weather[2].temperature} &deg;C
        </Typography>
        <Box sx={{display: 'flex'}} alignItems="center">
        <Typography sx={{ textAlign:'center', fontSize: 20, mb: 0, mp: 0, flex: 3}} color="text.secondary">
          {props.weather[2].description}
        </Typography>
        <CardMedia component="img" sx={{ width: 2, flex: 2}} image={props.weather[2].iconLink} alt="Weather in {props.geo.name}, {props.geo.country} "
        />
        </Box>
        <Typography sx={{ textAlign:'center', fontSize: 16 }} color="text.secondary" gutterBottom>
          {props.weather[2].dayAndHour}
        </Typography>
        <Typography sx={{  textAlign:'center', fontSize: 14 }} color="text.secondary" gutterBottom>
          Feels Like: {props.weather[2].feelsLikeTemperature} &deg;C
        </Typography>
        <Typography sx={{  textAlign:'center', fontSize: 14 }} className="underline" color='primary.main' gutterBottom>
          <a onClick={(e) => {e.preventDefault(); window.open("https://www.timeanddate.com/weather/germany/berlin", "_blank");}} >Learn More</a>
        </Typography>
      </CardContentLessPadding>
    </Box>
  </Card>
  </Grid>

  <Grid item md={3}>
  <Card sx={{ width: '10%', minHeight:'220px', minWidth:"250px", alignItems:'center', borderRadius: "20px",
    overflow: "hidden"}} >
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <CardContentLessPadding>
        <Typography sx={{ textAlign:'center', fontSize: 17 }} color="text.primary" gutterBottom>
          Weather in {props.geo.name}, {props.geo.country}.
        </Typography>
        <Typography sx={{textAlign:'center'}} variant="h4" component="div">
          {props.weather[3].temperature} &deg;C
        </Typography>
        <Box sx={{display: 'flex'}} alignItems="center">
        <Typography sx={{ textAlign:'center', fontSize: 20, mb: 0, mp: 0, flex: 3}} color="text.secondary">
          {props.weather[3].description}
        </Typography>
        <CardMedia component="img" sx={{ width: 2, flex: 2}} image={props.weather[3].iconLink} alt="Weather in {props.geo.name}, {props.geo.country} "
        />
        </Box>
        <Typography sx={{ textAlign:'center', fontSize: 16 }} color="text.secondary" gutterBottom>
          {props.weather[3].dayAndHour}
        </Typography>
        <Typography sx={{  textAlign:'center', fontSize: 14 }} color="text.secondary" gutterBottom>
          Feels Like: {props.weather[3].feelsLikeTemperature} &deg;C
        </Typography>
        <Typography sx={{  textAlign:'center', fontSize: 14 }} className="underline" color='primary.main' gutterBottom>
          <a onClick={(e) => {e.preventDefault(); window.open("https://www.timeanddate.com/weather/germany/berlin", "_blank");}} >Learn More</a>
        </Typography>
      </CardContentLessPadding>
    </Box>
  </Card>
  </Grid>
  </Grid>
    
);
}