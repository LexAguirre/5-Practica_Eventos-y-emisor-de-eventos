![Logo](img/ucol-logo.jpg)

# Práctica 4: Module Patterns

> Primera Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- ESTRUCTURA DE DATOS
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

- Javascript Modules
- Javascript Objects
- Object literal

> ENTREGA: DOMINGO 27 DE FEBRERO DEL 2022

## INFORMACIÓN ADICIONAL

Un módulo es un conjunto de código y de datos relacionados lógicamente. Encapsula (o encierra) detalles de la implementación (o sea, de la forma en cómo está escrito el código), de esta forma el que usa el módulo no necesita saber «cómo está hecho» el módulo, sino solamente «cómo se usa«. Y como sólo se necesita saber «cómo se usa» un módulo, lo único que se expone al mundo exterior es la forma de usarlo (tal como sucede con los paquetes que descargas de npmjs.com). Finalmente, combinando varios módulos se pueden crear aplicaciones mucho más grandes.

El código dentro de cada “módulo” es “self contained” y su ámbito de acceso es “protected”. No puedes acceder a ese código a menos que el módulo lo “exponga” de forma explícita mediante la función “module.exports’. El module.exports nos permite “exponer” cierto contenido de nuestro módulo a un ámbito diferente, de tal forma que se pueda tener acceso a sus funcionalidades desde cualquier otro módulo.

> Javascript Objects

Name/Value pairs: a name which maps to a value, the name may be defined more than once but only can have one value in any given context (The value may be another name/value pair).

Un Javascript Object es: a collection of name value pairs
Que puede contener un objeto:

- Datos primitivos
- Funciones (method)
- Otros objetos

Object literal: Name/value pair separated by colons and surrounded by curly braces

## EXPLICACIÓN DEL PROCESO

1. Crear nuevo directorio “modules”

2. Crear un nuevo archivo app.js

3. Crear un nuevo archivo greet.js

4. Escribir "console.log("Hello from the module");" en el archivo greet.js y deja el archivo app.js vacío

5. Ahora en la línea de comando ejecuta "node app" y observa lo ocurrido

6. Ahora convierte el saludo del archivo greet.js

7. En app.js agregar la cláusula requiere del archivo greet.js

8. En la línea de comando ejecuta "node app" y observa lo ocurrido

9. Manda llamar la función "greet();" en el archivo app.js

10. En la línea de comando ejecuta "node app" y observa lo ocurrido

11. Ahora la capsula requiere convertirla en una variable

12. En el archivo greet.js en se colocará un "module.export = greet" para que pueda tener acceso al código del archivo greet.js

13. En la línea de comando ejecuta "node app" y observa lo ocurrido

14. Para la siguiente parte Se creará un nuevo directorio llamado "Objects" al mismo nivel de "Modules"

15. Dentro del nuevo directorio crear un archivo llamado app.js

16. Dentro del nuevo archivo app.js se creará un objeto vacío

17. En la línea de comando ejecuta "node app" y observa lo ocurrido

18. Ahora se modificará el objeto llamándolo personal y colocando en su interior el nombre y apellido de una persona, además después de crear el objeto se imprimirá todo el objeto

19. En la línea de comando ejecuta "node app" y observa lo ocurrido

20. Ahora solo se imprimirá el campo nombre y apellido por separado

21. En la línea de comando ejecuta "node app" y observa lo ocurrido

22. Para continuar se creará una función que regrese un string que contenga el nombre y apellido que está en el objeto, además de imprimir el resultado

23. En la línea de comando ejecuta "node app" y observa lo ocurrido

24. Ahora coloca el campo domicilio en la cual se le colocaran más subcampos los cuales son calle, colonia. cp, municipio.

25. Imprime el campo domicilio y en la consola coloca "node app"

26. Por último desarrolla una función que contenga todos los subcampos de domicilio como string e imprime el resultado
