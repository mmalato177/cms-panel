document.addEventListener('DOMContentLoaded', function () {
    initFAQitems();


});

function initFAQitems() {

    document.querySelectorAll('.btn-edit').forEach(btn => {

        btn.addEventListener('click', function () {

            const row = this.closest('tr');
            currentEditItem = row;

            populateFaqEditModal(row);

        });

    });

}

function populateFaqEditModal(row) {

    // INFO
    document.getElementById('editFaqId').textContent = row.dataset.id;
    document.getElementById('editFaqCreated').textContent = row.dataset.date;

    // QUESTION
    document.getElementById('edit-faq-question-de').value = row.dataset.question;
    document.getElementById('edit-faq-question-en').value = row.dataset.question;

    // CATEGORY
    document.getElementById('edit-faq-category').value = row.dataset.category;

    // STATUS
    document.getElementById('edit-faq-status').value = row.dataset.status;

    // DATE
    document.getElementById('edit-faq-date').value = row.dataset.date;

    // TYPE
    document.getElementById('edit-faq-type').value = row.dataset.type;

    // ANSWER TEXT
    document.getElementById('edit-faq-answer-text').value = row.dataset.answer || '';

    // VIDEO
    document.getElementById('edit-faq-video-url').value = row.dataset.mediaId || '';

    toggleFaqAnswerFields(row.dataset.type);

}

document.getElementById('edit-faq-type').addEventListener('change', function () {
    toggleFaqAnswerFields(this.value);
});

function toggleFaqAnswerFields(type) {

    const textWrapper = document.getElementById('edit-faq-text-wrapper');
    const videoWrapper = document.getElementById('edit-faq-video-wrapper');

    if (type === 'video') {
        textWrapper.classList.add('d-none');
        videoWrapper.classList.remove('d-none');
    } else {
        textWrapper.classList.remove('d-none');
        videoWrapper.classList.add('d-none');
    }

}

// Auto-open modal if #new hash is present
if (window.location.hash === '#new') {
    window.addEventListener('load', function () {
        const modal = new bootstrap.Modal(document.getElementById('newFaqModal'));
        modal.show();
        history.replaceState(null, '', window.location.pathname);
    });
}