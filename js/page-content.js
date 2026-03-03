/* =====================================================
   PAGE CONTENT EDITOR (schema-driven)
   - Loads a page by slug + language
   - Renders blocks as editable forms (schema-based)
   - Unknown blocks fall back to an auto editor
===================================================== */


/* =====================================================
   1) BOOTSTRAP (pick page + language, render UI)
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const slug = params.get("id");
  const lang = (params.get("lang") || "DE").toUpperCase(); // default DE

  // for these -> create collection tabs
  if (["services", "job-details", "news-details", "use-case"].includes(slug)) {
    initCollectionTabs(slug, lang);
    return;
  }

  const page = window.pages.find(p => p.slug === slug);
  if (!page) return console.error("Page not found");

  // Language-specific content object (DE/EN)
  const content = (page.contents || []).find(c => (c.lang || c.language) === lang);
  if (!content) return console.error("Language content not found");

  // send data to page - so it can be used "Title - Page Name" etc.
  bindPageData(page, content);

  // render blocks 
  renderBlocks(page, content);

  // One-time event delegation binder (inputs, tables add/remove)
  wireContentEditor(page, content);

  // drag & drop
  initializeDragAndDrop(page, content);
  wirePaletteDragAndDrop(page, content);

  // Language selector handler
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = lang;
    languageSelect.addEventListener("change", (e) => {
      const newLang = e.target.value;
      const newUrl = `${window.location.pathname}?id=${slug}&lang=${newLang}`;
      window.location.href = newUrl;
    });
  }
});


/* =====================================================
   2) SIMPLE DATA BINDING (header/title/url/etc)
   - Fills .page-bind elements from content first, then page
===================================================== */

function bindPageData(page, content) {
  const elements = document.querySelectorAll(".page-bind");

  elements.forEach(el => {
    const key = el.dataset.bind;
    let value = null;

    // First: language-specific (content)
    if (content && content[key] !== undefined) value = content[key];

    // Second: global (page)
    else if (page && page[key] !== undefined) value = page[key];

    if (value !== null) {
      el.textContent = Array.isArray(value) ? value.join(" | ") : value;
    }
  });
}


/* =====================================================
   3) HELPERS (escape html, ids, block lookup)
===================================================== */

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function ensureBlockIds(content) {
  (content.blocks || []).forEach(b => {
    if (!b.id) b.id = crypto.randomUUID();
  });
}

function getBlockById(content, id) {
  return (content.blocks || []).find(b => b.id === id);
}


/* =====================================================
   4) SCHEMAS (define how each block renders)
   - If a block.type exists here → custom UI (inputs, tables, etc.)
   - Otherwise → auto editor fallback (renderGenericBlock)
===================================================== */

const BLOCK_SCHEMAS = {
  // ---------- Generic ----------
  "dsrTemplate1.generic.text": {
    label: "Text Section",
    fields: [
      { key: "title", label: "Title", control: "text" },
      { key: "text", label: "Text", control: "textarea", rows: 4 },
    ]
  },

  "dsrTemplate1.generic.paragraph": {
    label: "Paragraph",
    fields: [{ key: "paragraph", label: "Paragraph", control: "textarea", rows: 4 }]
  },

  "dsrTemplate1.generic.image": {
    label: "Image",
    fields: [
      { key: "image", label: "Image ID", control: "image" },
      { key: "alt", label: "Alt text", control: "text" },
    ]
  },

  "dsrTemplate1.generic.grid": {
    label: "Grid",
    fields: [
      {
        key: "items",
        label: "Entries",
        control: "table",
        columns: [
          { key: "name", label: "Name" },
          { key: "description", label: "Description" }
        ],
        rowTemplate: () => ({ name: "", description: "" })
      }
    ]
  },

  // ---------- Homepage examples SCHEMA ----------
  "dsrTemplate1.homepage.hero": {
    label: "Homepage Hero",
    fields: [
      { key: "title", label: "Title", control: "text" },
      { key: "subtitle", label: "Subtitle", control: "text" },
      { key: "overlayopacity", label: "Overlay Opacity", control: "number", min: 0, max: 1, step: 0.1 },
      { key: "backgroundimage", label: "Background Image ID", control: "image" },
      { key: "buttoncaption", label: "Button Caption", control: "text" },
      { key: "buttonlink", label: "Button Link", control: "text" },
      { key: "buttonnewtab", label: "Open in new tab", control: "checkbox" },
    ]
  },

  "dsrTemplate1.homepage.about-us": {
    label: "About Us",
    fields: [
      { key: "title", label: "Title", control: "text" },
      { key: "subtitle", label: "Subtitle", control: "text" },
      { key: "paragraph", label: "Paragraph", control: "textarea", rows: 4 },

      // bulletpoints: string[]  <->  [{text:""}]
      {
        key: "bulletpoints",
        label: "Bullet Points",
        control: "table",
        columns: [{ key: "text", label: "Point" }],
        adapter: {
          toRows: (arr) => (arr || []).map(s => ({ text: s })),
          fromRows: (rows) => (rows || []).map(r => r.text ?? "")
        },
        rowTemplate: () => ({ text: "" })
      },

      { key: "image", label: "Image ID", control: "image" },
      { key: "buttoncaption", label: "Button Caption", control: "text" },
      { key: "buttonlink", label: "Button Link", control: "text" },
      { key: "buttonnewtab", label: "Open in new tab", control: "checkbox" },
    ]
  },

  "dsrTemplate1.homepage.partners": {
    label: "Partners",
    fields: [
      // logos: number[] <-> [{id:""}]
      {
        key: "logos",
        label: "Logo Image IDs",
        control: "table",
        columns: [{ key: "id", label: "Image ID" }],
        adapter: {
          toRows: (arr) => (arr || []).map(n => ({ id: n })),
          fromRows: (rows) => (rows || []).map(r => Number(r.id || 0)).filter(Boolean)
        },
        rowTemplate: () => ({ id: "" })
      }
    ]
  },

  "dsrTemplate1.homepage.features": {
    label: "Features",
    fields: [
      { key: "videoid", label: "Video ID", control: "number" },
      { key: "videoimage", label: "Video Thumbnail Image ID", control: "image" },
      {
        key: "items",
        label: "Feature Items",
        control: "table",
        columns: [
          { key: "icon", label: "Icon class" },
          { key: "title", label: "Title" },
          { key: "text", label: "Text" },
        ],
        rowTemplate: () => ({ icon: "", title: "", text: "" })
      }
    ]
  },

  "dsrTemplate1.homepage.services": {
    label: "Services",
    fields: [
      { key: "title", label: "Title", control: "text" },
      { key: "subtitle", label: "Subtitle", control: "text" },
      {
        key: "items",
        label: "Service Items",
        control: "table",
        columns: [
          { key: "icon", label: "Icon (ID)" },
          { key: "title", label: "Title" },
          { key: "text", label: "Text" },
          { key: "buttonLink", label: "Button Link" },
          { key: "buttonnewtab", label: "New Tab (true/false)" }
        ],
        rowTemplate: () => ({ icon: "", title: "", text: "", buttonLink: "", buttonnewtab: true })
      }
    ]
  },

  "dsrTemplate1.homepage.call_to_action": {
    label: "Call To Action",
    fields: [
      { key: "title", label: "Title", control: "text" },
      { key: "text", label: "Text", control: "textarea", rows: 3 },
      { key: "icon", label: "Icon class", control: "text" },
      { key: "buttoncaption", label: "Button Caption", control: "text" },
      { key: "buttonlink", label: "Button Link", control: "text" },
      { key: "buttonnewtab", label: "Open in new tab", control: "checkbox" },
    ]
  },

  "dsrTemplate1.homepage.stats": {
    label: "Statistics",
    fields: [
      { key: "title", label: "Title", control: "text" },
      { key: "heading", label: "Heading", control: "text" },
      { key: "paragraph", label: "Paragraph", control: "textarea", rows: 2 },
      { key: "image", label: "Image ID", control: "image" },
      {
        key: "bulletpoints",
        label: "Stats Items",
        control: "table",
        columns: [
          { key: "icon", label: "Icon" },
          { key: "number", label: "Number" },
          { key: "label", label: "Label" },
        ],
        rowTemplate: () => ({ icon: "", number: "", label: "" })
      }
    ]
  },

  "dsrTemplate1.homepage.portfolio": {
    label: "Portfolio",
    fields: [
      { key: "title", label: "Title", control: "text" },
      { key: "subtitle", label: "Subtitle", control: "text" },
      {
        key: "tabs",
        label: "Tabs",
        control: "table",
        columns: [{ key: "label", label: "Tab Label" }],
        rowTemplate: () => ({ label: "", items: [] })
      }
    ]
  },

  "dsrTemplate1.homepage.contact": {
    label: "Contact",
    fields: [
      { key: "title", label: "Title", control: "text" },
      { key: "mapiframe", label: "Map iframe URL", control: "text" },
      { key: "address", label: "Address", control: "textarea", rows: 2 },
      { key: "email", label: "Email", control: "text" },
      { key: "phone", label: "Phone", control: "text" },
      { key: "formtitle", label: "Form Title", control: "text" },
      { key: "formbuttoncaption", label: "Form Button Caption", control: "text" },
      { key: "formsuccessmessage", label: "Success Message", control: "textarea", rows: 2 },
    ]
  },
};


/* =====================================================
   5) RENDERING (blocks + fields)
   - renderBlocks builds the cards list
   - renderBlockContent chooses schema or fallback
===================================================== */

function renderBlocks(page, content) {
  const container = document.getElementById("blocksContainer");
  if (!container) return;

  ensureBlockIds(content);
  container.innerHTML = "";

  (content.blocks || []).forEach(block => {
    const blockEl = document.createElement("div");
    blockEl.className = "content-block card mb-3";
    blockEl.draggable = true;
    blockEl.dataset.blockId = block.id;
    const isCollapsed = !!block.collapsed;


    // block HTML
    blockEl.innerHTML = `
      <div class="card-header d-flex justify-content-between align-items-center p-3">
        <div class="d-flex align-items-center gap-2">
          <span class="fw-bold">#${escapeHtml(page.slug)} - ${escapeHtml(block.type)}</span>
        </div>

        <div class="block-controls d-flex gap-2">
          <div class="form-check form-switch m-0">
            <input class="form-check-input toggle-block" type="checkbox" ${block.enabled ? "checked" : ""}>
          </div>

           <button class="btn btn-sm btn-outline-secondary collapse-block-btn" type="button" aria-expanded="${!isCollapsed}">
            <i class="bi ${isCollapsed ? "bi-chevron-right" : "bi-chevron-down"}"></i>
          </button>

          <button class="btn btn-sm btn-outline-secondary delete-block-btn" type="button">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>

      <div class="card-body">
        <div class="block-collapse ${isCollapsed ? "is-collapsed" : ""}">
          ${renderBlockContent(block)}
        </div>
      </div>
    `;

    if (block.enabled === false) blockEl.style.opacity = "0.5";
    container.appendChild(blockEl);
  });

  // Needs to be reattached after every render (because buttons are recreated)
  attachBlockControls(page, content);
  
  // Attach drag-drop listeners to each card-body
  attachCardBodyDropZones(page, content);
}

function renderBlockContent(block) {
  const schema = BLOCK_SCHEMAS[block.type];
  if (!schema) return renderGenericBlock(block);

  let html = `
    <div class="block-form">
      ${(schema.fields || []).map(field => renderField(block, field)).join("")}
  `;

  // Also render elements if they exist (allows drag-drop elements in any block)
  if (Array.isArray(block.elements) && block.elements.length > 0) {
    html += `
      <div class="border-top pt-3 mt-3">
        <h6 class="fw-bold mb-3">Dragged Elements</h6>
        ${renderAutoTable("elements", block.elements, [
          { key: "type", label: "Type" },
          { key: "imageId", label: "Image ID" },
          { key: "alt", label: "Alt" },
          { key: "videoId", label: "Video ID" },
          { key: "posterId", label: "Poster ID" },
          { key: "text", label: "Text/Title" },
          { key: "title", label: "Title" },
          { key: "buttonText", label: "Button Text" },
          { key: "buttonLink", label: "Button Link" }
        ])}
      </div>
    `;
  }

  html += `
    </div>
  `;
  return html;
}


/* =====================================================
   6) FALLBACK AUTO EDITOR (for unknown block types)
===================================================== */

function renderGenericBlock(block) {
  return `
    <div class="block-form">
      <div class="alert alert-info small mb-3">
        No schema for <strong>${escapeHtml(block.type)}</strong> — showing auto editor.
      </div>
      ${renderAutoFields(block)}
    </div>
  `;
}

function renderAutoFields(block) {
  const skip = new Set(["type", "enabled", "id"]);
  const keys = Object.keys(block).filter(k => !skip.has(k));
  return keys.map(key => renderAutoField(block, key)).join("");
}

function renderAutoField(block, key) {
  const val = block[key];

  if (typeof val === "string") {
    const long = val.length > 80 || val.includes("\n");
    return long
      ? `
        <div class="mb-3">
          <label class="form-label fw-bold">${escapeHtml(key)}</label>
          <textarea class="form-control" rows="5" data-field="${escapeHtml(key)}">${escapeHtml(val)}</textarea>
        </div>
      `
      : `
        <div class="mb-3">
          <label class="form-label fw-bold">${escapeHtml(key)}</label>
          <input class="form-control" type="text" data-field="${escapeHtml(key)}" value="${escapeHtml(val)}">
        </div>
      `;
  }

  if (typeof val === "number") {
    return `
      <div class="mb-3">
        <label class="form-label fw-bold">${escapeHtml(key)}</label>
        <input class="form-control" type="number" data-field="${escapeHtml(key)}" value="${val}">
      </div>
    `;
  }

  if (typeof val === "boolean") {
    return `
      <div class="form-check form-switch mb-3">
        <input class="form-check-input" type="checkbox" data-field="${escapeHtml(key)}" ${val ? "checked" : ""}>
        <label class="form-check-label fw-bold">${escapeHtml(key)}</label>
      </div>
    `;
  }

  if (Array.isArray(val)) {
    // array of objects -> table with union keys
    if (val.every(x => x && typeof x === "object" && !Array.isArray(x))) {
      const colKeys = [...new Set(val.flatMap(obj => Object.keys(obj)))];
      const cols = colKeys.map(k => ({ key: k, label: k }));
      return renderAutoTable(key, val, cols);
    }

    // array of primitives -> one column table
    if (val.every(x => ["string", "number", "boolean"].includes(typeof x) || x == null)) {
      const rows = val.map(x => ({ value: x ?? "" }));
      return renderAutoTable(key, rows, [{ key: "value", label: key }]);
    }

    // mixed arrays: show JSON
    return `
      <div class="mb-3">
        <label class="form-label fw-bold">${escapeHtml(key)}</label>
        <pre class="p-2 border rounded bg-light small mb-0"><code>${escapeHtml(JSON.stringify(val, null, 2))}</code></pre>
      </div>
    `;
  }

  if (val && typeof val === "object") {
    return `
      <div class="mb-3">
        <label class="form-label fw-bold">${escapeHtml(key)}</label>
        <pre class="p-2 border rounded bg-light small mb-0"><code>${escapeHtml(JSON.stringify(val, null, 2))}</code></pre>
      </div>
    `;
  }

  return `
    <div class="mb-3">
      <label class="form-label fw-bold">${escapeHtml(key)}</label>
      <input class="form-control" type="text" data-field="${escapeHtml(key)}" value="">
    </div>
  `;
}

function renderAutoTable(fieldKey, rows, columns) {
  return `
    <div class="mb-3">
      <label class="form-label fw-bold d-block mb-2">${escapeHtml(fieldKey)}</label>

      <div class="table-responsive">
        <table class="table table-sm align-middle">
          <thead>
            <tr>
              ${columns.map(c => `<th>${escapeHtml(c.label)}</th>`).join("")}
              <th class="text-end"></th>
            </tr>
          </thead>
          <tbody>
            ${(rows || []).map((row, rowIndex) => `
              <tr>
                ${columns.map(col => `
                  <td>
                    <input class="form-control form-control-sm"
                      data-field="${escapeHtml(fieldKey)}"
                      data-row="${rowIndex}"
                      data-col="${escapeHtml(col.key)}"
                      value="${escapeHtml(row?.[col.key] ?? "")}">
                  </td>
                `).join("")}
                <td class="text-end">
                  <button class="btn btn-sm btn-outline-danger"
                    type="button"
                    data-action="remove-row"
                    data-field="${escapeHtml(fieldKey)}"
                    data-row="${rowIndex}">
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <button class="btn btn-sm btn-outline-primary"
        type="button"
        data-action="add-row"
        data-field="${escapeHtml(fieldKey)}">
        <i class="bi bi-plus"></i> Add row
      </button>
    </div>
  `;
}


/* =====================================================
   7) FIELD RENDERER (schema fields)
===================================================== */

function renderField(block, field) {
  const key = field.key;
  const control = field.control;
  const value = block[key];

  if (control === "text") {
    return `
      <div class="mb-3">
        <label class="form-label fw-bold">${escapeHtml(field.label)}</label>
        <input type="text" class="form-control" data-field="${escapeHtml(key)}" value="${escapeHtml(value || "")}">
      </div>
    `;
  }

  if (control === "textarea") {
    const rows = field.rows ?? 5;
    return `
      <div class="mb-3">
        <label class="form-label fw-bold">${escapeHtml(field.label)}</label>
        <textarea class="form-control" rows="${rows}" data-field="${escapeHtml(key)}">${escapeHtml(value || "")}</textarea>
      </div>
    `;
  }

  if (control === "number") {
    return `
      <div class="mb-3">
        <label class="form-label fw-bold">${escapeHtml(field.label)}</label>
        <input type="number" class="form-control"
          data-field="${escapeHtml(key)}"
          ${field.min !== undefined ? `min="${field.min}"` : ""}
          ${field.max !== undefined ? `max="${field.max}"` : ""}
          ${field.step !== undefined ? `step="${field.step}"` : ""}
          value="${value ?? ""}">
      </div>
    `;
  }

  if (control === "checkbox") {
    return `
      <div class="form-check form-switch mb-3">
        <input class="form-check-input" type="checkbox" data-field="${escapeHtml(key)}" ${value ? "checked" : ""}>
        <label class="form-check-label fw-bold">${escapeHtml(field.label)}</label>
      </div>
    `;
  }

  if (control === "image") {
    return `
      <div class="mb-3">
        <label class="form-label fw-bold">${escapeHtml(field.label)}</label>
        <input type="text" class="form-control"
          data-field="${escapeHtml(key)}"
          value="${escapeHtml(value ?? "")}"
          placeholder="Media ID">
        <div class="border rounded p-2 mt-2 small text-muted">
          Preview: media #${escapeHtml(value ?? "—")}
        </div>
      </div>
    `;
  }

  if (control === "table") {
    const columns = field.columns || [];
    const adapter = field.adapter;
    const rows = adapter?.toRows ? adapter.toRows(value) : (Array.isArray(value) ? value : []);

    return `
      <div class="mb-3">
        <label class="form-label fw-bold d-block mb-2">${escapeHtml(field.label)}</label>

        <div class="table-responsive">
          <table class="table table-sm align-middle">
            <thead>
              <tr>
                ${columns.map(c => `<th>${escapeHtml(c.label)}</th>`).join("")}
                <th class="text-end"></th>
              </tr>
            </thead>
            <tbody>
              ${(rows || []).map((row, rowIndex) => `
                <tr>
                  ${columns.map(col => `
                    <td>
                      <input class="form-control form-control-sm"
                        data-field="${escapeHtml(key)}"
                        data-row="${rowIndex}"
                        data-col="${escapeHtml(col.key)}"
                        value="${escapeHtml(row?.[col.key] ?? "")}">
                    </td>
                  `).join("")}
                  <td class="text-end">
                    <button class="btn btn-sm btn-outline-danger"
                      type="button"
                      data-action="remove-row"
                      data-field="${escapeHtml(key)}"
                      data-row="${rowIndex}">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <button class="btn btn-sm btn-outline-primary"
          type="button"
          data-action="add-row"
          data-field="${escapeHtml(key)}">
          <i class="bi bi-plus"></i> Add row
        </button>
      </div>
    `;
  }

  return "";
}


/* =====================================================
   8) CARD CONTROLS (delete + enabled toggle)
   - Must be reattached after each render because HTML is recreated
===================================================== */

function attachBlockControls(page, content) {
  const container = document.getElementById("blocksContainer");
  if (!container) return;

  // Delete block (also removes from content.blocks)
  container.querySelectorAll(".delete-block-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const blockEl = this.closest(".content-block");
      const blockId = blockEl?.dataset.blockId;
      if (!blockId) return;

      if (!confirm("Remove this block?")) return;

      content.blocks = (content.blocks || []).filter(b => b.id !== blockId);
      blockEl.remove();
    });
  });

  // Collapse Toggle
  container.querySelectorAll(".collapse-block-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const blockEl = this.closest(".content-block");
      const blockId = blockEl?.dataset.blockId;
      const block = getBlockById(content, blockId);
      if (!block) return;

      const collapseEl = blockEl.querySelector(".block-collapse");
      if (!collapseEl) return;

      const willCollapse = !collapseEl.classList.contains("is-collapsed");

      // persist in JSON
      block.collapsed = willCollapse;

      // smooth animation
      if (willCollapse) {
        collapseEl.style.maxHeight = collapseEl.scrollHeight + "px";
        collapseEl.offsetHeight; // reflow
        collapseEl.classList.add("is-collapsed");
        collapseEl.style.maxHeight = "0px";
      } else {
        collapseEl.classList.remove("is-collapsed");
        collapseEl.style.maxHeight = collapseEl.scrollHeight + "px";
        const onEnd = () => {
          collapseEl.style.maxHeight = "";
          collapseEl.removeEventListener("transitionend", onEnd);
        };
        collapseEl.addEventListener("transitionend", onEnd);
      }

      // icon swap
      const icon = this.querySelector("i");
      if (icon) {
        icon.classList.toggle("bi-chevron-down", !willCollapse);
        icon.classList.toggle("bi-chevron-right", willCollapse);
      }
    });
  });


  // Enabled toggle (also updates JSON)
  container.querySelectorAll(".toggle-block").forEach(toggle => {
    toggle.addEventListener("change", function () {
      const blockEl = this.closest(".content-block");
      const blockId = blockEl?.dataset.blockId;
      const block = getBlockById(content, blockId);
      if (!block) return;

      block.enabled = this.checked;
      blockEl.style.opacity = this.checked ? "1" : "0.5";
    });
  });
}


/* =====================================================
   9) DATA BINDING (event delegation)
   - Updates the underlying JSON when user edits fields
===================================================== */

function wireContentEditor(page, content) {
  const container = document.getElementById("blocksContainer");
  if (!container) return;

  // Bind once (event delegation works even after re-render)
  if (container.dataset.bound === "1") return;
  container.dataset.bound = "1";

  // Inputs + textareas + number fields
  container.addEventListener("input", (e) => {
    const fieldKey = e.target.dataset.field;
    if (!fieldKey) return;

    const blockEl = e.target.closest(".content-block");
    const blockId = blockEl?.dataset.blockId;
    const block = getBlockById(content, blockId);
    if (!block) return;

    const schema = BLOCK_SCHEMAS[block.type];
    const field = schema?.fields?.find(f => f.key === fieldKey);

    // Table cell update
    const row = e.target.dataset.row;
    const col = e.target.dataset.col;
    if (row !== undefined && col !== undefined) {
      const rowIndex = Number(row);
      const adapter = field?.adapter;

      let rows = adapter?.toRows ? adapter.toRows(block[fieldKey]) : (Array.isArray(block[fieldKey]) ? block[fieldKey] : []);
      if (!rows[rowIndex]) rows[rowIndex] = {};
      rows[rowIndex][col] = e.target.value;

      block[fieldKey] = adapter?.fromRows ? adapter.fromRows(rows) : rows;
      return;
    }

    // Normal field update
    let value = e.target.value;
    if (e.target.type === "number") value = value === "" ? null : Number(value);
    if (e.target.type === "checkbox") value = e.target.checked;
    block[fieldKey] = value;
  });

  // Checkbox changes
  container.addEventListener("change", (e) => {
    const fieldKey = e.target.dataset.field;
    if (!fieldKey) return;
    if (e.target.type !== "checkbox") return;

    const blockEl = e.target.closest(".content-block");
    const blockId = blockEl?.dataset.blockId;
    const block = getBlockById(content, blockId);
    if (!block) return;

    block[fieldKey] = e.target.checked;
  });

  // Table add/remove row buttons (schema tables only)
  container.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const action = btn.dataset.action;
    const fieldKey = btn.dataset.field;
    if (!action || !fieldKey) return;

    const blockEl = btn.closest(".content-block");
    const blockId = blockEl?.dataset.blockId;
    const block = getBlockById(content, blockId);
    if (!block) return;

    const schema = BLOCK_SCHEMAS[block.type];
    const field = schema?.fields?.find(f => f.key === fieldKey);
    if (!field || field.control !== "table") return;

    const adapter = field.adapter;
    let rows = adapter?.toRows ? adapter.toRows(block[fieldKey]) : (Array.isArray(block[fieldKey]) ? block[fieldKey] : []);

    if (action === "add-row") {
      const template = field.rowTemplate ? field.rowTemplate() : {};
      rows.push(template);
    }

    if (action === "remove-row") {
      const rowIndex = Number(btn.dataset.row);
      rows.splice(rowIndex, 1);
    }

    block[fieldKey] = adapter?.fromRows ? adapter.fromRows(rows) : rows;

    // Re-render to reflect new table rows
    renderBlocks(page, content);
  });
}


/* =====================================================
   10) DRAG & DROP
   - Reorder existing blocks (card drag)
   - Drop "Block Types" from right panel to insert new blocks
   - Drop "Content Types" into a block to add block.elements[]
===================================================== */

function wirePaletteDragAndDrop(page, content) {
  // Any draggable item in right sidebar
  document.querySelectorAll('[draggable="true"][data-drag-kind]').forEach(el => {
    el.addEventListener("dragstart", (e) => {
      const payload = {
        kind: el.dataset.dragKind,          // "block" | "element"
        blockType: el.dataset.blockType,    // if kind==="block"
        elementType: el.dataset.elementType // if kind==="element"
      };
      e.dataTransfer.setData("application/json", JSON.stringify(payload));
      e.dataTransfer.effectAllowed = "copy";
    });

    // prevent link navigation
    el.addEventListener("click", (e) => e.preventDefault());
  });

  // Blocks container accepts drops (for inserting new blocks)
  const container = document.getElementById("blocksContainer");
  if (!container) return;

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  });

  container.addEventListener("drop", (e) => {
    e.preventDefault();

    const data = e.dataTransfer.getData("application/json");
    if (!data) return;

    let payload;
    try { payload = JSON.parse(data); } catch { return; }

    // Only handle new block insertion here
    if (payload.kind !== "block" || !payload.blockType) return;

    const insertIndex = getInsertIndexFromPointer(container, e.clientY);
    const newBlock = createBlock(payload.blockType);

    content.blocks = content.blocks || [];
    content.blocks.splice(insertIndex, 0, newBlock);

    renderBlocks(page, content);
    // (wireContentEditor is delegated; no need to rebind)
  });
}

function initializeDragAndDrop(page, content) {
  // Reorder existing blocks: make blocks draggable and reorder both DOM + JSON
  const container = document.getElementById("blocksContainer");
  if (!container) return;

  // Delegated dragstart/dragend for blocks
  container.addEventListener("dragstart", (e) => {
    const blockEl = e.target.closest(".content-block");
    if (!blockEl) return;

    // Don’t start reorder if the user drags from inputs/textarea/buttons inside
    if (e.target.closest("input, textarea, button, a, select, label")) {
      e.preventDefault();
      return;
    }

    const payload = { kind: "reorder", blockId: blockEl.dataset.blockId };
    e.dataTransfer.setData("application/json", JSON.stringify(payload));
    e.dataTransfer.effectAllowed = "move";

    blockEl.classList.add("dragging");
  });

  container.addEventListener("dragend", (e) => {
    const blockEl = e.target.closest(".content-block");
    if (!blockEl) return;
    blockEl.classList.remove("dragging");
  });

  // UNIFIED dragover: handle both reordering
  container.addEventListener("dragover", (e) => {
    // Check if we're reordering (dragging from .dragging class, not from palette)
    const dragging = container.querySelector(".content-block.dragging");
    if (!dragging) return;
    
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    const afterEl = getDragAfterElement(container, e.clientY);
    if (afterEl == null) {
      container.appendChild(dragging);
    } else {
      container.insertBefore(dragging, afterEl);
    }
  });

  // UNIFIED drop: handle reordering only (element drops handled in attachCardBodyDropZones)
  container.addEventListener("drop", (e) => {
    e.preventDefault();

    const data = e.dataTransfer.getData("application/json");
    if (!data) return;

    let payload;
    try { payload = JSON.parse(data); } catch { return; }

    // Only handle reordering here
    if (payload.kind === "reorder") {
      syncBlocksOrderFromDOM(container, content);
      return;
    }

    // Block insertion is handled in wirePaletteDragAndDrop()
  });
}

/* ---------- Helpers for reorder positioning ---------- */

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".content-block:not(.dragging)")];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
}

function getInsertIndexFromPointer(container, y) {
  const blocks = [...container.querySelectorAll(".content-block")];
  for (let i = 0; i < blocks.length; i++) {
    const rect = blocks[i].getBoundingClientRect();
    if (y < rect.top + rect.height / 2) return i;
  }
  return blocks.length;
}

function syncBlocksOrderFromDOM(container, content) {
  const ids = [...container.querySelectorAll(".content-block")]
    .map(el => el.dataset.blockId)
    .filter(Boolean);

  const byId = new Map((content.blocks || []).map(b => [String(b.id), b]));
  content.blocks = ids.map(id => byId.get(String(id))).filter(Boolean);
}

/* ---------- Factories (defaults for new things) ---------- */

function createBlock(type) {
  const base = { id: crypto.randomUUID(), type, enabled: true, collapsed: false };

  // if schema exists, you can prefill some keys so editor looks nice
  const schema = BLOCK_SCHEMAS[type];
  if (!schema) return base;

  (schema.fields || []).forEach(f => {
    if (base[f.key] !== undefined) return;

    if (f.control === "table") {
      base[f.key] = f.adapter?.fromRows ? f.adapter.fromRows([]) : [];
    } else if (f.control === "checkbox") {
      base[f.key] = false;
    } else if (f.control === "number") {
      base[f.key] = null;
    } else {
      base[f.key] = "";
    }
  });

  return base;
}

function createElement(elementType) {
  // These are generic child “content elements” stored as block.elements[]
  // Your auto editor will render this as a table (array of objects) automatically.
  switch (elementType) {
    case "image":
      return { type: "image", imageId: "", alt: "" };

    case "video":
      return { type: "video", videoId: "", posterId: "" };

    case "h1":
      return { type: "h1", text: "Heading" };

    case "cta":
      return { type: "cta", title: "", text: "", buttonText: "", buttonLink: "" };

    case "text":
    default:
      return { type: "text", text: "" };
  }
}


/*=====================================================
SERVICES
=====================================================*/

function getCollectionById(id) {
  const map = {
    services: window.services,
    "job-details": window.jobs,
    "news-details": window.news,
    "use-case": window.reviews
  };
  return map[id] || [];
}

function initCollectionTabs(collectionId, lang) {
  const tabsEl = document.getElementById("collectionTabs"); // you can rename to "collectionTabs"
  if (!tabsEl) return console.error("Missing tabs element");

  const items = getCollectionById(collectionId) || [];
  if (!items.length) {
    tabsEl.innerHTML = `<li class="nav-item"><span class="text-muted">No items in ${collectionId}.</span></li>`;
    return;
  }

  tabsEl.innerHTML = "";

  items.forEach((item, index) => {
    const content = getItemContent(item, lang);

    // Try to get a nice label from a header block; fallback slug
    const label =
      content?.blocks?.find(b => String(b.type).includes(".header"))?.title ||
      item.slug;

    const li = document.createElement("li");
    li.className = "nav-item";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-link";
    btn.dataset.slug = item.slug;
    btn.textContent = label;

    btn.addEventListener("click", () => selectCollectionItem(collectionId, item.slug, lang));

    if (index === 0) btn.classList.add("active");

    li.appendChild(btn);
    tabsEl.appendChild(li);
  });

  // add button
  {
    const li = document.createElement("li");
    li.className = "nav-item ms-auto";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-link";
    btn.innerHTML = `<i class="bi bi-plus-lg"></i> Add`;

    btn.addEventListener("click", () => {
      const title = prompt("Enter title:");
      if (!title) return;

      const slug = slugify(title);

      const items = getCollectionById(collectionId);

      // prevent duplicate slug
      if (items.some(i => i.slug === slug)) {
        alert("An item with this title already exists.");
        return;
      }

      const newItem = createNewCollectionItem(collectionId, title, slug);
      items.push(newItem);

      initCollectionTabs(collectionId, lang);
      selectCollectionItem(collectionId, slug, lang);
    });

    li.appendChild(btn);
    tabsEl.appendChild(li);
  }

  // ✅ Delete button tab
  {
    const li = document.createElement("li");
    li.className = "nav-item";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-link text-danger";
    btn.innerHTML = `<i class="bi bi-trash"></i> Delete`;

    btn.addEventListener("click", deleteActiveCollectionItem);

    li.appendChild(btn);
    tabsEl.appendChild(li);
  }

  selectCollectionItem(collectionId, items[0].slug, lang);
}

function selectCollectionItem(collectionId, slug, lang) {
  document.querySelectorAll("#collectionTabs .nav-link").forEach(el => {
    el.classList.toggle("active", el.dataset.slug === slug);
  });

  const items = getCollectionById(collectionId) || [];
  const item = items.find(x => x.slug === slug);
  if (!item) return console.error("Item not found:", collectionId, slug);

  const content = getItemContent(item, lang);
  if (!content) return console.error("Language content not found:", collectionId, slug, lang);

  // Save current context for Save button
  window.__activeCollection = collectionId;
  window.__activeSlug = slug;
  window.__activeLang = lang;

  bindPageData(item, content);
  renderBlocks(item, content);
  wireContentEditor(item, content);
  initializeDragAndDrop();
}

function attachCardBodyDropZones(page, content) {
  // Add direct dragover/drop listeners to each card-body for element insertion
  document.querySelectorAll(".card-body").forEach(cardBody => {
    cardBody.addEventListener("dragover", (e) => {
      const data = e.dataTransfer.getData("application/json");
      let payload = null;
      if (data) {
        try { payload = JSON.parse(data); } catch { }
      }

      // Only allow element drops on card-body
      if (payload && payload.kind === "element") {
        const blockEl = cardBody.closest(".content-block");
        const block = blockEl ? getBlockById(content, blockEl.dataset.blockId) : null;
        
        // Check if block has elements field (supports elements)
        if (block && supportsElements(block)) {
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
          cardBody.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
        }
      }
    });

    cardBody.addEventListener("dragleave", (e) => {
      // Remove highlight if leaving the card-body
      if (e.target === cardBody) {
        cardBody.style.backgroundColor = "";
      }
    });

    cardBody.addEventListener("drop", (e) => {
      e.preventDefault();
      cardBody.style.backgroundColor = "";

      const data = e.dataTransfer.getData("application/json");
      if (!data) return;

      let payload;
      try { payload = JSON.parse(data); } catch { return; }

      // Only handle element drops here
      if (payload.kind !== "element" || !payload.elementType) return;

      const blockEl = cardBody.closest(".content-block");
      const blockId = blockEl?.dataset.blockId;
      const block = getBlockById(content, blockId);
      if (!block) return;

      block.elements = Array.isArray(block.elements) ? block.elements : [];
      block.elements.push(createElement(payload.elementType));

      renderBlocks(page, content);
    });
  });
}

function getItemContent(item, lang) {
  return item.contents?.find(c => (c.lang || "").toUpperCase() === lang);
}


function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function createNewCollectionItem(collectionId, title, slug) {

  if (collectionId === "job-details") {
    return {
      slug: slug,
      title: "Job Details",
      contents: [
        {
          url: `dsr24.de/jobs-details.html?id=${slug}`,
          lang: "DE",
          lastUpdated: new Date().toISOString().slice(0, 19).replace("T", " "),
          blocks: [
            { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: slug, meta: "Germany · Full time" },
            { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
            {
              type: "dsrTemplate1.job-details.description",
              enabled: true,
              title: "Job Description",
              intro: "Short intro...",
              requirementsTitle: "Requirements",
              requirements: ["Requirement 1", "Requirement 2", "Requirement 3"],
              paragraph: "Longer description..."
            },
            {
              type: "dsrTemplate1.job-details.apply",
              enabled: true,
              title: "Apply for this position",
              fields: {
                fullNameLabel: "Full name",
                emailLabel: "Email",
                cvLabel: "CV (PDF)",
                messageLabel: "Message",
                messagePlaceholder: "Write a short message..."
              },
              submitLabel: "Submit Application"
            }
          ]
        },
        {
          url: `dsr24.de/en/jobs-details.html?id=${slug}`,
          lang: "EN",
          lastUpdated: new Date().toISOString().slice(0, 19).replace("T", " "),
          blocks: [
            { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: slug, meta: "Germany · Full time" },
            { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
            {
              type: "dsrTemplate1.job-details.description",
              enabled: true,
              title: "Job Description",
              intro: "Short intro...",
              requirementsTitle: "Requirements",
              requirements: ["Requirement 1", "Requirement 2", "Requirement 3"],
              paragraph: "Longer description..."
            },
            {
              type: "dsrTemplate1.job-details.apply",
              enabled: true,
              title: "Apply for this position",
              fields: {
                fullNameLabel: "Full name",
                emailLabel: "Email",
                cvLabel: "CV (PDF)",
                messageLabel: "Message",
                messagePlaceholder: "Write a short message..."
              },
              submitLabel: "Submit Application"
            }
          ]
        }
      ]
    };
  }

  if (collectionId === "services") {
    return {
      slug: slug,
      title: title,
      contents: [
        {
          url: `dsr24.de/services.html?id=${slug}`,
          lang: "DE",
          lastUpdated: new Date().toISOString().slice(0, 19).replace("T", " "),
          blocks: [
            { type: "dsrTemplate1.services.detail.header", enabled: true, kicker: "#", title: slug, meta: "Wichtige Begriffe erklärt" },
            { type: "dsrTemplate1.services.detail.back", enabled: true, label: "Zurück zu Leistungen", url: "services.html" },
            { type: "dsrTemplate1.services.detail.text_image", enabled: true, subtitle: "SERVICE", title: slug, paragraph: "Text...", image: 0 }
          ]
        },
        {
          url: `dsr24.de/en/services.html?id=${slug}`,
          lang: "EN",
          lastUpdated: new Date().toISOString().slice(0, 19).replace("T", " "),
          blocks: [
            { type: "dsrTemplate1.services.detail.header", enabled: true, kicker: "#", title: slug, meta: "Key terms explained" },
            { type: "dsrTemplate1.services.detail.back", enabled: true, label: "Back to Services", url: "services.html" },
            { type: "dsrTemplate1.services.detail.text_image", enabled: true, subtitle: "SERVICE", title: slug, paragraph: "Text...", image: 0 }
          ]
        }
      ]
    };
  }

  // news (generic)
  if (collectionId === "news") {
    return {
      slug: slug,
      title: "New News",
      contents: [
        {
          url: `dsr24.de/news-details.html?id=${slug}`,
          lang: "DE",
          lastUpdated: new Date().toISOString().slice(0, 19).replace("T", " "),
          blocks: [
            { type: "dsrTemplate1.news-details.header", enabled: true, kicker: "#", title: "Neue News", meta: "" },
            { type: "dsrTemplate1.news-details.body", enabled: true, title: "Titel", paragraph: "Text..." }
          ]
        },
        {
          url: `dsr24.de/en/news-details.html?id=${slug}`,
          lang: "EN",
          lastUpdated: new Date().toISOString().slice(0, 19).replace("T", " "),
          blocks: [
            { type: "dsrTemplate1.news-details.header", enabled: true, kicker: "#", title: "New News", meta: "" },
            { type: "dsrTemplate1.news-details.body", enabled: true, title: "Title", paragraph: "Text..." }
          ]
        }
      ]
    };
  }

  // fallback
  return { slug: slug, title: title, contents: [] };
}


function deleteActiveCollectionItem() {
  const collectionId = window.__activeCollection;
  const slug = window.__activeSlug;
  const lang = window.__activeLang;

  if (!collectionId || !slug) return;

  const items = getCollectionById(collectionId);
  const index = items.findIndex(i => i.slug === slug);
  if (index === -1) return;

  if (items.length <= 1) {
    alert("You must keep at least one item.");
    return;
  }

  const ok = confirm(`Delete "${items[index].title || items[index].slug}"? This cannot be undone.`);
  if (!ok) return;

  items.splice(index, 1);

  // pick next item to show
  const next = items[Math.min(index, items.length - 1)];

  initCollectionTabs(collectionId, lang);
  selectCollectionItem(collectionId, next.slug, lang);
}