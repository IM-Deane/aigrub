import Layout from "../components/Layout";

import Link from "@mui/material/Link";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import ImageGallery from "../components/ImageGallery";

const AboutPage = () => (
	<Layout title="About | AiGrub">
		<Grid container spacing={3} sx={{ my: 4 }}>
			<Grid item md={5} xs={12}>
				<Paper elevation={16} sx={{ p: 4 }}>
					<Typography component="h1" variant="h4" gutterBottom>
						About the app
					</Typography>
					<Typography paragraph gutterBottom>
						Hi there 👋🏾, my name's Tristan, and I'm the creator of AiGrub.
					</Typography>
					<Typography paragraph gutterBottom>
						After{" "}
						<Link
							href="https://chat.openai.com/"
							color="primary"
							target="_blank"
						>
							OpenAi's ChatGPT-3
						</Link>{" "}
						took the world by storm in December 2022, I decided to see what all
						the fuss was about.
					</Typography>
					<Typography paragraph gutterBottom>
						This app stems from my explorations into their documentation, a
						wicked Spotify playlist, and likely too much caffeine.
					</Typography>
					<Typography paragraph gutterBottom>
						If you enjoyed this app and want to say hi, please reach out to{" "}
						<Link
							href="mailto:contact@tristandeane.ca"
							color="primary"
							target="_blank"
						>
							contact@tristandeane.ca
						</Link>
						.
					</Typography>
					<Typography paragraph gutterBottom>
						Otherwise, I'm always open to boosting my meager LinkedIn following
						here:{" "}
						<Link
							href="https://www.linkedin.com/in/tristan-deane-software-developer/"
							color="primary"
							target="_blank"
						>
							My LinkedIn
						</Link>
					</Typography>
					<Typography paragraph gutterBottom>
						Finally, you can find more of my work on my site:{" "}
						<Link
							href="https://tristandeane.ca"
							color="primary"
							target="_blank"
						>
							tristandeane.ca
						</Link>
					</Typography>
					<Typography paragraph>
						Cheers,
						<br />
						Tristan
					</Typography>
					<Box>
						<Link href="/">Go back home</Link>
					</Box>
				</Paper>
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
