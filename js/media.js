
let currentEditItem = null;

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initDropZone();
    initMediaItems();
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
    const previewImg = document.getElementById('previewImage');
    const previewFilename = document.getElementById('previewFilename');
    const previewSize = document.getElementById('previewSize');

    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        previewImg.src = 'https://via.placeholder.com/100x100?text=Video';
    }

    previewFilename.textContent = file.name;
    previewSize.textContent = formatFileSize(file.size);
    preview.style.display = 'block';
    document.getElementById('dropZone').style.display = 'none';
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// Media Items Interaction
function initMediaItems() {
    // Edit buttons
    document.querySelectorAll('.btn-edit-media').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const item = this.closest('.media-item');
            currentEditItem = item;
            populateEditModal(item);
        });
    });

    // Preview buttons
    document.querySelectorAll('.btn-preview').forEach(btn => {
        btn.addEventListener('click', function (e) {
            
            const item = this.closest('.media-item');
            openPreview(item);
            e.stopPropagation();
        });
    });

}

function populateEditModal(item) {
    const img = item.querySelector('img');
    document.getElementById('editPreviewImage').src = img.src;
    document.getElementById('editFilename').textContent = item.dataset.filename;
    document.getElementById('editResolution').textContent = item.dataset.resolution;
    document.getElementById('editSize').textContent = item.dataset.size;
    document.getElementById('editFormat').textContent = item.dataset.filename.split('.').pop().toUpperCase();
    document.getElementById('editDate').textContent = item.dataset.date;
    document.getElementById('editId').textContent = item.dataset.id;

    // SEO URL
    const caption = item.dataset.caption.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
    document.getElementById('editSeoUrl').textContent = `/images/${caption}-${item.dataset.id}_640.avif`;

    document.getElementById('edit-caption-en').value = item.dataset.caption;
    document.getElementById('edit-desc-en').value = item.dataset.description || '';
    document.getElementById('edit-copyright').value = item.dataset.copyright || '';
    document.getElementById('edit-internal').value = item.dataset.internal || '';
    document.getElementById('edit-noindex').checked = item.dataset.noindex === 'true';

    // Show video poster section if video
    const posterSection = document.getElementById('videoPosterSection');
    posterSection.style.display = item.dataset.type === 'video' ? 'block' : 'none';
}

function openPreview(item) {
    const img = item.querySelector('img');
    document.getElementById('fullPreviewImage').src = img.src.replace('w=300&h=200', 'w=1200');
    document.getElementById('previewCaption').textContent = item.dataset.caption;
    document.getElementById('previewResolution').textContent = item.dataset.resolution;

    const modal = new bootstrap.Modal(document.getElementById('previewModal'));
    modal.show();
}




// Save media
function saveMedia() {
    if (!currentEditItem) return;

    // Update data attributes
    currentEditItem.dataset.caption = document.getElementById('edit-caption-en').value;
    currentEditItem.dataset.description = document.getElementById('edit-desc-en').value;
    currentEditItem.dataset.copyright = document.getElementById('edit-copyright').value;
    currentEditItem.dataset.internal = document.getElementById('edit-internal').value;
    currentEditItem.dataset.noindex = document.getElementById('edit-noindex').checked;

    // Update visible caption
    currentEditItem.querySelector('.media-caption').textContent = document.getElementById('edit-caption-en').value;

    bootstrap.Modal.getInstance(document.getElementById('editMediaModal')).hide();
    showToast('Media metadata updated successfully!');
}


// Upload media
function uploadMedia() {
    const preview = document.getElementById('uploadPreview');
    if (preview.style.display === 'none') {
        alert('Please select a file to upload.');
        return;
    }

    // Simulate upload (would be API call in real implementation)
    bootstrap.Modal.getInstance(document.getElementById('uploadMediaModal')).hide();

    // Reset form
    preview.style.display = 'none';
    document.getElementById('dropZone').style.display = '';
    document.getElementById('uploadMediaForm').reset();

    showToast('Media file uploaded successfully! AVIF versions are being generated.');
    updateStats({
    itemSelector: '.media-item',
    typeAttribute: 'type',
    statTotalId: 'filterAll',
    statStorageId: 'statStorage',
    extraCounters: [
        { type: 'image', elementId: 'statImages' },
        { type: 'video', elementId: 'statVideos' }
    ],
    recent: {
        elementId: 'statRecent',
        dateAttribute: 'date'
    }
});
}

