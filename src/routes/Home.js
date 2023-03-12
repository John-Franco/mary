import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Unstable_Grid2";
import HistoryIcon from "@mui/icons-material/History";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const columns = [
	{ id: "Nombre", label: "Nombre", minWidth: 170 },
	{ id: "Composición", label: "Composición", minWidth: 100 },
	{
		id: "Ancho",
		label: "Ancho",
		minWidth: 200,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "Largo",
		label: "Largo",
		minWidth: 150,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "Color",
		label: "Color",
		minWidth: 100,
		align: "right",
		format: (value) => value.toFixed(2),
	},
	{
		id: "Cantidad",
		label: "Cantidad",
		minWidth: 100,
		align: "right",
		format: (value) => value.toFixed(2),
	},
	{
		id: "Acciones",
		label: "Acciones",
		minWidth: 50,
		align: "right",
		format: (value) => value.toFixed(2),
	},
];

export default function Home() {
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const actionIcons = () => {
		return (
			<FormControl
				sx={{
					// Sin bordes
					border: 0,
					boxShadow: "none",
				}}
			>
				<Popover
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
				>
					The content of the Popover.
				</Popover>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={age}
					onChange={handleChange}
					sx={{
						// Sin bordes
						border: 0,
						boxShadow: "none",
						".MuiOutlinedInput-notchedOutline": { border: 0 },

						//Crear estilos para centrar en el eje X y en el eje Y el icono del select
						"& .MuiSelect-icon": {
							position: "absolute",
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
							margin: "auto",
						},
					}}
				>
					<MenuItem value={0}>
						<HistoryIcon /> Ver movimientos
					</MenuItem>
					<MenuItem value={10}>
						<EditIcon /> Editar
					</MenuItem>
					<MenuItem value={20}>
						<DeleteIcon /> Eliminar
					</MenuItem>
				</Select>
			</FormControl>
		);
	};

	const rows = [
		{
			Nombre: "Algodón",
			Composición: "100% Algodón",
			Ancho: "150 cm",
			Largo: "150 cm",
			Color: "Blanco",
			Acciones: actionIcons(),
			Cantidad: 10,
		},
		// ... crear más filas con telas diferentes
		{
			Nombre: "Poliester",
			Composición: "100% Poliester",
			Ancho: "150 cm",
			Largo: "150 cm",
			Color: "Negro",
			Acciones: actionIcons(),
			Cantidad: 10,
		},
		{
			Nombre: "Lino",
			Composición: "100% Lino",
			Ancho: "150 cm",
			Largo: "150 cm",
			Color: "Verde",
			Acciones: actionIcons(),
			Cantidad: 10,
		},
		{
			Nombre: "Seda",
			Composición: "100% Seda",
			Ancho: "150 cm",
			Largo: "150 cm",
			Color: "Amarillo",
			Acciones: actionIcons(),
			Cantidad: 10,
		},
	];

	//Table
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
	const top100Films = [
		{ title: "The Shawshank Redemption", year: 1994 },
		{ title: "The Godfather", year: 1972 },
		{ title: "The Godfather: Part II", year: 1974 },
		{ title: "The Dark Knight", year: 2008 },
		{ title: "12 Angry Men", year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: "Pulp Fiction", year: 1994 },
		{
			title: "The Lord of the Rings: The Return of the King",
			year: 2003,
		},
		{ title: "The Good, the Bad and the Ugly", year: 1966 },
		{ title: "Fight Club", year: 1999 },
		{
			title: "The Lord of the Rings: The Fellowship of the Ring",
			year: 2001,
		},
		{
			title: "Star Wars: Episode V - The Empire Strikes Back",
			year: 1980,
		},
		{ title: "Forrest Gump", year: 1994 },
		{ title: "Inception", year: 2010 },
		{
			title: "The Lord of the Rings: The Two Towers",
			year: 2002,
		},
		{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
		{ title: "Goodfellas", year: 1990 },
		{ title: "The Matrix", year: 1999 },
		{ title: "Seven Samurai", year: 1954 },
		{
			title: "Star Wars: Episode IV - A New Hope",
			year: 1977,
		},
		{ title: "City of God", year: 2002 },
		{ title: "Se7en", year: 1995 },
		{ title: "The Silence of the Lambs", year: 1991 },
		{ title: "It's a Wonderful Life", year: 1946 },
		{ title: "Life Is Beautiful", year: 1997 },
		{ title: "The Usual Suspects", year: 1995 },
		{ title: "Léon: The Professional", year: 1994 },
		{ title: "Spirited Away", year: 2001 },
		{ title: "Saving Private Ryan", year: 1998 },
		{ title: "Once Upon a Time in the West", year: 1968 },
		{ title: "American History X", year: 1998 },
		{ title: "Interstellar", year: 2014 },
		{ title: "Casablanca", year: 1942 },
		{ title: "City Lights", year: 1931 },
		{ title: "Psycho", year: 1960 },
		{ title: "The Green Mile", year: 1999 },
		{ title: "The Intouchables", year: 2011 },
		{ title: "Modern Times", year: 1936 },
		{ title: "Raiders of the Lost Ark", year: 1981 },
		{ title: "Rear Window", year: 1954 },
		{ title: "The Pianist", year: 2002 },
		{ title: "The Departed", year: 2006 },
		{ title: "Terminator 2: Judgment Day", year: 1991 },
		{ title: "Back to the Future", year: 1985 },
		{ title: "Whiplash", year: 2014 },
		{ title: "Gladiator", year: 2000 },
		{ title: "Memento", year: 2000 },
		{ title: "The Prestige", year: 2006 },
		{ title: "The Lion King", year: 1994 },
		{ title: "Apocalypse Now", year: 1979 },
		{ title: "Alien", year: 1979 },
		{ title: "Sunset Boulevard", year: 1950 },
		{
			title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
			year: 1964,
		},
		{ title: "The Great Dictator", year: 1940 },
		{ title: "Cinema Paradiso", year: 1988 },
		{ title: "The Lives of Others", year: 2006 },
		{ title: "Grave of the Fireflies", year: 1988 },
		{ title: "Paths of Glory", year: 1957 },
		{ title: "Django Unchained", year: 2012 },
		{ title: "The Shining", year: 1980 },
		{ title: "WALL·E", year: 2008 },
		{ title: "American Beauty", year: 1999 },
		{ title: "The Dark Knight Rises", year: 2012 },
		{ title: "Princess Mononoke", year: 1997 },
		{ title: "Aliens", year: 1986 },
		{ title: "Oldboy", year: 2003 },
		{ title: "Once Upon a Time in America", year: 1984 },
		{ title: "Witness for the Prosecution", year: 1957 },
		{ title: "Das Boot", year: 1981 },
		{ title: "Citizen Kane", year: 1941 },
		{ title: "North by Northwest", year: 1959 },
		{ title: "Vertigo", year: 1958 },
		{
			title: "Star Wars: Episode VI - Return of the Jedi",
			year: 1983,
		},
		{ title: "Reservoir Dogs", year: 1992 },
		{ title: "Braveheart", year: 1995 },
		{ title: "M", year: 1931 },
		{ title: "Requiem for a Dream", year: 2000 },
		{ title: "Amélie", year: 2001 },
		{ title: "A Clockwork Orange", year: 1971 },
		{ title: "Like Stars on Earth", year: 2007 },
		{ title: "Taxi Driver", year: 1976 },
		{ title: "Lawrence of Arabia", year: 1962 },
		{ title: "Double Indemnity", year: 1944 },
		{
			title: "Eternal Sunshine of the Spotless Mind",
			year: 2004,
		},
		{ title: "Amadeus", year: 1984 },
		{ title: "To Kill a Mockingbird", year: 1962 },
		{ title: "Toy Story 3", year: 2010 },
		{ title: "Logan", year: 2017 },
		{ title: "Full Metal Jacket", year: 1987 },
		{ title: "Dangal", year: 2016 },
		{ title: "The Sting", year: 1973 },
		{ title: "2001: A Space Odyssey", year: 1968 },
		{ title: "Singin' in the Rain", year: 1952 },
		{ title: "Toy Story", year: 1995 },
		{ title: "Bicycle Thieves", year: 1948 },
		{ title: "The Kid", year: 1921 },
		{ title: "Inglourious Basterds", year: 2009 },
		{ title: "Snatch", year: 2000 },
		{ title: "3 Idiots", year: 2009 },
		{ title: "Monty Python and the Holy Grail", year: 1975 },
	];

	return (
		<>
			<Typography variant="h2" component="h3" sx={{ typography: "h5" }}>
				Gestión de Telas
			</Typography>

			<Paper sx={{ marginTop: "1rem", padding: "1rem" }}>
				<Grid
					container
					spacing={2}
					sx={{
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Grid item xs={12} md={2}>
						<Autocomplete
							freeSolo
							id="free-solo-2-demo"
							disableClearable
							options={top100Films.map((option) => option.title)}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Search input"
									InputProps={{
										...params.InputProps,
										type: "search",
										startAdornment: (
											<InputAdornment>
												<IconButton>
													<SearchIcon />
												</IconButton>
											</InputAdornment>
										),
									}}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={12} md={2}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Age</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12} md={2}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Age</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12} md={2}>
						<Button variant="contained" startIcon={<AddIcon />} sx={{ float: "right" }}>
							Agregar Tela
						</Button>
					</Grid>
				</Grid>

				<TableContainer sx={{ maxHeight: 440 }}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format && typeof value === "number"
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</>
	);
}
