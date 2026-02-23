let currentEditItem = null;
let currentDeleteItem = null;
// Initialize
document.addEventListener('DOMContentLoaded', function () {

    initBlogItems();

});
function initBlogItems() {

    // EDIT BUTTON
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const item = this.closest('.blog-item');
            currentEditItem = item;
            populateBlogEditModal(item);

            const modal = new bootstrap.Modal(document.getElementById('editBlogModal'));
            modal.show();
        });
    });

    // PREVIEW BUTTON
    document.querySelectorAll('.btn-preview').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const item = this.closest('.blog-item');
            openBlogPreview(item);
        });
    });


}
function populateBlogEditModal(item) {

    const title = item.querySelector('.blog-title').textContent;
    const excerpt = item.querySelector('.blog-excerpt').textContent;
    const image = item.querySelector('img').src;

    document.getElementById('edit-blog-title-en').value = title;
    document.getElementById('edit-blog-excerpt').value = excerpt;
    document.getElementById('edit-blog-author').value = item.dataset.author || '';
    document.getElementById('edit-blog-date').value = item.dataset.date || '';
    document.getElementById('edit-blog-status').value = item.dataset.status || 'draft';

    // ID + slug
    document.getElementById('editBlogId').textContent = '#' + item.dataset.id;

    const slug = title.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');

    document.getElementById('editBlogSlug').textContent = `/blog/${slug}`;

}

function openBlogPreview(item) {

    const title = item.querySelector('.blog-title').textContent;
    const excerpt = item.querySelector('.blog-excerpt').textContent;
    const image = item.querySelector('img').src;

    document.getElementById('previewBlogTitle').textContent = title;
    document.getElementById('previewBlogAuthor').textContent = item.dataset.author || '';
    document.getElementById('previewBlogDate').textContent = item.dataset.date || '';
    document.getElementById('previewBlogImage').src = image;

    document.getElementById('previewBlogContent').innerHTML = `
        <p>${excerpt}</p>
        <p><em>This is a preview version of the full article.</em></p>
    `;

    const modal = new bootstrap.Modal(document.getElementById('previewBlogModal'));
    modal.show();
}


// Auto-open modal if #new hash is present
if (window.location.hash === '#new') {
    window.addEventListener('load', function () {
        const modal = new bootstrap.Modal(document.getElementById('newBlogModal'));
        modal.show();
        history.replaceState(null, '', window.location.pathname);
    });
}