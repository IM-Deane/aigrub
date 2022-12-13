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
			sx={{ display: "flex", bgcolor: "primary.dark" }}
		>
			<Container sx={{ my: 4, display: "flex", color: "white" }}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Copyright />
					</Grid>
				</Grid>
			</Container>
		</Typography>
	);
}
