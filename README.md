# Gestão de Desenvolvimento Pessoal - Interface Web

Interface web responsiva estilo Jira para a API de Gestão de Desenvolvimento Pessoal. Desenvolvida com React + Vite + Tailwind CSS.

## 🎯 Funcionalidades

- ✅ **Autenticação** - Login e registro de usuários
- ✅ **Dashboard** - Resumo de metas e gráficos de progresso
- ✅ **Gerenciador de Metas** - CRUD completo com filtros por status
- ✅ **Projetos** - Listagem e gerenciamento de projetos
- ✅ **Mentorias** - Registro de mentorias
- ✅ **Aprendizados** - Gestão de cursos e workshops
- ✅ **Melhorias** - Registro de melhorias
- ✅ **Anotações** - Criação e organização de anotações
- ✅ **Design Jira-like** - Sidebar, cards, status badges
- ✅ **Responsivo** - Mobile, Tablet, Desktop

## 🛠️ Tecnologias

- **React 19** - Biblioteca UI
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **React Router** - Navegação
- **Axios** - Cliente HTTP
- **Recharts** - Gráficos
- **Lucide React** - Ícones

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- npm ou pnpm

### Setup

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd gestao-desenvolvimento-interface
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite .env com a URL da sua API
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## 🚀 Build para Produção

```bash
npm run build
npm run preview
```

## 📋 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Layout.jsx      # Layout principal
│   ├── Sidebar.jsx     # Barra lateral de navegação
│   ├── GoalForm.jsx    # Formulário de metas
│   └── ProtectedRoute.jsx
├── pages/              # Páginas
│   ├── Dashboard.jsx   # Dashboard com gráficos
│   ├── Goals.jsx       # Gerenciador de metas
│   ├── Projects.jsx    # Gerenciador de projetos
│   ├── Login.jsx       # Página de login
│   ├── Register.jsx    # Página de registro
│   └── ...
├── hooks/              # Custom hooks
│   └── useAuth.js      # Hook de autenticação
├── utils/              # Utilitários
│   └── api.js          # Cliente API
├── styles/             # Estilos globais
│   └── index.css       # CSS com Tailwind
└── App.jsx             # Componente raiz
```

## 🔐 Autenticação

A aplicação utiliza JWT para autenticação. O token é armazenado no localStorage e enviado automaticamente em cada requisição.

### Fluxo de Autenticação

1. Usuário faz login em `/login`
2. Token JWT é retornado pela API
3. Token é armazenado no localStorage
4. Token é incluído no header `Authorization: Bearer <token>` de todas as requisições
5. Se o token expirar, o usuário é redirecionado para `/login`

## 📊 Componentes Principais

### Dashboard
- Resumo de metas (total, concluídas, em progresso, planejadas)
- Gráfico de evolução por período
- Distribuição de status

### Gerenciador de Metas
- Criar, editar, deletar metas
- Filtrar por status (A Fazer, Em Progresso, Concluída)
- Visualização em cards

### Layout
- Sidebar com navegação
- Header com informações do usuário
- Menu de logout

## 🎨 Design System

### Cores
- **Primary**: `#0052CC` (Jira Blue)
- **Success**: `#216E4E` (Done)
- **Warning**: `#974F0C` (High Priority)
- **Danger**: `#AE2A19` (Critical)

### Componentes
- **Buttons**: Primary, Secondary, Danger
- **Cards**: Com hover effects
- **Badges**: Status e prioridade
- **Forms**: Input, Select, Textarea

## 🔄 Integração com API

A aplicação se conecta à API de Gestão de Desenvolvimento Pessoal. Configure a URL da API em `.env`:

```
VITE_API_URL=http://localhost:3000
```

### Endpoints Utilizados

- `POST /users/register` - Registrar usuário
- `POST /users/login` - Login
- `GET /users/me` - Obter perfil
- `POST /users/logout` - Logout
- `GET /goals` - Listar metas
- `POST /goals` - Criar meta
- `PUT /goals/:id` - Atualizar meta
- `DELETE /goals/:id` - Deletar meta
- `GET /dashboard/goals-summary` - Resumo de metas
- `GET /dashboard/progress-graph` - Gráfico de progresso

## 📱 Responsividade

A aplicação é totalmente responsiva:

- **Mobile** (< 640px): Sidebar colapsada, layout em coluna única
- **Tablet** (640px - 1024px): Sidebar visível, grid 2 colunas
- **Desktop** (> 1024px): Layout completo, grid 3+ colunas

## 🐛 Troubleshooting

### Erro de CORS
Se receber erro de CORS, verifique se:
1. A API está rodando em `http://localhost:3000`
2. A API tem CORS habilitado
3. A URL em `.env` está correta

### Erro de Autenticação
Se for redirecionado para login:
1. Verifique se o token está sendo salvo
2. Verifique se a API está retornando o token
3. Limpe o localStorage: `localStorage.clear()`

## 📝 Licença

Este projeto é de uso livre para fins educacionais e profissionais.

## 👨‍💻 Autor

Desenvolvido como interface para a API de Gestão de Desenvolvimento Pessoal.

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.
