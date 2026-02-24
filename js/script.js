function searchTable(el) {

    if (!el) return;

    el.addEventListener('input', function () {

        const search = this.value.toLowerCase();
        const rows = document.querySelectorAll('#generic-table tbody tr');

        rows.forEach(row => {

            const text = (
                row.dataset.name + ' ' +
                row.dataset.id
            ).toLowerCase();

            row.style.display = text.includes(search) ? '' : 'none';

        });

    });

}
const element = document.getElementById('searchInput');
searchTable(element);

/*====================================
Grid Search
=====================================*/

function setupSearch(inputId, itemSelector, fields = []) {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.addEventListener('input', function () {
        const search = this.value.toLowerCase();

        document.querySelectorAll(itemSelector).forEach(item => {

            let text = '';

            // If specific dataset fields are provided
            if (fields.length) {
                fields.forEach(field => {
                    if (item.dataset[field]) {
                        text += item.dataset[field] + ' ';
                    }
                });
            } else {
                // Fallback: search visible text (for blog)
                text = item.innerText;
            }

            item.style.display = text.toLowerCase().includes(search) ? '' : 'none';
        });
    });
}

setupSearch('blogSearch', '.blog-item');
setupSearch('downloadSearch', '.download-item', [
    'title',
    'filename',
    'description',
    'category'
]);
setupSearch('mediaSearch', '.media-item', [
    'caption',
    'filename',
    'description'
]);


/*==========================================================================
Archive and Delete Modal and Button
=====================================================================*/

let currentRow = null;

function setupGlobalArchiveModal() {

    const modal = document.getElementById('archiveModal');
    if (!modal) return;

    const itemNameEl = document.getElementById('archive-title');
    const itemIdEl = document.getElementById('archive-id');
    const confirmBtn = modal.querySelector('.btn-warning');

    let currentItem = null;

    modal.addEventListener('show.bs.modal', function (event) {

        const button = event.relatedTarget;
        if (!button) return;

        // Detecta automaticamente o tipo de item
        currentItem = button.closest('tr, .blog-item, .media-item, .download-item');
        if (!currentItem) return;

        const id = currentItem.dataset.id || '';

        const name =
            currentItem.dataset.name ||
            currentItem.dataset.title ||
            currentItem.querySelector(
                '.blog-title, .download-title, .media-caption, .faq-question, .page-name'
            )?.innerText ||
            'Item';

        itemNameEl.textContent = name;
        itemIdEl.textContent = id ? `(${id})` : '';
    });

    confirmBtn.addEventListener('click', function () {

        if (!currentItem) return;

        currentItem.style.opacity = '0.5';
        currentItem.style.textDecoration = 'line-through';

        bootstrap.Modal.getInstance(modal).hide();
        showToast?.('Archived successfully!');
        updateStats?.();
    });
}

function setupGlobalDeleteModal() {

    const modal = document.getElementById('deleteModal');
    if (!modal) return;

    const nameEl = document.getElementById('data-title');
    const idEl = document.getElementById('data-id');
    const confirmBtn = modal.querySelector('.btn-danger');

    let currentItem = null;

    modal.addEventListener('show.bs.modal', function (event) {

        const button = event.relatedTarget;
        if (!button) return;

        currentItem = button.closest('tr, .blog-item, .media-item, .download-item');
        if (!currentItem) return;

        const id = currentItem.dataset.id || '';

        const name =
            currentItem.dataset.name ||
            currentItem.dataset.title ||
            currentItem.querySelector(
                '.blog-title, .download-title, .media-caption, .faq-question, .page-name'
            )?.innerText ||
            'Item';

        nameEl.textContent = name;
        idEl.textContent = id;
    });

    confirmBtn.addEventListener('click', function () {

        if (!currentItem) return;

        currentItem.style.transition = 'opacity 0.3s, transform 0.3s';
        currentItem.style.opacity = '0';
        currentItem.style.transform = 'scale(0.8)';

        setTimeout(() => {
            currentItem.remove();
            updateStats?.();
        }, 300);

        bootstrap.Modal.getInstance(modal).hide();
        showToast?.('Deleted successfully!');
    });
}


document.addEventListener('partial:loaded', function () {
    setupGlobalArchiveModal();
    setupGlobalDeleteModal();
});



/*==========================================================================
SHOW TOAST
==========================================================================*/

// Show toast notification
function showToast(message) {
    document.getElementById('toastMessage').textContent = message;
    const toast = new bootstrap.Toast(document.getElementById('successToast'));
    toast.show();
}

/*==========================================================================
UPDATE STATS
==========================================================================*/

// Update stats (simulated)
function updateStats(config) {
    const {
        itemSelector,
        typeAttribute,
        typeMap,          // { pdf: '#statPdfs', doc: '#statDocs' }
        statTotalId,
        statStorageId,
        statExtra,        // função opcional extra
        filterMap         // { all: '#filterAll', pdf: '#filterPdfs' }
    } = config;

    const allItems = document.querySelectorAll(itemSelector);
    const total = allItems.length;

    // ---- COUNT BY TYPE ----
    const typeCounts = {};
    if (typeAttribute) {
        allItems.forEach(item => {
            const type = item.dataset[typeAttribute];
            if (!typeCounts[type]) typeCounts[type] = 0;
            typeCounts[type]++;
        });
    }

    // ---- STORAGE CALC ----
    let totalBytes = 0;

    allItems.forEach(item => {
        const sizeStr = item.dataset.size || '0';
        const size = parseFloat(sizeStr);

        if (sizeStr.includes('GB')) totalBytes += size * 1024 * 1024 * 1024;
        else if (sizeStr.includes('MB')) totalBytes += size * 1024 * 1024;
        else if (sizeStr.includes('KB')) totalBytes += size * 1024;
    });

    let storageStr;
    if (totalBytes >= 1024 * 1024 * 1024) {
        storageStr = (totalBytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
    } else {
        storageStr = (totalBytes / (1024 * 1024)).toFixed(1) + ' MB';
    }

    // ---- UPDATE TOTAL ----
    if (statTotalId) {
        const el = document.querySelector(statTotalId);
        if (el) {
            el.textContent = total;
            animateStat(statTotalId);
        }
    }

    // ---- UPDATE STORAGE ----
    if (statStorageId) {
        if (statStorageId) {
            const el = document.querySelector(statStorageId);
            if (el) el.textContent = storageStr;
        }
    }

    // ---- UPDATE TYPE STATS ----
    if (typeMap) {
        Object.keys(typeMap).forEach(type => {
            const el = document.querySelector(typeMap[type]);
            if (el) el.textContent = typeCounts[type] || 0;
        });
    }

    // ---- UPDATE FILTER BADGES ----
    if (filterMap) {
        Object.keys(filterMap).forEach(type => {
            const el = document.querySelector(filterMap[type]);
            if (!el) return;

            if (type === 'all') el.textContent = total;
            else el.textContent = typeCounts[type] || 0;
        });
    }

    // ---- EXTRA CUSTOM LOGIC ----
    if (typeof statExtra === 'function') {
        statExtra(allItems);
    }
}

function animateStat(selector) {
    const el = document.querySelector(selector);
    if (!el) return;

    el.style.transform = 'scale(1.2)';
    setTimeout(() => {
        el.style.transform = 'scale(1)';
    }, 300);
}

const statsConfigs = [
    {
        itemSelector: '.download-item',
        typeAttribute: 'type',
        typeMap: {
            pdf: '#statPdfs',
            doc: '#statDocs',
            xls: '#statSheets'
        },
        statTotalId: '#statTotalFiles',
        statStorageId: '#statStorage',
        filterMap: {
            all: '#filterAll',
            pdf: '#filterPdfs',
            doc: '#filterDocs',
            xls: '#filterSheets'
        },
        statExtra: (items) => {
            let totalDownloads = 0;
            items.forEach(item => {
                totalDownloads += parseInt(item.dataset.downloads) || 0;
            });
            const el = document.querySelector('#statDownloads');
            if (el) el.textContent = totalDownloads;
        }
    },

    {
        itemSelector: '.media-item',
        typeAttribute: 'type',
        typeMap: {
            image: '#statImages',
            video: '#statVideos'
        },
        statStorageId: '#statStorage',
        filterMap: {
            all: '#filterAll',
            image: '#filterImages',
            video: '#filterVideos'
        },
        statExtra: (items) => {
            const now = new Date();
            const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

            let recent = 0;
            items.forEach(item => {
                const dateStr = item.dataset.date;
                if (dateStr && new Date(dateStr) >= oneWeekAgo) {
                    recent++;
                }
            });

            const el = document.querySelector('#statRecent');
            if (el) el.textContent = recent;
        }
    },

    {
        itemSelector: '.blog-item',
        typeAttribute: 'status',
        typeMap: {
            published: '#statPublished',
            draft: '#statDrafts',
            scheduled: '#statScheduled',
            archived: '#statArchived'
        },
        statTotalId: '#statTotalPosts'
    }
];

function initializeStats() {
    statsConfigs.forEach(config => {
        if (document.querySelector(config.itemSelector)) {
            updateStats(config);
        }
    });
}

initializeStats();

/*=======================================================================
View toggle
====================================================================*/

// View toggle
function initViewToggle(el) {

    if (!el) return;
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            if (this.dataset.view === 'list') {
                el.classList.add('list-view');
            } else {
                el.classList.remove('list-view');
            }
        });
    });
}
const download = document.getElementById('downloadsGrid');
const media = document.getElementById('mediaGrid');
const blog = document.getElementById('blogGrid');

initViewToggle(download);
initViewToggle(media);
initViewToggle(blog);


/*=======================================================================
INIT FILTERS
=======================================================================*/
function initFilters(config) {
    const {
        tabSelector = '.filter-tab',
        itemSelector,
        filterAttribute,      // ex: 'type' ou 'status'
        filterMap             // { pdf: 'pdf', doc: 'doc' }
    } = config;

    const tabs = document.querySelectorAll(tabSelector);
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {

            // Active state
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const filterText = this.textContent.trim().toLowerCase();

            document.querySelectorAll(itemSelector).forEach(item => {

                if (filterText.includes('all')) {
                    item.style.display = '';
                    return;
                }

                const itemValue = item.dataset[filterAttribute];

                let match = false;

                Object.keys(filterMap).forEach(key => {
                    if (filterText.includes(key)) {
                        match = itemValue === filterMap[key];
                    }
                });

                item.style.display = match ? '' : 'none';
            });
        });
    });
}

const filterConfigs = [
    {
        itemSelector: '.media-item',
        filterAttribute: 'type',
        filterMap: { image: 'image', video: 'video' }
    },
    {
        itemSelector: '.download-item',
        filterAttribute: 'type',
        filterMap: { pdf: 'pdf', doc: 'doc', spread: 'xls' }
    },
    {
        itemSelector: '.blog-item',
        filterAttribute: 'status',
        filterMap: { pub: 'published', draft: 'draft', sched: 'scheduled', arch: 'archived' }
    },
    {
        itemSelector: '#generic-table tbody tr',
        filterAttribute: 'status',
        filterMap: { publish: 'published', draft: 'draft' }
    }
];

function initializeFilters() {
    filterConfigs.forEach(config => {
        if (document.querySelector(config.itemSelector)) {
            initFilters(config);
        }
    });
}

initializeFilters();
