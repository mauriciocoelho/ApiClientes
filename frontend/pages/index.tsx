import { Button } from "@mui/material";
import Layout from "../components/Layout";

const Index = () => 
  <Layout>    
    <center>
      <p>Essa Api foi desenvolvida utilizando as Linguagens <b>PHP</b> e <b>JavaScript</b>, com os frameworks <b>Laravel</b> e <b>Nexjs</b>.</p>
      
      <p>No Backend foi utilizado para a documentação o <b>Swagger</b>, para os testes unitário foi utilizado o <b>Pest</b>.</p>
      
      <p>No Frontend foi utilizado o <b>Material-UI</b>.</p><br></br>
      
      <p>Para acessar o desafio clique no botão abaixo.</p><br></br>
      <Button variant='contained' href="/clientes">Clientes</Button>
    </center>    
  </Layout>

export default Index;