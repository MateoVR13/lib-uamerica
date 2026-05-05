# UA Moodle UI Library

Libreria estatica de componentes HTML, CSS y JavaScript para crear experiencias visuales avanzadas dentro de Moodle.

## Archivos principales

- `assets/css/uamerica-moodle.css`: runtime CSS que se enlaza en el `HEAD` de Moodle.
- `assets/js/uamerica-moodle.js`: runtime JS que se enlaza antes de cerrar el `BODY`.
- `index.html`: catalogo visual de componentes, fondos, efectos, fuentes y colores.
- `assets/css/app.css`: estilos exclusivos del catalogo local; no es necesario cargarlo en Moodle.
- `examples/moodle-includes.html`: snippet completo para cargar fuentes, CSS y JS en Moodle.
- `docs/fuentes.md`: detalle de carga de Google Fonts y tokens tipograficos.
- `docs/componentes.md`: mapa de componentes, clases y atributos `data-ua-*`.
- `brand/tokens.json`: logos y colores oficiales en formato estructurado.

## Uso en Moodle

Agrega en el `HEAD`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="URL_COMPLETA_DE_GOOGLE_FONTS" rel="stylesheet">
<link rel="stylesheet" href="RUTA_PUBLICA/assets/css/uamerica-moodle.css">
```

Agrega antes de cerrar `BODY`:

```html
<script src="RUTA_PUBLICA/assets/js/uamerica-moodle.js"></script>
```

Usa `examples/moodle-includes.html` para copiar el enlace completo de fuentes.

## Convencion

Todo componente debe ir dentro de un contenedor `.ua-moodle` para aislar la libreria del tema de Moodle:

```html
<div class="ua-moodle">
  <section class="ua-section ua-bg-dot-grid">
    <p class="ua-kicker">Unidad 01</p>
    <h2 class="ua-title">Pensamiento critico</h2>
    <p class="ua-lead">Contenido reutilizable para Moodle.</p>
  </section>
</div>
```

Todas las clases publicas usan prefijo `ua-`.

## Capacidades iniciales

- Layout: contenedores, grids, splits, sidebars, scroll rows.
- Marca: logos oficiales, lockups, colores y fuentes.
- Fondos: dot grid, neural connection, waves, lines, mesh.
- Componentes: course heroes con logo, heroes, banners, callouts, cards, content blocks, resource cards, metric cards, timelines, steps, tags, badges.
- Acciones: botones, icon buttons, outline, ghost, pill, shine.
- Formularios: inputs, selects, textareas, checks, radios, switches, estados de ayuda/error.
- Media: image frames, video frames, embed cards, podcast players, meet cards, media objects, galleries.
- Interaccion JS: acordeones, tabs, carruseles, modales, dismissibles, reveals, contadores, copy helpers, video helpers y tilt hover.
- Movimiento: hover lift, outline, shake, glow, scale, shine, float, pulse, marquee, reveal, blur, pop-in y entradas direccionales.
