let currentEditRow = null;
let currentArchiveRow = null;

// Edit button click handler
document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', function () {
        const row = this.closest('tr');
        currentEditRow = row;

        // Populate the edit form
        document.getElementById('edit-job-id').value = row.dataset.jobId;
        document.getElementById('edit-title').value = row.dataset.title;
        document.getElementById('edit-lang').value = row.dataset.lang;
        document.getElementById('edit-location').value = row.dataset.location;
        document.getElementById('edit-home-office').value = row.dataset.homeOffice;
        document.getElementById('edit-description').value = row.dataset.description;
        document.getElementById('edit-start').value = row.dataset.start;
        document.getElementById('edit-email').value = row.dataset.email;
        document.getElementById('edit-until').value = row.dataset.valid;

        // Set checkboxes for sites
        const sites = row.dataset.sites.split(',');
        document.getElementById('edit-site-dsr24').checked = sites.includes('dsr24.de');
        document.getElementById('edit-site-kfzvs').checked = sites.includes('kfzvs.de');
        document.getElementById('edit-site-dsgutachten').checked = sites.includes('dsgutachten.de');
    });
});


// Duplicate button click handler
document.querySelectorAll('.btn-duplicate').forEach(btn => {
    btn.addEventListener('click', function () {
        const row = this.closest('tr');

        // Open create modal with pre-filled data
        const createModal = new bootstrap.Modal(document.getElementById('createJobModal'));

        // Get form fields in create modal
        const createForm = document.querySelector('#createJobModal .job-form');
        const inputs = createForm.querySelectorAll('input, select, textarea');

        // Pre-fill some fields (simulated)
        showToast('Job offer duplicated! Edit the new copy in the form.');
        createModal.show();
    });
});

// Save edited job
function saveJob() {
    if (!currentEditRow) return;

    // Update row data attributes
    currentEditRow.dataset.title = document.getElementById('edit-title').value;
    currentEditRow.dataset.lang = document.getElementById('edit-lang').value;
    currentEditRow.dataset.location = document.getElementById('edit-location').value;
    currentEditRow.dataset.homeOffice = document.getElementById('edit-home-office').value;
    currentEditRow.dataset.description = document.getElementById('edit-description').value;
    currentEditRow.dataset.start = document.getElementById('edit-start').value;
    currentEditRow.dataset.email = document.getElementById('edit-email').value;

    // Update visible cells
    currentEditRow.querySelector('.job-title').textContent = document.getElementById('edit-title').value;
    currentEditRow.querySelector('.job-lang').textContent = document.getElementById('edit-lang').value.toUpperCase();
    currentEditRow.querySelector('.job-lang').className = 'job-lang badge-lang-' + document.getElementById('edit-lang').value;
    currentEditRow.children[2].textContent = document.getElementById('edit-location').value;

    // Update home office badge
    const homeOffice = document.getElementById('edit-home-office').value;
    const homeOfficeBadge = currentEditRow.querySelector('[class^="badge-"]');
    homeOfficeBadge.className = '';
    homeOfficeBadge.classList.add('badge-' + homeOffice.replace(' ', '-'));
    homeOfficeBadge.textContent = homeOffice === 'not-possible' ? 'Not possible' :
        homeOffice === 'partly' ? 'Partly' : 'Remote';

    // Update sites
    const sites = [];
    if (document.getElementById('edit-site-dsr24').checked) sites.push('dsr24.de');
    if (document.getElementById('edit-site-kfzvs').checked) sites.push('kfzvs.de');
    if (document.getElementById('edit-site-dsgutachten').checked) sites.push('dsgutachten.de');
    currentEditRow.dataset.sites = sites.join(',');

    const sitesCell = currentEditRow.querySelector('.sites-badges');
    sitesCell.innerHTML = sites.map(s => `<span class="site-badge">${s}</span>`).join('');

    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('editJobModal')).hide();
    showToast('Job offer updated successfully!');
}



// Filter tabs functionality
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Show/hide rows based on filter (simulated)
        const filter = this.textContent.trim().toLowerCase();
        document.querySelectorAll('#jobsTable tbody tr').forEach(row => {
            if (filter === 'all' || filter.startsWith('all')) {
                row.style.display = '';
            } else if (filter.startsWith('archived')) {
                row.style.display = row.style.opacity === '0.5' ? '' : 'none';
            } else {
                row.style.display = row.style.opacity === '0.5' ? 'none' : '';
            }
        });
    });
});


function updateJobsStats() {
    updateStats({
        itemSelector: '.job-item',
        typeAttribute: 'status',
        typeMap: {
            active: '#statActive',
            draft: '#statDraft',
            closed: '#statClosed'
        },
        statTotalId: '#statTotalJobs'
    });
}

function createJob() {
    bootstrap.Modal
        .getInstance(document.getElementById('createJobModal'))
        .hide();

    showToast('New job offer created successfully!');
    updateJobsStats();
}

// Auto-open modal if #new hash is present
if (window.location.hash === '#new') {
    window.addEventListener('load', function () {
        const modal = new bootstrap.Modal(document.getElementById('createJobModal'));
        modal.show();
        history.replaceState(null, '', window.location.pathname);
    });
}