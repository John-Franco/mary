//Crear componente Layout
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Menu from "./menu/Menu";
import Wrapper from "./wrapper/WrapperView";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#dd969cb0",
		},
		secondary: {
			main: "#e60023",
		},
		lilac: {
			main: "#b190b166",
		},
	},
});

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<div
				style={{
					height: "100vh",
					overflow: "hidden",
				}}
			>
				<Menu />
				<Wrapper>{children}</Wrapper>
			</div>
		</ThemeProvider>
	);
};

export default Layout;
