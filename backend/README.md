## Instalação e execução

### 1. Entrar na pasta do backend

```bash
cd backend
```

### 2. Criar e ativar o ambiente virtual (caso ainda não exista)

```bash
python -m venv venv

# Windows
.\venv\Scripts\activate

# Linux / macOS
source venv/bin/activate
```

### 3. Instalar dependências

```bash
pip install -r requirements.txt
```

### 4. Criar arquivo .env

`SECRET_KEY=django-insecure-site-hospital-key-2026-very-secure
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DB_NAME=hospital_db
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
USE_SQLITE=True`

### 5. Configurar o banco de dados

**Opção A — SQLite**  
No arquivo `.env`:
```
USE_SQLITE=True
```

**Opção B — PostgreSQL via Docker**  
1. Inicie o Docker Desktop
2. Defina `USE_SQLITE=False` no `.env`
3. Suba o container:
```bash
docker compose up -d
```

### 6. Aplicar as migrações

```bash
python manage.py migrate
```

### 7. Carregar os dados iniciais

```bash
python manage.py load_initial_data
```

> Este comando popula o banco com as informações do hospital, serviços, médicos e copia as imagens do frontend para a pasta `media/`.

### 8. Criar superusuário (para o painel Admin)

```bash
python manage.py createsuperuser
```
> Ou use o já criado: usuário `admin` / senha `admin123`

### 9. Iniciar o servidor

```bash
python manage.py runserver
```

> O backend disponível em: **http://localhost:8000**
> Painel Admin:  **http://localhost:8000/admin/**

