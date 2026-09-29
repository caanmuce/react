# Koronet Developer Workspace

Mini dashboard construido con **React** y **Vite** como ejercicio práctico para acelerar la curva de aprendizaje en React y el ecosistema frontend antes de la entrevista técnica. La aplicación permite consultar el estado de herramientas de desarrollo y obtener sugerencias rápidas sobre errores de código.

## Contexto y Motivación

Este proyecto fue desarrollado de forma autónoma por **Camilo** en respuesta al proceso de selección para el rol de **Contrato de Aprendizaje SENA** en **Koronet**.

Al identificar que el perfil para la plataforma **DevEx (Developer Experience)** requiere desarrollo en React, decidí llevar mis bases de JavaScript y Node.js un paso más allá: diseñé e implementé este prototipo funcional en 48 horas para poner en práctica componentes funcionales, manejo de estado (`useState`), ciclo de vida (`useEffect`) y modularización, demostrando proactividad y capacidad de aprendizaje continuo.

## Funcionalidades

- **Buscador de herramientas:** Filtrado en tiempo real de servicios mediante estado controlado (`useState`).
- **Monitoreo de servicios:** Consulta simulada de disponibilidad y latencia con `useEffect`.
- **Indicadores de estado:** Estado `Online` / `Offline` dinámico para GitHub, Vercel, API de Koronet y Figma.
- **Asistente IA:** Módulo interactivo de ayuda que sugiere soluciones rápidas a errores de código.
- **Diseño Responsive:** Adaptado para escritorio y dispositivos móviles con CSS personalizado.

> *Nota: La consulta de servicios es una simulación local asíncrona. No requiere claves de API ni conexión a un servidor externo.*

## Tecnologías

- **React 19**
- **Vite**
- **JavaScript (JSX)**
- **Oxlint** (Linter)
- **CSS3 / CSS Modules**

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

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




