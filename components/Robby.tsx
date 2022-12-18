import Tooltip from "@mui/material/Tooltip";

import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function Robby({ title, placement, fontSize }) {
	return (
		<Tooltip title={title} placement={placement}>
			<SmartToyIcon fontSize={fontSize || "medium"} />
		</Tooltip>
	);
}
