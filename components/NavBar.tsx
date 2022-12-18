import { useState, MouseEvent } from "react";

import Link from "next/link";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

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
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<Link href="/" passHref>
							<Image
								src="/images/aigrub-nav-logo.png"
								alt="AiGrub logo"
								width={80}
								height={80}
							/>
						</Link>
					</Box>
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
								<Link href="/" passHref legacyBehavior>
									<a style={{ color: "white" }}>Home</a>
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href="/about" passHref legacyBehavior>
									<a style={{ color: "white" }}>About</a>
								</Link>
							</MenuItem>
						</Menu>
					</Box>

					{/* Brand */}
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<Link href="/">
							<Image
								src="/images/aigrub-nav-logo.png"
								alt="AiGrub logo"
								width={60}
								height={60}
							/>
						</Link>
					</Box>
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
