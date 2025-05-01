# Relatos de papel

Este proyecto es una aplicación web de librería construida con las siguientes tecnologías:

- **Vite:** Un constructor de frontend extremadamente rápido y herramienta de desarrollo.
- **React:** Una biblioteca de JavaScript para construir interfaces de usuario.
- **TailwindCSS:** Un framework CSS de utilidad-primera para un desarrollo rápido.
- **Shadcn/ui:** Una colección de componentes de interfaz de usuario reutilizables y sin estilo, construidos sobre Radix UI y Tailwind CSS.

## Características

La aplicación implementa las siguientes funcionalidades:

- **Vista de Acceso (Landing Page):** Una página de inicio que redirige a la página principal.
- **Vista de Página Principal (Home):** Muestra una lista de libros obtenidos de la API de Open Library. Permite filtrar libros por título mediante una barra de búsqueda. Al hacer clic en un libro, se redirige a la vista de libro.
- **Vista de Libro (Book Details):** Muestra los detalles de un libro específico obtenido de la API de Open Library y permite añadirlo al carrito.
- **Carrito:** Un componente visible (o desplegable) que muestra los libros añadidos. Permite eliminar libros y proceder al checkout.
- **Vista de Checkout:** Muestra un resumen de los libros en el carrito y simula un proceso de pago exitoso (muestra una alerta, vacía el carrito y redirige a la página principal).
- **Navegación:** Barra de navegación con enlaces a la página principal, carrito, login y registro.
- **Paginación:** Permite navegar a través de múltiples páginas de resultados de búsqueda de libros.
- **Maquetas de Autenticación:** Páginas de Login y Registro con formularios básicos (sin funcionalidad real de autenticación).

## Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone git@github.com:borjamrd/relatos-de-papel.git
    cd relatos-de-papel
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```

## Ejecución

1.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    ```

    Esto abrirá la aplicación en tu navegador en `http://localhost:5173`

## Tecnologías

- **React Router DOM:** Para la gestión de las rutas de la aplicación.
- **useContext:** Para la gestión del estado del carrito de forma global.
- **useCallback y useEffect:** Hooks de React para la lógica de los componentes y efectos secundarios.
- **TailwindCSS:** Framework CSS para el estilado.
- **Shadcn/ui:** Biblioteca de componentes de interfaz de usuario.
- **Lucide React (opcional):** Para iconos (ejemplo en el carrito flotante).
- **Tanstackquery**: Para realizar fetching y control de peticiones


## Estructura de Carpetas

```plaintext
├── src/
│   ├── components/        
│   │   ├── ui/            # Componentes reutilizables de interfaz de usuario
│   │   └── ...            # Otros componentes
│   ├── data/              # Archivos relacionados con datos o constantes
│   ├── hooks/             # Hooks personalizados
│   ├── contexts/          # Contextos de la aplicación
│   ├── pages/             # Páginas principales de la aplicación
│   ├── App.jsx/tsx        # Componente raíz de la aplicación
│   ├── main.jsx/tsx       # Punto de entrada principal
│   ├── ...                # Otros archivos
├── public/                # Archivos estáticos públicos
├── index.html             # Archivo HTML principal
├── package.json           # Archivo de configuración de dependencias
├── README.md              # Documentación del proyecto
├── tailwind.config.js     # Configuración de TailwindCSS
├── vite.config.js         # Configuración de Vite
└── ...                    # Otros archivos y carpetas
```

## Notas

- Este proyecto utiliza datos de prueba mockeados y no implementa una base de datos ni backend real.
- La funcionalidad de login y registro son maquetas visuales sin autenticación real.
- El estilado se realiza principalmente con TailwindCSS y los componentes de Shadcn/ui.
