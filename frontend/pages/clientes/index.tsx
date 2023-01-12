import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import * as React from 'react'
import List from './list';
import { GridCenter, GridContainer } from './clientStyled';

const Clients = () => {

    return (
        <GridContainer>
            <GridCenter>
                <Grid item xs={12} md={12}>
                    <Card >
                        <CardHeader title="Listagem de Clientes" />
                        <CardContent>
                            <Button
                                type='submit'
                                variant='contained'
                                startIcon={<AddIcon />}
                                className='actions-left'
                                color='success'
                                href='/clientes/create'
                            >
                                Novo Cliente
                            </Button>
                            <List/>
                        </CardContent>
                    </Card>
                </Grid>
            </GridCenter>
        </GridContainer>
    );
}

export default Clients