# jwt-lib
Micro biblioteca JavaScript para gerenciamento de token JWT em localStorage. Os dados do payload são descriptografados em tempo de execução e somente o token JWT é armazenado no formato de string.

Descodifica um token JWT no formato algo64
object : JWT.decode64(string token)

Armazena o token JWT no formato algo64 em localStorage 
void : JWT.setToken(string token)

Retorna o token descodificado no formato de objeto
object : JWT.getData()

Verifica se o token existe e retorna um bool true ou false
bool : JWT.hasToken()

Retorna o token armazenado no formato de string no caso de sucesso ou undefined no caso de falha
string : JWT.getToken()

Remove o token armazenado e não retorna nenhum valor
void : JWT.removeToken()

Pega uma índice/chave especifico do PAYLOAD e retorna o seu valor no caso de sucesso e retorna undefined no caso de falha
string : JWT.getKey = function(string key)

Verifica se uma chave existe no payload do token JWT armazenado e retorna um booleano true caso existe e false caso não exista
bool : JWT.hasKey(key string) 
