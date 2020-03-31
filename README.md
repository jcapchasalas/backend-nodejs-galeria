BACKEND EN NODEJS PARA EL PROYECTO - GALERIA-APP
======================================================
Este proyecto de backend esta generado con NodeJS 
que se conecta a postgres usando sequelize .

> Para reconstruir los módulos de node, es necesario utilizar el  el comando `npm install`


<!------------Lenguaje: Markdown----------------------
----------------------------------------------------->

INICIAR EL SERVIDOR NODEJS
------------------------------------------------------
Ingrese al PATH `C:\ProjectAngular\galeria-app\backend-nodejs-galeria` donde se encuentra el proyecto y ejecute en el cmd `npm start` para iniciar el servidor NodeJs.


INSTALACION DE DEPENDENCIAS O LIBRERIA DE TERCEROS
------------------------------------------------------

> __NOTA:__ Ingresar al Path `C:\ProjectAngular\galeria-app\backend-nodejs-galeria` para instalar todas las dependencias:


|      COMMAND         |       DESCRIPCION          |    CLASE      
-----------------------|----------------------------|-------------------------------------------
| npm init -y | Crea un archivos `package.json` |
| npm install express --save | falta descripcion  |
| body-parser --save | Esta Libreria toma la informacion del POST y crea un objeto de javascript  |
| npm install nodemon --save-dev | Reiniciar el servidor automaticamente cada ver que realizamos cambios  |
| npm install sequelize-cli -g | Herramienta de linea de comandos (crea archivo init) |
| npm install sequelize --save | Instalar "sequelize" |
| npm install pg pg-hstore --save | Conexion a la Base de datos postgres  |
| npm install mysql2 --save | Conexion a la Base de datos MySQL |
| sequelize init | Ejecutar en la carpeta `server`  |
| npm install njwt --save | Libreria que crea los token | SECCION 1: CLASE 06 |
| npm install connect-multiparty --save | Libreria ayuda a subir un archivo | SECCION 1: CLASE 10 |
| npm install node-thumbnail --save | Libreria cambia el tamaño de la imagen  | SECCION 1: CLASE 10 (32min) |


<!------------COMAND GIT------------------------------
----------------------------------------------------->

COMAND GIT
------------------------------------------------------

COMMAND | DESCRIPCION
--------|----------------------------
git init | Crear un repositorio nuevo 
git remote add origin `[URL]` | Agregar un origen remoto
git add .    | Agregar al staged
git add -- . | Agregar al staged
git add A    | Agregar al staged
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


### RAMAS - UNIONES - CONFLICTOS 
ITEM|COMMAND | DESCRIPCION
----|--------|----------------------------
1   |git branch [Rama-Seccion1-Clase10] | Crear una nueva rama
2   |git checkout [Rama-Seccion1-Clase10] | Mover de rama
3   |git checkout -b `[NOMBRE DE LA RAMA]`| forma rapida: crear y moverse (1-2)
4   |git branch | ver las ramas creadas `marcado en verde es la rama que estamos trabajando`
5   |git branch -d [Rama-Seccion1-Clase10] | Eliminar una rama


COMMAND | DESCRIPCION
--------|----------------------------
git diff [Rama-Seccion1-Clase10] [master] | Saber la direferencia entre ramas

**UNION ENTRE RAMAS**
> __NOTA:__ Para unir RAMAS, es necesario estar en la rama principal, en este caso se va unir la ramas master

ITEM|COMMAND | DESCRIPCION
----|--------|----------------------------
1   | git checkout [master] | Ingrar a la rama [master]
2   | git merge [Rama-Seccion1-Clase10] | Agregar la rama [Rama-Seccion1-Clase10] a la Rama  [master]



### TAG
COMMAND | DESCRIPCION
--------|----------------------------
git tag | Ver los tag creado
git tag -a v1.0.0 -m "Version 1.0.0" | Crear un tag de forma mas detallada
git tag -d `nombre del tag` | Eliminar Tag
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