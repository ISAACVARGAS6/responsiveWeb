// Eventos del DOM - Sitio Web Responsivo

// === 1. EVENTO CLICK - Botón de Inicio (Hero Section) ===
document.getElementById('btnInicio').addEventListener('click', function() {
    // Redirige a la sección de servicios
    document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
    
    // Mostrar mensaje en consola
    console.log('✓ Botón "Explorar" clickeado');
});

// === 2. EVENTOS CLICK - Contador ===
let contador = 0;

document.getElementById('incrementar').addEventListener('click', function() {
    contador++;
    actualizarContador();
    console.log('✓ Contador incrementado:', contador);
});

document.getElementById('decrementar').addEventListener('click', function() {
    contador--;
    actualizarContador();
    console.log('✓ Contador decrementado:', contador);
});

document.getElementById('reiniciar').addEventListener('click', function() {
    contador = 0;
    actualizarContador();
    console.log('✓ Contador reiniciado');
});

function actualizarContador() {
    const elemento = document.getElementById('contador');
    elemento.textContent = contador;
    
    // Agregar animación
    elemento.classList.remove('updated');
    void elemento.offsetWidth; // Trigger reflow
    elemento.classList.add('updated');
}

// === 3. EVENTO SUBMIT - Formulario ===
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envío por defecto
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validar que los campos no estén vacíos
    if (nombre.trim() && email.trim() && mensaje.trim()) {
        // Mostrar alerta de éxito
        mostrarAlerta(`¡Gracias ${nombre}! Tu mensaje ha sido enviado.`, 'success');
        
        // Limpiar formulario
        document.getElementById('formulario').reset();
        
        console.log('✓ Formulario enviado:', { nombre, email, mensaje });
    } else {
        mostrarAlerta('Por favor completa todos los campos.', 'danger');
    }
});

function mostrarAlerta(mensaje, tipo) {
    const alertDiv = document.getElementById('alertForm');
    const claseAlert = tipo === 'success' ? 'alert-success' : 'alert-danger';
    
    alertDiv.innerHTML = `<div class="alert ${claseAlert}" role="alert">${mensaje}</div>`;
    
    // Eliminar alerta después de 3 segundos
    setTimeout(() => {
        alertDiv.innerHTML = '';
    }, 3000);
}

// === 4. EVENTOS MOUSEOVER Y MOUSEOUT - Tarjetas de Servicios ===
document.querySelectorAll('.card-service').forEach((card, index) => {
    card.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f9f9f9';
        console.log(`✓ Mouseover en tarjeta ${index + 1}`);
    });
    
    card.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'white';
    });
});

// === 5. EVENTO CHANGE/INPUT - Búsqueda en tiempo real (ejemplo) ===
const inputNombre = document.getElementById('nombre');
inputNombre.addEventListener('input', function() {
    console.log('✓ Input detectado:', this.value);
});

// === 6. EVENTO CLICK - Paleta de Colores ===
document.querySelectorAll('.color-box').forEach(colorBox => {
    colorBox.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        
        // Remover clase active de otros elementos
        document.querySelectorAll('.color-box').forEach(box => {
            box.classList.remove('active');
        });
        
        // Agregar clase active al clickeado
        this.classList.add('active');
        
        // Mostrar información del color
        mostrarInfoColor(color);
        
        console.log('✓ Color seleccionado:', color);
    });
});

function mostrarInfoColor(color) {
    const colorInfo = document.getElementById('colorInfo');
    colorInfo.innerHTML = `
        <strong>Color seleccionado:</strong> ${color}<br>
        <small>Copiado al portapapeles</small>
    `;
    colorInfo.classList.add('show');
    
    // Copiar a portapapeles
    navigator.clipboard.writeText(color).then(() => {
        console.log('✓ Color copiado al portapapeles:', color);
    });
}

// === 7. EVENTO FOCUS Y BLUR - Campos del Formulario ===
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.opacity = '1';
        console.log('✓ Focus en:', this.id);
    });
    
    input.addEventListener('blur', function() {
        console.log('✓ Blur en:', this.id);
    });
});

// === 8. EVENTO SCROLL - Navbar Sticky ===
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// === 9. EVENTO RESIZE - Detectar cambios de tamaño de ventana ===
window.addEventListener('resize', function() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    
    console.log(`✓ Ventana redimensionada: ${ancho}px x ${alto}px`);
});

// === 10. EVENTO LOAD - Página cargada ===
window.addEventListener('load', function() {
    console.log('✓ Página completamente cargada');
    
    // Animación de entrada para tarjetas
    document.querySelectorAll('.card-service').forEach((card, index) => {
        card.style.animation = `none`;
        card.offsetHeight; // Trigger reflow
        card.style.animation = `fadeInUp 0.6s ease forwards`;
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Agregar animación fadeInUp al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// === 11. EVENTO DOUBLE CLICK - Reiniciar contador con doble click ===
document.getElementById('contador').addEventListener('dblclick', function() {
    contador = 0;
    actualizarContador();
    console.log('✓ Contador reiniciado por doble click');
});

// === 12. EVENTO KEYPRESS - Enviar formulario con Enter ===
document.getElementById('mensaje').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && event.ctrlKey) {
        document.getElementById('formulario').dispatchEvent(new Event('submit'));
    }
});

// === 13. EVENTO CONTEXTMENU - Click derecho en tarjetas ===
document.querySelectorAll('.card-service').forEach(card => {
    card.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        const titulo = this.querySelector('.card-title').textContent;
        console.log('✓ Click derecho detectado en:', titulo);
    });
});

// === 14. EVENTO DRAGSTART Y DRAGEND - Arrastrable (opcional) ===
document.querySelectorAll('.color-box').forEach(box => {
    box.setAttribute('draggable', 'true');
    
    box.addEventListener('dragstart', function() {
        this.style.opacity = '0.5';
        console.log('✓ Drag iniciado');
    });
    
    box.addEventListener('dragend', function() {
        this.style.opacity = '1';
    });
});

// === 15. EVENTO VISIBILITY CHANGE - Detectar si la pestaña está visible ===
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('✓ Pestaña oculta');
    } else {
        console.log('✓ Pestaña visible');
    }
});

console.log('🚀 Sitio web cargado. Abre la consola para ver los eventos del DOM.');
