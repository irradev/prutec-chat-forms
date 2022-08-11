# Pruebas Técnica para TheRocketCode

## React Chat Forms

### Instalation:

```
yarn

```

### Run application:

```
yarn dev

//run on devices:
yarn dev --host
```

---

## Application

### Main UI inside of:

```
src/components/screens/StartScreen.tsx
```

### Main Logic inside of:

```
src/hooks/useStartScreen.tsx
```

---

## Preguntas:

### ¿Porqué deberíamos utilzar ReactJS?

Porque utiliza el DOM Virtual que se actualiza a gran velocidad y consume menos memoria. En React no se siguen "reglas" obligatorioas como con otros frameworks, lo cual lo hace muy flexible para trabajar. React tiene mucha popularidad y gracias a esto se han creado tecnologías cómo React Native para crear aplicaiones móviles y de escritorio, NextJs para crear sitios web estáticos, entre otros más.

### ¿Qué es JSX?

Es la sintaxis que se recomienda para programar con React. Es Javascript pero con una sintaxis parecida a HTML. Al programar con JSX parecerá que estamos escribiendo HTML pero al final se transpila a código de Javascript. Esto ya lo hace React por nosotros.

### ¿Qué es un "estado"?

En React un estado o State es como una variable pero especial, la parte UI se mantiene al pendiente de los cambios de éstos _states_ para volver a renderizar su contenido. React es tan eficiente que sólo actualizará la parte del DOM que el _state_ haya cambiado.

### ¿Qué es una "función flecha"?

Es otra forma de hacer funciones en Javascript, la ventaja de éstas funciones que son más compactas, pueden tiener retorno implícito y resuelven el problema del contexto _this_ que se tenía con las funciones declaradas a la hora de trabajar con los métodos de los objetos.

### ¿Para qué se utiliza "setState"?

En React a una varaible de "estado" no se le puede cambiar o asignar un valor como si se tratara de javascript normal, para cambiar una variable de "estado" se utiliza la función **_setState_**.

### ¿Qué son los "props"?

Son las propiedades de los componentes, se utilizan para pasar datos de un componente a otro con la única condición de que el dato provenga de un componente padre ya que React es unidireccional y los datos solo pueden pasarse de padre a hijo. Las props pueden traspasar cualquier tipo de dato como arrays, objetos, número, etc, así como "estados" y funciones _setState_.
