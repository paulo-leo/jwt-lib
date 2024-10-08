/*
Autor: Paulo Leonardo da Silva Cassimiro
Descrição: Biblioteca para gerenciamento de token JWT em localStorage ou sessionStorage. Os dados do payload são descriptografados de execução e somente o token é armazenado no formato de string.
Versão:0.2
*/
/*Início automático do objeto JWT*/
const JWT = {};
/*Define o tipo de armazenamento: true para local e false para em sessão*/
JWT.storage = true;
/*Nome da chave do token que será armazenado em localStorage*/
JWT.name = 'JWT.0101011111000011000001100';
/*Nome do objeto de permissões*/
JWT.permissionName = 'permissions';
/*Nome do objeto de role*/
JWT.roleName = 'role';

/*Descodifica um token JWT*/
JWT.decode64 = function (token) {
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join('')); return JSON.parse(jsonPayload);
};
/*Armazena o token em localStorage ou sessionStorage*/
JWT.setToken = function (token) {
  JWT.storage ? localStorage.setItem(JWT.name, token) : sessionStorage.setItem(JWT.name, token);
};
/*Retorna o token descodificado no formato de objeto*/
JWT.getData = function () {
  let data = JWT.storage ? localStorage.getItem(JWT.name) : sessionStorage.getItem(JWT.name);
  return data ? JWT.decode64(data) : {};
};
/*Verifica se o token existe e retorna um bool true ou false*/
JWT.hasToken = function () {
  if (JWT.storage) {
    return localStorage.getItem(JWT.name) ? true : false;
  } else {
    return sessionStorage.getItem(JWT.name) ? true : false;
  }
};
/*Retorna o token armazenado no formato de string no caso de sucesso ou undefined no caso de falha*/
JWT.getToken = function () {
  if (JWT.storage) {
    return JWT.hasToken() ? localStorage.getItem(JWT.name) : undefined;
  } else {
    return JWT.hasToken() ? sessionStorage.getItem(JWT.name) : undefined;
  }
};
/*Remove o token armazenado e não retorna nenhum valor*/
JWT.removeToken = function () {
  if (JWT.storage) localStorage.removeItem(JWT.name);
  else sessionStorage.removeItem(JWT.name);
};
/*Pega uma índice especifico do PAYLOAD e retorna o seu valor no caso de sucesso e retorna undefined no caso de falha*/
JWT.getKey = function (index) {
  let array = JWT.getData();
  if (typeof array[index] !== undefined && array[index] !== null) return array[index];
  else return undefined;
};
/*verifica se uma chave existe no payload do token JWT armazenado e retorna um booleano true caso existe e false caso não exista*/
JWT.hasKey = function (index) {
  let array = JWT.getData();
  if (typeof array[index] !== undefined && array[index] !== null) return true;
  else return false;
};
/*Retorna as permissões que está no PAYLOAD*/
JWT.getPermissions = function () {
  let permissions = JWT.getKey(JWT.permissionName);
  return Array.isArray(permissions) ? permissions : [];
}
/*Retorna o ID do usuário que está no PAYLOAD do token JWT*/
JWT.getId = function () {
  return JWT.getKey('id');
};
/*Retorna o nome do usuário que está no PAYLOAD do token JWT*/
JWT.getName = function () {
  return JWT.getKey('name');
};
/*Retorna a função do usuário que está no PAYLOAD do token JWT*/
JWT.getRole = function () {
  return JWT.getKey(JWT.roleName);
};
/*Retorna o e-mail do usuário que está no PAYLOAD do token JWT*/
JWT.getEmail = function () {
  return JWT.getKey('email');
};
/*Retorna o primeiro nome do usuário que está no PAYLOAD do token JWT*/
JWT.getFirstName = function () {
  let name = JWT.getName();
  let arr = name.split(" ");
  return arr[0];
};
/*Retorna o último nome do usuário que está no PAYLOAD do token JWT*/
JWT.getLastName = function () {
  let name = JWT.getName();
  let arr = name.split(" ");
  return arr[arr.length - 1];
};
/*Retorna o caminho da imagem do usuário que está no PAYLOAD do token JWT*/
JWT.getImage = function () {
  return JWT.getKey('image');
};

/*
 Verifica se uma detreminada permissão existe
*/
JWT.hasPermission = function (permission, permissionPerson = null) {
  let permissions = Array.isArray(permission) ? permission : [permission];
  let permissions_of_users = permissionPerson || JWT.getPermissions();

  for (let i = 0; i < permissions.length; i++) {
    if (permissions_of_users.includes(permissions[i])) {
      return true;
    }
  }
  return false;
};

/*
Verifica se o usuário está autenticado, ou seja, se há algum token armazenado, e opcionalmente verifica o papel/tipo/função do usuário por meio de uma string ou array 
*/
JWT.auth = function (roles = []) {
  roles = Array.isArray(roles) ? roles : [roles];
  let auth = JWT.hasToken();
  if (!auth) return false;

  if (roles.length == 0) return true;
  let check = false;
  for (let i = 0; i < roles.length; i++) {
    let role = JWT.getRole();
    if ((role.toLowerCase()) == (roles[i].toLowerCase())) {
      check = true;
      break;
    }
  }
  return check;
};
/*
Retorna os dados do usuário autenticado
*/
JWT.user = function (key, def = '') {
  key = key.trim();
  return JWT.hasKey(key) ? JWT.getKey(key) : def;
};


export default JWT;
