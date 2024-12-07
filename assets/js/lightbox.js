document.querySelectorAll('.lightbox-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const lightbox = document.querySelector('#lightbox');
        const lightboxContent = document.querySelector('.lightbox-content');
        
        // Set the source of the large image in the lightbox
        lightboxContent.src = this.querySelector('img').src;
        
        // Show the lightbox
        lightbox.classList.add('active');
    });
});

// Close lightbox when clicking on the close button
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('#lightbox').classList.remove('active');
});