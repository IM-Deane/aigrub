import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function ImageGallery() {
	return (
		<ImageList
			sx={{ width: "100%", height: 450 }}
			variant="quilted"
			cols={4}
			rowHeight={121}
		>
			{itemData.map((item) => (
				<ImageListItem
					key={item.img}
					cols={item.cols || 1}
					rows={item.rows || 1}
				>
					<img
						{...srcset(item.img, 121, item.rows, item.cols)}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://source.unsplash.com/random/?food-drink&1",
		title: "Random food",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		cols: 2,
	},
	{
		img: "https://source.unsplash.com/random/?food-drink&3",
		title: "Random food",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://source.unsplash.com/random/?food-drink&4",
		title: "Random food",
	},
	{
		img: "https://source.unsplash.com/random/?food-drink&2",
		title: "Random food",
	},
	{
		img: "https://source.unsplash.com/random/?food-drink&5",
		title: "Mushrooms",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
	},
	{
		img: "https://source.unsplash.com/random/?food-drink&7",
		title: "Random food",
	},
	{
		img: "https://source.unsplash.com/random/?food-drink&6",
		title: "Random food",
		cols: 2,
	},
];
