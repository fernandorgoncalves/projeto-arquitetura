# Projeto Arquitetura

Este é um projeto de front-end desenvolvido em React que simula um site de uma agência de arquitetura. O site é multilíngue (Português e Inglês) e apresenta uma estrutura componentizada, com páginas para Sobre, Projetos e Contato.

## ✨ Funcionalidades

*   **Navegação Multi-página:** O site possui as seções Home, Sobre, Projetos e Contato, com navegação gerenciada pelo React Router.
*   **Internacionalização (i18n):** Suporte para dois idiomas (Português e Inglês). A preferência de idioma é salva no `localStorage` do navegador.
*   **Listagem de Projetos:** A página de projetos consome uma API para exibir uma galeria de trabalhos.
*   **Favoritar Projetos:** Os usuários podem marcar projetos como favoritos, e essa seleção é salva na `sessionStorage`.
*   **Formulário de Contato:** Um formulário funcional que envia os dados para um serviço externo (Web3Forms) e exibe uma mensagem de sucesso.
*   **Design Responsivo:** Componentes como o Header possuem um menu "hambúrguer" para dispositivos móveis.

## 🚀 Tecnologias Utilizadas

*   **React:** Biblioteca principal para a construção da interface de usuário.
*   **Vite:** Ferramenta de build e servidor de desenvolvimento local de alta performance.
*   **React Router DOM:** Para gerenciamento de rotas e navegação entre as páginas.
*   **CSS:** Estilização feita com arquivos CSS modulares para cada componente.

### Padrões e Conceitos Aplicados

*   **Componentização:** A interface é dividida em componentes reutilizáveis (ex: `Button`, `Header`, `Footer`, `Banner`).
*   **React Hooks:**
    *   `useState`: Para gerenciar o estado local dos componentes (ex: menu mobile, dados de formulário).
    *   `useEffect`: Para executar efeitos colaterais, como a busca de dados da API e a sincronização com o `localStorage`.
    *   `useContext`: Para consumir o estado global (idioma e textos) fornecido pelo `AppContext`.
*   **Context API:** Utilizada para criar um estado global (`AppContext`) que gerencia o idioma da aplicação e disponibiliza os textos para todos os componentes.
*   **Consumo de API:**
    *   Uso da `fetch` API com `async/await` para buscar dados de projetos e textos.
    *   Integração com o serviço Web3Forms para o envio do formulário de contato.
*   **Armazenamento no Navegador:**
    *   `localStorage`: Para persistir a escolha de idioma do usuário entre sessões.
    *   `sessionStorage`: Para salvar os projetos favoritados durante uma única sessão.

## 📂 Estrutura de Arquivos

O projeto está organizado da seguinte forma:

```
src/
├── assets/         # Ícones, imagens e outros arquivos estáticos
├── components/     # Componentes React reutilizáveis
├── context/        # Provedores de Contexto (AppContext)
├── pages/          # Componentes que representam as páginas do site
├── services/       # Funções para interação com APIs
├── App.jsx         # Componente raiz que define as rotas
└── main.jsx        # Ponto de entrada da aplicação
```

## ⚙️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd projeto-arquitetura
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).