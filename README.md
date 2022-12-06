# BUNDLING

# EJECUTAR NPM START

Para poder lanzar la aplicación y tener un servidor en local que vayamos viendo según guardamos cambios podemos instalar **dev- server**\_\**, a través de la consola con el comando *npm install webpack-dev-server --save-dev\*. esto se añadirá en el documento de configuración al final despues de los plugins, se le puede añadir el puerto por el que va a correr la aplicaición y el path entre otras configuraciones.

# JS

Para poder compliar los archivos de JS es necesario instalar la librería de **babel**, para ello es necesario instalar, babel-cli, babel-core y babel-preset, se instalará en la consola a través del comando _npm install @babel/cli @babel/core @babel/preset-env --save-dev_, también es necesario instalar el loader de babel que es añadira en la rules con el comando _npm install babel-loader --save-dev_

## HTML

Para injectar el módulo de HTML en la carpeta dist y que se hagan automáticamente las importaciones de los scripts al html se puede instalar y utilizar el **plugin** **HtmlWebpackPlugin** se instalará en a través de la consola con el comando _npm install html-webpack-plugin --save-dev_

# CSS

Para archivos css hay varias opciones:

1. Instalar **style-loader** y **css-loader** para añadirlos a las rules de los archivos con extensión css, en vez de utilizar loader se usará **use** ya que se van a cargar más de un loader, estos se leeran de izquierda a derecha, el css-loader leear los archivos de css y el style-loader lo compilará.
2. Instalar **MinCssStylePlugin** es necesario instalar el loader y el plugin. Sustituiremos el _style-loader_ que teníamos en las rules por **MiniCssCssExtractPlugin.loader**.
   Hay que añadirlo en la sección de plugins con la configuración: _filename: '[name].css' y cunkFilename:'[id].css'_ con esto podemos eliminar de los entry points el **appStyle**.
3. **CSS Modules** para simplificar los archivos de css, se puede utilizar CSS modules para organizarolos y utilizar prefijos por cada módulo. Cuando se utilice el bundle.

# SASS

Preprocesador de CSS, debemos cambiar los archivos _css_ por archivos _scss_.
Debemos instalar \*_sass_ a través del comando _npm install sass sass-loader --save-dev_. Cambiar el archivo de entrada de appStyle ya que ahora es scss.
y añadir los archivos scss al rules.
Para añadir los **loader** es importante tener en cuenta que hay que encadenarlo asi _use: ['style-loader', 'css-loader', 'sass-loader'],_ Primero preprocesamos sass, luego aplicamos los css loader y luego los inyectamos con el style-loader.

# BOOTSTRAP

Añadir una librería de terceros: con el comando _npm install botstrap --save-dev_. En el webpack.config dentro de los **entry** le añadiremos un **vendor** de la librería de terceros. _vendorStyles: ['./node_modules/bootstrap/dist/css/bootstrap.css'],_
**IMPORTANTE**: Eliminar en el rules de css el _exclude: /node_modules/_ y en el loader del use debe ser styles-loader.

# LIMPIEZA CARPETA DIST

Para limpiar la carpeta _dist_ hay varias maneras, ya que si no se borra y se vuelve a crear cada vez que ejecutemos _npm run build_ se iran generando nuevos ficheros en la carpeta dist.

1. Instalar el **plugin** **CleanWebpackPlugin** con el comando _npm install clean-webpack-plugin --save-dev_ se añadirá en el archivo en el array de _plugins_ simplemente ejecuntandolo: **new CleanWebpackPlugin)** hay que importarlo de _'clean-webpack-plugin'_
2. Instalar **rimraf**, con el comando _npm install rimraf --save-dev_ lo instalamos y en nuestro _package.json_ lo añadimos a nuestro comando build: **"build": "rimraf dist && webpack --mode development"**

# AÑADIR CONTEXTO

Con la constante **path** podemos añadir al inicio del archivo el contexto que vamos a utilizar en nuestro directorio. _context: path.resolve(\_\_dirname, './src'),_

# AÑADIR IMÁGENES

Para añadir imágenes en los rules indicamos un nuevo test con las extensiones de las imágenes que vamos a utilizar, por ejemplo: _/\.(png|jpg)$/_ y le añadimos _type:'asset/resource'_

Para añadir el src de las imágenes en el html es necesario añadir un loader que lea estas extensiones. Con el comando _npm install html-loader --save-dev_
