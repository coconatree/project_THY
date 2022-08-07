import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function WeatherCard(props) {
	return (
		<Box display='flex' justifyContent='space-between'>
			<Card
				sx={{
					width: "30%",
					minHeight: "220px",
					minWidth: "250px",
					backgroundColor: "#DADADA",
				}}
			>
				<CardContent display='flex'>
					<Box component='div'>
						<Box component='div' display='flex' justifyContent='space-between'>
							<Box component='div'>
								<Typography
									sx={{ fontSize: 14 }}
									color='text.secondary'
									gutterBottom
								>
									Weather in {props.geo.name}, {props.geo.country}.
								</Typography>
								<Typography variant='h3' component='div'>
									{props.weather.temperature} &deg;C
								</Typography>
								<Typography sx={{ mb: 1.5 }} color='text.secondary'>
									{props.weather.mainDescription}
								</Typography>
							</Box>
							<Box
								component='img'
								sx={{
									maxHeight: { xs: 100, md: 100 },
									maxWidth: { xs: 100, md: 100 },
								}}
								alt='Weather Logo'
								src={props.weather.iconLink}
							/>
						</Box>
						<Typography variant='body2'>
							{props.weather.description}
							<br />
							Feels like: {props.weather.feelsLikeTemperature} &deg;C
							<br />
							Day-Hour: {props.weather.dayAndHour}
						</Typography>
					</Box>
				</CardContent>
			</Card>
			<Typography
				maxWidth='30%'
				variant='h4'
				component='div'
				color='#fdfdfd'
				sx={{ textShadow: "3px 3px 4px black" }}
				align='right'
			>
				“The journey of a thousand miles begins with one step.”
				<br />
				<Typography>― Lao Tzu</Typography>
			</Typography>
		</Box>
	);
}
