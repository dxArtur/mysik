# Mysic, ouça consciente.

Um player de música simples e moderno, construído com React e com funcionalidades avançadas, como gerenciamento de estado com Redux, testes completos e integração com service workers para uma experiência offline.

## ✨ Funcionalidades

- **Controle de Reprodução:** `Play`, `Pause`, `Próxima` e `Anterior`.
- **Gerenciamento de Estado:** Utiliza **Redux** para um gerenciamento de estado previsível.
- **Lista de Favoritos:** Adicione e remova músicas da sua lista de favoritos.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela.
- **Funcionalidade Offline:** Graças ao **Service Worker**, o app pode ser acessado mesmo sem conexão à internet.
- **Testes Abrangentes:**
    - **Testes Unitários:** Com **Jest** e **React Testing Library** para componentes individuais.
    - **Testes E2E (End-to-End):** Com **Cypress** para simular o comportamento do usuário na aplicação completa.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
    - [React](https://pt-br.reactjs.org/)
    - [Redux Toolkit](https://redux-toolkit.js.org/)
    - [React Router](https://reactrouter.com/)
    - [Tailwind CSS](https://tailwindcss.com/)
- **Testes:**
    - [Cypress](https://www.cypress.io/) (E2E)
    - [Jest](https://jestjs.io/) (Unitários)
    - [React Testing Library](https://testing-library.com/) (Unitários)

---

## 🚀 Como Executar o Projeto

Siga estes passos para ter uma cópia local do projeto rodando na sua máquina.

### Pré-requisitos

Certifique-se de que você tem o [Node.js](https://nodejs.org/en/) e o `npm` (ou `yarn`) instalados.

### Instalação

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/dxArtur/mysik.git](https://github.com/dxArtur/mysik.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd mysik
    ```
3.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn
    ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
```bash
npm run start
# ou
yarn start
```

✅ Executando os Testes
Este projeto inclui testes completos para garantir a estabilidade e o bom funcionamento.

Testes Unitários
Para rodar os testes unitários (com Jest e React Testing Library), execute:

```bash

npm run test
# ou
yarn test
```

Testes E2E (End-to-End)
Para rodar os testes de ponta a ponta (com Cypress), execute:

```bash

npx cypress open
# ou
yarn cypress:open
```

ao iniciar cada um dos testes é necessário adicionar a música manualmente e dar play na mesma para que seja montado o componente e seja póssivel realizar os testes e2e


