# jwt-lib
## JWT.JS é uma micro biblioteca JavaScript para gerenciamento de tokens JWT em localStorage. Os dados do payload são descriptografados em tempo de execução e somente o token JWT é armazenado em string no formato de ALG64.

#### Para utilizar o JWT.JS, você poderá baixar o arquivo de script jwt.js e  executar o seguinte exemplo de importação:  
### <script src=”jwt.js”></script>

### Token para teste
#### eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzU0NjQ3NCIsIm5hbWUiOiJQYXVsbyIsImVtYWlsIjoicGF1bG9AdGVzdGV0b2tlbi5jb20iLCJyb2xlIjoiYWRtaW4ifQ.A0Bk9R9DFLeGxqPbhIUK6AHFkFGByjCID2oRJ2CmUgY

### object : JWT.decode64(string token)
Descodifica um token JWT no formato algo64

### void : JWT.setToken(string token)
Armazena o token JWT no formato algo64 em localStorage 

### object : JWT.getData() 
Retorna o token descodificado no formato de objeto

### bool : JWT.hasToken()
Verifica se o token existe e retorna um bool true ou false

### string : JWT.getToken()
Retorna o token armazenado no formato de string no caso de sucesso ou undefined no caso de falha

### void : JWT.removeToken()
Remove o token armazenado e não retorna nenhum valor

### string : JWT.getKey = function(string key)
Pega uma índice/chave especifico do PAYLOAD e retorna o seu valor no caso de sucesso ou retorna undefined no caso de falha

### bool : JWT.hasKey(key string)
Verifica se uma chave existe no payload do token JWT armazenado e retorna um booleano true caso existe e false caso não exista
 

### Os métodos abaixo são apenas atalhos para o método de retorno “getKey”. A biblioteca presume que dentro do payload de seu Token JWT existirá as seguintes chaves, tais como: name, email, first,last,role,image e id. 

### string : JWT.getId(), JWT.getName(), JWT.getRole(),JWT.getEmail(),JWT.getFirstName(),JWT.getLastName(),JWT.getImage()
