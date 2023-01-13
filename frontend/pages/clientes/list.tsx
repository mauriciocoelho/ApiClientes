import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CardHeader from '@mui/material/CardHeader';
import Input from '@mui/material/Input';
import { useEffect, useState } from "react";
import { deleteClient, getClientAll } from "../../services/client";
import React from "react";
import Swal from 'sweetalert2';
import api from "../../services/api";

const List = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const [count, setCount] = useState(5);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    useEffect(() => {
        setIsLoading(true)
        getClientAll()
          .then((res: { data: { data: React.SetStateAction<never[]> } }) => {
            setData(res.data.data);
            setCount(res.data.data.length);
            setIsLoading(false)
          })
          .catch()
    },  []);

    function SearchNome(search: any) {        
        setIsLoading(true);
        api
          .get(`clients?search=${search}`)
          .then((res) => setData(res.data.data))
          .catch();
        setIsLoading(false);      
    }

    const destroyClient = async (id: any) => {
        const isConfirm = await Swal.fire({
            title: 'Você tem certeza?',
            text: "depois que apagar não será capaz de reverter!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, pode deletar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            return result.isConfirmed
        });
        
        if(!isConfirm){
            return;
        }
        setIsLoading(true);
        await deleteClient(id)
        .then((res: any) => {
            setIsLoading(false);
            Swal.fire({
                icon: `success`,
                title: `OK`,
                text: res.data.message,
            });
            TodosClient();
        })
        .catch((res: any) => {
            Swal.fire({
                icon: `error`,
                title: res.response.data.message,
                text: res.response.data.data.mensagem,
            });
            setIsLoading(false);
        });
    }    
    
    function TodosClient() {
        setIsLoading(true);
        getClientAll()
          .then((res: { data: { data: React.SetStateAction<never[]> } }) => {
            setData(res.data.data);
            setCount(res.data.data.length);
            setIsLoading(false)
          })
          .catch((err: any) => {
            Swal.fire({
              icon: `error`,
              title: `OP..`,
              text: err.message,
            });
            setIsLoading(false);
          });
    }

    return (
        <div>
            {isLoading ? 
                <Box display='flex' alignItems='center' justifyContent='center' sx={{marginTop: 12, marginBottom: 12}}>
                    <CircularProgress sx={{ "--CircularProgress-size": "150px" }} />
                </Box>: 
                (
                    <>      
                        <CardHeader title="Listagem de Clientes"
                            action={
                                <Input
                                    type="text"
                                    placeholder={`Buscar clientes...`}
                                    onChange={(event: {
                                        target: { value: React.SetStateAction<string> };
                                    }) => {
                                        SearchNome(event.target.value);
                                    }}
                                />
                            }
                        />                  
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Nome Completo</TableCell>
                                    <TableCell>CPF</TableCell>
                                    <TableCell>Data de Nascimento</TableCell>
                                    <TableCell>Telefone</TableCell>
                                    <TableCell>Ação</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ id, nome, cpf, data_nasc, telefone }, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{id}</TableCell>
                                            <TableCell>{nome}</TableCell>
                                            <TableCell>{cpf}</TableCell>
                                            <TableCell>{data_nasc}</TableCell>
                                            <TableCell>{telefone}</TableCell>
                                            <TableCell>
                                                <Tooltip title="Deletar">
                                                    <IconButton>
                                                        <DeleteIcon color='error' onClick={()=>destroyClient(id)} />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    );
                                }
                                )}
                            </TableBody>
                        </Table>
                        <TablePagination
                            component="div"
                            count={count}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage} 
                        />
                    </>
                )
            }
        </div>
    );
}

export default List