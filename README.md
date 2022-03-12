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

1. Crear nuevo directorio llamado “events”

2. Crear un nuevo archivo llamado app.js

3. Crea un objeto llamado obj que contenga el nombre, edad y apellido

4. Ahora imprime el nombre que se encuentra en el obj de la manera antes vista y tambien colocando obj y entre corchete colocar el string del elemento a imprimir del objeto (obj["nombre"])

5. Ahora crea una variable con el nombre del elemento del objeto a imprimir

6. Realiza lo mismo de imprimir el elemento de un objeto colocandolo entre corchetes [] pero en lugar de escribir el nombre del elemento se colocara la variable

7. En el obj ahora coloca dos funciones una llamada keypress la cual imrpimira 'Se ha precionado una tecla' y la otra llamada mouseOver la cual debera imprimir 'El puntero del mouse esta arriba'

8. Ahora realiza lo mismo que en el paso 7 pero imprime las dos funciones que fueron agregadas al objeto

9. Lo siguiente sera revisar el manejo de arrays por lo cual se creara un nuevo array llamado myArray en el cual se le empujara cuatro elementos de diferentes tipos demostrando asi que sin importar el tipo de elemento este sigue manteniendo sus caracteristicas dentro del array

10. Los cuatro elementos a ingresar seran:un number, string, un objeto(obj el cual se trabajo anteriormente) y una función (anonima / sin nombre)

11. Imprime el array y observa los tipos de todos los elementos

12. Imprime la funcion mouseOver que se encuentra en el objeto pero desde el array y explica como hacerlo

13. Imprime la funcion anonima que se encuentra en el array y explica como hacerlo

14. Lo siguiente sera crear un array llamado funcArray y empujarle 3 funciones anonimas las cuales contendra la funcion de imprimir funcion 1, funcion 2, funcion 3 cada una en una respectiva funcion.

15. Ahora ejecuta un forEach en el array recien creado para que ejecute todas lad funciones del array

16. Crear nuevo directorio llamado “emisor”

17. Crear un nuevo archivo llamado emiter.js

18. Dentro del emiter se creará un contructor el cual contrendra un objeto vacio

19. Despues se crea una funcion que tenda prototype y que se llame on en esta crearemos un codigo el cual se encarge de inspecionar el objeto y revisar si contiene algo sino crea un array para que pueda contener algo esta funcion debera recibir dos valores type y listener, ahora despues de ver si existe o crear un array este empujara lo del listener al array

20. Ahora se debera crear una funcion la cual se llame emit se ejecutara un forEach al array que se busca

21. Exporta el modulo emitter para que pueda ser utilizado en otros archivos

22. Crear un nuevo archivo llamado app.js

23. En el app se ejecuta un require del emmiter y se crea una nueva instancia de este

24. Crea dos funciones con el on del emtr con el mismo nombre pero diferente contenido a imprimir y luego elecuta greet en la funcion emit del emtr

25. Ahora realiza otra funcion llamada jump y imprimela

26. Imprime el emtr y observa como se estructura

## REFERENCIAS

https://www.w3schools.com/jsref/jsref_foreach.asp
