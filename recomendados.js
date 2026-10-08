// RECOMENDADOS: categorías en el orden en que aparecen.
// "texto" va bajo el título. "listaCompleta" (opcional) es el link a tu lista completa en Mercado Libre.
// "rotar": muestra 2 productos por categoría y los cambia cada 10 s. Si una categoría tiene 2 o menos, no rota.
// Borra la línea "rotar" para mostrar todos los productos siempre.
// Los productos de ejemplo son de relleno: reemplázalos por los tuyos.
window.DATOS_RECOMENDADOS = {
  rotar: { visibles: 2, cada: 10 },
  categorias: [
    {
      nombre: "Escritorio",
      texto: "Lo que me hace sentir cómodo y más productivo cuando me siento frente a la pantalla.",
      listaCompleta: "",
      productos: [
        { titulo: "Accesorio de escritorio de ejemplo", descripcion: "Describe cómo mejora tu espacio de estudio.", link: "https://mercadolibre.cl", imagen: "", precio: "" },
      ],
    },
    {
      nombre: "Grabación y audio",
      texto: "No soy ningún experto, pero esto es lo que uso para producir mi contenido audiovisual.",
      listaCompleta: "",
      productos: [
        { titulo: "Equipo de grabación de ejemplo", descripcion: "Describe qué grabas con él.", link: "https://mercadolibre.cl", imagen: "", precio: "" },
      ],
    },
    {
      nombre: "Cocina",
      texto: "Me gusta cocinar, y estas cosas me hacen mucho más fácil meter las manos en la masa.",
      listaCompleta: "",
      productos: [
        { titulo: "Utensilio de cocina de ejemplo", descripcion: "Describe qué preparas con él.", link: "https://mercadolibre.cl", imagen: "", precio: "" },
      ],
    },
    {
      nombre: "Tecnología",
      texto: "Dispositivos que uso a diario y que me ayudan a estudiar, crear y mantenerme conectado.",
      listaCompleta: "",
      productos: [
        { titulo: "Dispositivo de ejemplo", descripcion: "Describe cómo lo usas a diario.", link: "https://mercadolibre.cl", imagen: "", precio: "" },
      ],
    },
    {
      nombre: "Construcción y jardinería",
      texto: "Una gran ayuda a la hora de ponerse el overol.",
      listaCompleta: "",
      productos: [
        { titulo: "Herramienta de ejemplo", descripcion: "Describe para qué la usas.", link: "https://mercadolibre.cl", imagen: "", precio: "" },
      ],
    },
  ],
};
