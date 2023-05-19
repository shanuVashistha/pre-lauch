import React, { useContext } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import {
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
import { LoaderContext } from "@/context/LoaderContext";

const Enquiries: React.FC = () => {
    const [rows, setRows] = React.useState<any[]>([]);
    const { setIsLoading } = useContext(LoaderContext)
    const getEnquires = async () => {
        setIsLoading(true);
        const response = await fetch("/api/get/enquries");
        if (response.ok) {
            const data = await response.json();
            setRows(data);
        }
        setIsLoading(false);
    }

    React.useEffect(() => {
        getEnquires();
    }, []);
    return <PrivateLayout title="Enjoy Mondays Pre Launch - Enquires">
        <Grid container alignItems="center" className="gap-[8px] mb-[12px]">
            <Typography variant="h5" component={Grid} item xs className="font-medium">
                Enquires
            </Typography>
        </Grid>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="font-semibold">#</TableCell>
                        <TableCell className="font-semibold">Email</TableCell>
                        <TableCell className="font-semibold">Message</TableCell>
                        <TableCell className="font-semibold">Date & Time</TableCell>
                        <TableCell className="font-semibold" align="right">Is Email Delivered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.message}</TableCell>
                            <TableCell>{new Date(row.timestamp).toLocaleString()}</TableCell>
                            <TableCell align="right">{row.is_email_delivered ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </PrivateLayout>
}

export default Enquiries;