import React, { ReactNode } from "react";
import Head from "next/head";

import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
	children?: ReactNode;
	userData?: object;
	title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
	return (
		<div>
			<Head>
				<title style={{ textTransform: "capitalize" }}>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<NavBar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
