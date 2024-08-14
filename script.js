document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad 1: Añadir un botón que despliegue un mensaje
    const button = document.createElement('button');
    button.textContent = 'Mostrar Mensaje';
    button.style.margin = '20px';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('¡YA LE SE AL DESARROLLO LPTMDR!');
    });

    // Funcionalidad 2: Resaltar el menú de navegación al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Funcionalidad 3: Agrandar el texto al pasar el cursor
    const textElements = document.querySelectorAll('.text-content, .h1, .h3, p, .nav-list li');

    textElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('enlarge-text');
        });
        element.addEventListener('mouseout', () => {
            element.classList.remove('enlarge-text');
        });
    });

    // Funcionalidad 4: Animación de aparición de imagen cada vez que vuelve a entrar en la vista
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    });

    const image = document.querySelector('.image-container');
    if (image) {
        observer.observe(image);
    }
});

