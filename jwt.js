/*
Autor: Paulo Leonardo da Silva Cassimiro
Descrição: Biblioteca para gerenciamento de token JWT em localStorage. Os dados do payload são descriptografados de execução e somente o token é armazenado no formato de string.
Versão:0.1
*/
/*Início automático do objeto JWT*/
const JWT = {};
/*Nome da chave do token que será armazenado em localStorage*/
JWT.name = '__np_jwt___token_xxxxx';
/*Descodifica um token JWT*/
JWT.decode64 = function(token){
var base64Url = token.split('.')[1];
var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
 }).join('')); return JSON.parse(jsonPayload); };
/*Armazena o token em localStorage*/
JWT.setToken = function(token){ localStorage.setItem(JWT.name,token); };
/*Retorna o token descodificado no formato de objeto*/
JWT.getData = function(){
  var data = localStorage.getItem(JWT.name);
  return data ? JWT.decode64(data) : {};
};
/*Verifica se o token existe e retorna um bool true ou false*/
JWT.hasToken = function(){
  return localStorage.getItem(JWT.name) ? true : false;
};
/*Retorna o token armazenado no formato de string no caso de sucesso ou undefined no caso de falha*/
JWT.getToken = function(){
  return JWT.hasToken() ? localStorage.getItem(JWT.name) : undefined;
};
/*Remove o token armazenado e não retorna nenhum valor*/
JWT.removeToken = function(){ localStorage.removeItem(JWT.name); };
/*Pega uma índice especifico do PAYLOAD e retorna o seu valor no caso de sucesso e retorna undefined no caso de falha*/
JWT.getKey = function(index){
    var array = JWT.getData();
    if(typeof array[index] !== undefined && array[index] !== null) return array[index];
    else return undefined;
};
/*verifica se uma chave existe no payload do token JWT armazenado e retorna um booleano true caso existe e false caso não exista*/
JWT.hasKey = function(index){
    var array = JWT.getData();
    if(typeof array[index] !== undefined && array[index] !== null) return true;
    else return false;
};
/*Retorna o ID do usuário que está no PAYLOAD do token JWT*/
JWT.getId = function(){
   return JWT.getKey('id');
};
/*Retorna o nome do usuário que está no PAYLOAD do token JWT*/
JWT.getName = function(){
   return JWT.getKey('name');
};
/*Retorna a função do usuário que está no PAYLOAD do token JWT*/
JWT.getRole = function(){
   return JWT.getKey('role');
};
/*Retorna o e-mail do usuário que está no PAYLOAD do token JWT*/
JWT.getEmail = function(){
   return JWT.getKey('email');
};
/*Retorna o primeiro nome do usuário que está no PAYLOAD do token JWT*/
JWT.getFirstName = function(){
   return JWT.getKey('first');
};
/*Retorna o último nome do usuário que está no PAYLOAD do token JWT*/
JWT.getLastName = function(){
   return JWT.getKey('last');
};
/*Retorna o caminho da imagem do usuário que está no PAYLOAD do token JWT*/
JWT.getImage = function(){
   return JWT.getKey('image');
};

export default JWT;
