# Atix-challenge

Este repo contiene las respuestas al desafío de la empresa Atix Labs. 


## 1. Resolución de problemas de programación y diseño
 ### A) Tome el código que sigue – que representa una cuenta bancaria – y responda las siguientes preguntas:
 
* ¿Le parece que está bien diseñada la clase? Si no lo está, pero funciona, ¿la cambiaría o
agregaría clases nuevas?
* Si cambiaría el diseño, exponga todo lo que cambiaría con un diagrama de clases de
UML. Si algún método debe cambiarlo mucho, escríbalo.
* ¿Es seguro hacer estos cambios? ¿Por qué? ¿Qué precauciones tomaría?
* ¿Agregaría getters y setters? ¿Cuáles? ¿Por qué?
* ¿Su solución usa algún patrón de diseño? ¿Cuál?

### B) Código.

## 2. Aspectos conceptuales

* A) Explique el uso del patrón Strategy. Una vez explicado, conteste: ¿Cuántas instancias
necesita de cada clase de estrategia? ¿Hay algún otro patrón que lo ayude en esto? Si lo
hay, muestre un pequeño ejemplo en código.
* 1) Enumere todas las ventajas que conozca de escribir pruebas unitarias automatizadas
antes de escribir el código funcional.
* B) ¿Cuándo utiliza el patrón Observador? ¿Qué ventajas tiene?

## 3. Bases de datos y SQL

* A) Devuelva los usuarios cuyos nombre de persona empiecen por "Jorg"
```
SELECT Usuario.username,Usuario.id
FROM Persona
INNER JOIN Usuario
ON Usuario.idUsuario=Persona.idUsuario
WHERE Persona.nombre LIKE 'Jorg%'

```
* B) Devuelva los meses en los cuales la cantidad de usuarios que cumplen años es mayor a 10.
```
SELECT EXTRACT(MONTH FROM Persona.fechaNac) FROM Persona 
GROUP BY (Persona.fechaNac) 
HAVING  (COUNT(EXTRACT(MONTH FROM Persona.fechaNac)))  > 1
```
