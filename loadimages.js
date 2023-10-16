// loadImages.js
function populateImageGrid(folderName) {
    const imageGrid = document.getElementById('imageGrid');
    let imageIndex = 1;
    const extensions = ['webp', 'JPEG', 'png', 'PNG'];
    let currentExtensionIndex = 0;

    function addImageToGrid() {
        const currentExtension = extensions[currentExtensionIndex];
        const imageName = `photo${imageIndex}.${currentExtension}`;
        const img = new Image();

        img.onload = function() {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.backgroundImage = `url('${folderName}/${imageName}')`;
            imageGrid.appendChild(gridItem);

            imageIndex++;
            addImageToGrid();
        };

        img.onerror = function() {
            if (currentExtensionIndex < extensions.length - 1) {
                currentExtensionIndex++;
                imageIndex = 1;
                addImageToGrid();
            } else {
                console.log(`Failed to load image: ${folderName}/${imageName}`);
            }
        };

        img.src = `${folderName}/${imageName}`;
    }

    addImageToGrid();
}
