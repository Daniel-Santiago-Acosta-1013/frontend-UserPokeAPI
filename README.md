# Proyecto de Gestión de Pokémones Favoritos

## Descripción

Esta aplicación web permite a los usuarios registrarse, iniciar sesión, y gestionar una lista de Pokémones favoritos. Los usuarios pueden añadir, editar, y eliminar Pokémones de su lista de favoritos.

## Componentes y Vistas

### 1. Registro (Register.tsx)

- Formulario para crear una nueva cuenta de usuario.
- Enviar datos al endpoint `createUser` para registrar un nuevo usuario.

### 2. Inicio de Sesión (Login.tsx)

- Formulario de inicio de sesión para usuarios existentes.
- Enviar datos al endpoint `loginUser` para autenticar al usuario.
- Guardar el token JWT en el almacenamiento local.

### 3. Gestión de Pokémones Favoritos

- **FavoriteForm.tsx:** Componente para añadir un nuevo Pokémon favorito. Envia datos al endpoint `addFavoritePokemon`.
- **FavoritesList.tsx:** Lista todos los Pokémones favoritos del usuario autenticado. Utiliza el endpoint `getFavoritePokemons`.
- **FavoriteTable.tsx:** Tabla para listar, editar y eliminar Pokémones favoritos. Interactúa con los endpoints `editFavoritePokemon` y `removeFavoritePokemon`.

### 4. Layout (Header.tsx)

- Navegación principal de la aplicación.
- Incluye enlaces a las vistas de Registro, Inicio de Sesión y Gestión de Pokémones Favoritos.

### 5. Servicios

- **authService.ts:** Funciones para realizar operaciones relacionadas con la autenticación.
- **userService.ts:** Funciones para obtener información de los usuarios.
- **pokemonService.ts:** Funciones para gestionar los Pokémones favoritos.

## Instalación

Para ejecutar esta aplicación, sigue estos pasos:

1. Clona el repositorio en tu máquina local.

   ```
   git clone git@github.com:Daniel-Santiago-Acosta-1013/frontend-UserPokeAPI.git
   ```

2. Navega hasta el directorio del proyecto clonado.

   ```
   cd frontend-UserPokeAPI
   ```

3. Instala las dependencias del proyecto.

   ```
   npm install
   ```

4. Ejecuta la aplicación.

   ```
   npm start
   ```

La aplicación debería estar ahora corriendo en tu navegador en `localhost:5173`.

## Uso

- Regístrate para crear una nueva cuenta de usuario.
- Inicia sesión con tus credenciales.
- Añade Pokémones a tu lista de favoritos.
- Edita o elimina Pokémones en tu lista.
