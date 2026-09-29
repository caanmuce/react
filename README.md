oronet Developer WorkspaceMini dashboard construido con React y Vite como ejercicio práctico para acelerar la curva de aprendizaje en React y el ecosistema frontend antes de la entrevista técnica. La aplicación permite consultar el estado de herramientas de desarrollo y obtener sugerencias rápidas sobre errores de código.Contexto y MotivaciónEste proyecto fue desarrollado de forma autónoma por Camilo en respuesta al proceso de selección para el rol de Contrato de Aprendizaje SENA en Koronet.Al identificar que el perfil para la plataforma DevEx (Developer Experience) requiere desarrollo en React, decidí llevar mis bases de JavaScript y Node.js un paso más allá: diseñé e implementé este prototipo funcional para poner en práctica componentes funcionales, manejo de estado (useState), ciclo de vida (useEffect) y modularización, demostrando proactividad y capacidad de aprendizaje continuo.FuncionalidadesBuscador de herramientas: Filtrado en tiempo real de servicios mediante estado controlado (useState).Monitoreo de servicios: Consulta simulada de disponibilidad y latencia con useEffect.Indicadores de estado: Estado Online / Offline dinámico para GitHub, Vercel, API de Koronet y Figma.Asistente IA: Módulo interactivo de ayuda que sugiere soluciones rápidas a errores de código.Diseño Responsive: Adaptado para escritorio y dispositivos móviles con CSS personalizado.Nota: La consulta de servicios es una simulación local asíncrona. No requiere claves de API ni conexión a un servidor externo.TecnologíasReact 19ViteJavaScript (JSX)Oxlint (Linter)CSS personalizadoRequisitosNode.js 18 o superiornpmInstalaciónClona el repositorio:git clone https://github.com/tu-usuario/koronet-dashboard.git
cd koronet-dashboard
Instala las dependencias:npm install
DesarrolloInicia el servidor local de desarrollo:npm run dev
Abre la URL indicada por Vite en tu navegador (normalmente http://localhost:5173/).Scripts disponiblesComandoDescripciónnpm run devInicia el servidor de desarrollo con recarga automática.npm run buildGenera la versión compilada para producción en dist/.npm run previewSirve localmente la versión de producción para pruebas.npm run lintRevisa el código y posibles errores de sintaxis con Oxlint.Estructura del Proyectosrc/
├── main.jsx                 # Punto de entrada de React
├── App.jsx                  # Estado principal y composición del dashboard
├── App.css                  # Estilos de la interfaz
├── index.css                # Estilos globales mínimos
└── components/
    ├── Header.jsx           # Barra superior y navegación
    ├── SearchBar.jsx        # Campo de búsqueda reutilizable
    ├── ServiceCard.jsx      # Tarjeta individual de servicio
    └── AiAssistant.jsx      # Módulo de sugerencias de código con IA
Conceptos de React aplicadosEstado con useState: App.jsx mantiene los datos de los servicios y el término de búsqueda. Componentes como SearchBar y AiAssistant gestionan sus propios estados locales interactivos.Efectos asíncronos con useEffect: Se simula la carga de estado de red al montar el componente App, ejecutando simulateServiceCheck para actualizar la interfaz.Props y Reutilización: Los datos fluyen desde App hacia ServiceCard vía props, permitiendo renderizar múltiples tarjetas sin duplicar código HTML/JSX.Desarrollado por Camilo — Aprendiz SENA (Análisis y Desarrollo de Software).



