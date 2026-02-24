#  Gestão de Desenvolvimento Pessoal - Interface Web

Interface web responsiva **estilo Jira** para gerenciar seu desenvolvimento pessoal e profissional. Desenvolvida com **React 19 + Vite + Tailwind CSS**.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![React](https://img.shields.io/badge/React-19.2-blue)
![Vite](https://img.shields.io/badge/Vite-7.1-purple)
![License](https://img.shields.io/badge/license-MIT-green)

## Visão Geral

Esta é uma interface moderna para a **API de Gestão de Desenvolvimento Pessoal**, permitindo que você:

- Visualize seu progresso em um dashboard interativo
 Gerencie metas pessoais e profissionais
- Organize seus projetos
- Registre mentorias
- Acompanhe seus aprendizados
- Documente melhorias
- Crie anotações

## Funcionalidades

### Autenticação
- ✅ Registro de novos usuários
- ✅ Login com JWT
- ✅ Logout seguro
- ✅ Proteção de rotas

### Dashboard
- ✅ Resumo de metas (total, concluídas, em progresso, planejadas)
- ✅ Gráficos de evolução por período
- ✅ Distribuição de status em pizza chart
- ✅ Cards com métricas principais

### Gerenciador de Metas
- ✅ Criar, editar, deletar metas
- ✅ Filtrar por status (A Fazer, Em Progresso, Concluída)
- ✅ Visualização em cards
- ✅ Informações de tipo e prazo

### Projetos
- ✅ Listagem de projetos
- ✅ Gerenciamento completo

### Mentorias
- ✅ Registro de mentorias
- ✅ Visualização e gerenciamento

### Aprendizados
- ✅ Gestão de cursos e workshops
- ✅ Organização por tipo

### Melhorias
- ✅ Registro de melhorias
- ✅ Acompanhamento

### Anotações
- ✅ Criação e organização
- ✅ Filtros por período

## Tecnologias

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.2.1 | Biblioteca UI |
| **Vite** | 7.1.7 | Build tool |
| **Tailwind CSS** | 4.1.14 | Estilização |
| **React Router** | 6.20.0 | Navegação SPA |
| **Axios** | 1.6.5 | Cliente HTTP |
| **Recharts** | 2.15.2 | Gráficos |
| **Lucide React** | 0.453.0 | Ícones |

## Instalação

### Pré-requisitos
- **Node.js** 18.x ou superior
- **npm** ou **pnpm**
- **Git**

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/simonegabionetta/gestao-desenvolvimento-pessoal-web.git
cd gestao-desenvolvimento-pessoal-web
```

### Passo 2: Instale as Dependências

```bash
npm install
# ou
pnpm install
```

### Passo 3: Configure as Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure a URL da sua API:

```env
VITE_API_URL=http://localhost:3000
```

**Nota**: Se sua API está rodando em outro endereço, atualize a URL accordingly.

### Passo 4: Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em **http://localhost:5173**

##  Uso

### Desenvolvimento

```bash
# Inicia o servidor com hot reload
npm run dev
```

### Build para Produção

```bash
# Cria a build otimizada
npm run build

# Preview da build
npm run preview
```

## Estrutura do Projeto

```
gestao-desenvolvimento-pessoal-web/
├── src/
│   ├── components/
│   │   ├── Layout.jsx              # Layout principal
│   │   ├── Sidebar.jsx             # Barra lateral de navegação
│   │   ├── GoalForm.jsx            # Formulário de metas
│   │   └── ProtectedRoute.jsx      # Rota protegida
│   ├── pages/
│   │   ├── Dashboard.jsx           # Dashboard com gráficos
│   │   ├── Goals.jsx               # Gerenciador de metas
│   │   ├── Projects.jsx            # Gerenciador de projetos
│   │   ├── Mentorships.jsx         # Mentorias
│   │   ├── Learning.jsx            # Aprendizados
│   │   ├── Improvements.jsx        # Melhorias
│   │   ├── Notes.jsx               # Anotações
│   │   ├── Login.jsx               # Página de login
│   │   └── Register.jsx            # Página de registro
│   ├── hooks/
│   │   └── useAuth.js              # Hook de autenticação
│   ├── utils/
│   │   └── api.js                  # Cliente API com interceptadores
│   ├── styles/
│   │   └── index.css               # Tailwind + estilos customizados
│   ├── App.jsx                     # Componente raiz
│   └── main.jsx                    # Entrada da aplicação
├── index.html                      # HTML principal
├── vite.config.js                  # Configuração Vite
├── tailwind.config.js              # Configuração Tailwind
├── postcss.config.js               # Configuração PostCSS
├── package.json                    # Dependências
├── .env.example                    # Exemplo de variáveis
├── .gitignore                      # Arquivos ignorados
└── README.md                       # Este arquivo
```

## Design System

### Cores Principais

```css
--jira-blue: #0052CC      /* Cor primária */
--jira-dark: #161B22      /* Fundo escuro */
--jira-light: #F7F8FA     /* Fundo claro */
--status-todo: #626F86    /* A Fazer */
--status-progress: #0052CC /* Em Progresso */
--status-done: #216E4E    /* Concluída */
--priority-critical: #AE2A19 /* Crítico */
--priority-high: #974F0C  /* Alto */
--priority-medium: #7F5F01 /* Médio */
--priority-low: #216E4E   /* Baixo */
```

### Componentes

- **Buttons**: Primary, Secondary, Danger (com variações)
- **Cards**: Com hover effects e shadows
- **Badges**: Status e prioridade
- **Forms**: Input, Select, Textarea com validação
- **Tables**: Com sorting e filtros
- **Charts**: Linha, Pizza, Barras (Recharts)

## Autenticação

### Fluxo de Login

1. Usuário acessa `/login`
2. Insere email e senha
3. API retorna JWT token
4. Token é armazenado em `localStorage`
5. Usuário é redirecionado para `/`

### Fluxo de Registro

1. Usuário acessa `/register`
2. Preenche nome, email e senha
3. API cria novo usuário e retorna JWT
4. Token é armazenado em `localStorage`
5. Usuário é redirecionado para `/`

### Proteção de Rotas

Todas as rotas exceto `/login` e `/register` são protegidas. Se o token expirar, o usuário é automaticamente redirecionado para `/login`.

## Responsividade

A aplicação é totalmente responsiva e funciona em todos os dispositivos:

| Tamanho | Breakpoint | Layout |
|--------|-----------|--------|
| **Mobile** | < 640px | Sidebar colapsada, 1 coluna |
| **Tablet** | 640px - 1024px | Sidebar visível, 2 colunas |
| **Desktop** | > 1024px | Layout completo, 3+ colunas |

## 🔗 Integração com API

### Configuração

A aplicação se conecta à API de Gestão de Desenvolvimento Pessoal. Configure a URL em `.env`:

```env
VITE_API_URL=http://localhost:3000
```

### Endpoints Utilizados

#### Autenticação
```
POST   /users/register          # Registrar novo usuário
POST   /users/login             # Login
GET    /users/me                # Obter perfil
PUT    /users/me                # Atualizar perfil
POST   /users/logout            # Logout
GET    /users/me/history        # Histórico de atividades
```

#### Metas
```
GET    /goals                   # Listar metas
POST   /goals                   # Criar meta
GET    /goals/:id               # Obter meta
PUT    /goals/:id               # Atualizar meta
DELETE /goals/:id               # Deletar meta
```

#### Projetos
```
GET    /projects                # Listar projetos
POST   /projects                # Criar projeto
GET    /projects/:id            # Obter projeto
PUT    /projects/:id            # Atualizar projeto
DELETE /projects/:id            # Deletar projeto
```

#### Dashboard
```
GET    /dashboard/goals-summary # Resumo de metas
GET    /dashboard/progress-graph # Gráfico de progresso
GET    /dashboard/filter        # Filtrar dados
```

## Troubleshooting

### Erro: "Cannot GET /api/users/me"

**Causa**: API não está rodando ou URL está incorreta

**Solução**:
1. Verifique se a API está rodando em `http://localhost:3000`
2. Verifique a URL em `.env`
3. Reinicie o servidor: `npm run dev`

### Erro: "CORS error"

**Causa**: API não tem CORS habilitado

**Solução**:
1. Verifique se a API tem CORS configurado
2. Adicione `http://localhost:5173` aos origins permitidos

### Erro: "Token inválido"

**Causa**: Token expirou ou está corrompido

**Solução**:
1. Faça logout e login novamente
2. Limpe o localStorage: `localStorage.clear()`
3. Atualize a página

### Erro: "Página em branco"

**Causa**: Erro na compilação ou dependência faltando

**Solução**:
```bash
# Limpe node_modules e reinstale
rm -rf node_modules package-lock.json
npm install

# Reinicie o servidor
npm run dev
```

## Documentação da API

Para documentação completa da API, acesse:

```
http://localhost:3000/api-docs
```

(Quando a API está rodando localmente)

##  Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione o repositório
5. Configure as variáveis de ambiente
6. Clique em "Deploy"

### Netlify

1. Faça push do código para GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Clique em "New site from Git"
4. Selecione o repositório
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Clique em "Deploy"

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview"]
```

```bash
docker build -t gestao-dev-web .
docker run -p 5173:5173 gestao-dev-web
```

## Performance

- ✅ Build otimizado com Vite
- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Caching de requisições
- ✅ Minificação de assets

## Segurança

- ✅ JWT para autenticação
- ✅ Token armazenado seguramente
- ✅ HTTPS em produção
- ✅ Validação de entrada
- ✅ Proteção contra XSS

##  Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

##  Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

##  Autor

Desenvolvido por **Simone Monteiro Gabionetta**

- GitHub: [@simonegabionetta](https://github.com/simonegabionetta)
- LinkedIn: [Simone Monteiro](https://linkedin.com/in/simonegabionetta)

## Suporte

Para dúvidas ou sugestões:

1. Abra uma [issue](https://github.com/simonegabionetta/gestao-desenvolvimento-pessoal-web/issues)
2. Envie um email
3. Crie uma discussão no GitHub

##  Roadmap

- [ ] Implementar formulários para todas as páginas
- [ ] Adicionar filtros avançados
- [ ] Implementar paginação
- [ ] Adicionar notificações toast
- [ ] Testes unitários e E2E
- [ ] Dark mode
- [ ] Exportar dados em PDF/Excel
- [ ] Integração com calendário
- [ ] Notificações em tempo real
- [ ] Mobile app (React Native)

##  Estatísticas

- **Componentes**: 10+
- **Páginas**: 8
- **Endpoints**: 30+
- **Linhas de Código**: 2000+

---

**Desenvolvido para gerenciar seu desenvolvimento pessoal**

⭐ Se este projeto foi útil, deixe uma estrela!
