import React, { ReactNode } from "react";
import Head from "next/head";

import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = "What should I eat tonight?" }: Props) => {
	return (
		<React.Fragment>
			<CssBaseline />
			<div
				style={{
					position: "relative",
					minHeight: "100vh",
					margin: 0,
					padding: 0,
				}}
			>
				<Head>
					<title style={{ textTransform: "capitalize" }}>{title}</title>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>
				<NavBar />
				<main style={{ paddingBottom: "2.5rem" }}>{children}</main>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Layout;
