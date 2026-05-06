(function () {
  "use strict";

  var LOGO_BLACK = "https://i.postimg.cc/L8qm1fsg/image.png";
  var LOGO_NORMAL = "https://i.postimg.cc/c1tGwQnF/Logo-UA.png";

  var defaults = {
    component: "courseHero",
    title: "Unidad personalizada",
    eyebrow: "Ruta de aprendizaje",
    body: "Configura este componente con colores, fondos, imagenes, animaciones y espaciado para pegarlo directamente en Moodle.",
    titleAccent: "personalizable",
    logoUrl: LOGO_NORMAL,
    fontFamily: "var(--ua-font-ui)",
    backgroundColor: "#FFFFFF",
    textColor: "#1A2403",
    titleColor: "#1A2403",
    eyebrowColor: "#007481",
    bodyColor: "#606060",
    accentColor: "#C8FF01",
    borderColor: "#00A4B5",
    internalBgColor: "#F6F8EF",
    internalTitleColor: "#1A2403",
    internalTextColor: "#606060",
    itemTitles: "Explorar\nComprender\nAplicar",
    itemBody: "Personaliza este texto para cards, pasos, detalles o slides internos.",
    imageUrls: "",
    imageAlts: "",
    footerText: "Navega entre las imagenes a tu propio ritmo.",
    detailOneTitle: "Competencia",
    detailOneBody: "Define el logro central de la unidad.",
    detailTwoTitle: "Recursos",
    detailTwoBody: "Videos, lecturas, audio y actividades.",
    backgroundType: "plain",
    imageUrl: "",
    padding: "2rem",
    radius: "8px",
    borderWidth: "1px",
    minHeight: "18rem",
    shadow: "0 10px 28px rgba(26, 36, 3, 0.10)",
    animation: "ua-pop-in",
    hover: "ua-hover-lift",
    itemCount: "3",
    buttonText: "Abrir actividad",
    buttonUrl: "#",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    reveal: true
  };

  var componentPresets = {
    courseHero: {
      title: "Unidad personalizada",
      eyebrow: "Ruta de aprendizaje",
      body: "Configura este componente con colores, fondos, imagenes, animaciones y espaciado para pegarlo directamente en Moodle.",
      logoUrl: LOGO_NORMAL,
      buttonText: "Abrir actividad",
      detailOneTitle: "Competencia",
      detailOneBody: "Define el logro central de la unidad.",
      detailTwoTitle: "Recursos",
      detailTwoBody: "Videos, lecturas, audio y actividades.",
      backgroundColor: "#1A2403",
      textColor: "#FFFFFF",
      titleColor: "#FFFFFF",
      eyebrowColor: "#FFFFFF",
      bodyColor: "#FFFFFF",
      borderColor: "#C8FF01",
      internalBgColor: "#26330D",
      internalTitleColor: "#FFFFFF",
      internalTextColor: "#F1F6E8",
      backgroundType: "neural",
      padding: "2rem",
      minHeight: "22rem"
    },
    editorialHero: {
      title: "Moodle con HTML, LaTeX e inteligencia",
      eyebrow: "Formacion docente",
      body: "De la etiqueta HTML al recurso interactivo: transforma tu aula virtual en un entorno de aprendizaje visual, claro y reutilizable.",
      titleAccent: "Artificial",
      logoUrl: LOGO_NORMAL,
      buttonText: "Abrir actividad",
      detailOneTitle: "bloques",
      detailTwoTitle: "editable",
      backgroundColor: "#1A2403",
      textColor: "#FFFFFF",
      titleColor: "#FFFFFF",
      eyebrowColor: "#C8FF01",
      bodyColor: "#FFFFFF",
      borderColor: "#C8FF01",
      internalBgColor: "#26330D",
      internalTitleColor: "#FFFFFF",
      internalTextColor: "#F1F6E8",
      backgroundType: "dot",
      padding: "2rem",
      minHeight: "19rem"
    },
    welcome: {
      title: "Esta unidad se desarrolla en",
      eyebrow: "Ruta de aprendizaje",
      body: "Primero observas un ejemplo, luego entiendes su estructura y finalmente construyes una entrega aplicada.",
      titleAccent: "cuatro momentos",
      itemCount: "4",
      itemTitles: "Explorar\nComprender\nPracticar\nAplicar",
      itemBody: "Revisa un ejemplo de contenido enriquecido dentro de Moodle.\nIdentifica estructura, jerarquia visual, componentes y estilos.\nConstruye una seccion propia con acompanamiento.\nEntrega una evidencia aplicada y lista para publicar.",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      titleColor: "#1A2403",
      eyebrowColor: "#007481",
      bodyColor: "#606060",
      borderColor: "#C8FF01",
      internalBgColor: "#FFFFFF",
      internalTitleColor: "#1A2403",
      internalTextColor: "#606060",
      backgroundType: "plain",
      padding: "2rem"
    },
    method: {
      title: "Cada saber sigue la misma logica",
      eyebrow: "Metodologia del curso",
      itemCount: "3",
      itemTitles: "Ver\nEntender\nHacer",
      itemBody: "Demo en video o screencast del resultado final.\nExplicacion con analogias cotidianas y sin jerga tecnica.\nPractica guiada paso a paso con tu propia asignatura.",
      backgroundColor: "#1A2403",
      textColor: "#FFFFFF",
      titleColor: "#FFFFFF",
      eyebrowColor: "#C8FF01",
      bodyColor: "#FFFFFF",
      borderColor: "#C8FF01",
      internalBgColor: "#102000",
      internalTitleColor: "#FFFFFF",
      internalTextColor: "#F1F6E8",
      backgroundType: "neural",
      padding: "2rem"
    },
    moduleIntro: {
      title: "Bienvenidos al Saber 1",
      eyebrow: "Introduccion al modulo",
      body: "El diseno de un entorno digital no es solo estetica: es una herramienta pedagogica para reducir la carga cognitiva y guiar la atencion hacia lo importante.",
      logoUrl: LOGO_BLACK,
      itemBody: "Proposito del saber: disenar contenidos digitales mas claros, accesibles y pertinentes para el aprendizaje.",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      titleColor: "#1A2403",
      eyebrowColor: "#606060",
      bodyColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    contentBlock: {
      title: "Teoria aplicada con apoyo visual",
      eyebrow: "Contenido tematico",
      body: "Presenta conceptos, ejemplos y relaciones clave con una imagen de apoyo o recurso visual.",
      itemBody: "Usa este espacio para una idea clave, pregunta detonante o sintesis corta del bloque.",
      buttonText: "Abrir actividad",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    audioLesson: {
      title: "El poder del HTML en el aula",
      eyebrow: "Preparacion auditiva",
      body: "Escucha el episodio y reconoce los conceptos que aparecen durante la unidad.",
      detailOneTitle: "Mientras escuchas, presta atencion a:",
      itemCount: "4",
      itemTitles: "Que es realmente el HTML\nLenguaje de marcado\nEstructura visual\nBuenas practicas",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain"
    },
    podcast: {
      title: "Episodio de apertura",
      eyebrow: "Podcast interactivo / URL de audio",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    video: {
      title: "Video de apoyo",
      eyebrow: "Recurso audiovisual",
      body: "Inserta aqui un video, iframe o enlace a un recurso multimedia del curso.",
      buttonText: "Ver video",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain"
    },
    meet: {
      title: "Sesion sincronica",
      eyebrow: "Encuentro en vivo",
      body: "Acompana el encuentro con contexto, horario, objetivo y enlace de acceso.",
      buttonText: "Unirme",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain"
    },
    banner: {
      title: "Entrega proxima",
      eyebrow: "Aviso importante",
      body: "Recuerda revisar la rubrica antes de enviar la actividad.",
      buttonText: "Ver rubrica",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain",
      minHeight: ""
    },
    card: {
      title: "Lectura guiada",
      eyebrow: "Recurso",
      body: "Card base para lecturas, actividades, recursos o recordatorios.",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain",
      minHeight: "12rem"
    },
    callout: {
      title: "Retroalimentacion disponible",
      body: "El docente publico comentarios sobre la actividad.",
      backgroundColor: "#F6F8EF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain",
      minHeight: ""
    },
    accordion: {
      itemCount: "4",
      itemTitles: "Concepto central\nEjemplo aplicado\nErrores frecuentes\nEntrega esperada",
      itemBody: "Explica la idea principal de manera concreta.\nMuestra como se ve aplicada en Moodle.\nAclara decisiones que pueden afectar la legibilidad.\nIndica que debe entregar el estudiante.",
      internalBgColor: "#FFFFFF",
      internalTitleColor: "#1A2403",
      internalTextColor: "#606060",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    tabs: {
      itemCount: "4",
      itemTitles: "Antes\nDurante\nDespues\nRecursos",
      itemBody: "Prepara lecturas, preguntas y criterios de evaluacion.\nDesarrolla la actividad con instrucciones claras.\nCierra con evidencia, reflexion y retroalimentacion.\nIncluye enlaces, archivos y materiales de apoyo.",
      internalBgColor: "#FFFFFF",
      internalTitleColor: "#1A2403",
      internalTextColor: "#606060",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain"
    },
    carousel: {
      itemCount: "5",
      itemTitles: "Lectura guiada\nVideo de apoyo\nPodcast\nActividad aplicada\nCierre",
      itemBody: "Texto breve para orientar la lectura.\nVideo con explicacion o demostracion.\nAudio para preparar la clase o el debate.\nTarea con evidencia concreta.\nSintesis y transferencia del aprendizaje.",
      internalBgColor: "#FFFFFF",
      internalTitleColor: "#1A2403",
      internalTextColor: "#606060",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    imageCarousel: {
      title: "Carrusel del contenido",
      eyebrow: "Galeria interactiva",
      body: "Explora las siguientes imagenes usando los controles laterales o los botones de navegacion inferiores. Cada diapositiva presenta un elemento visual clave del modulo.",
      titleAccent: "Contenido",
      logoUrl: LOGO_NORMAL,
      imageUrls: "https://campusvirtual.uamerica.edu.co/draftfile.php/319199/user/draft/335724392/1.png\nhttps://campusvirtual.uamerica.edu.co/draftfile.php/319199/user/draft/335724392/2.png\nhttps://campusvirtual.uamerica.edu.co/draftfile.php/319199/user/draft/335724392/3.png\nhttps://campusvirtual.uamerica.edu.co/draftfile.php/319199/user/draft/335724392/4.png\nhttps://campusvirtual.uamerica.edu.co/draftfile.php/319199/user/draft/335724392/5.png",
      imageAlts: "Diapositiva 1 del carrusel\nDiapositiva 2 del carrusel\nDiapositiva 3 del carrusel\nDiapositiva 4 del carrusel\nDiapositiva 5 del carrusel",
      itemTitles: "Imagen 01\nImagen 02\nImagen 03\nImagen 04\nImagen 05",
      itemBody: "Elemento visual clave del modulo.",
      footerText: "Navega entre las imagenes a tu propio ritmo.",
      backgroundColor: "#0A1104",
      textColor: "#FFFFFF",
      titleColor: "#FFFFFF",
      eyebrowColor: "#C8FF01",
      bodyColor: "#DDE7D5",
      accentColor: "#C8FF01",
      borderColor: "#00A4B5",
      internalBgColor: "#121A07",
      internalTitleColor: "#C8FF01",
      internalTextColor: "#EAF2D3",
      backgroundType: "plain",
      padding: "2rem",
      radius: "18px",
      minHeight: ""
    },
    metric: {
      title: "Avance esperado",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "dot",
      minHeight: "12rem"
    },
    form: {
      title: "Comentarios de la actividad",
      body: "Escribe tu respuesta o retroalimentacion.",
      buttonText: "Enviar respuesta",
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain",
      minHeight: ""
    }
  };

  var visualFields = [
    "component",
    "fontFamily",
    "backgroundColor",
    "textColor",
    "accentColor",
    "borderColor",
    "backgroundType",
    "imageUrl",
    "padding",
    "radius",
    "borderWidth",
    "minHeight",
    "shadow",
    "animation",
    "hover",
    "reveal"
  ];

  var mainTextFields = ["title", "eyebrow", "body", "titleColor", "eyebrowColor", "bodyColor"];
  var innerFields = ["internalBgColor", "internalTitleColor", "internalTextColor"];
  var repeatFields = ["itemCount", "itemTitles", "itemBody"];
  var buttonFields = ["buttonText", "buttonUrl"];
  var detailFields = ["detailOneTitle", "detailOneBody", "detailTwoTitle", "detailTwoBody"];
  var imageListFields = ["imageUrls", "imageAlts", "footerText"];

  function fields() {
    return visualFields.concat.apply(visualFields, arguments);
  }

  var componentFields = {
    courseHero: fields(mainTextFields, ["logoUrl"], buttonFields, innerFields, detailFields),
    editorialHero: fields(mainTextFields, ["titleAccent", "logoUrl"], buttonFields, innerFields, ["detailOneTitle", "detailTwoTitle"]),
    welcome: fields(mainTextFields, ["titleAccent"], repeatFields, innerFields),
    method: fields(["title", "eyebrow", "titleColor", "eyebrowColor"], repeatFields, innerFields),
    moduleIntro: fields(mainTextFields, ["logoUrl", "itemBody"], innerFields),
    contentBlock: fields(mainTextFields, buttonFields, ["itemBody"], innerFields),
    audioLesson: fields(mainTextFields, ["audioUrl", "detailOneTitle", "itemCount", "itemTitles"]),
    podcast: fields(["title", "eyebrow", "titleColor", "eyebrowColor"], ["audioUrl"]),
    video: fields(mainTextFields, buttonFields),
    meet: fields(mainTextFields, buttonFields),
    banner: fields(mainTextFields, buttonFields),
    card: fields(mainTextFields),
    callout: fields(["title", "body", "titleColor", "bodyColor"]),
    accordion: fields(repeatFields, innerFields),
    tabs: fields(repeatFields, innerFields),
    carousel: fields(repeatFields, innerFields),
    imageCarousel: fields(mainTextFields, ["titleAccent", "logoUrl"], ["imageUrl"], imageListFields, ["itemTitles", "itemBody"], innerFields),
    metric: fields(["title", "titleColor"]),
    form: fields(["title", "body", "titleColor", "bodyColor"], buttonFields)
  };

  function toArray(list) {
    return Array.prototype.slice.call(list || []);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeUrl(value) {
    return String(value || "").replace(/["'()\\]/g, "");
  }

  function clampCount(value) {
    var count = Number(value);
    if (!Number.isFinite(count)) {
      return 3;
    }
    return Math.max(1, Math.min(12, Math.round(count)));
  }

  function lines(value) {
    return String(value || "")
      .split(/\r?\n/)
      .map(function (item) {
        return item.trim();
      })
      .filter(Boolean);
  }

  function lineAt(value, index, fallback) {
    var list = lines(value);
    return list[index] || fallback;
  }

  function itemBodyAt(state, index, fallback) {
    var list = lines(state.itemBody);
    if (list.length > 1) {
      return list[index] || fallback || list[list.length - 1];
    }
    return state.itemBody || fallback || "";
  }

  function inlineStyle(styles) {
    var output = [];
    Object.keys(styles).forEach(function (key) {
      var value = styles[key];
      if (value !== undefined && value !== null && value !== "") {
        output.push(key + ":" + value);
      }
    });
    return output.length ? ' style="' + output.join(";") + '"' : "";
  }

  function textStyle(color) {
    return inlineStyle({ color: color });
  }

  function internalStyle(state) {
    return inlineStyle({
      "background-color": state.internalBgColor,
      "border-color": state.borderColor,
      color: state.internalTextColor
    });
  }

  function classes(base, state) {
    var list = base.split(" ").filter(Boolean);
    var bgClass = {
      dot: "ua-bg-dot-grid",
      lines: "ua-bg-lines",
      neural: "ua-bg-neural",
      waves: "ua-bg-waves",
      mesh: "ua-bg-mesh"
    }[state.backgroundType];

    if (bgClass) {
      list.push(bgClass);
    }

    if (state.animation) {
      list.push(state.animation);
    }

    if (state.hover) {
      list.push(state.hover);
    }

    return list.join(" ");
  }

  function dataReveal(state) {
    return state.reveal ? " data-ua-reveal" : "";
  }

  function rootStyle(state, extra) {
    var styles = [
      "--ua-color-accent:" + state.accentColor,
      "--ua-color-text:" + state.textColor,
      "--ua-color-muted:" + state.bodyColor,
      "--ua-font-family:" + state.fontFamily,
      "--ua-font-title:" + state.fontFamily,
      "--ua-course-bg:" + state.backgroundColor,
      "--ua-course-ink:" + state.titleColor,
      "--ua-course-muted:" + state.bodyColor,
      "--ua-course-border:" + state.borderColor,
      "--ua-feature-accent:" + state.accentColor,
      "--ua-profile-accent:" + state.accentColor,
      "--ua-callout-color:" + state.borderColor,
      "color:" + state.textColor,
      "border-color:" + state.borderColor,
      "border-width:" + state.borderWidth,
      "border-radius:" + state.radius,
      "padding:" + state.padding,
      "box-shadow:" + state.shadow
    ];

    if (state.minHeight) {
      styles.push("min-height:" + state.minHeight);
    }

    if (state.backgroundType === "image" && state.imageUrl) {
      styles.push("background-image:url('" + escapeUrl(state.imageUrl) + "')");
      styles.push("background-size:cover");
      styles.push("background-position:center");
    } else if (state.backgroundType === "plain" || state.backgroundType === "dot" || state.backgroundType === "lines") {
      styles.push("background-color:" + state.backgroundColor);
    }

    if (extra) {
      styles.push(extra);
    }

    return ' style="' + styles.join(";") + '"';
  }

  function mediaStyle(state) {
    var styles = [
      "border-color:" + state.borderColor
    ];

    if (state.imageUrl) {
      styles.push("background-image:url('" + escapeUrl(state.imageUrl) + "')");
      styles.push("background-size:cover");
      styles.push("background-position:center");
    }

    return ' style="' + styles.join(";") + '"';
  }

  function button(state, variant) {
    var style = [
      "display:inline-flex",
      "align-items:center",
      "justify-content:center",
      "line-height:1.1",
      "text-decoration:none !important",
      "text-decoration-line:none !important",
      "text-decoration-color:transparent !important",
      "text-decoration-thickness:0 !important",
      "background-image:none !important"
    ].join(";");
    return '<a class="ua-button ' + variant + ' ua-button--auto" href="' + escapeHtml(state.buttonUrl || "#") + '" style="' + style + '">' + escapeHtml(state.buttonText) + '</a>';
  }

  function accordionItems(state) {
    var count = clampCount(state.itemCount);
    return Array.from({ length: count }, function (_, index) {
      var fallbackTitle = index === 0 ? state.title : "Item " + String(index + 1).padStart(2, "0");
      var fallbackBody = index === 0 ? state.body : "Agrega aqui el contenido del item " + String(index + 1) + ".";
      var title = lineAt(state.itemTitles, index, fallbackTitle);
      var body = itemBodyAt(state, index, fallbackBody);
      var titleColor = state.internalTitleColor || state.titleColor;
      var bodyColor = state.internalTextColor || state.bodyColor;

      return [
        '<div class="ua-accordion__item">',
        '  <button class="ua-accordion__trigger" style="color:' + titleColor + '">' + escapeHtml(title) + '</button>',
        '  <div class="ua-accordion__panel"><p' + textStyle(bodyColor) + '>' + escapeHtml(body) + '</p></div>',
        '</div>'
      ].join("\n");
    }).join("\n");
  }

  function tabMarkup(state) {
    var count = clampCount(state.itemCount);
    var defaults = ["Antes", "Durante", "Despues", "Recursos", "Entrega", "Cierre"];
    var tabs = [];
    var panels = [];

    Array.from({ length: count }, function (_, index) {
      var title = lineAt(state.itemTitles, index, defaults[index] || "Tab " + String(index + 1));
      var body = itemBodyAt(state, index, index === 0 ? state.body : "Contenido del tab " + String(index + 1) + ".");
      tabs.push('<button class="ua-tabs__tab">' + escapeHtml(title) + '</button>');
      panels.push('<div class="ua-tabs__panel"><p' + textStyle(index === 0 ? state.bodyColor : state.internalTextColor) + '>' + escapeHtml(body) + '</p></div>');
    });

    return [
      '<div class="ua-tabs__list">' + tabs.join("") + '</div>',
      panels.join("\n")
    ].join("\n");
  }

  function carouselSlides(state) {
    var count = clampCount(state.itemCount);
    var defaults = ["Lectura guiada", "Video de apoyo", "Actividad aplicada", "Podcast", "Foro", "Entrega"];
    return Array.from({ length: count }, function (_, index) {
      var title = lineAt(state.itemTitles, index, defaults[index] || "Slide " + String(index + 1));
      var body = itemBodyAt(state, index, "Contenido del slide " + String(index + 1) + ".");
      return slide(state, "Recurso " + String(index + 1), title, body);
    }).join("\n");
  }

  function chips(state) {
    var count = clampCount(state.itemCount);
    return Array.from({ length: count }, function (_, index) {
      var title = lineAt(state.itemTitles, index, "Punto " + String(index + 1));
      return '<span class="ua-audio-lesson__chip">' + escapeHtml(title) + '</span>';
    }).join("");
  }

  function galleryRootExtra(state) {
    return [
      "--ua-gallery-bg:" + state.backgroundColor,
      "--ua-gallery-ink:" + state.titleColor,
      "--ua-gallery-muted:" + state.bodyColor,
      "--ua-gallery-panel:" + state.internalBgColor,
      "--ua-gallery-panel-ink:" + state.internalTextColor,
      "--ua-gallery-accent:" + state.accentColor,
      "--ua-gallery-info:" + state.borderColor,
      "--ua-gallery-padding:" + state.padding,
      "padding:0"
    ].join(";");
  }

  function galleryImageUrls(state) {
    var urls = lines(state.imageUrls);
    if (!urls.length && state.imageUrl) {
      urls = [state.imageUrl];
    }
    return urls;
  }

  function gallerySlides(state) {
    var urls = galleryImageUrls(state);
    if (!urls.length) {
      urls = lines(componentPresets.imageCarousel.imageUrls);
    }

    return urls.map(function (url, index) {
      var number = String(index + 1).padStart(2, "0");
      var alt = lineAt(state.imageAlts, index, "Diapositiva " + number + " del carrusel");
      var title = lineAt(state.itemTitles, index, "Imagen " + number);
      var body = itemBodyAt(state, index, "Elemento visual clave del modulo.");

      return [
        '    <figure class="ua-carousel__slide ua-image-carousel__slide">',
        '      <img class="ua-image-carousel__image" src="' + escapeHtml(escapeUrl(url)) + '" alt="' + escapeHtml(alt) + '" loading="lazy">',
        '      <figcaption class="ua-image-carousel__caption">',
        '        <strong>' + escapeHtml(title) + '</strong>',
        '        <span>' + escapeHtml(body) + '</span>',
        '      </figcaption>',
        '    </figure>'
      ].join("\n");
    }).join("\n");
  }

  function cards(state, type) {
    var count = clampCount(state.itemCount);
    var variants = ["", " ua-feature-card--cyan", " ua-feature-card--gold"];
    var labels = ["Explorar", "Comprender", "Aplicar", "Practicar", "Compartir", "Evaluar", "Refinar", "Publicar", "Cerrar", "Investigar", "Crear", "Transferir"];

    return Array.from({ length: count }, function (_, index) {
      var number = String(index + 1).padStart(2, "0");
      var title = lineAt(state.itemTitles, index, labels[index] || "Momento " + number);
      var itemBody = itemBodyAt(state, index, "Personaliza este texto para cards, pasos, detalles o slides internos.");

      if (type === "method") {
        var methodVariant = index % 3 === 1 ? " ua-method-card--cyan" : index % 3 === 2 ? " ua-method-card--gold" : "";
        var accentClass = index % 3 === 1 ? "ua-accent-cyan" : index % 3 === 2 ? "ua-accent-gold" : "ua-accent-lime";
        return [
          '<article class="ua-method-card' + methodVariant + '"' + internalStyle(state) + '>',
          '  <span class="ua-editorial-icon ua-method-card__icon">' + escapeHtml(number) + '</span>',
          '  <h4 class="ua-method-card__title ' + accentClass + '"' + textStyle(state.internalTitleColor) + '>' + escapeHtml(title) + '</h4>',
          '  <p class="ua-method-card__text"' + textStyle(state.internalTextColor) + '>' + escapeHtml(itemBody) + '</p>',
          '</article>'
        ].join("\n");
      }

      if (type === "audience") {
        var profileVariant = index % 3 === 1 ? " ua-profile-card--intermediate" : index % 3 === 2 ? " ua-profile-card--advanced" : "";
        return [
          '<article class="ua-profile-card' + profileVariant + '"' + internalStyle(state) + '>',
          '  <div class="ua-profile-card__head">',
          '    <span class="ua-profile-card__icon">' + escapeHtml(number) + '</span>',
          '    <h4 class="ua-profile-card__title">' + escapeHtml(title) + '</h4>',
          '  </div>',
          '  <div class="ua-profile-card__body">',
          '    <p class="ua-profile-card__quote"' + textStyle(state.internalTextColor) + '>' + escapeHtml(itemBody) + '</p>',
          '    <span class="ua-profile-card__badge">Ruta sugerida</span>',
          '  </div>',
          '</article>'
        ].join("\n");
      }

      return [
        '<article class="ua-feature-card' + variants[index % variants.length] + '" style="--ua-feature-accent:' + state.accentColor + ';background-color:' + state.internalBgColor + ';border-color:' + state.borderColor + ';color:' + state.internalTextColor + '">',
        '  <span class="ua-editorial-icon ua-feature-card__icon">' + escapeHtml(number) + '</span>',
        '  <h4 class="ua-feature-card__title"' + textStyle(state.internalTitleColor) + '>' + escapeHtml(title) + '</h4>',
        '  <p class="ua-feature-card__text"' + textStyle(state.internalTextColor) + '>' + escapeHtml(itemBody) + '</p>',
        '</article>'
      ].join("\n");
    }).join("\n");
  }

  var templates = {
    courseHero: function (state) {
      return [
        '<section class="' + classes("ua-course-hero ua-course-hero--split ua-no-watermark", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-course-hero__content">',
        '    <div>',
        '      <div class="ua-course-hero__brand">',
        '        <img class="ua-logo ua-logo--md" src="' + escapeHtml(state.logoUrl || LOGO_NORMAL) + '" alt="Universidad de America">',
        '      </div>',
        '      <p class="ua-course-hero__eyebrow"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</p>',
        '      <h2 class="ua-course-hero__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h2>',
        '      <p class="ua-course-hero__description"' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        '      <ul class="ua-course-hero__meta">',
        '        <li>Modalidad: virtual</li>',
        '        <li>Duracion: personalizable</li>',
        '        <li>Producto: evidencia aplicada</li>',
        '      </ul>',
        '    </div>',
        '    <div class="ua-course-hero__actions">' + button(state, "ua-button--accent ua-button--shine") + '</div>',
        '  </div>',
        '  <div class="ua-course-hero__visual"' + mediaStyle(state) + '>',
        '    <div class="ua-course-hero__details">',
        '      <div class="ua-course-hero__detail"' + internalStyle(state) + '><strong' + textStyle(state.internalTitleColor) + '>' + escapeHtml(state.detailOneTitle) + '</strong><span' + textStyle(state.internalTextColor) + '>' + escapeHtml(state.detailOneBody) + '</span></div>',
        '      <div class="ua-course-hero__detail"' + internalStyle(state) + '><strong' + textStyle(state.internalTitleColor) + '>' + escapeHtml(state.detailTwoTitle) + '</strong><span' + textStyle(state.internalTextColor) + '>' + escapeHtml(state.detailTwoBody) + '</span></div>',
        '    </div>',
        '  </div>',
        '</section>'
      ].join("\n");
    },
    editorialHero: function (state) {
      return [
        '<section class="' + classes("ua-editorial-hero", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-editorial-hero__brand">',
        '    <div class="ua-editorial-hero__logo-card">',
        '      <img class="ua-logo ua-logo--md" src="' + escapeHtml(state.logoUrl || LOGO_NORMAL) + '" alt="Universidad de America">',
        '    </div>',
        '  </div>',
        '  <div class="ua-editorial-hero__content">',
        '    <span class="ua-editorial-pill"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</span>',
        '    <h2 class="ua-editorial-hero__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '<span class="ua-accent-lime" style="color:' + state.accentColor + '">' + escapeHtml(state.titleAccent) + '</span></h2>',
        '    <p class="ua-editorial-hero__lead"' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        '    <div class="ua-button-row">' + button(state, "ua-button--accent ua-button--shine") + '</div>',
        '  </div>',
        '  <div class="ua-editorial-hero__aside">',
        '    <div class="ua-editorial-hero__metric"' + internalStyle(state) + '><strong' + textStyle(state.internalTitleColor) + '>03</strong><span' + textStyle(state.internalTextColor) + '>' + escapeHtml(state.detailOneTitle) + '</span></div>',
        '    <div class="ua-editorial-hero__metric"' + internalStyle(state) + '><strong' + textStyle(state.internalTitleColor) + '>100%</strong><span' + textStyle(state.internalTextColor) + '>' + escapeHtml(state.detailTwoTitle) + '</span></div>',
        '  </div>',
        '</section>'
      ].join("\n");
    },
    welcome: function (state) {
      return [
        '<section class="' + classes("ua-welcome-section", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-welcome-section__intro">',
        '    <span class="ua-editorial-icon">UA</span>',
        '    <span class="ua-editorial-pill ua-editorial-pill--cyan"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</span>',
        '    <h3 class="ua-welcome-section__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '<span style="color:' + state.accentColor + '">' + escapeHtml(state.titleAccent) + '</span></h3>',
        '    <p class="ua-welcome-section__lead"' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        '  </div>',
        '  <div class="ua-welcome-section__features">',
        indent(cards(state, "feature"), 4),
        '  </div>',
        '</section>'
      ].join("\n");
    },
    method: function (state) {
      return [
        '<section class="' + classes("ua-method-section", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-method-section__head">',
        '    <span class="ua-editorial-pill"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</span>',
        '    <h3 class="ua-method-section__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3>',
        '  </div>',
        '  <div class="ua-method-steps" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,14rem),1fr))">',
        indent(cards(state, "method"), 4),
        '  </div>',
        '</section>'
      ].join("\n");
    },
    moduleIntro: function (state) {
      return [
        '<section class="' + classes("ua-module-intro", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <header class="ua-module-intro__header">',
        '    <span class="ua-editorial-icon ua-module-intro__icon">01</span>',
        '    <div>',
        '      <p class="ua-module-intro__kicker"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</p>',
        '      <h3 class="ua-module-intro__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3>',
        '    </div>',
        '    <span class="ua-module-intro__logo"><img class="ua-logo" src="' + escapeHtml(state.logoUrl || LOGO_BLACK) + '" alt="Universidad de America"></span>',
        '  </header>',
        '  <div class="ua-module-intro__body">',
        '    <p' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        '    <div class="ua-module-intro__purpose"' + internalStyle(state) + '>' + escapeHtml(state.itemBody) + '</div>',
        '  </div>',
        '</section>'
      ].join("\n");
    },
    contentBlock: function (state) {
      return [
        '<section class="' + classes("ua-content-block ua-content-block--theory", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-content-block__content">',
        '    <span class="ua-content-block__label"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</span>',
        '    <h3 class="ua-content-block__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3>',
        '    <p class="ua-content-block__text"' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        '    <aside class="ua-content-block__aside"' + internalStyle(state) + '>' + escapeHtml(state.itemBody) + '</aside>',
        '    <div class="ua-button-row" style="margin-top:1.5rem">' + button(state, "ua-button--accent") + '</div>',
        '  </div>',
        '  <div class="ua-content-block__media"' + mediaStyle(state) + '></div>',
        '</section>'
      ].join("\n");
    },
    audioLesson: function (state) {
      return [
        '<section class="' + classes("ua-audio-lesson", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-audio-lesson__hero">',
        '    <div class="ua-audio-lesson__top">',
        '      <span class="ua-editorial-icon ua-editorial-icon--dark">AUD</span>',
        '      <div><span class="ua-editorial-pill ua-editorial-pill--cyan"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</span><h3 class="ua-audio-lesson__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3></div>',
        '    </div>',
        '    <p class="ua-audio-lesson__copy"' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        podcastMarkup(state),
        '  </div>',
        '  <div class="ua-audio-lesson__listen"><p class="ua-audio-lesson__label"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.detailOneTitle) + '</p><div class="ua-audio-lesson__chips">' + chips(state) + '</div></div>',
        '</section>'
      ].join("\n");
    },
    podcast: function (state) {
      return podcastMarkup(state);
    },
    video: function (state) {
      return [
        '<article class="' + classes("ua-embed-card ua-embed-card--video", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-embed-card__frame"' + mediaStyle(state) + '>',
        '    <div class="ua-embed-card__placeholder"><span class="ua-embed-card__icon">VID</span><strong>Video o iframe</strong></div>',
        '  </div>',
        '  <div class="ua-embed-card__body">',
        '    <p class="ua-embed-card__meta"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</p>',
        '    <h3 class="ua-embed-card__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3>',
        '    <p class="ua-embed-card__text"' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        '    <div class="ua-embed-card__actions">' + button(state, "ua-button--cyan") + '</div>',
        '  </div>',
        '</article>'
      ].join("\n");
    },
    meet: function (state) {
      return [
        '<article class="' + classes("ua-meet-card", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-meet-card__top"><div><p class="ua-card__meta"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</p><h3 class="ua-card__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3></div><span class="ua-meet-card__status">En vivo</span></div>',
        '  <div class="ua-meet-card__frame"' + mediaStyle(state) + '><span class="ua-embed-card__icon">MEET</span></div>',
        '  <p' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        '  <div class="ua-button-row">' + button(state, "ua-button--cyan") + '</div>',
        '</article>'
      ].join("\n");
    },
    banner: function (state) {
      return [
        '<section class="' + classes("ua-banner ua-banner--lime", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-banner__main"><span class="ua-banner__icon">!</span><div><h3 class="ua-banner__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3><p class="ua-banner__body"' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p></div></div>',
        '  <div class="ua-banner__actions">' + button(state, "ua-button--accent") + '</div>',
        '</section>'
      ].join("\n");
    },
    card: function (state) {
      return [
        '<article class="' + classes("ua-card ua-card--accent", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <p class="ua-card__meta"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</p>',
        '  <h3 class="ua-card__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3>',
        '  <p class="ua-card__text"' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        '</article>'
      ].join("\n");
    },
    callout: function (state) {
      return [
        '<aside class="' + classes("ua-callout", state) + '" data-tone="success"' + rootStyle(state) + dataReveal(state) + '>',
        '  <h3 class="ua-callout__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3>',
        '  <p class="ua-callout__body"' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p>',
        '</aside>'
      ].join("\n");
    },
    accordion: function (state) {
      return [
        '<div class="' + classes("ua-accordion", state) + '" data-ua-accordion' + rootStyle(state) + dataReveal(state) + '>',
        indent(accordionItems(state), 2),
        '</div>'
      ].join("\n");
    },
    tabs: function (state) {
      return [
        '<div class="' + classes("ua-tabs", state) + '" data-ua-tabs' + rootStyle(state) + dataReveal(state) + '>',
        indent(tabMarkup(state), 2),
        '</div>'
      ].join("\n");
    },
    carousel: function (state) {
      return [
        '<div class="' + classes("ua-carousel", state) + '" data-ua-carousel data-ua-autoplay="4200"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-carousel__viewport"><div class="ua-carousel__track">',
        carouselSlides(state),
        '  </div></div>',
        '  <div class="ua-carousel__controls"><button class="ua-icon-button ua-carousel__prev" aria-label="Anterior">&lt;</button><div class="ua-carousel__dots"></div><button class="ua-icon-button ua-carousel__next" aria-label="Siguiente">&gt;</button></div>',
        '</div>'
      ].join("\n");
    },
    imageCarousel: function (state) {
      return [
        '<section class="' + classes("ua-image-carousel ua-carousel", state) + '" data-ua-carousel data-ua-wrap="false"' + rootStyle(state, galleryRootExtra(state)) + dataReveal(state) + '>',
        '  <div class="ua-image-carousel__bar"></div>',
        '  <div class="ua-image-carousel__inner">',
        '    <header class="ua-image-carousel__head">',
        '      <span class="ua-image-carousel__icon">IMG</span>',
        '      <div>',
        '        <span class="ua-editorial-pill ua-image-carousel__eyebrow"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</span>',
        '        <h2 class="ua-image-carousel__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + ' <span style="color:' + state.borderColor + '">' + escapeHtml(state.titleAccent) + '</span></h2>',
        '      </div>',
        '    </header>',
        '    <div class="ua-image-carousel__intro"><p' + textStyle(state.bodyColor) + '>' + escapeHtml(state.body) + '</p></div>',
        '    <div class="ua-image-carousel__frame">',
        '      <div class="ua-carousel__viewport">',
        '        <div class="ua-carousel__track">',
        gallerySlides(state),
        '        </div>',
        '      </div>',
        '    </div>',
        '    <footer class="ua-image-carousel__footer">',
        '      <p class="ua-image-carousel__help"><span>i</span>' + escapeHtml(state.footerText) + '</p>',
        '      <div class="ua-image-carousel__controls">',
        '        <button class="ua-image-carousel__nav ua-image-carousel__prev ua-carousel__prev" type="button" aria-label="Imagen anterior">Atras</button>',
        '        <div class="ua-carousel__dots"></div>',
        '        <button class="ua-image-carousel__nav ua-image-carousel__next ua-carousel__next" type="button" aria-label="Imagen siguiente">Siguiente</button>',
        '      </div>',
        '      <img class="ua-image-carousel__logo" src="' + escapeHtml(state.logoUrl || LOGO_NORMAL) + '" alt="Universidad de America">',
        '    </footer>',
        '  </div>',
        '</section>'
      ].join("\n");
    },
    metric: function (state) {
      return [
        '<article class="' + classes("ua-metric", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <span class="ua-metric__value" data-ua-counter="92" data-ua-counter-suffix="%">0%</span>',
        '  <p class="ua-metric__label"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</p>',
        '</article>'
      ].join("\n");
    },
    form: function (state) {
      return [
        '<form class="' + classes("ua-form", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-field"><label class="ua-label">Nombre</label><input class="ua-input" type="text" placeholder="Escribe tu respuesta"></div>',
        '  <div class="ua-field"><label class="ua-label" style="color:' + state.titleColor + '">' + escapeHtml(state.title) + '</label><textarea class="ua-textarea" rows="4">' + escapeHtml(state.body) + '</textarea></div>',
        '  <label class="ua-check"><input type="checkbox"> Confirmo que revise la actividad</label>',
        '  ' + button(state, "ua-button--accent"),
        '</form>'
      ].join("\n");
    }
  };

  function indent(value, spaces) {
    var pad = Array(spaces + 1).join(" ");
    return String(value).split("\n").map(function (line) {
      return pad + line;
    }).join("\n");
  }

  function podcastMarkup(state) {
    return [
      '<article class="' + classes("ua-podcast-player ua-podcast-player--full", state) + '" data-ua-podcast data-ua-audio="' + escapeHtml(state.audioUrl) + '"' + rootStyle(state, "padding:1rem") + dataReveal(state) + '>',
      '  <div class="ua-podcast-player__body">',
      '    <p class="ua-podcast-player__meta"' + textStyle(state.eyebrowColor) + '>' + escapeHtml(state.eyebrow) + '</p>',
      '    <h3 class="ua-podcast-player__title"' + textStyle(state.titleColor) + '>' + escapeHtml(state.title) + '</h3>',
      '    <div class="ua-podcast-player__controls">',
      '      <button class="ua-podcast-player__play" type="button">Play</button>',
      '      <input class="ua-podcast-player__range" type="range" value="0" aria-label="Progreso del audio">',
      '      <span class="ua-podcast-player__time"><span class="ua-podcast-player__current">0:00</span><span>/</span><span class="ua-podcast-player__duration">0:00</span></span>',
      '    </div>',
      '    <audio class="ua-podcast-player__audio" preload="metadata"></audio>',
      '  </div>',
      '</article>'
    ].join("\n");
  }

  function slide(state, meta, title, body) {
    return [
      '    <article class="ua-carousel__slide ua-section ua-section--compact" style="border-color:' + state.borderColor + ';background:' + state.internalBgColor + ';color:' + state.internalTextColor + '">',
      '      <p class="ua-kicker" style="color:' + state.eyebrowColor + '">' + escapeHtml(meta) + '</p>',
      '      <h4 class="ua-card__title" style="color:' + state.internalTitleColor + '">' + escapeHtml(title) + '</h4>',
      '      <p style="color:' + state.internalTextColor + '">' + escapeHtml(body || state.itemBody) + '</p>',
      '    </article>'
    ].join("\n");
  }

  function getState(root) {
    var state = {};
    toArray(root.querySelectorAll("[data-custom-field]")).forEach(function (field) {
      var key = field.getAttribute("data-custom-field");
      state[key] = field.type === "checkbox" ? field.checked : field.value;
    });
    return Object.assign({}, defaults, state);
  }

  function setField(root, key, value) {
    var field = root.querySelector('[data-custom-field="' + key + '"]');
    if (!field || value == null) {
      return;
    }
    if (field.type === "checkbox") {
      field.checked = Boolean(value);
    } else {
      field.value = String(value);
    }
  }

  function applyPreset(root, component) {
    var preset = componentPresets[component] || {};
    Object.keys(defaults).filter(function (key) {
      return key !== "component";
    }).forEach(function (key) {
      setField(root, key, defaults[key]);
    });
    Object.keys(preset).forEach(function (key) {
      setField(root, key, preset[key]);
    });
  }

  function updateControlVisibility(root, component) {
    var visible = componentFields[component] || visualFields;
    var visibleMap = visible.reduce(function (map, key) {
      map[key] = true;
      return map;
    }, {});

    toArray(root.querySelectorAll("[data-custom-field]")).forEach(function (field) {
      var key = field.getAttribute("data-custom-field");
      var control = field.closest(".catalog-control, .catalog-check");

      if (!control) {
        return;
      }

      control.hidden = !visibleMap[key];
    });
  }

  function render(root) {
    var state = getState(root);
    var template = templates[state.component] || templates.courseHero;
    var html = template(state);
    var fullHtml = '<div class="ua-moodle">\n' + indent(html, 2) + '\n</div>';
    var preview = root.querySelector("[data-custom-preview]");
    var code = root.querySelector("[data-custom-code]");

    if (preview) {
      preview.innerHTML = html;
      if (window.UAmericaMoodle) {
        window.UAmericaMoodle.init(preview);
      }
      toArray(preview.querySelectorAll("[data-ua-reveal], .ua-reveal")).forEach(function (element) {
        element.classList.add("ua-is-visible");
      });
    }

    if (code) {
      code.value = fullHtml;
    }
  }

  function initCustomizer(root) {
    var componentSelect = root.querySelector('[data-custom-field="component"]');
    var status = root.querySelector("[data-custom-status]");
    var copy = root.querySelector("[data-custom-copy]");
    var reset = root.querySelector("[data-custom-reset]");

    toArray(root.querySelectorAll("[data-custom-field]")).forEach(function (field) {
      field.addEventListener("input", function () {
        render(root);
      });
      field.addEventListener("change", function () {
        if (field === componentSelect) {
          applyPreset(root, field.value);
          updateControlVisibility(root, field.value);
        }
        render(root);
      });
    });

    if (copy) {
      copy.addEventListener("click", function () {
        var code = root.querySelector("[data-custom-code]");
        if (!code) {
          return;
        }
        var value = code.value;
        var done = function () {
          if (status) {
            status.textContent = "HTML copiado";
            window.setTimeout(function () {
              status.textContent = "";
            }, 1800);
          }
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(done).catch(function () {
            code.select();
            document.execCommand("copy");
            done();
          });
        } else {
          code.select();
          document.execCommand("copy");
          done();
        }
      });
    }

    if (reset) {
      reset.addEventListener("click", function () {
        Object.keys(defaults).forEach(function (key) {
          setField(root, key, defaults[key]);
        });
        applyPreset(root, defaults.component);
        updateControlVisibility(root, defaults.component);
        render(root);
      });
    }

    applyPreset(root, componentSelect ? componentSelect.value : defaults.component);
    updateControlVisibility(root, componentSelect ? componentSelect.value : defaults.component);
    render(root);
  }

  function init() {
    toArray(document.querySelectorAll("[data-catalog-customizer]")).forEach(initCustomizer);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
