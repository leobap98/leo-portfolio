# Publicar gratis con GitHub Pages

Este proyecto es estático: HTML, CSS y JavaScript. No necesita npm, compilación ni claves de API.

## 1. Crear el repositorio

En GitHub crea un repositorio **público** llamado `portfolio` en tu cuenta. Para seguir los comandos de abajo, créalo vacío (sin README, licencia ni .gitignore generados por GitHub). El proyecto ya incluye esos archivos de configuración, salvo una licencia general: tus fotos y las marcas no se ofrecen como recursos libres.

## 2. Subir desde la terminal

Abre una terminal en esta carpeta. El repositorio local ya está inicializado con la rama `main`.

```bash
cd /home/leonardo/Desktop/portfolio
git add .
git commit -m "Preparar portfolio para GitHub Pages"
git remote add origin https://github.com/TU_USUARIO/portfolio.git
git push -u origin main
```

Sustituye `TU_USUARIO` por tu usuario real. Git puede pedirte configurar `user.name` y `user.email` antes del commit; utiliza tu nombre y el email que quieras asociar a tus commits. Para autenticarte usa el método que ofrezca GitHub (gestor de credenciales, token o SSH); no pongas credenciales en los archivos de la web. Si ya existe `origin`, comprueba `git remote -v` antes de añadirlo de nuevo.

También puedes añadir esta carpeta como repositorio local en GitHub Desktop y publicarlo como repositorio público. Asegúrate de incluir `.nojekyll`.

## 3. Activar Pages

En el repositorio de GitHub:

1. Abre **Settings → Pages**.
2. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
3. Elige **main** y **/ (root)**, y pulsa **Save**.
4. Espera a que termine la publicación. La propia pantalla Pages mostrará la URL.

La dirección prevista será `https://TU_USUARIO.github.io/portfolio/`. No se ha creado ni publicado ningún repositorio remoto desde este proyecto. `.nojekyll` permite servir los archivos estáticos sin procesarlos como Jekyll. Las rutas de recursos son relativas y funcionan dentro de `/portfolio/`.

## 4. Publicar cambios posteriores

```bash
git add .
git commit -m "Actualizar portfolio"
git push
```

Pages volverá a publicar la rama. Si no ves los cambios, revisa el despliegue en Actions y recarga sin caché.

## Antes del lanzamiento comercial

- El formulario **solo prepara texto para copiar**: no envía datos ni reserva plazas. Conectar el servicio de contacto es una fase pendiente; GitHub Pages no ejecuta un backend.
- Revisar las condiciones de la garantía y la promoción de noviembre de 2026 (7 plazas, 50% de descuento). Las cifras son manuales y no caducan automáticamente.
- Los proyectos siguen siendo ejemplos. Los logos de Aula Campus y Mundo de Fantasía son los colaboradores aportados por el propietario.
- Cuando conozcas la URL definitiva, añadir canonical, og:url y sitemap con esa dirección real; no se han inventado URLs.
- Completar la información legal y de privacidad según el servicio de contacto que se conecte.

Documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
