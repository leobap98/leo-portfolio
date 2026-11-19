'use strict';

/* INTERACCIONES DE LA LANDING
 * Textos y proyectos se editan en index.html; colores y medidas, en styles.css.
 * Este archivo no carga contenido ni utiliza servicios externos.
 */

// 01 · Menú móvil. Conserva .menu-toggle, #navigation y aria-controls en el HTML.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
  nav.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
// Mantener este breakpoint sincronizado con el bloque ESCRITORIO de styles.css.
matchMedia('(min-width: 900px)').addEventListener('change', closeMenu);
// 02 · Marca el enlace de la sección visible. Los href deben coincidir con sus ids.
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...nav.querySelectorAll('a:not(.button)')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}
// 03 · Año del pie de página.
document.querySelector('#year').textContent = new Date().getFullYear();
// 04 · Solicitud local. No transmite datos, reserva plazas ni cambia el contador de la oferta.
// Al conectar el envío real, actualizar también el aviso y la confirmación en index.html.
// Estos nombres deben coincidir con los atributos name del formulario.
const form = document.querySelector('#contact-form');
const prepared = document.querySelector('#prepared-message');
const business = form.elements.namedItem('business');
const sectorZone = form.elements.namedItem('sector-zone');
const phone = form.elements.namedItem('phone');
const result = document.querySelector('#form-result');

// Borra errores personalizados al corregir un campo y oculta borradores desactualizados.
form.addEventListener('input', (event) => {
  if (!(event.target instanceof HTMLInputElement)) return;
  event.target.setCustomValidity('');
  result.hidden = true;
  prepared.value = '';
  document.querySelector('#request-status').textContent = '';
  document.querySelector('#copy-status').textContent = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  business.setCustomValidity(business.value.trim() ? '' : 'Indica el nombre de tu negocio.');
  sectorZone.setCustomValidity(sectorZone.value.trim() ? '' : 'Indica tu sector y la zona donde trabajas.');

  // Admite prefijo internacional, espacios, guiones y paréntesis; no verifica la titularidad.
  const phoneText = phone.value.trim();
  const digits = phoneText.replace(/\D/g, '');
  const validPhone = /^\+?[\d\s().-]+$/.test(phoneText) && digits.length >= 7 && digits.length <= 15;
  phone.setCustomValidity(validPhone ? '' : 'Introduce un teléfono válido, con entre 7 y 15 dígitos.');
  if (!form.reportValidity()) return;

  // La fecha de la campaña se edita solo en #offer-period, dentro del HTML.
  const offerPeriod = document.querySelector('#offer-period').textContent.trim().toLocaleLowerCase('es');
  prepared.value = `Hola, quiero una consulta estratégica para mi negocio.

Negocio: ${business.value.trim()}
Sector y zona: ${sectorZone.value.trim()}
Teléfono: ${phoneText}

Me interesa la oferta de ${offerPeriod}. Quisiera confirmar disponibilidad y conocer la propuesta y sus condiciones.`;
  result.hidden = false;
  document.querySelector('#request-status').textContent = 'Solicitud preparada. Puedes copiarla; no se ha enviado ni reservado ninguna plaza.';
  document.querySelector('#copy-status').textContent = '';
});
// 05 · Copiar solicitud. En contextos sin portapapeles se ofrece selección manual.
document.querySelector('#copy-message').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(prepared.value);
    status.textContent = 'Solicitud copiada.';
  } catch {
    prepared.focus();
    prepared.select();
    status.textContent = 'Selecciona y copia el texto con el menú de tu dispositivo.';
  }
});
