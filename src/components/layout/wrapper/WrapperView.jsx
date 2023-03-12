import * as React from "react";
import Box from "@mui/material/Box";

export default function Wrapper({ children }) {
	return (
		<Box
			sx={{
				backgroundColor: "lilac.main",
				padding: "1rem",
				height: "100%",
			}}
		>
			{children}
		</Box>
	);
}
