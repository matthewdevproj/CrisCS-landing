import 'flowbite';

document.addEventListener('astro:page-load', () => {
  // Re-inicializa Flowbite en cada cambio de ruta
    if (window.initFlowbite) window.initFlowbite();
});
