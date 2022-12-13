import { Fragment } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
	return (
		<Fragment>
			Made with &hearts; by{" "}
			<Link
				color="inherit"
				href="https://alchemizedsoftware.com"
				target="_blank"
				rel="noopener norefer"
			>
				Alchemized Software
			</Link>
		</Fragment>
	);
}

export default function AppFooter() {
	return (
		<Typography
			component="footer"
			sx={{
				display: "flex",
				bgcolor: "primary.dark",
				position: "absolute",
				bottom: 0,
				width: "100%",
				height: "3.5rem",
			}}
		>
			<Container
				sx={{
					display: "flex",
					color: "white",
					textAlign: "center",
					alignItems: "center",
				}}
			>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<Copyright />
					</Grid>
				</Grid>
			</Container>
		</Typography>
	);
}
