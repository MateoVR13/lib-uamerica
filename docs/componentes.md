# Componentes de la libreria

## Estructura base

Todo bloque para Moodle debe envolverse con `.ua-moodle`.

```html
<div class="ua-moodle">
  ...
</div>
```

## Personalizacion avanzada

El catalogo incluye un personalizador visual para generar HTML listo para Moodle. El sistema trabaja con estilos inline y variables CSS locales, por eso cada componente copiado puede modificar color, fondo, borde, padding, radio, sombra, imagen, animacion y hover sin tocar el CSS global.

El personalizador separa controles por tipo de componente. Al cambiar el selector principal se muestran solo los campos que ese bloque usa: textos principales, logo, boton, audio, detalles, imagen, colores internos o elementos repetibles.

Para componentes con items repetibles, usa `Cantidad de items`, `Titulos internos/cards` y `Textos internos/cards`. Cada linea de `Titulos internos/cards` corresponde a un item. Cada linea de `Textos internos/cards` corresponde al texto del item en la misma posicion; si escribes una sola linea, se reutiliza en todos. Esto aplica a rutas con cards, metodologia visual, acordeon, tabs, carrusel y chips de la leccion de audio.

Para el `Carrusel de imagenes`, pega en `URLs de imagenes` una URL por linea. `Alt de imagenes`, `Titulos internos/cards` y `Textos internos/cards` tambien trabajan linea por linea, de modo que la diapositiva 1 usa la linea 1 de cada campo, la diapositiva 2 usa la linea 2, y asi sucesivamente.

Reglas de uso:

| Recurso | Uso |
| --- | --- |
| `style="--ua-color-accent:#C8FF01"` | Cambia acento institucional del componente y sus hijos. |
| `style="--ua-color-text:#1A2403"` | Cambia color base de texto dentro del bloque. |
| `style="background-color:#FFFFFF"` | Cambia fondo plano. |
| `style="background-image:url('...')"` | Usa imagen externa como fondo del componente o media. |
| `style="border-color:#00A4B5;border-width:2px"` | Personaliza borde. |
| `style="padding:2rem;border-radius:8px"` | Ajusta densidad y esquinas. |
| `style="box-shadow:0 20px 46px rgba(26,36,3,.16)"` | Controla profundidad. |
| `.ua-bg-dot-grid`, `.ua-bg-lines`, `.ua-bg-neural`, `.ua-bg-waves`, `.ua-bg-mesh` | Fondos graficos reutilizables. |
| `.ua-pop-in`, `.ua-fade-in`, `.ua-slide-in-up`, `.ua-slide-in-left`, `.ua-slide-in-right` | Animaciones de entrada. |
| `.ua-hover-lift`, `.ua-hover-outline`, `.ua-hover-outline-pulse`, `.ua-hover-glow`, `.ua-hover-glow-cyan`, `.ua-hover-glow-gold`, `.ua-hover-shake`, `.ua-hover-breathe` | Interacciones hover. |

Para una personalizacion rapida, usa la seccion `Personalizador` de la app, copia el HTML generado y pegalo dentro de Moodle.

## Layout

| Clase | Uso |
| --- | --- |
| `.ua-container` | Centra contenido con ancho maximo. |
| `.ua-section` | Superficie base para bloques. |
| `.ua-section--compact` | Seccion con menor padding. |
| `.ua-section--spacious` | Seccion amplia. |
| `.ua-section--quiet` | Fondo alterno suave. |
| `.ua-section--dark` | Fondo verde institucional. |
| `.ua-section--accent` | Borde lateral de acento. |
| `.ua-grid` | Grid responsive. |
| `.ua-grid--compact` | Grid de tarjetas compactas. |
| `.ua-grid--wide` | Grid de tarjetas mas amplias. |
| `.ua-split` | Layout dos columnas. |
| `.ua-sidebar` | Sidebar + contenido. |
| `.ua-scroll-row` | Carril horizontal responsive. |

## Fondos

| Clase | Efecto |
| --- | --- |
| `.ua-bg-dot-grid` | Malla de puntos. |
| `.ua-bg-lines` | Lineas de grilla. |
| `.ua-bg-neural` | Conexiones tipo red/neural animadas sobre fondo oscuro. |
| `.ua-bg-waves` | Ondas suaves sobre fondo oscuro. |
| `.ua-bg-mesh` | Mezcla grafica institucional sobre fondo oscuro. |

Regla visual: no usar gradientes claros como fondo. En modo claro se usan superficies planas, bordes, acentos lima y patrones de puntos/lineas. Los gradientes expresivos quedan reservados para fondos oscuros.

## Componentes visuales

| Clase | Uso |
| --- | --- |
| `.ua-logo` | Imagen de logo responsive. |
| `.ua-logo--sm`, `.ua-logo--md`, `.ua-logo--lg` | Escalas de logo. |
| `.ua-logo-mark` | Logo como background usando `--ua-logo-normal-url`. |
| `.ua-logo-mark--black` | Variante negra usando `--ua-logo-black-url`. |
| `.ua-logo-lockup` | Logo + texto de contexto. |
| `.ua-course-hero` | Banner grande de introduccion de curso. Debe incluir logo visible. |
| `.ua-course-hero--lime` | Variante clara con acento lima. |
| `.ua-course-hero--dark` | Variante oscura con logo normal. |
| `.ua-course-hero--split` | Variante de portada con mayor presencia visual lateral. |
| `.ua-no-watermark` | Quita la marca de agua automatica del `.ua-course-hero`, util para fondos neural o imagen. |
| `.ua-editorial-hero` | Portada editorial premium para formaciones, cursos o rutas. Incluye zona de logo, titulo, pill y metricas. |
| `.ua-editorial-hero--light`, `.ua-editorial-hero--compact` | Variantes clara y compacta de portada editorial. |
| `.ua-editorial-pill`, `.ua-editorial-icon` | Microcomponentes para etiquetas, estados e iconos textuales. |
| `.ua-welcome-section` | Bloque de bienvenida con introduccion centrada, beneficios y cita institucional. |
| `.ua-feature-card` | Tarjeta de beneficio o atributo del curso. Variantes `--cyan` y `--gold`. Dentro de `.ua-welcome-section__features` mantiene 3 cards por fila en escritorio y crea nuevas filas segun la cantidad. |
| `.ua-audience-section`, `.ua-profile-card` | Seccion para perfiles de estudiantes/docentes o niveles de entrada. |
| `.ua-method-section`, `.ua-method-card` | Metodologia visual tipo ruta con pasos conectados. |
| `.ua-module-intro` | Bloque editorial para introduccion a saber, modulo o unidad con logo y proposito. |
| `.ua-hero` | Encabezado inmersivo. |
| `.ua-banner` | Banner con accion. |
| `.ua-banner--lime`, `.ua-banner--gold`, `.ua-banner--info`, `.ua-banner--special` | Variantes cromaticas institucionales. |
| `.ua-banner--minimal`, `.ua-banner--compact`, `.ua-banner--ribbon` | Variantes de densidad y destacado. |
| `.ua-callout` | Aviso contextual. Usa `data-tone="success|warning|danger|special"`. |
| `.ua-card` | Tarjeta base. |
| `.ua-card--accent` | Tarjeta con acento superior. |
| `.ua-card--dark` | Tarjeta oscura. |
| `.ua-resource-card` | Tarjeta recurso con icono. |
| `.ua-content-block` | Contenedor tematico para teoria, caso, laboratorio o reflexion con media. |
| `.ua-content-block--theory`, `.ua-content-block--case`, `.ua-content-block--lab`, `.ua-content-block--reflection` | Variantes semanticas de contenido. |
| `.ua-content-block--reverse`, `.ua-content-block--stack` | Variantes de layout. |
| `.ua-topic-grid`, `.ua-topic-card` | Subtarjetas para ideas clave o pasos internos. |
| `.ua-metric` | Tarjeta de indicador. |
| `.ua-steps` y `.ua-step` | Pasos numerados. |
| `.ua-timeline` | Linea de tiempo. |
| `.ua-tag` y `.ua-badge` | Etiquetas y badges. |

## Botones

| Clase | Uso |
| --- | --- |
| `.ua-button` | Boton principal. |
| `.ua-button--accent` | Boton lima/amarillo. |
| `.ua-button--lime` | Boton lima con texto verde institucional. |
| `.ua-button--cyan` | Boton azul turquesa con texto verde institucional. |
| `.ua-button--outline` | Boton de borde. |
| `.ua-button--ghost` | Boton sutil. |
| `.ua-button--pill` | Boton redondo. |
| `.ua-button--shine` | Efecto shine en hover. |
| `.ua-icon-button` | Boton cuadrado para icono/texto corto. |

## Formularios y media

| Clase | Uso |
| --- | --- |
| `.ua-form` | Contenedor de formulario. |
| `.ua-field`, `.ua-label`, `.ua-input`, `.ua-select`, `.ua-textarea` | Campos base. |
| `.ua-check`, `.ua-radio`, `.ua-switch` | Controles booleanos. |
| `.ua-image-frame` | Marco de imagen responsive. |
| `.ua-image-frame--portrait`, `.ua-image-frame--square`, `.ua-image-frame--wide` | Ratios alternos. |
| `.ua-image-carousel` | Carrusel premium de imagenes con encabezado, descripcion, captions, logo, dots y controles no circulares. En el personalizador acepta cualquier cantidad de URLs, una por linea. |
| `.ua-video` | Marco de video 16:9. |
| `.ua-video--portrait`, `.ua-video--square` | Ratios alternos de video. |
| `.ua-embed-card` | Card generica para iframe, video o recurso embebido. |
| `.ua-embed-card--video`, `.ua-embed-card--meet` | Variantes para video y encuentros. |
| `.ua-embed-card--compact` | Embed horizontal compacto. |
| `.ua-podcast-player` | Reproductor de podcast/audio. Recibe URL con `data-ua-audio`. |
| `.ua-podcast-player--full` | Reproductor sin caratula; la barra ocupa todo el ancho disponible. |
| `.ua-audio-lesson` | Leccion completa de audio con encabezado oscuro, reproductor, contexto, metadatos, chips y descarga. |
| `.ua-meet-card` | Componente para sesion sincronica o Meet embebido. |
| `.ua-media-object` | Media + texto. |
| `.ua-gallery` | Galeria responsive. |

## Interaccion JS

| Atributo/clase | Comportamiento |
| --- | --- |
| `data-ua-accordion` | Inicializa acordeones. Usa `multiple` para permitir varios abiertos. |
| `data-ua-tabs` | Inicializa tabs accesibles. |
| `data-ua-carousel` | Inicializa carrusel. |
| `data-ua-autoplay="4200"` | Autoplay de carrusel en milisegundos. |
| `data-ua-wrap="false"` | Evita que el carrusel vuelva al inicio/final y desactiva los botones cuando corresponde. |
| `data-ua-modal-target="#id"` | Abre modal. |
| `.ua-modal` | Modal controlado por JS. |
| `data-ua-modal-close` | Cierra modal. |
| `data-ua-dismissible` + `data-ua-dismiss` | Oculta avisos o paneles. |
| `data-ua-reveal` o `.ua-reveal` | Entrada al aparecer en viewport. |
| `data-ua-counter="92"` | Contador animado. |
| `data-ua-copy` | Copia texto al portapapeles. |
| `data-ua-copy-target="#id"` | Copia contenido de otro elemento. |
| `data-ua-tilt` o `.ua-hover-tilt` | Tilt con movimiento del cursor. |
| `data-ua-podcast` + `data-ua-audio="audio.mp3"` | Inicializa reproductor de audio/podcast. Acepta MP3, WAV, OGG u otra URL soportada por el navegador. |

## Movimiento

| Clase | Efecto |
| --- | --- |
| `.ua-hover-lift` | Elevacion en hover. |
| `.ua-hover-scale` | Escala ligera. |
| `.ua-hover-glow` | Halo de acento. |
| `.ua-hover-glow-cyan`, `.ua-hover-glow-gold` | Halos alternos azul y amarillo. |
| `.ua-hover-border` | Borde activo. |
| `.ua-hover-outline` | Contorno institucional al hacer hover/focus. |
| `.ua-hover-outline-pulse` | Contorno pulsante al hacer hover/focus. |
| `.ua-hover-shake` | Shake leve al hacer hover/focus. |
| `.ua-hover-breathe` | Respiracion suave al hacer hover/focus. |
| `.ua-float` | Movimiento flotante. |
| `.ua-pulse` | Pulso sutil. |
| `.ua-shake-soft` | Shake leve inmediato. |
| `.ua-pop-in`, `.ua-fade-in` | Apariciones simples. |
| `.ua-slide-in-up`, `.ua-slide-in-left`, `.ua-slide-in-right` | Entradas direccionales. |
| `.ua-reveal-left`, `.ua-reveal-right`, `.ua-reveal-scale`, `.ua-reveal-zoom`, `.ua-reveal-blur` | Variantes para `data-ua-reveal`. |
| `.ua-anim-fast`, `.ua-anim-slow` | Duracion de animacion. |
| `.ua-delay-1`, `.ua-delay-2`, `.ua-delay-3` | Retardos escalonados. |
| `.ua-marquee` | Banda en movimiento. |
