BACKEND EN NODEJS PARA EL PROYECTO - GALERIA-APP
======================================================
Este proyecto de backend esta generado con NodeJS 
que se conecta a postgres usando sequelize .

> Para reconstruir los módulos de node, es necesario utilizar el  el comando `npm install`


INICIAR EL SERVIDOR NODEJS
------------------------------------------------------
Ingrese al PATH `C:\ProjectAngular\galeria-app\backend-nodejs-galeria` donde se encuentra el proyecto y ejecute en el cmd `npm start` para iniciar el servidor NodeJs.


INSTALACION DE DEPENDENCIAS O LIBRERIA DE TERCEROS
------------------------------------------------------

COMMAND         | DESCRIPCION
----------------|----------------------------
| npm init -y | Crea un archivos `package.json` |
| npm install express --save | falta descripcion  |
| body-parser --save | Esta Libreria toma la informacion del POST y crea un objeto de javascript  |
| npm install nodemon --save-dev | Reiniciar el servidor automaticamente cada ver que realizamos cambios  |
| npm install sequelize-cli -g | Herramienta de linea de comandos (crea archivo init) |
| npm install sequelize --save | Instalar "sequelize" |
| npm install pg pg-hstore --save | Conexion a la Base de datos postgres  |
| npm install mysql2 --save | Conexion a la Base de datos MySQL |
| sequelize init | Ejecutar en la carpeta `server`  |
| npm install njwt --save | Libreria que crea los token |


<!------------VISUAL ESTUDIO CODE---------------------
----------------------------------------------------->

INSTALL EXTENSIONES EN VISUAL STUDIO  CODE
------------------------------------------------------

COMMAND | DESCRIPCION
----------------|----------------------------



<!------------COMAND GIT------------------------------
----------------------------------------------------->

COMAND GIT
------------------------------------------------------

COMMAND | DESCRIPCION
--------|----------------------------
git init | Crear un repositorio nuevo 
git remote add origin `[URL]` | Agregar un origen remoto
git add . | Agregar al staged
git add -- . | Agregar al staged
git add A | Agregar al staged
git commit -m "first commit" | falta descripcion
git -am `"mensaje"` | **Forma rapida:** Agregar al staged y colocar un mensaje
git commit --amend -m `"nuevo mensaje"`| Corregir mensaje  del commit
git reset --soft HEAD^| Agregar mas archivos a un commit existente

COMMAND | DESCRIPCION
--------|----------------------------
git push -u origin master | `origin:`nombre del repositorio -  `master:` nombre de la rama
git remote -v | verificar la fuentes remotas


COMMAND | DESCRIPCION
--------|----------------------------
git status | Ver en la rama en que estamos trabajando
git status -s -b| **Forma reducida:** Ver en la rama en que estamos trabajando


COMMAND | DESCRIPCION
--------|----------------------------
git diff | ver lo archivos modificados
git diff --staged | ver lo archivos que estan en el staged
git reset HEAD `<NOMBRE DEL ARCHIVO>`| quitar archivos del staged


### LOG
COMMAND | DESCRIPCION
--------|----------------------------
git log | ver lo log
git log --oneline | forma corta de ver los log
git log --oneline --decorate --all --graph | con mas detalle


### PULL


### CLONAR REPOSITORIO 
COMMAND | DESCRIPCION
--------|----------------------------
git clone `[URL]` | Clonar un repositiorio
git clone `[URL]` `[nombre]` | Clonar repositorio y colocar nombre propio 



### TAG
COMMAND | DESCRIPCION
--------|----------------------------
git tag | Ver los tag creado
git tag -d superRelease | Eliminar Tag
git tag -a v1.0.0 -m "Version 1.0.0" | Crear un tag de forma mas detallada
git tag -a v0.1.0 345d7de -m "version alfa" | Crear un tag en una version en base a un codigo hash
git show v1.0.0 | Ver informacion detalla del tag
git push --tags | sube todo los Tag a GitHub


### VIAJAR EN EL TIEMPO ( reset and reflog )

**ADELANTE HACIA ATRAS**
COMMAND | DESCRIPCION
--------|----------------------------
| git checkot -- `<README.MD>`  | Revertir los cambios de un SOLO archivos
| git reset --soft 9aa96f6   | Lo va revertir a un determinado punto en nuestra histioria  |
| git reset --mixed a88a098  | falta  |
| git reset --hard d66cbf0   | falta  |


**DE ATRAS HACIA DELANTE**
COMMAND | DESCRIPCION
--------|----------------------------
| git reflog  | Lo va revertir a un determinado punto en nuestra histi¿oria  |
| git reset --hard 8d5cada  | falta  |












<!----EJEMPLOS----->












### EJEMPLO

CREAR UN ADVETENCIA O SUGERENCIA
> __Warning:__ When the token comes from an untrusted source (e.g. user input or external requests), the returned decoded payload should be treated like any other user input; please make sure to sanitize and only work with properties that are expected

RESALTAR PALABRA O FRASE
`token` is the JsonWebToken string

NEGRITA Y CURSIVA
> **Please _note_ that** `exp` or any other claim is only set if the payload is an object literal. Buffer or string payloads are not checked for JSON validity.

VIÑETAS
* `json`: force JSON.parse on the payload even if the header doesn't contain `"typ":"JWT"`.
* **complete**: return an object with the decoded payload and header.

* `expiresIn`: expressed in seconds or a string describing a time span.
  > Eg: `60`, `"2 days"`, `"10h"`, `"7d"`. A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by default (`"120"` is equal to `"120ms"`).

URL
[zeit/ms](https://github.com/zeit/ms). 

CREAR TABLA
alg Parameter Value | Digital Signature or MAC Algorithm
----------------|----------------------------
HS256 | HMAC using SHA-256 hash algorithm
HS384 | HMAC using SHA-384 hash algorithm
HS512 | HMAC using SHA-512 hash algorithm
RS256 | RSASSA-PKCS1-v1_5 using SHA-256 hash algorithm
RS384 | RSASSA-PKCS1-v1_5 using SHA-384 hash algorithm
RS512 | RSASSA-PKCS1-v1_5 using SHA-512 hash algorithm
PS256 | RSASSA-PSS using SHA-256 hash algorithm (only node ^6.12.0 OR >=8.0.0)
PS384 | RSASSA-PSS using SHA-384 hash algorithm (only node ^6.12.0 OR >=8.0.0)
PS512 | RSASSA-PSS using SHA-512 hash algorithm (only node ^6.12.0 OR >=8.0.0)
ES256 | ECDSA using P-256 curve and SHA-256 hash algorithm
ES384 | ECDSA using P-384 curve and SHA-384 hash algorithm
ES512 | ECDSA using P-521 curve and SHA-512 hash algorithm
none | No digital signature or MAC value included