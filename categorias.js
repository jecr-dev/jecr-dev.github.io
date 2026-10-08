// CATEGORÍAS de Recomendados: el orden de esta lista es el orden en la página.
// "nombre" es el título del recuadro. En el Excel puedes escribirlo igual (no importan mayúsculas ni tildes)
// o usar cualquiera de los "alias". "texto" va bajo el título. "listaCompleta" (opcional) es tu lista en Mercado Libre.
// Lo que no calce con ninguna categoría, o venga sin categoría en el Excel, se muestra en "Otros".
// Una categoría sin productos no se muestra. Para cambiar cuántas tarjetas rotan en una categoría, agrega: rotar: { visibles: 3, cada: 10 }
window.DATOS_CATEGORIAS = [
  { nombre: "Escritorio", texto: "Lo que me hace sentir cómodo y más productivo cuando me siento frente a la pantalla.", listaCompleta: "" },
  { nombre: "Grabación y audio", texto: "No soy ningún experto, pero esto es lo que uso para producir mi contenido audiovisual.", listaCompleta: "" },
  { nombre: "Instrumentos", texto: "Soy percusionista, principalmente baterista. Acá dejo instrumentos y accesorios que recomiendo.", listaCompleta: "" },
  { nombre: "Cocina", texto: "Me gusta cocinar, y estas cosas me hacen mucho más fácil meter las manos en la masa.", listaCompleta: "" },
  { nombre: "Tecnología", texto: "Dispositivos que uso a diario y que me ayudan a estudiar, crear y mantenerme conectado.", listaCompleta: "" },
  { nombre: "Construcción y jardinería", alias: ["construccion y jardin"], texto: "Una gran ayuda a la hora de ponerse el overol.", listaCompleta: "" },
  { nombre: "Otros", texto: "Cosas que no calzan en ninguna categoría, pero que igual recomiendo.", listaCompleta: "" },
];
