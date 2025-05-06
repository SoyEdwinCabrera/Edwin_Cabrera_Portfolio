# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Este proyecto es un portafolio interactivo en 3D desarrollado con React, Three.js y TailwindCSS. El objetivo principal es mostrar habilidades, proyectos y experiencia de manera visualmente atractiva e interactiva. Incluye una sección de contacto funcional que utiliza EmailJS para enviar mensajes directamente desde el sitio web.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Comandos Disponibles](#comandos-disponibles)
- [Personalización](#personalización)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Características

- **Animaciones 3D**: Uso de Three.js y React Three Fiber para modelos 3D interactivos.
- **Sección de Contacto**: Formulario funcional que utiliza EmailJS para enviar correos electrónicos.
- **Timeline Interactivo**: Visualización de experiencias y educación con `react-vertical-timeline-component`.
- **Diseño Responsivo**: Adaptado para dispositivos móviles y de escritorio.
- **Interfaz Moderna**: Estilizado con TailwindCSS para un diseño limpio y profesional.

---

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Three.js**: Biblioteca para gráficos 3D.
- **React Three Fiber**: Abstracción de Three.js para React.
- **TailwindCSS**: Framework de CSS para diseño responsivo.
- **EmailJS**: Servicio para enviar correos electrónicos desde el frontend.
- **Vite**: Herramienta de construcción rápida para proyectos de frontend.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn** (gestor de paquetes)

---

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/YourGitHubUsername/3d_portfolio.git
   cd 3d_portfolio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

---

## Ejecución del Proyecto

Para iniciar el proyecto en modo de desarrollo:

```bash
npm run dev
```

Esto abrirá el proyecto en `http://localhost:5173` en tu navegador.

---

## Estructura del Proyecto

```plaintext
3d_portfolio/
├── src/
│   ├── assets/          # Imágenes, íconos y modelos 3D
│   ├── components/      # Componentes reutilizables (Navbar, Loader, etc.)
│   ├── constants/       # Datos estáticos como habilidades y experiencias
│   ├── hooks/           # Hooks personalizados
│   ├── models/          # Modelos 3D (Fox, etc.)
│   ├── pages/           # Páginas principales (Home, About, Projects, Contact)
│   ├── App.jsx          # Componente principal de la aplicación
│   ├── main.jsx         # Punto de entrada de la aplicación
│   └── index.css        # Estilos globales
├── public/              # Archivos públicos
├── package.json         # Configuración del proyecto y dependencias
├── vite.config.js       # Configuración de Vite
└── README.md            # Documentación del proyecto
```

---

## Comandos Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Genera una versión optimizada para producción.
- **`npm run preview`**: Previsualiza la versión de producción.
- **`npm run lint`**: Ejecuta ESLint para analizar el código.

---

## Personalización

### 1. **Actualizar Información Personal**
   - Modifica el archivo `src/constants/index.js` para actualizar tus habilidades, experiencias y proyectos.

### 2. **Configurar EmailJS**
   - Crea una cuenta en [EmailJS](https://www.emailjs.com/).
   - Configura tu servicio, plantilla y clave pública.
   - Agrega las variables de entorno en un archivo `.env` en la raíz del proyecto:

     ```plaintext
     VITE_APP_EMAILJS_SERVICE_ID=your_service_id
     VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
     ```

### 3. **Actualizar Modelos 3D**
   - Reemplaza o agrega modelos 3D en la carpeta `src/models/`.

### 4. **Cambiar Estilos**
   - Modifica los estilos en `src/index.css` o utiliza clases de TailwindCSS.

---

### Resumen de los pasos realizados:

1. **Verificar la versión actual de Node.js**:
   - Comprobaste que estabas utilizando `Node.js v16.20.2` ejecutando:
     ```bash
     node -v
     ```

2. **Actualizar la versión de Node.js con `nvm`**:
   - Cambiaste a una versión más reciente de Node.js (`v18.20.4`) utilizando `nvm`:
     ```bash
     nvm use v18
     ```

3. **Ejecutar nuevamente el servidor de desarrollo**:
   - Después de actualizar Node.js, ejecutaste el comando para iniciar el servidor de desarrollo:
     ```bash
     npm run dev
     ```
   - Esta vez, el servidor de desarrollo de `vite` se inició correctamente, mostrando la salida:
     ```
     VITE v5.4.15  ready in 121 ms
     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ➜  press h + enter to show help
     ```
     
### Conclusión:
El error se debía a que `Node.js v16.20.2` no era completamente compatible con la versión de `vite` que estabas utilizando. Al actualizar a `Node.js v18.20.4`, que es una versión más reciente y compatible, el problema se resolvió. Esto demuestra la importancia de mantener las herramientas y dependencias actualizadas para evitar problemas de compatibilidad.

Si en el futuro encuentras problemas similares, verifica siempre las versiones de Node.js y las dependencias de tu proyecto, y asegúrate de que sean compatibles entre sí. ¡Buen trabajo resolviendo el problema! 🚀

---

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz un push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente. Consulta el archivo `LICENSE` para más detalles.

---

## Autor

**Edwin Cabrera**  
[GitHub](https://github.com/YourGitHubUsername) | [LinkedIn](https://www.linkedin.com/in/YourLinkedInUsername)

---

¡Gracias por visitar mi portafolio! 😊