// ==================== GESTION DU FORMULAIRE DE CONTACT ====================

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi réel du formulaire
    
    // Récupération du bouton de soumission et sauvegarde du texte original
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Animation du bouton pendant l'envoi
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true; // Désactive le bouton pendant l'envoi
    
    // Simulation d'un envoi de formulaire (2 secondes)
    setTimeout(() => {
        // Animation de succès
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
        submitBtn.style.backgroundColor = '#10B981'; // Couleur verte pour le succès
        
        // Reset automatique après 3 secondes
        setTimeout(() => {
            submitBtn.innerHTML = originalText; // Restaure le texte original
            submitBtn.disabled = false; // Réactive le bouton
            submitBtn.style.backgroundColor = ''; // Restaure la couleur originale
            this.reset(); // Vide tous les champs du formulaire
        }, 3000);
    }, 2000);
});

// Indicateur de progression de lecture
function createReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 5px;
        background: linear-gradient(90deg, #3B82F6, #60A5FA);
        z-index: 10000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialise la barre de progression
createReadingProgress();