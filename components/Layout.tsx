import React, { ReactNode } from "react";
import Head from "next/head";

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
					<link rel="shortcut icon" href="/images/favicons/favicon.io" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/images/favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/images/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/images/favicons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/images/favicons/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/images/favicons/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<meta name="msapplication-TileColor" content="#00a300" />
					<meta name="theme-color" content="#ffffff" />
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
