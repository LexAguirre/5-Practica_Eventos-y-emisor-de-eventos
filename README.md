![Logo](img/ucol-logo.jpg)

# Práctica 5: Eventos y emisor de eventos

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

> ENTREGA: SABADO 12 DE MARZO DEL 2022

## INFORMACIÓN ADICIONAL

Evento: algo que ha sucedido en nuestra app y que necesita una respuesta de nuestra parte.

En NODE hay dos tipos de eventos: System events (abrir un archivo, leer un archivo, crear un directorio, han llegado datos desde internet, etc) manejados mediante Libuv. Libuv is a C library that is used to abstract non-blocking I/O operations to a consistent interface across all supported platforms. It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming. It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.

y Custom events (eventos creados por el desarrollador para atender necesidades particulares) manejados por el Event Emitter. Aun asi, Javascript no tiene implementado el concepto de Event, no hay una clase como tal que los represente, pero nos proporciona el mecanismo para manejarlos

Accediendo a las “keys” de un object literal en Javascript

## EXPLICACIÓN DEL PROCESO

1. Crear nuevo directorio “events”

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

## REFERENCIAS
