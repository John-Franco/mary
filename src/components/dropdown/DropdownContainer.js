import React, { useState } from "react";

import DropdownView from "./DropdownView";

const DropdownContainer = ({ buttonText = "", content, buttonVariant = "contained" }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(!open);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};

	return (
		<DropdownView
			open={open}
			anchorEl={anchorEl}
			handleClose={handleClose}
			handleClick={handleClick}
			buttonText={buttonText}
			content={content}
			buttonVariant={buttonVariant}
		/>
	);
};

export default DropdownContainer;
