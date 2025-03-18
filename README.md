# CRUD en Ionic con Firebase
Aplicación CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada con Ionic y Firebase. La aplicación permite gestionar tareas de manera sencilla, almacenando los datos en Firebase Realtime Database.
## Requisitos
Antes de empezar, asegúrate de tener instalados los siguientes requisitos:
1. Node.js: La última versión estable
2. Ionic CLI: Si no lo tienes, puedes instalarlo globalmente con el siguiente comando:
```bash
  npm install -g @ionic/cli
```
3. Firebase CLI (opcional, solo para despliegue): Si deseas desplegar la app en Firebase, instala Firebase CLI globalmente:
```bash
  npm install -g firebase-tools
``` 
## Pasos de Instalación
Para instalar y ejecutar crud, sigue estos pasos:
4. Clonar el repositorio
```bash
  https://github.com/Naiker12/Crud-Ionic-Firebase.git
```
5. Instalar dependencias Desde una terminal en la carpeta del proyecto, ejecuta:
```bash
  npm run test
```

6. Ejecutar el proyecto
 ```bash
  ionic serve
 ```

7. Firebase Hosting
 ```bash
  https://crud-ionic-d5c88.firebaseapp.com/tasks
 ```

# Configurar Firebase
Para que la aplicación funcione, es necesario configurar Firebase:
9. Crea un proyecto en Firebase:
- Ve a Firebase Console y crea un nuevo proyecto.

10. Habilita Firebase Realtime Database:
- En la consola de Firebase, ve a Realtime Database y crea una nueva base de datos.

11. Obten las credenciales de Firebase:
- En la consola de Firebase, ve a Configuración del Proyecto > Configuración de la base de datos y copia las credenciales de Firebase (deberás configurarlas en tu aplicación Ionic).

12. Configura Firebase en tu aplicación:
- Abre el archivo src/environments/environment.ts y agrega tus credenciales de Firebase en la sección correspondiente.
 ```bash
  export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'YOUR_DATABASE_URL',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
  }
};
 ```
13. Ejecutar el proyecto.
 ```bash
  ionic serve
 ```

## Funcionalidades del CRUD
- Crear tarea: Permite añadir nuevas tareas a la lista.
- Leer tareas: Muestra todas las tareas almacenadas en Firebase.
- Actualizar tarea: Permite editar una tarea existente.
- Eliminar tarea: Elimina una tarea de la base de datos.

