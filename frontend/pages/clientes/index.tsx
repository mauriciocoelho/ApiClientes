import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react'
import List from './list';
import Layout from '../../components/Layout';
import Grid from '@mui/material/Grid';

const Clients = () =>    

    <Layout>
        <Grid item xs={10}>
            <div style={{height:"20px"}}></div>
            <Button type='submit' variant='contained' startIcon={<AddIcon />} color='success' href='/clientes/create'>
                Novo Cliente
            </Button>
            <div style={{height:"20px"}}></div>
                    
            <List />
            
        </Grid>
    </Layout>    
  
export default Clients;