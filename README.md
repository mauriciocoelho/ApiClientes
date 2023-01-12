### Desafio Cuco

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

- Admin:

  https://documenter.getpostman.com/view/9967497/UVBzm94s

- Customer:

  https://documenter.getpostman.com/view/9967497/UVBzm94u

- Public:

  https://documenter.getpostman.com/view/9967497/UVBzm94v

#### Frontend

Para o frontend, cd no diretório `frontend` e execute o seguinte comando.

```bash
npm install
```

Em seguida, copie o `.env.example` arquivo e renomeie-o para `.env`.

```bash
linux
cp -R .env.example .env
windows
copy .env.example .env
```

Agora, você pode executar o aplicativo frontend com o seguinte comando.

```bash
npm run dev
```

ou

```bash
npm run start
```

Agora seu aplicativo de front-end será executado em http://localhost:3000/
