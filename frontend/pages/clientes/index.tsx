import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react'
import List from './list';

function Clients() {
    
    return (

        <div style={{ height: "100%", width: "100%" }}>
            <div style={{height:"20px"}}></div>
            <Button type='submit' variant='contained' startIcon={<AddIcon />} color='success' href='/clientes/create'>
                Novo Cliente
            </Button>
            <div style={{height:"20px"}}></div>
                    
            <List />
            
        </div>
       
    )
} 
  
export default Clients;