(function () {
  "use strict";

  var LOGO_BLACK = "https://i.postimg.cc/L8qm1fsg/image.png";
  var LOGO_NORMAL = "https://i.postimg.cc/c1tGwQnF/Logo-UA.png";

  var defaults = {
    component: "courseHero",
    title: "Unidad personalizada",
    eyebrow: "Ruta de aprendizaje",
    body: "Configura este componente con colores, fondos, imagenes, animaciones y espaciado para pegarlo directamente en Moodle.",
    backgroundColor: "#FFFFFF",
    textColor: "#1A2403",
    accentColor: "#C8FF01",
    borderColor: "#00A4B5",
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
      backgroundColor: "#1A2403",
      textColor: "#FFFFFF",
      borderColor: "#C8FF01",
      backgroundType: "neural",
      padding: "2rem",
      minHeight: "22rem"
    },
    editorialHero: {
      backgroundColor: "#1A2403",
      textColor: "#FFFFFF",
      borderColor: "#C8FF01",
      backgroundType: "dot",
      padding: "2rem",
      minHeight: "19rem"
    },
    welcome: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain",
      padding: "2rem",
      itemCount: "3"
    },
    method: {
      backgroundColor: "#1A2403",
      textColor: "#FFFFFF",
      borderColor: "#C8FF01",
      backgroundType: "neural",
      padding: "2rem",
      itemCount: "3"
    },
    moduleIntro: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    contentBlock: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    audioLesson: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain"
    },
    podcast: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    video: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain"
    },
    meet: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain"
    },
    banner: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain",
      minHeight: ""
    },
    card: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain",
      minHeight: "12rem"
    },
    callout: {
      backgroundColor: "#F6F8EF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain",
      minHeight: ""
    },
    accordion: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    tabs: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain"
    },
    carousel: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "plain"
    },
    metric: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#C8FF01",
      backgroundType: "dot",
      minHeight: "12rem"
    },
    form: {
      backgroundColor: "#FFFFFF",
      textColor: "#1A2403",
      borderColor: "#00A4B5",
      backgroundType: "plain",
      minHeight: ""
    }
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
      "--ua-color-muted:" + state.textColor + "cc",
      "--ua-course-bg:" + state.backgroundColor,
      "--ua-course-ink:" + state.textColor,
      "--ua-course-muted:" + state.textColor + "cc",
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
    return '<a class="ua-button ' + variant + ' ua-button--auto" href="' + escapeHtml(state.buttonUrl || "#") + '">' + escapeHtml(state.buttonText) + '</a>';
  }

  function cards(state, type) {
    var count = clampCount(state.itemCount);
    var variants = ["", " ua-feature-card--cyan", " ua-feature-card--gold"];
    var labels = ["Explorar", "Comprender", "Aplicar", "Practicar", "Compartir", "Evaluar", "Refinar", "Publicar", "Cerrar", "Investigar", "Crear", "Transferir"];

    return Array.from({ length: count }, function (_, index) {
      var number = String(index + 1).padStart(2, "0");
      var title = labels[index] || "Momento " + number;

      if (type === "method") {
        var methodVariant = index % 3 === 1 ? " ua-method-card--cyan" : index % 3 === 2 ? " ua-method-card--gold" : "";
        var accentClass = index % 3 === 1 ? "ua-accent-cyan" : index % 3 === 2 ? "ua-accent-gold" : "ua-accent-lime";
        return [
          '<article class="ua-method-card' + methodVariant + '">',
          '  <span class="ua-editorial-icon ua-method-card__icon">' + escapeHtml(number) + '</span>',
          '  <h4 class="ua-method-card__title ' + accentClass + '">' + escapeHtml(title) + '</h4>',
          '  <p class="ua-method-card__text">Ajusta este paso segun la ruta de aprendizaje del curso.</p>',
          '</article>'
        ].join("\n");
      }

      if (type === "audience") {
        var profileVariant = index % 3 === 1 ? " ua-profile-card--intermediate" : index % 3 === 2 ? " ua-profile-card--advanced" : "";
        return [
          '<article class="ua-profile-card' + profileVariant + '">',
          '  <div class="ua-profile-card__head">',
          '    <span class="ua-profile-card__icon">' + escapeHtml(number) + '</span>',
          '    <h4 class="ua-profile-card__title">Perfil ' + escapeHtml(number) + '</h4>',
          '  </div>',
          '  <div class="ua-profile-card__body">',
          '    <p class="ua-profile-card__quote">Describe aqui a quien va dirigido este contenido.</p>',
          '    <span class="ua-profile-card__badge">Ruta sugerida</span>',
          '  </div>',
          '</article>'
        ].join("\n");
      }

      return [
        '<article class="ua-feature-card' + variants[index % variants.length] + '" style="--ua-feature-accent:' + state.accentColor + '">',
        '  <span class="ua-editorial-icon ua-feature-card__icon">' + escapeHtml(number) + '</span>',
        '  <h4 class="ua-feature-card__title">' + escapeHtml(title) + '</h4>',
        '  <p class="ua-feature-card__text">Personaliza texto, color y cantidad de cards sin romper la grilla.</p>',
        '</article>'
      ].join("\n");
    }).join("\n");
  }

  var templates = {
    courseHero: function (state) {
      return [
        '<section class="' + classes("ua-course-hero ua-course-hero--split", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-course-hero__content">',
        '    <div>',
        '      <div class="ua-course-hero__brand">',
        '        <img class="ua-logo ua-logo--md" src="' + LOGO_NORMAL + '" alt="Universidad de America">',
        '      </div>',
        '      <p class="ua-course-hero__eyebrow">' + escapeHtml(state.eyebrow) + '</p>',
        '      <h2 class="ua-course-hero__title">' + escapeHtml(state.title) + '</h2>',
        '      <p class="ua-course-hero__description">' + escapeHtml(state.body) + '</p>',
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
        '      <div class="ua-course-hero__detail"><strong>Competencia</strong><span>Define el logro central de la unidad.</span></div>',
        '      <div class="ua-course-hero__detail"><strong>Recursos</strong><span>Videos, lecturas, audio y actividades.</span></div>',
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
        '      <img class="ua-logo ua-logo--md" src="' + LOGO_NORMAL + '" alt="Universidad de America">',
        '    </div>',
        '  </div>',
        '  <div class="ua-editorial-hero__content">',
        '    <span class="ua-editorial-pill">' + escapeHtml(state.eyebrow) + '</span>',
        '    <h2 class="ua-editorial-hero__title">' + escapeHtml(state.title) + '<span class="ua-accent-lime">personalizable</span></h2>',
        '    <p class="ua-editorial-hero__lead">' + escapeHtml(state.body) + '</p>',
        '    <div class="ua-button-row">' + button(state, "ua-button--accent ua-button--shine") + '</div>',
        '  </div>',
        '  <div class="ua-editorial-hero__aside">',
        '    <div class="ua-editorial-hero__metric"><strong>03</strong><span>bloques</span></div>',
        '    <div class="ua-editorial-hero__metric"><strong>100%</strong><span>editable</span></div>',
        '  </div>',
        '</section>'
      ].join("\n");
    },
    welcome: function (state) {
      return [
        '<section class="' + classes("ua-welcome-section", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-welcome-section__intro">',
        '    <span class="ua-editorial-icon">UA</span>',
        '    <span class="ua-editorial-pill ua-editorial-pill--cyan">' + escapeHtml(state.eyebrow) + '</span>',
        '    <h3 class="ua-welcome-section__title">' + escapeHtml(state.title) + '<span class="ua-accent-cyan">con cards ilimitadas</span></h3>',
        '    <p class="ua-welcome-section__lead">' + escapeHtml(state.body) + '</p>',
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
        '    <span class="ua-editorial-pill">' + escapeHtml(state.eyebrow) + '</span>',
        '    <h3 class="ua-method-section__title">' + escapeHtml(state.title) + '</h3>',
        '  </div>',
        '  <div class="ua-method-steps" style="grid-template-columns:repeat(' + clampCount(state.itemCount) + ', minmax(0, 1fr))">',
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
        '      <p class="ua-module-intro__kicker">' + escapeHtml(state.eyebrow) + '</p>',
        '      <h3 class="ua-module-intro__title">' + escapeHtml(state.title) + '</h3>',
        '    </div>',
        '    <span class="ua-module-intro__logo"><img class="ua-logo" src="' + LOGO_BLACK + '" alt="Universidad de America"></span>',
        '  </header>',
        '  <div class="ua-module-intro__body">',
        '    <p>' + escapeHtml(state.body) + '</p>',
        '    <div class="ua-module-intro__purpose">Proposito: ajusta este texto segun el resultado de aprendizaje.</div>',
        '  </div>',
        '</section>'
      ].join("\n");
    },
    contentBlock: function (state) {
      return [
        '<section class="' + classes("ua-content-block ua-content-block--theory", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-content-block__content">',
        '    <span class="ua-content-block__label">' + escapeHtml(state.eyebrow) + '</span>',
        '    <h3 class="ua-content-block__title">' + escapeHtml(state.title) + '</h3>',
        '    <p class="ua-content-block__text">' + escapeHtml(state.body) + '</p>',
        '    <aside class="ua-content-block__aside">Nota destacada o instruccion puntual para el estudiante.</aside>',
        '    <div class="ua-button-row">' + button(state, "ua-button--accent") + '</div>',
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
        '      <div><span class="ua-editorial-pill ua-editorial-pill--cyan">' + escapeHtml(state.eyebrow) + '</span><h3 class="ua-audio-lesson__title">' + escapeHtml(state.title) + '</h3></div>',
        '    </div>',
        '    <p class="ua-audio-lesson__copy">' + escapeHtml(state.body) + '</p>',
        podcastMarkup(state),
        '  </div>',
        '  <div class="ua-audio-lesson__listen"><p class="ua-audio-lesson__label">Mientras escuchas:</p><div class="ua-audio-lesson__chips"><span class="ua-audio-lesson__chip">Conceptos clave</span><span class="ua-audio-lesson__chip">Aplicacion</span><span class="ua-audio-lesson__chip">Cierre</span></div></div>',
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
        '    <p class="ua-embed-card__meta">' + escapeHtml(state.eyebrow) + '</p>',
        '    <h3 class="ua-embed-card__title">' + escapeHtml(state.title) + '</h3>',
        '    <p class="ua-embed-card__text">' + escapeHtml(state.body) + '</p>',
        '    <div class="ua-embed-card__actions">' + button(state, "ua-button--cyan") + '</div>',
        '  </div>',
        '</article>'
      ].join("\n");
    },
    meet: function (state) {
      return [
        '<article class="' + classes("ua-meet-card", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-meet-card__top"><div><p class="ua-card__meta">' + escapeHtml(state.eyebrow) + '</p><h3 class="ua-card__title">' + escapeHtml(state.title) + '</h3></div><span class="ua-meet-card__status">En vivo</span></div>',
        '  <div class="ua-meet-card__frame"' + mediaStyle(state) + '><span class="ua-embed-card__icon">MEET</span></div>',
        '  <p>' + escapeHtml(state.body) + '</p>',
        '  <div class="ua-button-row">' + button(state, "ua-button--cyan") + '</div>',
        '</article>'
      ].join("\n");
    },
    banner: function (state) {
      return [
        '<section class="' + classes("ua-banner ua-banner--lime", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-banner__main"><span class="ua-banner__icon">!</span><div><h3 class="ua-banner__title">' + escapeHtml(state.title) + '</h3><p class="ua-banner__body">' + escapeHtml(state.body) + '</p></div></div>',
        '  <div class="ua-banner__actions">' + button(state, "ua-button--accent") + '</div>',
        '</section>'
      ].join("\n");
    },
    card: function (state) {
      return [
        '<article class="' + classes("ua-card ua-card--accent", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <p class="ua-card__meta">' + escapeHtml(state.eyebrow) + '</p>',
        '  <h3 class="ua-card__title">' + escapeHtml(state.title) + '</h3>',
        '  <p class="ua-card__text">' + escapeHtml(state.body) + '</p>',
        '</article>'
      ].join("\n");
    },
    callout: function (state) {
      return [
        '<aside class="' + classes("ua-callout", state) + '" data-tone="success"' + rootStyle(state) + dataReveal(state) + '>',
        '  <h3 class="ua-callout__title">' + escapeHtml(state.title) + '</h3>',
        '  <p class="ua-callout__body">' + escapeHtml(state.body) + '</p>',
        '</aside>'
      ].join("\n");
    },
    accordion: function (state) {
      return [
        '<div class="' + classes("ua-accordion", state) + '" data-ua-accordion' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-accordion__item"><button class="ua-accordion__trigger">' + escapeHtml(state.title) + '</button><div class="ua-accordion__panel"><p>' + escapeHtml(state.body) + '</p></div></div>',
        '  <div class="ua-accordion__item"><button class="ua-accordion__trigger">Recursos</button><div class="ua-accordion__panel"><p>Agrega enlaces, instrucciones y material complementario.</p></div></div>',
        '</div>'
      ].join("\n");
    },
    tabs: function (state) {
      return [
        '<div class="' + classes("ua-tabs", state) + '" data-ua-tabs' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-tabs__list"><button class="ua-tabs__tab">Antes</button><button class="ua-tabs__tab">Durante</button><button class="ua-tabs__tab">Despues</button></div>',
        '  <div class="ua-tabs__panel"><p>' + escapeHtml(state.body) + '</p></div>',
        '  <div class="ua-tabs__panel"><p>Desarrolla la actividad y registra avances.</p></div>',
        '  <div class="ua-tabs__panel"><p>Entrega evidencia y revisa retroalimentacion.</p></div>',
        '</div>'
      ].join("\n");
    },
    carousel: function (state) {
      return [
        '<div class="' + classes("ua-carousel", state) + '" data-ua-carousel data-ua-autoplay="4200"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-carousel__viewport"><div class="ua-carousel__track">',
        slide(state, "Recurso 1", "Lectura guiada"),
        slide(state, "Recurso 2", "Video de apoyo"),
        slide(state, "Recurso 3", "Actividad aplicada"),
        '  </div></div>',
        '  <div class="ua-carousel__controls"><button class="ua-icon-button ua-carousel__prev" aria-label="Anterior">&lt;</button><div class="ua-carousel__dots"></div><button class="ua-icon-button ua-carousel__next" aria-label="Siguiente">&gt;</button></div>',
        '</div>'
      ].join("\n");
    },
    metric: function (state) {
      return [
        '<article class="' + classes("ua-metric", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <span class="ua-metric__value" data-ua-counter="92" data-ua-counter-suffix="%">0%</span>',
        '  <p class="ua-metric__label">' + escapeHtml(state.title) + '</p>',
        '</article>'
      ].join("\n");
    },
    form: function (state) {
      return [
        '<form class="' + classes("ua-form", state) + '"' + rootStyle(state) + dataReveal(state) + '>',
        '  <div class="ua-field"><label class="ua-label">Nombre</label><input class="ua-input" type="text" placeholder="Escribe tu respuesta"></div>',
        '  <div class="ua-field"><label class="ua-label">' + escapeHtml(state.title) + '</label><textarea class="ua-textarea" rows="4">' + escapeHtml(state.body) + '</textarea></div>',
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
      '    <p class="ua-podcast-player__meta">' + escapeHtml(state.eyebrow) + '</p>',
      '    <h3 class="ua-podcast-player__title">' + escapeHtml(state.title) + '</h3>',
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

  function slide(state, meta, title) {
    return [
      '    <article class="ua-carousel__slide ua-section ua-section--compact" style="border-color:' + state.borderColor + ';background:' + state.backgroundColor + ';color:' + state.textColor + '">',
      '      <p class="ua-kicker">' + escapeHtml(meta) + '</p>',
      '      <h4 class="ua-card__title">' + escapeHtml(title) + '</h4>',
      '      <p>' + escapeHtml(state.body) + '</p>',
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
    Object.keys(preset).forEach(function (key) {
      setField(root, key, preset[key]);
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
        render(root);
      });
    }

    applyPreset(root, componentSelect ? componentSelect.value : defaults.component);
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
