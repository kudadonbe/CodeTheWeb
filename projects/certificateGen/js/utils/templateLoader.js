// js/utils/templateLoader.js
export async function loadTemplates(path = 'templates/certificate-templates.html') {
  const res = await fetch(path);
  const html = await res.text();
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);

}
