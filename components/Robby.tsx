import * as React from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function Robby({ title, placement, fontSize }) {
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<Tooltip
			open={open}
			onClose={handleClose}
			title={title}
			placement={placement}
			arrow
		>
			<IconButton aria-label="Robby" onClick={handleOpen}>
				<SmartToyIcon fontSize={fontSize || "medium"} />
			</IconButton>
		</Tooltip>
	);
}
