# Koronet Developer Workspace

Mini dashboard construido con React y Vite como estudio de los conceptos principales de react para consultar el estado de herramientas de desarrollo y obtener sugerencias rápidas sobre errores de código.

## Funcionalidades

- Buscador de herramientas controlado con `useState`.
- Consulta simulada de servicios con `useEffect`.
- Estados `Online` y `Offline` para GitHub, Vercel, API de Koronet y Figma.
- Contador de servicios operativos y latencia simulada.
- Asistente IA interactivo para generar una sugerencia de solución.
- Diseño responsive para escritorio y dispositivos móviles.

> La consulta de servicios es una simulación local. No requiere claves de API ni conexión a un backend.

## Tecnologías

- React 19
- Vite
- JavaScript (JSX)
- Oxlint
- CSS personalizado

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/tu-usuario/koronet-dashboard.git
cd koronet-dashboard
```

Instala las dependencias:

```bash
npm install
```

## Desarrollo

Inicia el servidor local:

```bash
npm run dev
```

Después abre la URL que muestra Vite, normalmente `http://localhost:5173/`.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga automática. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión compilada. |
| `npm run lint` | Revisa el código con Oxlint. |

## Estructura del proyecto

```text
src/
├── main.jsx                 # Punto de entrada de React
├── App.jsx                  # Estado principal y composición del dashboard
├── App.css                  # Estilos de la interfaz
├── index.css                # Estilos globales mínimos
└── components/
    ├── Header.jsx           # Barra superior y navegación
    ├── SearchBar.jsx        # Campo de búsqueda reutilizable
    ├── ServiceCard.jsx      # Tarjeta individual de servicio
    └── AiAssistant.jsx      # Módulo de sugerencias de código
```

## Conceptos de React utilizados

### Estado con `useState`

`App.jsx` mantiene los servicios, el texto de búsqueda y el estado de carga. `SearchBar` y `AiAssistant` también gestionan sus propios valores interactivos.

### Efectos con `useEffect`

Al montar `App`, `useEffect` ejecuta `simulateServiceCheck`, espera la respuesta simulada y actualiza la lista de servicios.

### Props y componentes

`App` pasa los datos a `ServiceCard` mediante la prop `service` y controla `SearchBar` mediante `value` y `onChange`. Esto permite reutilizar los componentes sin duplicar lógica.




