/*Basado el siguiente codigo

import { Button, Popover } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import React from "react";

const DropdownView = ({
	open,
	anchorEl,
	handleClose,
	handleClick,
	buttonText = "",
	content,
	buttonVariant = "contained",
}) => (
	<>
		<Popover
			id="simple-popover"
			open={open}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "center",
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "center",
			}}
		>
			{content}
		</Popover>
		<Button aria-describedby="simple-popover" variant={buttonVariant} onClick={handleClick}>
			{buttonText}
			{open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
		</Button>
	</>
);

export default DropdownView;

Crear los test para el componente DropdownView*/

import { render, screen } from "@testing-library/react";
import DropdownView from "./DropdownView";

describe("DropdownView", () => {
  test("renders DropdownView component", () => {
    render(<DropdownView />);
  });
}

/*Crear los test para el componente DropdownContainer*/


