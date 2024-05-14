# Biblioteca JWT para gerenciamento de tokens em localStorage ou sessionStorage

Esta é uma biblioteca JavaScript que oferece funcionalidades para gerenciar tokens JWT (JSON Web Tokens) em `localStorage` ou `sessionStorage`. Os dados do payload são decodificados dinamicamente, armazenando apenas o token no formato de string.

Token para teste: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzU0NjQ3NCIsIm5hbWUiOiJQYXVsbyIsImVtYWlsIjoicGF1bG9AdGVzdGV0b2tlbi5jb20iLCJyb2xlIjoiYWRtaW4ifQ.A0Bk9R9DFLeGxqPbhIUK6AHFkFGByjCID2oRJ2CmUgY

## Observações

Esta documentação detalha os parâmetros e retornos das funções da biblioteca JWT. Certifique-se de consultar esta documentação para entender como utilizar cada função de forma adequada.

## Para começar a usar o JWT.JS, instale-o em seu projeto via npm:

```bash
npm i pl-jwt
```

## Nota: Embora o jwt-lib não tenha sido inicialmente planejado para ser compatível com TypeScript, é possível utilizá-lo em projetos TypeScript sem problemas. No entanto, para evitar alertas no Intellisense, é recomendado adicionar a seguinte linha acima da declaração de importação do jwt-lib: // @ts-ignore.
   ```javascript
   // @ts-ignore
   import JWT from 'pl-jwt';
```

## Configurações(opcionais)
###  `JWT.name = 'Nome_do_seu_token'`

Define o nome do token que será salvo

### `JWT.storage = true`

Define se o armazenamento será em localStorage(true) ou sessionStorage(false)

### `JWT.setToken(token: string)`

Armazena o token no `localStorage` ou `sessionStorage`.

### `JWT.getData(): object`

Retorna o token descodificado no formato de objeto.

### `JWT.hasToken(): boolean`

Verifica se o token existe e retorna um booleano.

### `JWT.getToken(): string | undefined`

Retorna o token armazenado como string ou `undefined` se não houver token.

### `JWT.removeToken()`

Remove o token armazenado.

### `JWT.permissions(permissions: array, groupsOfpermissions: object[], all: string | array): boolean`

Verifica se o usuário atual está em um grupo de permissões específico.
Exemplo de uso:
 ```javascript
let check = JWT.permissions(['createx'], [
        {
          roles: ['admin', 'cliente'],
          permissions: ['create', 'update']
        }
      ]) ? JWT.user('name') + " está permitido" : 'Não permitido';
```
### `JWT.auth(roles: string | array = null): boolean`

Verifica se o usuário está autenticado, opcionalmente verificando o papel/tipo/função do usuário.

### `JWT.user(key: string, def: string = ''): any`

Retorna os dados do usuário autenticado para uma chave específica ou um valor padrão se a chave não existir.

## Funções Adicionais

### `JWT.getKey(index: string): any`

Pega um índice específico do PAYLOAD do token JWT e retorna o seu valor no caso de sucesso ou `undefined` no caso de falha.

- `index`: Índice específico a ser obtido do PAYLOAD.
- **Retorno**: O valor correspondente ao índice do PAYLOAD ou `undefined` se não houver valor correspondente.

### `JWT.hasKey(index: string): boolean`

Verifica se uma chave existe no PAYLOAD do token JWT armazenado e retorna um booleano indicando a existência.

- `index`: Chave a ser verificada no PAYLOAD.
- **Retorno**: `true` se a chave existir no PAYLOAD ou `false` se não existir.

### `JWT.getId(): any`

Retorna o ID do usuário que está no PAYLOAD do token JWT.

- **Retorno**: O ID do usuário do PAYLOAD.

### `JWT.getName(): any`

Retorna o nome do usuário que está no PAYLOAD do token JWT.

- **Retorno**: O nome do usuário do PAYLOAD.

### `JWT.getRole(): any`

Retorna a função do usuário que está no PAYLOAD do token JWT.

- **Retorno**: A função do usuário do PAYLOAD.

### `JWT.getEmail(): any`

Retorna o e-mail do usuário que está no PAYLOAD do token JWT.

- **Retorno**: O e-mail do usuário do PAYLOAD.

### `JWT.getFirstName(): any`

Retorna o primeiro nome do usuário que está no PAYLOAD do token JWT.

- **Retorno**: O primeiro nome do usuário do PAYLOAD.

### `JWT.getLastName(): any`

Retorna o último nome do usuário que está no PAYLOAD do token JWT.

- **Retorno**: O último nome do usuário do PAYLOAD.

### `JWT.getImage(): any`

Retorna o caminho da imagem do usuário que está no PAYLOAD do token JWT.

- **Retorno**: O caminho da imagem do usuário do PAYLOAD.


