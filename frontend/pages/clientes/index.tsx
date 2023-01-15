import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react'
import List from './list';
import Layout from '../../components/Layout';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Clients = () =>    

    <Layout>
        <Grid item xs={10}>
            <h2>Listagem de Clientes</h2>            
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href={`/`}>
                    Início
                </Link>
                <Typography color="text.primary">Clientes</Typography>
            </Breadcrumbs>     
            <div style={{height:"20px"}}></div>
            <Button type='submit' variant='contained' startIcon={<AddIcon />} color='success' href='/clientes/create'>
                Novo Cliente
            </Button>
            <div style={{height:"20px"}}></div>                    
            <List />            
        </Grid>
    </Layout>    
  
export default Clients;