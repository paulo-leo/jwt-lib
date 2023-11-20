# Biblioteca JWT para gerenciamento de tokens em localStorage ou sessionStorage

Esta é uma biblioteca JavaScript que oferece funcionalidades para gerenciar tokens JWT (JSON Web Tokens) em `localStorage` ou `sessionStorage`. Os dados do payload são decodificados dinamicamente, armazenando apenas o token no formato de string.

Token para teste: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzU0NjQ3NCIsIm5hbWUiOiJQYXVsbyIsImVtYWlsIjoicGF1bG9AdGVzdGV0b2tlbi5jb20iLCJyb2xlIjoiYWRtaW4ifQ.A0Bk9R9DFLeGxqPbhIUK6AHFkFGByjCID2oRJ2CmUgY

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
let check = JWT.permissions(['createx'], [
        {
          roles: ['admin', 'cliente'],
          permissions: ['create', 'update']
        }
      ]) ? JWT.user('name') + " está permitido" : 'Não permitido';

### `JWT.auth(roles: string | array = null): boolean`

Verifica se o usuário está autenticado, opcionalmente verificando o papel/tipo/função do usuário.

### `JWT.user(key: string, def: string = ''): any`

Retorna os dados do usuário autenticado para uma chave específica ou um valor padrão se a chave não existir.
