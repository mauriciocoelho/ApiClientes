#### Primeiros passos

Primeiro, clone o repositório:

```bash
git clone https://github.com/mauriciocoelho/desafio_cuco.git
```

Há duas partes desta aplicação.

#### Backend

Acesse o diretório Backend

    cd desafio_cuco/backend


Instale todas as dependências usando o composer

    composer install

Copie o arquivo env de exemplo e faça as alterações de configuração necessárias no arquivo .env

    linux
    cp -R .env.example .env
    windows
    copy .env.example .env

Gerar uma nova chave

    php artisan key:generate

Execute as migrações do banco de dados
(**Defina a conexão do banco de dados em .env antes de migrar**)

    php artisan migrate:fresh --seed

Inicie o servidor de desenvolvimento com este comando

    php artisan serve

Sua API agora está hospedada em http://localhost:8000


Você pode acessar este URL depois de concluir a configuração do frontend.

##### API Docs

- clients:

  https://www.postman.com/mauriciocoelho/workspace/desafio-cuco/collection/9050827-3a985997-0b29-4985-9225-c7fcd6a3b1dd?ctx=documentation

### Documentação das rotas com Swagger
```
Pelo o navegador acesse
- http://localhost:8000/api/doc
```

### Testes Unitário
```
- php artisan test
```

