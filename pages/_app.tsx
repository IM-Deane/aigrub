import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "@/utils/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
	const AnyComponent = Component as any;
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AnyComponent {...pageProps} />
		</ThemeProvider>
	);
}
