# Manual de marca digital

## Logos oficiales

| Variante | URL | Uso recomendado |
| --- | --- | --- |
| Logo normal | `https://data.yedatech.com.co/api/public/1777858705294-Logo-UA.png` | Fondos oscuros o institucionales. |
| Logo negro | `https://data.yedatech.com.co/api/public/1777858705780-Logo-UA-Negro.png` | Fondos claros. |

En componentes Moodle se pueden usar directamente como imagen:

```html
<img class="ua-logo ua-logo--md" src="https://data.yedatech.com.co/api/public/1777858705294-Logo-UA.png" alt="Universidad de America">
```

Tambien estan disponibles como variables CSS:

```css
--ua-logo-normal-url
--ua-logo-black-url
```

## Colores principales

| Token | Color | HEX | RGB | Uso recomendado |
| --- | --- | --- | --- | --- |
| `--ua-primary-forest` | Verde institucional profundo | `#1A2403` | `26, 36, 3` | Texto principal, fondos de alto contraste, encabezados y piezas institucionales. |
| `--ua-primary-lime` | Lima institucional | `#C8FF01` | `200, 255, 1` | Acentos, subrayados, estados activos y llamadas a la accion. |
| `--ua-primary-gold` | Amarillo institucional | `#FFCE00` | `255, 206, 0` | Acentos secundarios, avisos informativos y jerarquia visual. |
| `--ua-white` | Blanco | `#FFFFFF` | `255, 255, 255` | Fondos, areas de lectura y contraste. |

## Colores complementarios

| Token | Color | HEX | RGB | Uso recomendado |
| --- | --- | --- | --- | --- |
| `--ua-complement-cyan` | Azul turquesa | `#00A4B5` | `0, 164, 181` | Informacion, datos, enlaces destacados y apoyos visuales. |
| `--ua-complement-orange` | Naranja | `#FF7900` | `255, 121, 0` | Alertas, fechas importantes y llamados secundarios. |
| `--ua-complement-purple` | Violeta | `#7223B7` | `114, 35, 183` | Categorias especiales, recursos y modulos diferenciales. |
| `--ua-complement-light-green` | Verde claro | `#BBD55B` | `187, 213, 91` | Fondos suaves, etiquetas y estados positivos. |
| `--ua-complement-olive` | Oliva | `#63783A` | `99, 120, 58` | Soportes graficos y secciones institucionales. |
| `--ua-complement-green` | Verde medio | `#547634` | `84, 118, 52` | Variantes de exito, fondos oscuros y elementos de apoyo. |
| `--ua-neutral-300` | Gris claro | `#A7A9AA` | `167, 169, 170` | Bordes, divisores, metadatos y superficies suaves. |
| `--ua-neutral-600` | Gris medio | `#606060` | `96, 96, 96` | Texto secundario, iconografia y estados inactivos. |
| `--ua-neutral-800` | Gris oscuro | `#3D3D3F` | `61, 61, 63` | Texto alterno, fondos neutros y contrastes secundarios. |

## Criterios de uso

Los colores principales son la base visual de la experiencia. El verde profundo debe mantener la identidad institucional y servir como color dominante para texto, encabezados o fondos sobrios. El lima y el amarillo deben funcionar como acentos controlados; no conviene saturar una pantalla con ambos al mismo tiempo.

Los colores complementarios ayudan a diferenciar recursos, estados y secciones. Se recomienda usarlos como apoyo, no como reemplazo de la identidad principal.

## Tokens funcionales

El archivo `assets/css/uamerica-moodle.css` define una capa semantica sobre los colores oficiales:

| Token | Valor inicial | Proposito |
| --- | --- | --- |
| `--ua-color-text` | `var(--ua-primary-forest)` | Texto principal. |
| `--ua-color-muted` | `var(--ua-neutral-600)` | Texto secundario. |
| `--ua-color-surface` | `var(--ua-white)` | Fondo de bloques. |
| `--ua-color-surface-alt` | `#F7F8F2` | Fondo alterno suave. |
| `--ua-color-accent` | `var(--ua-primary-lime)` | Acento por defecto. |
| `--ua-color-focus` | `var(--ua-complement-cyan)` | Enfoque accesible. |

Estos tokens permiten personalizar componentes sin modificar el CSS base:

```html
<section class="ua-moodle ua-section" style="--ua-color-accent: #FF7900;">
  ...
</section>
```

## Accesibilidad

Usa texto verde profundo o gris oscuro sobre fondos claros. Evita texto lima o amarillo sobre blanco para contenido largo; esos colores funcionan mejor como acentos, lineas, fondos de botones con texto oscuro o indicadores.

Todo componente interactivo debe conservar estados de `focus`, `hover` y `aria-expanded` cuando aplique.
