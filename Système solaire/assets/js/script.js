document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('closeLightbox');
    const clickableImg = document.querySelector('.clickableImg');

    const allClickableImages = document.querySelectorAll('.clickableImg');

    // Ouvre la lightbox
    allClickableImages.forEach(img => {
        img.addEventListener('click', () => {
            const fullSrc = img.getAttribute('data-full');
            lightboxImg.src = fullSrc || img.src; // au cas où data-full serait absent
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // bloque le scroll de fond
        });
    });

    // Ferme la lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
        lightboxImg.src = ''; // libère la mémoire
    };

    // Fermeture avec le ×
    closeBtn.addEventListener('click', closeLightbox);

    // Fermeture en cliquant sur le fond noir
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Fermeture avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });

});