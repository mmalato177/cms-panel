// pages-list.js

document.addEventListener("DOMContentLoaded", () => {
  renderPagesTable();
});

// New Page Button
document.getElementById("savePageBtn").addEventListener("click", () => {

  const titleInput = document.getElementById("page-title");
  const title = titleInput.value.trim();

  if (!title) {
    alert("Please enter a page name.");
    return;
  }

  // trim text
  const slug = slugify(title);

  const langCheckboxes = document.querySelectorAll("#newPageModal .form-check-input");
  const selectedLangs = [];

  langCheckboxes.forEach((cb, index) => {
    if (cb.checked) {
      selectedLangs.push(index === 0 ? "DE" : "EN");
    }
  });

  if (!selectedLangs.length) {
    alert("Select at least one language.");
    return;
  }

  // id is the date
  const newId = Date.now();

  const newPage = {
    id: newId,
    slug,
    title,
    contents: selectedLangs.map(lang => ({
      url: `dsr24.de/${lang === "EN" ? "en/" : ""}${slug}.html`,
      lang,
      lastUpdated: new Date().toISOString().slice(0, 19).replace("T", " "),
      blocks: JSON.parse(JSON.stringify(newPageBlocks))
    }))
  };

  // push to table
  pages.push(newPage);

  // re-render
  renderPagesTable();

  // close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById("newPageModal"));
  modal.hide();

  // reset
  document.getElementById("pageForm").reset();
  newPageBlocks = [];
  document.getElementById("page-content").innerHTML = "";
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
        ${renderLanguages(page)}
      </td>

      <td>${getLatestUpdated(page)}</td>

      <td>
        <div class="action-buttons">
          <a class="btn-action btn-edit"
             href="page-content.html?id=${page.slug}&lang=DE">
            <i class="bi bi-pencil"></i>
          </a>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function renderLanguages(page) {
  const langs = (page.contents || []).map(c => c.lang);  // ["DE","EN"]
  if (!langs.length) return `<span class="text-muted">—</span>`;

  return langs
    .map(l => `<span class="badge bg-secondary me-1">${l}</span>`)
    .join("");
}

function getLatestUpdated(page) {
  const dates = (page.contents || [])
    .map(c => c.lastUpdated)
    .filter(Boolean)
    .sort()
    .reverse();
  return dates[0] || "—";
}

let newPageBlocks = [];
document.getElementById("newPageModal")
  .addEventListener("shown.bs.modal", () => {

    // starting blocks
    newPageBlocks = [
      createBlock("dsrTemplate1.newPage.header"),
      createBlock("dsrTemplate1.newPage.text_image_section")
    ];

    renderNewPageBlocks();
    initModalDragAndDrop();
});

function createBlock(type) {
  return {
    id: crypto.randomUUID(),
    type,
    enabled: true,
    collapsed: false
  };
}

function renderNewPageBlocks() {

  const container = document.getElementById("page-content");
  container.innerHTML = "";

  newPageBlocks.forEach(block => {

    const el = document.createElement("div");
    el.className = "content-block card mb-3";
    el.draggable = true;
    el.dataset.blockId = block.id;

    el.innerHTML = `
      <div class="card-header d-flex justify-content-between align-items-center p-3">
        <span class="fw-bold">${block.type}</span>

        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-danger delete-btn">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `;

    container.appendChild(el);
  });
}

function initModalDragAndDrop() {

  // Block types drag start
  document.querySelectorAll('[data-drag-kind="block"]').forEach(el => {
    el.addEventListener("dragstart", e => {
      e.dataTransfer.setData("block-type", el.dataset.blockType);
    });
  });

  const container = document.getElementById("page-content");

  // Allow drop
  container.addEventListener("dragover", e => {
    e.preventDefault();
  });

  // Drop new block
  container.addEventListener("drop", e => {
    e.preventDefault();

    const type = e.dataTransfer.getData("block-type");
    if (!type) return;

    newPageBlocks.push(createBlock(type));
    renderNewPageBlocks();
  });
}

// trim text
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}