## 📸 Gallery+

O **Gallery+** é uma aplicação full-stack de gerenciamento de galeria de fotos, desenvolvida para proporcionar uma experiência fluida de organização visual. O projeto permite o upload de imagens, criação de álbuns personalizados e filtragem dinâmica de conteúdo através da URL.

## 🚀 Tecnologias

Este projeto utiliza as ferramentas mais modernas do ecossistema JavaScript/TypeScript:

### Front-end
*   **React 19**: Biblioteca base para a interface.
*   **TanStack Query v5**: Gerenciamento de estado assíncrono e cache de dados.
*   **React Hook Form & Zod**: Manipulação de formulários e validação de esquemas (schemas).
*   **Tailwind CSS 4 & Tailwind Variants**: Estilização baseada em utilitários e sistema de variantes de componentes.
*   **Nuqs**: Gerenciamento de filtros e estado através da URL (Query Strings).
*   **Radix UI**: Componentes acessíveis (Primitives) para o sistema de diálogos (modais).

### Back-end
*   **Fastify 4**: Framework web focado em baixo overhead e máxima velocidade.
*   **Zod**: Validação de dados rigorosa no lado do servidor.

---

## 🛠️ Funcionalidades

*   **Galeria Dinâmica**: Visualização de fotos com carregamento otimizado.
*   **Gerenciamento de Álbuns**: Criação de álbuns e associação de fotos através de modais interativos.
*   **Filtros Inteligentes**: Filtragem por álbuns via URL, permitindo o compartilhamento de visualizações específicas.
*   **Upload de Arquivos**: Suporte para envio de imagens (PNG, JPG, JPEG) com validação de tamanho (máximo 50MB) e tipo via Zod.
*   **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela utilizando Tailwind CSS.

---

## 🔧 Como rodar o projeto

### Pré-requisitos
*   Node.js instalado.
*   Gerenciador de pacotes **pnpm** (ou npm/yarn).

### Passo a passo

1.  **Clone o repositório**:
```bash
    git clone https://github.com/velosogustavo/gallery-plus.git
    cd gallery-plus 
```
2.  **Instale as dependências:**
```bash
    pnpm install
```
3.  **Inicie o servidor de desenvolvimento (Back-end):**
```bash
    pnpm dev-server
```

  *  O servidor rodará em: `http://localhost:5799`.

4.  **Inicie o front-end (em outro terminal):**
```bash
    pnpm dev
```

  *  A aplicação estará disponível em `http://localhost:5173`.