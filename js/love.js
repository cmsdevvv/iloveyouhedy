const openBtn = document.getElementById('openModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const closeBtn = modalBackdrop.querySelector('.close-btn');
const lettersContainer = modalBackdrop.querySelector('.letters-container');
const btnLeft = modalBackdrop.querySelector('.arrow-left');
const btnRight = modalBackdrop.querySelector('.arrow-right');
const letters = modalBackdrop.querySelectorAll('.letter');


openBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('active');
    lettersContainer.focus();
    playAudioForVisibleLetter();
});

    
closeBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('active');
    stopAllAudio();
    openBtn.focus();
});


modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) {
    modalBackdrop.classList.remove('active');
    stopAllAudio();
    openBtn.focus();
    }
});


window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
    modalBackdrop.classList.remove('active');
    stopAllAudio();
    openBtn.focus();
    }
});

const scrollStep = () => {
    const letter = lettersContainer.querySelector('.letter');
    const style = window.getComputedStyle(lettersContainer);
    const gap = 24; 
    return letter.offsetWidth + gap;
}

btnLeft.addEventListener('click', () => {
    lettersContainer.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    lettersContainer.scrollBy({ left: scrollStep(), behavior: 'smooth' });
});


function stopAllAudio() {
    letters.forEach(letter => {
    const audio = letter.querySelector('audio');
    audio.pause();
    audio.currentTime = 0;
    });
}

function playAudioForVisibleLetter() {
    
    const containerRect = lettersContainer.getBoundingClientRect();

    let maxVisibleWidth = 0;
    let mostVisibleLetter = null;

    letters.forEach(letter => {
    const rect = letter.getBoundingClientRect();
    const visibleWidth = Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left);
    if (visibleWidth > maxVisibleWidth && visibleWidth > 0) {
        maxVisibleWidth = visibleWidth;
        mostVisibleLetter = letter;
    }
    });

    if (mostVisibleLetter) {
    stopAllAudio();
    const audio = mostVisibleLetter.querySelector('audio');
    if (audio) {
        audio.play().catch(() => {
        });
    }
    }
}

let scrollTimeout;
lettersContainer.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(playAudioForVisibleLetter, 150);
});
