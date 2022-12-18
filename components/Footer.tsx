import { Fragment } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

function Copyright() {
	return (
		<Fragment>
			Made with{" "}
			<span>
				(<EmojiFoodBeverageIcon sx={{ fontSize: "10px" }} /> + &hearts;){" "}
			</span>{" "}
			by{" "}
			<Link
				color="inherit"
				href="https://tristandeane.ca"
				target="_blank"
				rel="noopener norefer"
			>
				Tristan Deane
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
				bgcolor: "primary",
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
