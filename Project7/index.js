// Get references to HTML elements
const linkInput = document.getElementById('linkInput');
const addButton = document.getElementById('addButton');
const linkList = document.getElementById('linkList');
const removeButton = document.getElementById('removeButton');
const updateButton = document.getElementById('updateButton');
const deleteButton = document.getElementById('deleteButton');

// Event listener to add a link
addButton.addEventListener('click', () => {
    const link = linkInput.value;
    if (link.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = link;
        linkList.appendChild(li);
        linkInput.value = '';
    }
});

// Event listener to remove a selected link
removeButton.addEventListener('click', () => {
    const selectedLinks = linkList.querySelectorAll('li');
    selectedLinks.forEach((link) => {
        if (link.classList.contains('selected')) {
            link.remove();
        }
    });
});

// Event listener to update the selected link
updateButton.addEventListener('click', () => {
    const selectedLinks = linkList.querySelectorAll('li');
    selectedLinks.forEach((link) => {
        if (link.classList.contains('selected')) {
            const updatedLink = prompt('Update the link:', link.textContent);
            if (updatedLink !== null) {
                link.textContent = updatedLink;
            }
        }
    });
});

// Event listener to mark a link for deletion
linkList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI') {
        target.classList.toggle('selected');
    }
});

// Event listener to delete all selected links
deleteButton.addEventListener('click', () => {
    const selectedLinks = linkList.querySelectorAll('.selected');
    selectedLinks.forEach((link) => {
        link.remove();
    });
});
