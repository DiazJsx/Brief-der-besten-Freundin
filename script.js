// Theme toggle functionality
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = themeToggle.querySelector('svg');
const overlay = document.querySelector('.overlay');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Card click functionality
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const type = card.dataset.type;
        const message = document.createElement('div');
        message.className = 'floating-message';
        overlay.classList.add('active');
        
        if (type === 'special') {
            message.textContent = 'Link especial recibido! Redirigiendo...';
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.style.animation = 'fadeOut 0.3s forwards';
                overlay.classList.remove('active');
                setTimeout(() => {
                    document.body.removeChild(message);
                    window.location.href = 'https://vm.tiktok.com/ZMktgPyhN/';
                }, 300);
            }, 2000);
        } else {
            message.innerHTML = `
                <h3 style="margin-bottom: 1rem;">Carta para alguien especial (tú)🦦</h3>
                <p style="line-height: 1.6; margin-bottom: 1rem;">
                    Hola Valeria,<br><br>
                    En este 14 de febrero, solo quería enviarte un mensaje para disculparme contigo por mi actitudes tan malos que tuve contigo.
                    bueno se que con esto noma no se arregla las cosas y qusiera salir contigo un dia que puedas ah osea los 4.
                    puedes pensarlo, si ya no me quieres en tu vida lo entendere pero quisiera al menos que perdones a Pedro y Romulo solamente son unos babosos que me siguieron y no debieron.
                </p>
                <button onclick="closeMessage(this)">
                    Cerrar
                </button>
            `;
            document.body.appendChild(message);
        }
    });
});

function closeMessage(button) {
    const message = button.closest('.floating-message');
    message.style.animation = 'fadeOut 0.3s forwards';
    overlay.classList.remove('active');
    setTimeout(() => {
        document.body.removeChild(message);
    }, 300);
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();