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

### 4. Configurar o banco de dados

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

### 5. Aplicar as migrações

```bash
python manage.py migrate
```

### 6. Carregar os dados iniciais

```bash
python manage.py load_initial_data
```

> Este comando popula o banco com as informações do hospital, serviços, médicos e copia as imagens do frontend para a pasta `media/`.

### 7. Criar superusuário (para o painel Admin)

```bash
python manage.py createsuperuser
```
> Ou use o já criado: usuário `admin` / senha `admin123`

### 8. Iniciar o servidor

```bash
python manage.py runserver
```

O backend disponível em: **http://localhost:8000**
Painel Admin:  **http://localhost:8000/admin/**

