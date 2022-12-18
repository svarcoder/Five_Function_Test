import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Instance from "../Instance";

const TableShow = () => {
	const useStyles = makeStyles({
		table: {
			minWidth: 650,
		},
	});

	const classes = useStyles();

	const [data, setData] = useState(null);

	useEffect(() => {
		Instance.get(`/api-user-view`, {
			headers: { authorization: `Bearer ${sessionStorage.getItem("token$")}` },
		})
			.then(({ data }) => {
				console.log("data", data);
				let temp = data.userData;
				temp.reverse();
				setData(temp);
			})
			.catch((err) => {
				console.log("err", err);
			});
	}, []);

	return (
		<>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell>First Name</TableCell>
							<TableCell>Last Name</TableCell>
							<TableCell>Email</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data &&
							data.map((row, i) => (
								<TableRow key={i}>
									<TableCell component='th' scope='row'>
										{i + 1}
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.firstName}
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.lastName}
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.email}
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default TableShow;
