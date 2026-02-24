// Drag and Drop functionality for page content editor

let draggedElement = null;

// Make existing content blocks draggable
function makeBlocksDraggable() {
    const contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach(block => {
        block.draggable = true;
        block.addEventListener('dragstart', handleBlockDragStart);
        block.addEventListener('dragend', handleBlockDragEnd);
    });
}

// Initialize drag and drop for sidebar elements
function initializeDragAndDrop() {
    const draggableElements = document.querySelectorAll('[draggable="true"]');
    const dropZone = document.querySelector('.add-element-zone');
    
    // Draggable items from sidebar
    draggableElements.forEach(element => {
        element.addEventListener('dragstart', handleDragStart);
        element.addEventListener('dragend', handleDragEnd);
    });

    // Drop zone
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
    dropZone.addEventListener('dragleave', handleDragLeave);

    // Content blocks area
    makeBlocksDraggable();
}

// Handle drag start for sidebar elements
function handleDragStart(e) {
    draggedElement = this;
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/html', this.textContent);
    this.style.opacity = '0.6';
}

// Handle drag end for sidebar elements
function handleDragEnd(e) {
    this.style.opacity = '1';
    document.querySelector('.add-element-zone').style.borderColor = '#dee2e6';
}

// Handle drag start for content blocks
function handleBlockDragStart(e) {
    draggedElement = this;
    e.dataTransfer.effectAllowed = 'move';
    this.style.opacity = '0.5';
}

// Handle drag end for content blocks
function handleBlockDragEnd(e) {
    this.style.opacity = '1';
}

// Handle drag over
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    this.style.borderColor = '#19599C' ;
    this.style.borderWidth = '3px';
    return false;
}

// Handle drag leave
function handleDragLeave(e) {
    this.style.borderColor = '#dee2e6';
}

// Handle drop
function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    
    this.style.borderColor = '#dee2e6';
    
    if (draggedElement) {
        const elementName = draggedElement.textContent.trim();
        const newBlock = createNewBlock(elementName);
        
        // Insert before the drop zone
        this.parentNode.insertBefore(newBlock, this);
        
        // Make the new block draggable and enable content block features
        makeBlocksDraggable();
        attachBlockControls(newBlock);
    }
    
    return false;
}

// Create a new content block
function createNewBlock(elementName) {
    const blockId = 'block-' + Date.now();
    const block = document.createElement('div');
    block.className = 'content-block card mb-3';
    block.draggable = true;
    
    block.innerHTML = `
        <div class="card-header d-flex justify-content-between align-items-center p-3">
            <div class="d-flex align-items-center gap-2">
                <span class="block-name fw-bold">${elementName}</span>
            </div>
            <div class="block-controls d-flex gap-2">
                <div class="form-check form-switch m-0">
                    <input class="form-check-input" type="checkbox" id="${blockId}-toggle" checked>
                </div>
                <button class="btn btn-sm btn-outline-secondary" data-bs-toggle="collapse" data-bs-target="#${blockId}-options">
                    <i class="bi bi-chevron-down"></i>
                </button>
                <button class="btn btn-sm btn-outline-secondary delete-block-btn">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
        <div class="card-body collapse show" id="${blockId}-options">
            <p class="text-muted">Content for ${elementName}</p>
        </div>
    `;
    
    block.id = blockId;
    return block;
}

// Attach event listeners to block controls
function attachBlockControls(block) {
    const deleteBtn = block.querySelector('.delete-block-btn');
    const toggle = block.querySelector('input[type="checkbox"]');
    
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function() {
            if (confirm('Remove element? Must always ask user is sure.')) {
                block.remove();
            }
        });
    }
    
    if (toggle) {
        toggle.addEventListener('change', function() {
            block.style.opacity = this.checked ? '1' : '0.5';
        });
    }
}

// Attach controls to existing blocks
function attachControlsToExistingBlocks() {
    const blocks = document.querySelectorAll('.content-block');
    blocks.forEach(block => {
        attachBlockControls(block);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeDragAndDrop();
    attachControlsToExistingBlocks();
    
    // Button event listeners
    const showPreviewBtn = document.getElementById('showPreviewBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const saveChangesBtn = document.getElementById('saveChangesBtn');
    const publishBtn = document.getElementById('publishBtn');
    const revertBtn = document.getElementById('revertBtn');
    
    if (showPreviewBtn) {
        showPreviewBtn.addEventListener('click', function() {
            alert('Preview functionality to be implemented');
        });
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            if (confirm('Discard changes?')) {
                location.reload();
            }
        });
    }
    
    if (saveChangesBtn) {
        saveChangesBtn.addEventListener('click', function() {
            alert('Changes saved (functionality to be implemented)');
        });
    }
    
    if (publishBtn) {
        publishBtn.addEventListener('click', function() {
            alert('Publishing... (functionality to be implemented)');
        });
    }
    
    if (revertBtn) {
        revertBtn.addEventListener('click', function() {
            if (confirm('Revert non-public changes?')) {
                alert('Reverted (functionality to be implemented)');
            }
        });
    }
});
