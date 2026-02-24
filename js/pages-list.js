// pages-list.js

document.addEventListener("DOMContentLoaded", () => {
  renderPagesTable();
});

function renderPagesTable() {
  const tbody = document.getElementById("pagesTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  pages.forEach(page => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><span class="page-id">${page.id}</span></td>

      <td>
        <span class="page-name">${page.title}</span>
      </td>

      <td>
        ${renderLanguages(page.language)}
      </td>

      <td>${page.lastUpdated}</td>

      <td>
        <div class="action-buttons">
          <a class="btn-action btn-edit"
             href="page-content.html?id=${page.slug}">
            <i class="bi bi-pencil"></i>
          </a>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function renderLanguages(languages) {
  return languages.map(lang =>
    `<span class="job-lang badge-lang-${lang.toLowerCase()}">${lang}</span>`
  ).join(" ");
}