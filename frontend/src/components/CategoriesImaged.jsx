import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Grid, Box, Typography } from "@mui/material";
import "../static/style/main.css";

import CreateFoodDialog from "../components/FoodDialog";
export default function CategoriesImaged(props) {

	const filteredList = props.places.filter( place => {
		return place.category === props.titleName
	})

	const itemData = filteredList.map( place => ({
		title:place.name, rating:place.rank, img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d", id:place.id,
		tags:place.tags, googleLink:place.googleLocLink, appleLink:place.appleLocLink
	}))
	return (
		<Box
			container
			display='flex'
			backgroundColor='black'
			p={2}
			borderRadius='4px'
			sx={{ letterSpacing: 1, fontStyle: "helvetica", fontWeight: "medium" }}
			flexDirection='column'
			m='auto'
		>
			<Typography variant='h4'>{props.titleName}</Typography>

			<ImageList
				sx={{
					height: 400,
					maxWidth: "18rem",
					m: "auto",
					justifyContent: "center",
					alignItems: "center",
				}}
				className='customScroll'
			>
			{ itemData.length < 1 &&
					<Typography variant='h6'>No suggestions for {props.titleName.toLowerCase()}</Typography>
				}
				{itemData.map((item) => (
					<ImageListItem key={item.id}>
						<img
							src={`${item.img}?w=250&fit=crop&auto=format`}
							srcSet={`${item.img}?w=250&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading='lazy'
						/>
						<ImageListItemBar
							title={
								<div
									style={{
										display: "flex",
										alignItems: "center",
										flexWrap: "wrap",
										overflow:"overflow-wrap",
										whiteSpace: 'normal'
									}}
								>
									{item.title} <CreateFoodDialog title={item.title} id={item.id} googleLink={item.googleLink} rating={item.rating} tags={item.tags} appleLink={item.appleLink} />
								</div>
							}
							subtitle={<span>Rating {item.rating}</span>}
							position='below'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

