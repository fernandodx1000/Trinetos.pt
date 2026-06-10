/* ==========================================================================
   TRINETOS — catálogo completo
   Dados dos artigos · pesquisa · filtros por categoria
   Para acrescentar artigos basta adicionar entradas ao array ITEMS.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Categorias (slug → etiqueta)
     ------------------------------------------------------------------ */
  var CATEGORIES = {
    "oficina":        "Equipamento de Oficina",
    "compressores":   "Compressores",
    "soldadura":      "Soldadura",
    "hidraulica":     "Hidráulica",
    "pneumatica":     "Pneumática",
    "tubos":          "Tubos & Mangueiras",
    "transmissao":    "Transmissão & Cintas",
    "ferramentas":    "Ferramentas",
    "fixacao":        "Fixação & Parafusaria",
    "lubrificacao":   "Lubrificação",
    "acos":           "Aços & Ferros",
    "metalomecanica": "Metalomecânica"
  };

  /* ------------------------------------------------------------------
     Artigos
     ------------------------------------------------------------------ */
  var ITEMS = [
    // Equipamento de Oficina
    { ref: "TRN-0101", pvp: 2490, cat: "oficina", nome: "Elevador de 2 colunas 4T", desc: "Elevador eletro-hidráulico de duas colunas, capacidade 4 toneladas, desbloqueio automático." },
    { ref: "TRN-0102", pvp: 3290, cat: "oficina", nome: "Elevador de tesoura 3T", desc: "Elevador de tesoura de encastrar, ideal para alinhamento e serviço rápido." },
    { ref: "TRN-0103", pvp: 8900, cat: "oficina", nome: "Máquina de alinhamento 3D", desc: "Alinhamento de direção com câmaras 3D, base de dados de veículos incluída." },
    { ref: "TRN-0104", pvp: 690, cat: "oficina", nome: "Regloscópio com laser", desc: "Verificação e afinação de faróis com alinhamento por laser e luxímetro digital." },
    { ref: "TRN-0105", pvp: 329, cat: "oficina", nome: "Extrator de óleo pneumático 90L", desc: "Recuperador e extrator de óleo usado por aspiração, depósito de 90 litros." },
    { ref: "TRN-0106", pvp: 1590, cat: "oficina", nome: "Desmonta-pneus automático", desc: "Desmonta-pneus para jantes 10\"–24\" com braço auxiliar." },
    { ref: "TRN-0107", pvp: 1290, cat: "oficina", nome: "Máquina de equilibrar rodas", desc: "Equilibradora digital com entrada automática de dados e programas moto/auto." },
    { ref: "TRN-0108", pvp: 449, cat: "oficina", nome: "Macaco de fossa 15T", desc: "Macaco hidráulico de fossa para caixas e diferenciais, 15 toneladas." },

    // Compressores
    { ref: "TRN-0201", pvp: 549, cat: "compressores", nome: "Compressor de pistão 100L 3HP", desc: "Compressor monofásico de correia, depósito 100 litros, 10 bar." },
    { ref: "TRN-0202", pvp: 1190, cat: "compressores", nome: "Compressor de pistão 270L 5,5HP", desc: "Compressor trifásico de dois estágios, depósito 270 litros." },
    { ref: "TRN-0203", pvp: 4990, cat: "compressores", nome: "Compressor de parafuso 7,5kW", desc: "Compressor de parafuso com variação de velocidade, 10 bar, baixo ruído." },
    { ref: "TRN-0204", pvp: 890, cat: "compressores", nome: "Secador de ar por refrigeração", desc: "Secador frigorífico para redes de ar comprimido até 1500 L/min." },
    { ref: "TRN-0205", pvp: 1090, cat: "compressores", nome: "Depósito de ar 500L", desc: "Reservatório vertical de ar comprimido 500 litros, 11 bar, com certificação." },

    // Soldadura
    { ref: "TRN-0301", pvp: 749, cat: "soldadura", nome: "Máquina MIG/MAG 200A inverter", desc: "Soldadura MIG/MAG sinérgica 200A, monofásica, com tocha e acessórios." },
    { ref: "TRN-0302", pvp: 899, cat: "soldadura", nome: "Máquina TIG AC/DC 200A", desc: "TIG AC/DC com HF para alumínio e inox, ignição sem contacto." },
    { ref: "TRN-0303", pvp: 189, cat: "soldadura", nome: "Inverter de elétrodos 160A", desc: "Máquina de elétrodos portátil 160A com hot start e anti-stick." },
    { ref: "TRN-0304", pvp: 59, cat: "soldadura", nome: "Máscara de soldadura automática", desc: "Máscara de escurecimento automático DIN 9–13, ajuste de sensibilidade." },
    { ref: "TRN-0305", pvp: 29.90, cat: "soldadura", nome: "Fio fluxado 0,9mm 5kg", desc: "Bobina de fio fluxado sem gás para soldadura MIG, 0,9 mm." },
    { ref: "TRN-0306", pvp: 24.90, cat: "soldadura", nome: "Elétrodos rutilo 2,5mm (cx 5kg)", desc: "Caixa de elétrodos rutilo E6013 2,5 mm para aço macio." },

    // Hidráulica
    { ref: "TRN-0401", pvp: 4.50, cat: "hidraulica", nome: "Racord hidráulico JIC 3/8\"", desc: "Racord macho JIC 3/8\" para mangueira de alta pressão, aço zincado." },
    { ref: "TRN-0402", pvp: 149, cat: "hidraulica", nome: "Bomba hidráulica de engrenagens", desc: "Bomba de engrenagens grupo 2, várias cilindradas disponíveis." },
    { ref: "TRN-0403", pvp: 219, cat: "hidraulica", nome: "Válvula direcional 4/3", desc: "Distribuidor hidráulico monobloco 4/3, 40 L/min, comando por alavanca." },
    { ref: "TRN-0404", pvp: null, cat: "hidraulica", nome: "Cilindro hidráulico duplo efeito", desc: "Cilindro de duplo efeito, fabrico à medida de curso e fixações." },
    { ref: "TRN-0405", pvp: 389, cat: "hidraulica", nome: "Mini central hidráulica 12V", desc: "Central hidráulica compacta 12V para básculas e plataformas." },
    { ref: "TRN-0406", pvp: 12.90, cat: "hidraulica", nome: "Manómetro de glicerina 0–250 bar", desc: "Manómetro Ø63 com banho de glicerina, ligação 1/4\" inferior." },

    // Pneumática
    { ref: "TRN-0501", pvp: 39.90, cat: "pneumatica", nome: "Cilindro pneumático ISO 6432", desc: "Mini cilindro inox Ø8–25 mm, simples ou duplo efeito." },
    { ref: "TRN-0502", pvp: 34.90, cat: "pneumatica", nome: "Eletroválvula 5/2 1/4\"", desc: "Válvula pneumática 5/2 monoestável, bobina 24V DC." },
    { ref: "TRN-0503", pvp: 79, cat: "pneumatica", nome: "Unidade de tratamento de ar FRL", desc: "Filtro, regulador e lubrificador 1/2\" com manómetro." },
    { ref: "TRN-0504", pvp: 6.90, cat: "pneumatica", nome: "Engate rápido universal 1/4\"", desc: "Engate rápido de segurança perfil universal, corpo em latão." },
    { ref: "TRN-0505", pvp: 19.90, cat: "pneumatica", nome: "Espiral de poliuretano 8mm 10m", desc: "Mangueira espiral PU 8×12 mm com terminais rotativos." },
    { ref: "TRN-0506", pvp: 14.90, cat: "pneumatica", nome: "Pistola de sopro com bico longo", desc: "Pistola de sopro profissional com bico de 200 mm." },

    // Tubos & Mangueiras
    { ref: "TRN-0601", pvp: 12.90, cat: "tubos", nome: "Mangueira hidráulica 2SN 3/8\"", desc: "Mangueira de alta pressão 2 tramas de aço, cravação na hora. Preço por metro." },
    { ref: "TRN-0602", pvp: 89, cat: "tubos", nome: "Tubo PU 8×12mm (rolo 100m)", desc: "Tubo de poliuretano calibrado para pneumática, rolo de 100 metros." },
    { ref: "TRN-0603", pvp: 69, cat: "tubos", nome: "Mangueira de ar comprimido 20 bar", desc: "Mangueira de borracha para ar e água, reforço têxtil, 20 bar." },
    { ref: "TRN-0604", pvp: null, cat: "tubos", nome: "Terminais de cravar (gama completa)", desc: "Terminais e casquilhos para cravação de mangueiras hidráulicas." },
    { ref: "TRN-0605", pvp: 7.90, cat: "tubos", nome: "Mangueira de aspiração espiralada", desc: "Mangueira de PVC com espiral rígida para aspiração e descarga." },
    { ref: "TRN-0606", pvp: 19.90, cat: "tubos", nome: "Abraçadeiras inox (sortido)", desc: "Abraçadeiras de aperto sem-fim em inox, várias medidas." },

    // Transmissão & Cintas
    { ref: "TRN-0701", pvp: 8.90, cat: "transmissao", nome: "Correia trapezoidal (perfis A/B/C)", desc: "Correias trapezoidais clássicas e estreitas, todas as medidas." },
    { ref: "TRN-0702", pvp: 24.90, cat: "transmissao", nome: "Polia em ferro fundido", desc: "Polias de 1 a 4 gargantas, furo cónico ou liso." },
    { ref: "TRN-0703", pvp: 4.90, cat: "transmissao", nome: "Rolamento 6204 2RS", desc: "Rolamento rígido de esferas vedado, qualidade industrial." },
    { ref: "TRN-0704", pvp: 39.90, cat: "transmissao", nome: "Corrente de rolos 08B-1 (5m)", desc: "Corrente de rolos simples passo 1/2\", com união." },
    { ref: "TRN-0705", pvp: 16.90, cat: "transmissao", nome: "Cinta de elevação 2T 2m", desc: "Cinta plana de poliéster 2 toneladas, certificada CE." },
    { ref: "TRN-0706", pvp: 29.90, cat: "transmissao", nome: "União elástica com estrela", desc: "Acoplamento elástico para motor-bomba, várias dimensões." },

    // Ferramentas
    { ref: "TRN-0801", pvp: 89, cat: "ferramentas", nome: "Chave dinamométrica 1/2\" 40–210Nm", desc: "Chave dinamométrica com escala micrométrica e estojo." },
    { ref: "TRN-0802", pvp: 199, cat: "ferramentas", nome: "Pistola de impacto pneumática 1/2\"", desc: "Aparafusadora de impacto 1200 Nm com jogo de caixas." },
    { ref: "TRN-0803", pvp: 119, cat: "ferramentas", nome: "Rebarbadora 125mm 1100W", desc: "Rebarbadora angular profissional com arranque suave." },
    { ref: "TRN-0804", pvp: 79, cat: "ferramentas", nome: "Jogo de chaves combinadas 6–32mm", desc: "Jogo de 25 chaves em crómio-vanádio com suporte." },
    { ref: "TRN-0805", pvp: 149, cat: "ferramentas", nome: "Macaco rolante 3T", desc: "Macaco hidráulico rolante de perfil baixo, 3 toneladas." },
    { ref: "TRN-0806", pvp: 99, cat: "ferramentas", nome: "Berbequim de percussão 850W", desc: "Berbequim com bucha de aperto rápido 13 mm e velocidade variável." },

    // Fixação & Parafusaria
    { ref: "TRN-0901", pvp: 19.90, cat: "fixacao", nome: "Parafuso DIN 933 8.8 (cx)", desc: "Parafuso sextavado rosca total, classe 8.8 zincado, todas as métricas." },
    { ref: "TRN-0902", pvp: 14.90, cat: "fixacao", nome: "Porca autoblocante DIN 985 (cx)", desc: "Porcas autoblocantes com anel de nylon, M4 a M24." },
    { ref: "TRN-0903", pvp: 16.90, cat: "fixacao", nome: "Bucha química 300ml + ampolas", desc: "Resina de fixação química para cargas pesadas em betão." },
    { ref: "TRN-0904", pvp: 12.90, cat: "fixacao", nome: "Rebites de alumínio (sortido)", desc: "Rebites cegos de alumínio em várias medidas, caixa sortida." },
    { ref: "TRN-0905", pvp: 3.90, cat: "fixacao", nome: "Varão roscado M10 zincado 1m", desc: "Varão roscado DIN 975 classe 4.8, zincado branco." },

    // Lubrificação
    { ref: "TRN-1001", pvp: 24.90, cat: "lubrificacao", nome: "Bomba de massa manual 500g", desc: "Bomba de lubrificação manual com tubo rígido e flexível." },
    { ref: "TRN-1002", pvp: 349, cat: "lubrificacao", nome: "Propulsora pneumática de massa 20kg", desc: "Propulsora de massa lubrificante para balde de 20 kg, rácio 50:1." },
    { ref: "TRN-1003", pvp: 79, cat: "lubrificacao", nome: "Óleo hidráulico HM46 20L", desc: "Óleo hidráulico antidesgaste ISO VG 46, bidão de 20 litros." },
    { ref: "TRN-1004", pvp: 6.90, cat: "lubrificacao", nome: "Massa de lítio EP2 (cartucho)", desc: "Massa multiusos de lítio EP2 em cartucho de 400 g." },
    { ref: "TRN-1005", pvp: 189, cat: "lubrificacao", nome: "Kit de trasfega de gasóleo 12V", desc: "Bomba de trasfega 12V com pistola automática e contador." },

    // Aços & Ferros
    { ref: "TRN-1101", pvp: 32.90, cat: "acos", nome: "Tubo quadrado 40×40×2mm 6m", desc: "Tubo estrutural quadrado em aço S235, barra de 6 metros." },
    { ref: "TRN-1102", pvp: null, cat: "acos", nome: "Chapa lacrimada 2mm", desc: "Chapa de aço lacrimada antiderrapante, corte à medida." },
    { ref: "TRN-1103", pvp: 8.90, cat: "acos", nome: "Varão liso Ø10mm 6m", desc: "Varão de aço macio calibrado para serralharia." },
    { ref: "TRN-1104", pvp: 54.90, cat: "acos", nome: "Perfil UPN 80 6m", desc: "Perfil normalizado UPN em aço S235 JR." },
    { ref: "TRN-1105", pvp: 21.90, cat: "acos", nome: "Barra retangular 40×8mm", desc: "Barra de aço laminado para serralharia e construção mecânica." },

    // Metalomecânica
    { ref: "TRN-1201", pvp: 1890, cat: "metalomecanica", nome: "Serrote de fita para metal", desc: "Serrote de fita basculante com refrigeração, corte até 225 mm." },
    { ref: "TRN-1202", pvp: 1290, cat: "metalomecanica", nome: "Engenho de furar de coluna 32mm", desc: "Furadora de coluna com capacidade 32 mm e mesa basculante." },
    { ref: "TRN-1203", pvp: 549, cat: "metalomecanica", nome: "Prensa hidráulica 20T", desc: "Prensa hidráulica de oficina com manómetro e mesa regulável." },
    { ref: "TRN-1204", pvp: 169, cat: "metalomecanica", nome: "Esmeriladora de bancada 200mm", desc: "Esmeriladora dupla 200 mm com proteções e apoios." },
    { ref: "TRN-1205", pvp: 690, cat: "metalomecanica", nome: "Quinadeira manual 1020mm", desc: "Quinadeira de bancada para chapa até 1,2 mm." }
  ];

  /* ------------------------------------------------------------------
     Ícones por categoria (reutilizados do index)
     ------------------------------------------------------------------ */
  var ICONS = {
    oficina:        '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="34" width="36" height="4"/><path d="M12 34V18h8v16M28 34V18h8v16"/><rect x="14" y="22" width="20" height="8"/></g></svg>',
    compressores:   '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="22" width="32" height="14" rx="7"/><path d="M16 22v-8h8M24 14h10v8"/><circle cx="16" cy="40" r="3"/><circle cx="32" cy="40" r="3"/></g></svg>',
    soldadura:      '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="18" width="20" height="16" rx="2"/><path d="M26 26c8 0 8-8 14-8"/><path d="M40 18l3-5M40 18l5-1M40 18l1-6"/></g></svg>',
    hidraulica:     '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="14"/><circle cx="24" cy="24" r="6"/><path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke-width="3"/></g></svg>',
    pneumatica:     '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="20" width="24" height="8" rx="2"/><path d="M30 24h12M38 20v8"/><path d="M10 20v-6M14 20v-6"/></g></svg>',
    tubos:          '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M6 14h20a8 8 0 0 1 8 8v0a8 8 0 0 1-8 8H14a8 8 0 0 0-8 8"/><path d="M6 10v8M42 18v8" stroke-width="3"/></g></svg>',
    transmissao:    '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="16" cy="24" r="10"/><circle cx="34" cy="24" r="6"/><path d="M16 14c10 0 12 4 18 4M16 34c10 0 12-4 18-4"/></g></svg>',
    ferramentas:    '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M30 8a10 10 0 1 0 6 18l6 6-4 4-6-6"/><path d="M12 30 6 36l6 6 6-6"/></g></svg>',
    fixacao:        '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M24 4l6 6-2 2 8 8 4-1 4 4-8 8-4-4 1-4-8-8-2 2-6-6z"/><path d="M8 34l6 6M6 42l8-8" stroke-width="3"/></g></svg>',
    lubrificacao:   '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6h8v6l4 4v26a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V16l4-4z"/><path d="M16 28h16" stroke-width="3"/></g></svg>',
    acos:           '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M6 36h36M10 36V20l8-6v22M26 36V14l8-6v28"/></g></svg>',
    metalomecanica: '<svg viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="8"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M37 11l-4 4M11 37l4-4"/></g></svg>'
  };

  /* ------------------------------------------------------------------
     Estado e elementos
     ------------------------------------------------------------------ */
  var grid = document.getElementById("items-grid");
  var chipsWrap = document.getElementById("catalog-chips");
  var searchInput = document.getElementById("catalog-search");
  var searchClear = document.getElementById("search-clear");
  var countEl = document.getElementById("results-count");
  var noResults = document.getElementById("no-results");
  var resetBtn = document.getElementById("reset-search");

  if (!grid) return;

  var activeCat = "todos";
  var query = "";

  // Remove acentos e normaliza para pesquisa tolerante
  function normalize(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /* ------------------------------------------------------------------
     Chips de categoria
     ------------------------------------------------------------------ */
  function buildChips() {
    var html = '<button class="chip is-active" data-cat="todos">Todos <small>' + ITEMS.length + "</small></button>";

    Object.keys(CATEGORIES).forEach(function (slug) {
      var count = ITEMS.filter(function (i) { return i.cat === slug; }).length;
      html += '<button class="chip" data-cat="' + slug + '">' + CATEGORIES[slug] + " <small>" + count + "</small></button>";
    });

    chipsWrap.innerHTML = html;

    chipsWrap.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        activeCat = chip.dataset.cat;
        chipsWrap.querySelectorAll(".chip").forEach(function (c) {
          c.classList.toggle("is-active", c === chip);
        });
        render();
      });
    });
  }

  /* ------------------------------------------------------------------
     Renderização dos artigos
     ------------------------------------------------------------------ */
  // Formata o PVP em euros (pt-PT); null = preço sob consulta
  function formatPVP(v) {
    if (v === null || v === undefined) return null;
    var opts = (v % 1 === 0)
      ? { maximumFractionDigits: 0 }
      : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    return v.toLocaleString("pt-PT", opts) + " €";
  }

  function itemCard(item) {
    var catLabel = CATEGORIES[item.cat];
    var price = formatPVP(item.pvp);
    var priceHtml = price
      ? '<span class="item-price">' + price + ' <small>IVA incl.</small></span>'
      : '<span class="item-price item-price--ask">Sob consulta</span>';
    var mailto = "mailto:geral@trinetos.pt?subject=" +
      encodeURIComponent("Pedido de orçamento — " + item.nome + " (" + item.ref + ")");

    return (
      '<article class="item-card">' +
        '<div class="item-head">' +
          '<span class="item-icon" aria-hidden="true">' + ICONS[item.cat] + "</span>" +
          '<span class="item-ref">' + item.ref + "</span>" +
        "</div>" +
        "<h3>" + item.nome + "</h3>" +
        "<p>" + item.desc + "</p>" +
        '<div class="item-foot">' +
          "<div>" +
            priceHtml +
            '<span class="item-cat">' + catLabel + "</span>" +
          "</div>" +
          '<a class="item-quote" href="' + mailto + '">Pedir orçamento <span aria-hidden="true">→</span></a>' +
        "</div>" +
      "</article>"
    );
  }

  function render() {
    var q = normalize(query.trim());

    var visible = ITEMS.filter(function (item) {
      if (activeCat !== "todos" && item.cat !== activeCat) return false;
      if (!q) return true;
      var haystack = normalize(item.nome + " " + item.desc + " " + item.ref + " " + CATEGORIES[item.cat]);
      return q.split(/\s+/).every(function (term) { return haystack.indexOf(term) !== -1; });
    });

    grid.innerHTML = visible.map(itemCard).join("");
    noResults.hidden = visible.length > 0;
    grid.hidden = visible.length === 0;

    countEl.textContent = visible.length === 1
      ? "1 artigo encontrado"
      : visible.length + " artigos encontrados";
  }

  /* ------------------------------------------------------------------
     Pesquisa
     ------------------------------------------------------------------ */
  searchInput.addEventListener("input", function () {
    query = searchInput.value;
    searchClear.hidden = query.length === 0;
    render();
  });

  function clearSearch() {
    query = "";
    searchInput.value = "";
    searchClear.hidden = true;
    activeCat = "todos";
    chipsWrap.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("is-active", c.dataset.cat === "todos");
    });
    render();
    searchInput.focus();
  }

  searchClear.addEventListener("click", clearSearch);
  resetBtn.addEventListener("click", clearSearch);

  /* ------------------------------------------------------------------
     Pré-seleção via URL: catalogo.html?cat=hidraulica ou ?q=racord
     ------------------------------------------------------------------ */
  function applyUrlParams() {
    var params = new URLSearchParams(window.location.search);
    var cat = params.get("cat");
    var q = params.get("q");

    if (cat && CATEGORIES[cat]) {
      activeCat = cat;
      chipsWrap.querySelectorAll(".chip").forEach(function (c) {
        c.classList.toggle("is-active", c.dataset.cat === cat);
      });
    }
    if (q) {
      query = q;
      searchInput.value = q;
      searchClear.hidden = false;
    }
  }

  buildChips();
  applyUrlParams();
  render();

})();
