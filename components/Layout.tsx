import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
	children?: ReactNode;
	userData?: object;
	title?: string;
};

const Layout = ({
	children,
	userData = null,
	title = "This is the default title",
}: Props) => {
	return (
		<div>
			<Head>
				<title style={{ textTransform: "capitalize" }}>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>
				<nav>
					<Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
					<Link href="/users">Recipe History</Link> |{" "}
					<Link href="/login">{userData ? "Sign out" : "Login"}</Link>
				</nav>
			</header>
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
