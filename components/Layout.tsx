import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import NavBar from "./NavBar";

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
			<footer>
				<hr />
				Made with &hearts; by{" "}
				<a href="https://alchemizedsoftware.com">Alchemized Software</a>
			</footer>
		</div>
	);
};

export default Layout;
