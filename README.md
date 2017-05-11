# LaboratorioIV Clase del 11 de Mayo 2017

Se entregaron las consignas para el próximo TP.
La fecha de entrega es el:


# Componente FILE_UPLOAD
[ng2-file-upload](https://github.com/valor-software/ng2-file-upload) es un componente que desde typescript sube archivos pasandolos al lado del servidor (php en nuestro caso). Hay que tener la API php que reciba ese archivo.
Ejemplos y documentación en la página oficial de [valor-soft](http://valor-software.com/ng2-file-upload/).
Para instalarlo ejecutamos:
```sh
npm i ng2-file-upload --save
```

A éste ejemplo le faltaría el backend. En la página oficial está resuelto con `express` pero para la clase nos piden hacerlo con `Slim Framework 3`.
Hacer un API con Slim y desde el otro lado recibir el archivo. Eso por ahora.

# Web Token
Para las validaciones de usuarios en nuestras apps vamos a utilizar [angular2-jwt](https://github.com/auth0/angular2-jwt)

