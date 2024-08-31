document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    
    // Example to show the popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 3000);
    
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Optional: Close popup when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
