import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import TextField from '@mui/material/TextField';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { ElementType, useState } from "react";
import router, { useRouter } from 'next/router';
import { addClient } from "../../services/client";
import Swal from 'sweetalert2';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Layout from '../../components/Layout';

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
    marginLeft: theme.spacing(4.5),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      textAlign: 'center',
      marginTop: theme.spacing(4)
    }
  }))

const Create = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    const [nome, setNome] = useState(``);
    const [cpf, setCPF] = useState(``);
    const [data_nasc, setData_Nasc] = useState(``);
    const [telefone, setTelefone] = useState(``);

    const [errorMessage, setErrorMessage] = useState("");

    const formatCPF = (value: string) => {
        return value
        .replace(/\D/g, '') // remove tudo que não é dígito
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    const formatTelefone = (value: string) => {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    const formatDataNasc = (value: string) => {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    }

    const convertData = (data: string) => {
        const parts = data.split("/");
        return parts[2] + "/" + parts[1] + "/" + parts[0];
    }

    const createUser = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!nome || !cpf || !data_nasc || !telefone) {
            setErrorMessage("Todos os campos são obrigatórios");
            return;
        }
        
        const formData = new FormData();
    
        formData.append(`nome`, nome);
        formData.append(`cpf`, cpf);
        formData.append(`data_nasc`, convertData(data_nasc));
        formData.append(`telefone`, telefone);
    
        await addClient(formData)
        .then((res: {data: {message: any } }) => {
          Swal.fire({
            icon: `success`,
            title: `OK`,
            text: res.data.message,
          })
          router.push(`/clientes`);
        })
        .catch((res: any) => {
            Swal.fire({
                icon: `error`,
                title: res.response.data.message,
                text: res.response.data.message,
            });
            setIsLoading(false);
        });
    }
    return (
        <Layout>
            <CardHeader/>
            <Grid container spacing={12}>
                <Grid item xs={10}>
                    <Typography variant='h5'>
                        <Link>
                            Cadastro de Clientes
                        </Link>
                    </Typography><br></br>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href={`/`}>
                            Início
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href={`/clientes`}
                        >
                            Clientes
                        </Link>
                        <Typography color="text.primary">Novo cliente</Typography>
                    </Breadcrumbs>     
                </Grid>
                <Grid item xs={12}>
                    <Card>          
                        <CardContent>        
                            <form onSubmit={createUser} method='post'>
                                <Grid container spacing={5}>
                                    <Grid item xs={12}>
                                        <TextField 
                                            fullWidth 
                                            value={nome} 
                                            onChange={(event: { target: { value: string } }) => {
                                                setNome(event.target.value);
                                            }} 
                                            placeholder='Nome Completo' 
                                        />
                                    </Grid>     
                                    <Grid item xs={12}>
                                        <TextField 
                                            fullWidth 
                                            value={cpf} 
                                            onChange={(event: { target: { value: string } }) => {
                                                setCPF(formatCPF(event.target.value));
                                            }} 
                                            placeholder='000.000.000-00' 
                                        />
                                    </Grid>     
                                    <Grid item xs={12}>
                                        <TextField 
                                            fullWidth 
                                            value={data_nasc} 
                                            onChange={(event: { target: { value: string } }) => {
                                                setData_Nasc(formatDataNasc(event.target.value));
                                            }} 
                                            placeholder='07/08/1989' 
                                        />
                                    </Grid>     
                                    <Grid item xs={12}>
                                        <TextField 
                                            fullWidth 
                                            value={telefone} 
                                            onChange={(event: { target: { value: string } }) => {
                                                setTelefone(formatTelefone(event.target.value));
                                            }} 
                                            placeholder='(99)99999-9999' 
                                        />
                                    </Grid>                  
                                    <Grid item xs={12}>
                                        {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                                        <ButtonStyled type='submit' variant='contained' startIcon={<DoneIcon />} size='large' color='success'>
                                            Salvar
                                        </ButtonStyled>        
                                        <ResetButtonStyled color='secondary' variant='outlined' startIcon={<CloseIcon />} href='/clientes'>
                                            Cancelar
                                        </ResetButtonStyled>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>   
        </Layout>
    )        
}

export default Create