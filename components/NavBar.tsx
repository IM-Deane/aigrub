import { useState, MouseEvent } from "react";

import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const BRAND_NAME = "AiGrub";

function NavBar() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/* Brand */}
					<SmartToyIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Link href="/" passHref style={{ textDecoration: "none" }}>
						<Typography
							variant="h6"
							component="p"
							noWrap
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "white",
								textDecoration: "none",
							}}
						>
							{BRAND_NAME}
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="menu items"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							<MenuItem>
								<Link href="/about">About</Link>
							</MenuItem>
						</Menu>
					</Box>
					<SmartToyIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						{BRAND_NAME}
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Link
							href="/about"
							style={{
								marginLeft: "18px",
								color: "white",
								textTransform: "uppercase",
								textDecoration: "none",
								fontWeight: "bold",
								letterSpacing: "2px",
							}}
						>
							About
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
