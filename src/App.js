import * as React from "react";

import { List, ListItem, ListItemText } from "@mui/material";

import DropdownContainer from "./components/dropdown/DropdownContainer";
import Home from "./routes/Home";
import Layout from "./components/layout/LayoutView";

export default function PrimarySearchAppBar() {
	const content = (
		<List>
			<ListItem>
				<ListItemText primary="Option 1" />
			</ListItem>
			<ListItem>
				<ListItemText primary="Option 2" />
			</ListItem>
			<ListItem>
				<ListItemText primary="Option 3" />
			</ListItem>
		</List>
	);

	return <DropdownContainer content={content} buttonText="Custom Text" />;
	/*return (
		<Layout>
			<DropdownView />
		</Layout>
	);*/
}
