
let currentEditItem = null;

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initDropZone();
    initDownloadItems();
});

// Drag & Drop Zone
function initDropZone() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');

    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}

function handleFiles(files) {
    if (files.length === 0) return;

    const file = files[0];
    const preview = document.getElementById('uploadPreview');
    const previewIcon = document.getElementById('previewIcon');
    const previewFilename = document.getElementById('previewFilename');
    const previewSize = document.getElementById('previewSize');

    // Set icon based on file type
    const ext = file.name.split('.').pop().toLowerCase();
    let iconClass = 'bi-file-earmark';
    if (ext === 'pdf') iconClass = 'bi-file-earmark-pdf-fill';
    else if (['doc', 'docx'].includes(ext)) iconClass = 'bi-file-earmark-word-fill';
    else if (['xls', 'xlsx'].includes(ext)) iconClass = 'bi-file-earmark-excel-fill';
    else if (ext === 'zip') iconClass = 'bi-file-earmark-zip-fill';
    else if (ext === 'txt') iconClass = 'bi-file-earmark-text-fill';

    previewIcon.innerHTML = `<i class="bi ${iconClass}"></i>`;
    previewFilename.textContent = file.name;
    previewSize.textContent = formatFileSize(file.size);
    preview.style.display = 'block';
    document.getElementById('dropZone').style.display = 'none';

    // Auto-fill title from filename
    const titleFromFile = file.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
    document.getElementById('upload-title-de').value = titleFromFile;
    document.getElementById('upload-title-en').value = titleFromFile;
}

function removeUploadPreview() {
    document.getElementById('uploadPreview').style.display = 'none';
    document.getElementById('dropZone').style.display = '';
    document.getElementById('fileInput').value = '';
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// Download Items Interaction
function initDownloadItems() {
    // Edit buttons
    document.querySelectorAll('.btn-edit-download').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const item = this.closest('.download-item');
            currentEditItem = item;
            populateEditModal(item);
        });
    });

    // Download buttons
    document.querySelectorAll('.btn-download-file').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const item = this.closest('.download-item');
            simulateDownload(item);
        });
    });
}

function populateEditModal(item) {
    const type = item.dataset.type;
    const editIcon = document.getElementById('editFileIcon');

    // Set icon based on type
    let iconClass = 'bi-file-earmark';
    if (type === 'pdf') iconClass = 'bi-file-earmark-pdf-fill';
    else if (type === 'doc') iconClass = 'bi-file-earmark-word-fill';
    else if (type === 'xls') iconClass = 'bi-file-earmark-excel-fill';

    editIcon.innerHTML = `<i class="bi ${iconClass}"></i>`;
    editIcon.className = `edit-file-icon file-icon-${type}`;

    document.getElementById('editFilename').textContent = item.dataset.filename;
    document.getElementById('editSize').textContent = item.dataset.size;
    document.getElementById('editType').textContent = type.toUpperCase();
    document.getElementById('editDownloadCount').textContent = item.dataset.downloads;
    document.getElementById('editDate').textContent = item.dataset.date;
    document.getElementById('editId').textContent = item.dataset.id;

    // SEO URL
    const slug = item.dataset.title.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
    document.getElementById('editSeoUrl').textContent = `/downloads/${slug}-${item.dataset.id}.${type}`;

    document.getElementById('edit-title-en').value = item.dataset.title;
    document.getElementById('edit-desc-en').value = item.dataset.description || '';
    document.getElementById('edit-category').value = item.dataset.category || '';

    // Default to dsr24.de checked
    document.getElementById('edit-site-dsr24').checked = true;
}

function simulateDownload(item) {
    // Increment download count
    let count = parseInt(item.dataset.downloads) || 0;
    count++;
    item.dataset.downloads = count;
    item.querySelector('.meta-downloads').innerHTML = `<i class="bi bi-download"></i> ${count}`;

    showToast(`Downloading: ${item.dataset.filename}`);
    updateStats({
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
            document.querySelector('#statDownloads').textContent = totalDownloads;
        }
    });
}
// Save download
function saveDownload() {
    if (!currentEditItem) return;

    // Update data attributes
    currentEditItem.dataset.title = document.getElementById('edit-title-en').value;
    currentEditItem.dataset.description = document.getElementById('edit-desc-en').value;
    currentEditItem.dataset.category = document.getElementById('edit-category').value;

    // Update visible title
    currentEditItem.querySelector('.download-title').textContent = document.getElementById('edit-title-en').value;

    bootstrap.Modal.getInstance(document.getElementById('editDownloadModal')).hide();
    showToast('File metadata updated successfully!');
}

// Upload download
function uploadDownload() {
    const preview = document.getElementById('uploadPreview');
    if (preview.style.display === 'none') {
        alert('Please select a file to upload.');
        return;
    }

    bootstrap.Modal.getInstance(document.getElementById('uploadDownloadModal')).hide();

    // Reset form
    preview.style.display = 'none';
    document.getElementById('dropZone').style.display = '';
    document.getElementById('uploadDownloadForm').reset();

    showToast('File uploaded successfully!');
    updateStats({
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
            document.querySelector('#statDownloads').textContent = totalDownloads;
        }
    });
}
