# Fuentes para Moodle

## Carga recomendada

Las fuentes deben cargarse en el `HEAD` de Moodle, antes de `assets/css/uamerica-moodle.css`.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fjalla+One&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Lobster&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&family=Pacifico&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+BR:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="RUTA_PUBLICA/assets/css/uamerica-moodle.css">
```

No se deben cargar desde JavaScript. Tambien es mejor evitar `@import` dentro del CSS porque retrasa la descarga y hace mas dificil controlar el orden en Moodle.

## Requisitos

Moodle y el navegador del usuario deben poder acceder a `fonts.googleapis.com` y `fonts.gstatic.com`. Si la universidad tiene restricciones de red, privacidad o CSP, conviene descargar las fuentes en formato `woff2`, alojarlas en `assets/fonts/` y declararlas con `@font-face`.

## Tokens CSS

| Token | Familias |
| --- | --- |
| `--ua-font-sans` | DM Sans, Inter, Roboto |
| `--ua-font-ui` | Inter, DM Sans, Roboto |
| `--ua-font-heading` | Montserrat, Poppins, DM Sans |
| `--ua-font-display` | Bebas Neue, Oswald, Montserrat |
| `--ua-font-condensed` | Fjalla One, Oswald, Montserrat |
| `--ua-font-rounded` | Nunito, DM Sans |
| `--ua-font-geometric` | Space Grotesk, Poppins, Inter |
| `--ua-font-serif` | Playfair Display |
| `--ua-font-slab` | Roboto Slab |
| `--ua-font-code` | JetBrains Mono |
| `--ua-font-script` | Pacifico, Lobster |
| `--ua-font-hand` | Playwrite BR, Pacifico |

Los componentes usan `--ua-font-family` para texto general y `--ua-font-title` para titulos. Ambos se pueden sobrescribir por bloque:

```html
<div class="ua-moodle" style="--ua-font-title: var(--ua-font-display);">
  ...
</div>
```
