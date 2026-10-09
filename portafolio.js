// Inicializamos el objeto portafolio tal como lo espera tu index.html
const portafolio = new Portafolio();

// 1. PROYECTO MERCADO LIBRE (Pasando los 4 argumentos exactos que pide tu motor)
portafolio.agregar(
    "Sistema Dinámico de Recomendados & Gestión de Datos",
    "Diseñé e implementé una arquitectura de datos eficiente para gestionar más de 150 enlaces de afiliado de Mercado Libre. Centralicé la base de datos en tablas estructuradas de Excel y desarrollé lógica en JavaScript para categorizar los productos, generar rotación aleatoria en la interfaz (evitando la fatiga visual del usuario) y permitir filtrado por categorías en tiempo real. Esto eliminó el mantenimiento manual del HTML y automatizó por completo el despliegue del catálogo.",
    "https://jecr.cl#recomendados",
    "https://mlstatic.com"
);

// 2. PROYECTO HARVARD CS50x
portafolio.agregar(
    "CS50x: Introduction to Computer Science (Harvard University)",
    "Cursando actualmente los fundamentos de ciencias de la computación de la Universidad de Harvard. Desarrollo de pensamiento computacional y resolución de problemas mediante algoritmos robustos. Aprendizaje práctico enfocado en gestión de memoria, estructuras de datos y lógica de programación aplicable a la optimización y automatización de procesos de negocio.",
    "https://harvard.edu",
    "https://unsplash.com"
);

// Hacemos que el objeto quede disponible globalmente para el motor
window.DATOS_PORTAFOLIO = portafolio;
