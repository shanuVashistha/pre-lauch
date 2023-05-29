import React, { useEffect, useState } from "react";
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import PrivateLayout from "@/components/Layout/privateLayout";
import { UserInterface } from "@/types";
import { useLoader } from "@/context/LoaderContext";
import { useSnackbar } from "@/context/SnackbarContext";
import { AddEditors } from "@/dialogs/add";

const Editors: React.FC = () => {
    const { setIsLoading } = useLoader();
    const { openSnackbar } = useSnackbar();
    const [users, setUsers] = useState<Partial<UserInterface[]> | any[]>();
    const [open, setOpen] = useState<boolean>(false);

    const createUser = async (params: Partial<UserInterface>) => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/create/user", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            const data = await response.json();
            if (data.error) {
                openSnackbar(data.error, 'error');
            } else if (data.message) {
                openSnackbar(data.message, 'success');
            }
        } catch (e: any) {
            openSnackbar(e.message, 'error');
        }
        setIsLoading(false);
    }

    const getUsers = async () => {
        setIsLoading(true);
        const response = await fetch("/api/get/users");
        if (response.ok) {
            const data = await response.json();
            setUsers(data);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <PrivateLayout title="Enjoy Mondays Pre Launch - Early Signups">
            <Grid container alignItems="center" className="gap-[8px] mb-[12px]">
                <Typography variant="h5" component={Grid} item xs className="font-medium">
                    Editors
                </Typography>
                <Button size="small" variant="outlined" onClick={() => setOpen(true)}>Add New</Button>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="font-semibold">#</TableCell>
                            <TableCell className="font-semibold">Username</TableCell>
                            <TableCell className="font-semibold">Name</TableCell>
                            <TableCell className="font-semibold">Email</TableCell>
                            <TableCell className="font-semibold">Phone No.</TableCell>
                            <TableCell className="font-semibold">Status</TableCell>
                            {/*<TableCell className="font-semibold" align="right">Actions</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users && users?.length > 0 ?
                                users?.filter((u) => u.username !== 'admin').map((user: any, index: number) =>
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.phone}</TableCell>
                                        <TableCell className="capitalize">{user.status}</TableCell>
                                        {/*<TableCell align="right" className="w-[150px]">*/}
                                        {/*    <Link href={`edit`}>*/}
                                        {/*        <IconButton aria-label="edit">*/}
                                        {/*            <Edit size={16}/>*/}
                                        {/*        </IconButton>*/}
                                        {/*    </Link>*/}
                                        {/*    <IconButton aria-label="edit">*/}
                                        {/*        <Trash2 size={16} className="text-red-500"/>*/}
                                        {/*    </IconButton>*/}
                                        {/*</TableCell>*/}
                                    </TableRow>) : <TableRow>
                                    <TableCell
                                        colSpan={6}
                                        className="p-4 w-full text-center text-center text-primary text-[13px]"
                                    >
                                        No Data Available
                                    </TableCell>
                                </TableRow>
                        }

                    </TableBody>
                </Table>
            </TableContainer>
            <AddEditors
                onSuccess={async (params: any) => {
                    await createUser(params);
                    setOpen(false);
                    getUsers();
                }}
                onCancel={() => setOpen(false)}
                open={open}
            />
        </PrivateLayout>
    );
}

export default Editors;