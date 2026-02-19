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

        const id= currentItem.dataset.id || '';

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

==========================================================================*/

// Show toast notification
function showToast(message) {
    document.getElementById('toastMessage').textContent = message;
    const toast = new bootstrap.Toast(document.getElementById('successToast'));
    toast.show();
}
/*==========================================================================

==========================================================================*/

// Update stats (simulated)
function updateStats() {
    // This would normally fetch from backend
    // For demo, just animate the number
    const activeCount = document.querySelector('.stat-card-green .stat-value');
    activeCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
        activeCount.style.transform = 'scale(1)';
    }, 300);
}

