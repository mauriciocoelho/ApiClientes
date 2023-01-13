import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import AddIcon from '@mui/icons-material/Add';
import CardHeader from '@mui/material/CardHeader';
import * as React from 'react'
import List from './list';
import Layout from '../../components/Layout';



const Clients = (props: any) => (

    <Layout>
        <div style={{ height: "100%", width: "100%" }}>
            <div style={{height:"20px"}}></div>
            <Button type='submit' variant='contained' startIcon={<AddIcon />} color='success' href='/clientes/create'>
                Novo Cliente
            </Button>
            <div style={{height:"20px"}}></div>
            <Paper>
                <CardHeader title="Listagem de Clientes"
                    action={
                        <Input placeholder="Pesquisar..." />
                    }
                />
                <List />
            </Paper>
        </div>
    </Layout>
);
  
export default Clients;