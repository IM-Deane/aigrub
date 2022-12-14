import React, { ReactNode } from "react";
import Head from "next/head";

import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = "AiGrub" }: Props) => {
	return (
		<React.Fragment>
			<Box
				style={{
					position: "relative",
					minHeight: "100vh",
					margin: 0,
					padding: 0,
				}}
			>
				<Head>
					<title style={{ textTransform: "capitalize" }}>{title}</title>
					<link rel="shortcut icon" href="/images/favicon.png" />
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>
				<NavBar />
				<Container component="main" style={{ paddingBottom: "2.5rem" }}>
					{children}
				</Container>
				<Footer />
			</Box>
		</React.Fragment>
	);
};

export default Layout;
