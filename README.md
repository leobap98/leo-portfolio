# Portfolio · Leonardo

**Publicación:** consulta [PUBLICAR.md](PUBLICAR.md) para subir este proyecto a GitHub y activar GitHub Pages.

Landing estática inspirada en la referencia: azul noche, acentos azules, tipografía condensada, retratos, franja de logos, proyectos y servicios. Contacto añadido siguiendo el mismo lenguaje visual. HTML semántico, CSS moderno mobile first y JavaScript sin dependencias ni proceso de compilación.

## Vista local

Desde esta carpeta: `python3 -m http.server 8000`. Abre http://localhost:8000. También puedes abrir index.html directamente (el portapapeles depende del contexto seguro del navegador).

## Archivos

- `index.html`: contenido, navegación, metadatos y datos estructurados Service.
- `styles.css`: diseño, estados accesibles y adaptación a móvil, tablet y escritorio.
- `script.js`: menú móvil, sección activa, validación de negocio/sector/teléfono y preparación/copia de solicitudes.
- `assets/images/`: placeholders SVG locales, sustituibles por las imágenes definitivas.
- `assets/fonts/`: Barlow Condensed Bold y licencia OFL. Tipografía aproximada a la referencia; no es posible identificar con certeza la original desde el recorte.

## Siguiente fase

1. Confirmar nombre/marca (Leonardo es provisional), textos, retratos, logos y proyectos reales. Los proyectos y logos actuales son ejemplos, no clientes ni trabajos atribuidos.
2. Conectar el contacto a un email/teléfono o un servicio de formulario. Actualmente NO se envía nada: solo se prepara una consulta que el visitante puede copiar. No hay almacenamiento ni analítica.
3. Añadir textos legales y privacidad según el tratamiento de datos final.
4. Al disponer de dominio: añadir URL canónica, og:url, imagen social definitiva, sitemap.xml y robots.txt con URL real. No se han inventado URLs, direcciones ni reseñas.
5. Desplegar mediante HTTPS y configurar caché y compresión en el alojamiento. Validar rendimiento con imágenes reales y contenido final; registrar el dominio en Search Console y trabajar la presencia local real del negocio.

## SEO y rendimiento

Título/descripción orientados a desarrollo web y captación local en Valencia, un H1, encabezados jerárquicos, idioma español, enlaces rastreables y datos estructurados sin resultados ni opiniones inventados. Recursos propios, sin frameworks, fuentes externas en ejecución ni scripts de terceros; imágenes con dimensiones y carga diferida salvo el hero. Se respeta prefers-reduced-motion.

El código no garantiza una posición en Google. El posicionamiento depende también de competencia, contenido, autoridad, indexación y presencia local. No se afirma una puntuación de Lighthouse sin medirla.

## Guía de edición

El contenido permanece en HTML: no necesitas instalar herramientas, compilar ni tocar JavaScript para cambiar textos o añadir proyectos. Los archivos están indentados y divididos mediante comentarios.

| Quiero cambiar… | Dónde editar |
| --- | --- |
| Título de Google y descripción | `index.html`, comentario SEO dentro de `<head>` |
| Marca y navegación | `index.html`, comentario HEADER |
| Titular, descripción y botón inicial | `index.html`, comentario HERO |
| Retratos y logos | `src` y `alt` de las imágenes; bloques HERO, SOBRE MÍ y LOGOS |
| Proyectos | `index.html`, bloques INICIO PROYECTO / FIN PROYECTO |
| Servicios | `index.html`, comentario SERVICIOS |
| Textos de contacto y pie | `index.html`, comentarios CONTACTO y FOOTER |
| Colores generales | `styles.css`, bloque 02 · VARIABLES DE DISEÑO |
| Degradado de header, hero, sobre mí y servicios | `--gradient-left` (izquierda clara) y `--gradient-right` (derecha oscura) |
| Espaciado, tamaños o tarjetas | Bloque de la sección correspondiente en `styles.css` |
| Ajustes de tablet o escritorio | Bloques 12 y 13 al final de `styles.css` |
| Comportamiento del menú o formulario | Bloques numerados de `script.js` |

### Añadir un proyecto

1. Busca `INICIO PROYECTO 1` en `index.html`.
2. Copia el bloque completo, desde ese comentario hasta `FIN PROYECTO 1`, incluido el `<article>…</article>`.
3. Pégalo dentro de `<div class="project-grid">`, después de otra tarjeta y antes del cierre de la cuadrícula. Cambia el número de los comentarios para identificarlo.
4. Edita el título (`h3`), categoría (`p`), destino (`href`) y descripción del enlace (`aria-label`). Un destino real puede sustituir a `#contacto`.
5. Guarda la imagen en `assets/images/` y cambia `src` y `alt`. Actualiza `width` y `height` con las dimensiones de la imagen y conserva `loading="lazy"`.
6. Elimina la etiqueta `sample-label` cuando deje de ser un ejemplo. Para fotografías o capturas definitivas, usa solo `class="project-image"`: `mint` y `yellow` aplican efectos de color/rotación al placeholder. `lavender` identifica la primera variante y usa el estilo base.

No hay un límite fijo de tres proyectos: se crean filas adicionales automáticamente, con una columna en móvil y tres desde 600px. Puedes reordenar o eliminar tarjetas moviendo o quitando su bloque completo. No hay listas duplicadas en JavaScript que mantener.

### Precauciones al editar

- Conserva los `id` de las secciones, o actualiza los enlaces `href="#…"` y las referencias `aria-labelledby` correspondientes.
- Conserva los identificadores del formulario y del menú: están conectados a `script.js`.
- El formulario sigue siendo una vista previa local. No cambies el texto a «Enviado» sin conectar y verificar un servicio de envío.
- La hoja CSS parte de móvil; modifica primero el bloque base y luego, si hace falta, tablet (600px) y escritorio (900px). Si cambias el breakpoint del menú, actualiza también el `matchMedia` señalado en JavaScript.
- Para comprobar una edición, recarga la página y revisa móvil, tablet y escritorio, menú, enlaces y contacto. Con textos largos comprueba que las tarjetas no desborden.


## Copy y oferta · noviembre de 2026

Contenido actualizado a partir del copy facilitado. El H1 comienza con «Desarrollador web en Valencia» y resume el beneficio; los párrafos mantienen el enfoque en diseño web, SEO local y captación, sin repetir todas las variantes en cada bloque. Se usa primera persona singular y la tercera fase se refiere a los servicios del cliente. Se actualizaron título SEO, descripción y Open Graph. Los proyectos siguen siendo placeholders.

### Garantía y promoción

El propietario confirmó el 17/11/2026 la garantía de devolución en 90 días, el descuento del 50% y la disponibilidad de 7 plazas sobre 20 (13 ocupadas). Se presentan como datos manuales de noviembre de 2026, sin temporizadores, renovación automática ni decrementos al pulsar el formulario.

- La garantía está en `.guarantee-box`. Se formula como devolución si no se alcanzan los objetivos acordados por contrato. Antes de publicar, concretar búsquedas/posiciones objetivo, medición de clientes, inicio del plazo y condiciones de devolución.
- La oferta está en `.offer-box`. Actualizar juntos el mes (`#offer-period` y su atributo `datetime`), la fecha de revisión, las tres cifras y el CTA. La solicitud preparada toma el mes del HTML: no hay que editar JavaScript para cambiarlo.
- Definir precio base, alcance y vigencia de la promoción antes de contratar. Al finalizar noviembre, retirar o revisar la oferta con datos vigentes; no cambiar el mes sin verificar disponibilidad.
- Las tres fases incluyen plazos de trabajo; los siete días de desarrollo parten de tener la información y accesos acordados.

### Formulario actual

Tres campos obligatorios: `business` (negocio), `sector-zone` (sector y zona) y `phone` (teléfono). Los atributos `name` están conectados a `script.js`; si se renombran, actualizar ambas partes. Se rechazan campos con solo espacios y teléfonos con caracteres incompatibles o menos de 7/más de 15 dígitos. Esta validación de formato no confirma que el número exista.

El botón conserva el CTA comercial de reserva, pero el aviso visible y el resultado aclaran que **solo se prepara una solicitud local: no se envía ni se reserva ninguna plaza**. Al editar datos se oculta el borrador anterior. Antes de hacer público el formulario real, conectar el canal de envío, definir el tratamiento de datos y sustituir los mensajes de vista previa por respuestas verificadas del servidor.

Con los textos nuevos, las tarjetas de servicios permanecen en una columna en móvil y tablet para facilitar la lectura, y pasan a tres desde 900px. Los proyectos mantienen su distribución anterior. Los degradados y placeholders no cambian.


## Retratos · 19/11/2026

Edición con la herramienta integrada ImageGen, conservando los originales del usuario. Archivos: `assets/images/leonardo-hero-v1.png` (recorte transparente) y `assets/images/leonardo-about-v1.png` (fondo de estudio azul). La foto del hero procede del primer retrato; la de Sobre mí del selfie de espejo. No se cambiaron los placeholders de proyectos y logos.

Prompts utilizados (resumen): preservar identidad, estructura facial, tono y textura de piel, pelo, expresión y proporciones; luz suave de estudio; camiseta gris del mismo corte sin estampado. Hero: eliminar el fondo a alfa, encuadre de pecho con cabeza y hombros completos. Sobre mí: sustituir baño por fondo azul #183449, retirar teléfono y reconstruir brazo en postura relajada, retrato vertical. La reconstrucción generativa debe revisarse por parecido; no equivale a conservar los píxeles originales del rostro/cuerpo.


## Colaboraciones

La franja entre hero y Sobre mí muestra únicamente Aula Campus y Mundo de Fantasía. Los PNG originales están en `assets/images/logo-aula-campus.png` y `assets/images/logo-mundo-fantasia.png`. Se presentan sobre fondo claro sin modificar ni deformar las marcas. Su disposición se controla en `.brand-list` y `.collaboration-logo` de `styles.css`.
