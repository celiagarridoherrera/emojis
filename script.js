const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('hidden')) {
            card.classList.remove('hidden');
            card.computedStyleMap.pointerEvents = 'auto';
        } else {
            card.classList.add('hidden');
            card.style.pointerEvents = 'hidden';
        }
    });
});