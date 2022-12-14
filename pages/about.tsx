import Link from "next/link";
import Layout from "../components/Layout";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ImageGallery from "../components/ImageGallery";

const AboutPage = () => (
	<Layout title="About | AiGrub">
		<Grid container spacing={3} sx={{ my: 4 }}>
			<Grid item md={5} xs={12}>
				<Typography component="h1" variant="h4" gutterBottom>
					About
				</Typography>
				<Typography paragraph gutterBottom>
					Hi there 👋🏾, my name's Tristan, and I'm the creator of AiGrub.
				</Typography>
				<Typography paragraph gutterBottom>
					After{" "}
					<a href="https://chat.openai.com/" target="_blank">
						OpenAi's 's ChatGPT-3
					</a>{" "}
					took the world by storm in December 2022, I decided to see what all
					fuss was about.
				</Typography>
				<Typography paragraph gutterBottom>
					This app stems from my explorations into their documentation, a wicked
					Spotify playlist, and likely too much caffeine.
				</Typography>

				<Typography paragraph gutterBottom>
					If you enjoyed this app and want to say hi, please reach out to{" "}
					<a href="mailto:contact@tristandeane.ca">contact@tristandeane.ca</a>.
				</Typography>
				<Typography paragraph gutterBottom>
					Otherwise, I'm always open to boosting my meager LinkedIn following
					here:{" "}
					<a
						href="https://www.linkedin.com/in/tristan-deane-software-developer/"
						target="_blank"
					>
						My LinkedIn
					</a>
				</Typography>
				<Typography paragraph gutterBottom>
					Finally, you can find more of my work on my site:{" "}
					<a href="https://tristandeane.ca" target="_blank">
						tristandeane.ca
					</a>
				</Typography>
				<Typography paragraph>
					Cheers,
					<br />
					Tristan
				</Typography>

				<Box>
					<Link href="/">Go back home</Link>
				</Box>
			</Grid>
			<Grid item md={7} xs={12}>
				<ImageGallery />
				<Typography
					variant="caption"
					sx={{ fontSize: "14px", fontStyle: "italic" }}
				>
					Not hungry enough to try the app? Maybe these tasty things will help.
				</Typography>
			</Grid>
		</Grid>
	</Layout>
);

export default AboutPage;
