let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

function startAutoSlide() {
    setInterval(nextSlide, 3000); // 1000 milissegundos = 1 segundos
}

startAutoSlide();

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerHTML = '🤍';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.querySelector('.emoji-rain').appendChild(emoji);
    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

setInterval(createEmoji, 300);

function updateTimer() {
    const startDate = new Date('2024-11-30'); // Defina a data inicial aqui
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('time-together').innerText = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer();