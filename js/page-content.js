document.addEventListener("DOMContentLoaded", () => {

  const slug = new URLSearchParams(window.location.search).get("id");
  if (!slug) return;

  const page = window.pages.find(p => p.slug === slug);
  if (!page) {
    console.error("Page not found");
    return;
  }

  bindPageData(page);
  renderBlocks(page);

  initializeDragAndDrop();
});



/* =====================================
   SIMPLE DATA BINDING (title, url etc)
===================================== */

function bindPageData(page) {

  const elements = document.querySelectorAll(".page-bind");

  elements.forEach(el => {
    const key = el.dataset.bind;

    if (page[key] !== undefined) {
      if (Array.isArray(page[key])) {
        el.textContent = page[key].join(" | ");
      } else {
        el.textContent = page[key];
      }
    }
  });
}



/* =====================================
   RENDER BLOCKS FROM JSON
===================================== */

function renderBlocks(page) {

  const container = document.getElementById("blocksContainer");
  if (!container) return;

  container.innerHTML = "";

  page.blocks.forEach(block => {

    const blockEl = document.createElement("div");
    blockEl.className = "content-block card mb-3";
    blockEl.draggable = true;
    blockEl.dataset.blockId = block.id;

    blockEl.innerHTML = `
      <div class="card-header d-flex justify-content-between align-items-center p-3">
        <div class="d-flex align-items-center gap-2">
          <span class="fw-bold">
            #${page.slug} - ${block.label}
          </span>
        </div>
        <div class="block-controls d-flex gap-2">
          <div class="form-check form-switch m-0">
            <input class="form-check-input toggle-block"
              type="checkbox"
              ${block.active ? "checked" : ""}>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="bi bi-chevron-down"></i>
          </button>
          <button class="btn btn-sm btn-outline-secondary delete-block-btn">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>

      <div class="card-body">
        ${renderBlockContent(block)}
      </div>
    `;

    container.appendChild(blockEl);
  });

  attachBlockControls();
}



/* =====================================
   BLOCK CONTENT SWITCH
===================================== */

function renderBlockContent(block) {

  switch (block.type) {

    case "header":
      return `<p class="text-muted">Header block – nothing to configure</p>`;

    case "grid":
      return `
        <p class="text-muted">Grid editor goes here</p>
      `;

    case "faq":
      return `<p class="text-muted">FAQ selector will go here</p>`;

    default:
      return `<p class="text-muted">Generic block</p>`;
  }
}



/* =====================================
   BLOCK CONTROLS (delete / toggle)
===================================== */

function attachBlockControls() {

  document.querySelectorAll(".delete-block-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      if (confirm("Remove this block?")) {
        this.closest(".content-block").remove();
      }
    });
  });

  document.querySelectorAll(".toggle-block").forEach(toggle => {
    toggle.addEventListener("change", function () {
      const block = this.closest(".content-block");
      block.style.opacity = this.checked ? "1" : "0.5";
    });
  });
}



/* =====================================
   DRAG & DROP
===================================== */

let draggedElement = null;

function initializeDragAndDrop() {

  document.querySelectorAll(".content-block").forEach(block => {

    block.addEventListener("dragstart", function () {
      draggedElement = this;
      this.style.opacity = "0.5";
    });

    block.addEventListener("dragend", function () {
      this.style.opacity = "1";
    });
  });

  const container = document.getElementById("blocksContainer");

  container.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  container.addEventListener("drop", function (e) {
    e.preventDefault();
    if (draggedElement) {
      container.appendChild(draggedElement);
    }
  });
}