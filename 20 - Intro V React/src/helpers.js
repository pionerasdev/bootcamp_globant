export function formatPrice(cents) {
  return (cents / 100).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "adorable",
    "hermoso",
    "limpio",
    "monótono",
    "elegante",
    "lujoso",
    "atractivo",
    "hermoso",
    "largo",
    "magnífico",
    "Anticuado",
    "llanura",
    "pintoresco",
    "espumoso",
    "más-feo",
    "feo",
    "enojado",
    "desconcertado",
    "torpe",
    "derrotado",
    "desconcertado",
    "feroz",
    "gruñón",
    "indefenso",
    "pica",
    "celoso",
    "perezoso",
    "misterioso",
    "nervioso",
    "desagradable",
    "asustado",
    "desagradable",
    "de-miedo",
    "desconsiderado",
    "tenso",
    "preocupado"
  ];

  const nouns = [
    "mujer",
    "hombres",
    "niños",
    "dientes",
    "pies",
    "personas",
    "hojas",
    "ratones",
    "gansos",
    "mitades",
    "cuchillos",
    "esposas",
    "vive",
    "duendes",
    "panes",
    "patatas",
    "Tomates",
    "cactus",
    "focos",
    "hongos",
    "núcleos",
    "programas-de-estudio",
    "análisis",
    "diagnósticos",
    "oasis",
    "tesis",
    "crisis",
    "fenómenos",
    "criterios",
    "datos"
  ];

  return `${rando(nouns)}-${rando(adjectives)}-${rando(adjectives)}`;
}
