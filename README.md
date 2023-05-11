## Grupo GCO APP

Link de acceso a la app [pruebagcoluis](https://grupo-gco-pt.vercel.app/)

## Se utilizaron las siguientes librerías

1. Firebase
2. React-router-dom
3. Sass
4. Swiper
5. Axios

### `Ingreso a la app`

Esta aplicación cuenta con unas credenciales de ingreso para la autenticación alojadas en Firebase, 
podras registrarte en la aplicación dirigiendote al login en la parte del registro,
ademas podras ingresar a la aplicación por medio de tu cuenta de Gmail, en caso de no estar autenticado
la aplicación te sacara de ella, cuenta con un sistema de protección de rutas que solo podras tener acceso 
si estas autenticado, de lo contrario seras redirigido al login.

### `Diseño responsivo`

Esta aplicación es totalmente adaptable a dispositivos móviles.

### `Desarrollo de la app`

Esta aplicación esta desarrollada con Create React App en su version 18 con un sistema de autenticación suministrado
por Firebase, para el manejo del estado se utiliza el Context de React, se utilizaron los siguientes Hooks en la aplicación:

1. UseState
2. UseEffect
3. UseContext
4. Otros hooks internos de cada libreria

Los estilos de la aplicación son administrados con SASS, las imagenes y los textos son suministradas por la empresa y otras 
de preferencia propia, existe un archivo llamado helper que administra los datos de la app pasadas por medio de props
en cada componente.

Se agrega um mapa con la API de Google Maps, disponible en la app para dar a conocer algunas de las tiendas de nuestra ciudad.

Esta aplicación es desplegada en un servicio de hosting con certificado SSL llamado Vercel.

Buena suerte :D.