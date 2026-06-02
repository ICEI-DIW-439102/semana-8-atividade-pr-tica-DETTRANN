const catalogo = [
  {
    id: 1,
    titulo: "The Godfather Part II",
    tipo: "filme",
    ano: 1972,
    generos: ["Drama", "Crime"],
    nota: 9.2,
    assistido: true,
  },
  {
    id: 2,
    titulo: "Cidade de Deus",
    tipo: "filme",
    ano: 2002,
    generos: ["Drama", "Crime"],
    nota: 9.2,
    assistido: true,
  },
  {
    id: 3,
    titulo: "Parasite",
    tipo: "filme",
    ano: 2019,
    generos: ["Drama", "Comédia", "Suspense"],
    nota: 9,
    assistido: true,
  },
  {
    id: 4,
    titulo: "Cinema Paradiso",
    tipo: "filme",
    ano: 1988,
    generos: ["Drama", "Romance"],
    nota: 9,
    assistido: false,
  },
  {
    id: 5,
    titulo: "Apocalypse Now",
    tipo: "filme",
    ano: 1979,
    generos: ["Drama", "War"],
    nota: 8.8,
    assistido: false,
  },
  {
    id: 6,
    titulo: "The Thing",
    tipo: "filme",
    ano: 1982,
    generos: ["Mistério", "Ficção Científica", "Terror"],
    nota: 8.8,
    assistido: false,
  },
];
console.log("Catálogo completo:", catalogo);
console.log("Título do primeiro item:", catalogo[0].titulo);
console.log("O ano do último item:", catalogo[5].ano);
console.log("O segundo gênero do terceiro item:", catalogo[2].generos[1]);

acumulador = 0;
acumulador2 = 0;
i = 0;
iFilme = 0;
iSerie = 0;

console.log("Todos os títulos listados:");
for (const filme of catalogo) {
  console.log(filme.titulo);

  acumulador += filme.nota;

  if (filme.assistido) {
    acumulador2 += filme.nota;
    i++;
  }

  if (filme.tipo == "filme") {
    iFilme++;
  } else if (filme.tipo == "serie") {
    iSerie++;
  }
}

const titulosEmCaixaAlta = catalogo.map((filme) => filme.titulo.toUpperCase());

console.log("Títulos em caixa alta:", titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter((filme) => !filme.assistido);
console.log("Filmes/séries não assistidos:", naoAssistidos);

const filmesTops = catalogo.find((filme) => filme.nota >= 9);
if (filmesTops) {
  console.log("Filme com a melhor nota:", filmesTops.titulo, filmesTops.nota);
} else {
  console.log("Nenhum filme/série com nota 9 ou superior encontrado.");
}

media = acumulador / catalogo.length;
console.log(`Média das notas dos filmes: ${media.toFixed(2)}`);

media2 = acumulador2 / i;
console.log(`Média das notas apenas dos assistidos: ${media2.toFixed(2)}`);

const filmesAntes2k = catalogo.some((f) => f.ano < 2000);
if (filmesAntes2k) {
  console.log("Existem filmes antes dos anos 2000");
} else {
  console.log("Não existem filmes antes dos anos 2000");
}

const filmesComMin1Gen = catalogo.every((f) => f.generos.length >= 1);
if (filmesComMin1Gen) {
  console.log("Todos os filmes tem pelo menos 1 genêro");
} else {
  console.log("Nem todos os filmes tem pelo menos 1 genêro");
}

const top3 = [...catalogo]
  .sort((a, b) => (b.nota || 0) - (a.nota || 0))
  .slice(0, 3);

const outputEl = document.getElementById("output");
outputEl.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p><strong>Total de itens:</strong> ${catalogo.length}</p>
    <p><strong>Filmes:</strong> ${iFilme} &nbsp;—&nbsp; <strong>Séries:</strong> ${iSerie}</p>
    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
    <p><strong>Média geral de notas:</strong> ${media.toFixed(2)}</p>
    <h3>Top 3 por nota</h3>
    <ol>
      ${top3.map((it) => `<li>${it.titulo} — ${it.nota}</li>`).join("")}
    </ol>
  `;
