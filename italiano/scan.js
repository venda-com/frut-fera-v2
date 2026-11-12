(function () {
    'use strict';

    // Bloquear seleção de texto
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    // Bloquear cópia
    document.addEventListener('copy', function (e) {
        e.preventDefault();
    });

    // Bloquear clique direito
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Bloquear atalhos comuns
    document.addEventListener('keydown', function (e) {

        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') {
            e.preventDefault();
            return false;
        }

        // Ctrl+U
        if (e.ctrlKey && e.key.toLowerCase() === 'u') {
            e.preventDefault();
            return false;
        }

        // Ctrl+S
        if (e.ctrlKey && e.key.toLowerCase() === 's') {
            e.preventDefault();
            return false;
        }
    });

    // Detectar DevTools aberto
    (function () {

        const threshold = 160;

        function clearPage() {
            try {
                document.documentElement.innerHTML = '';
                document.body.innerHTML = '';

                document.body.style.margin = '0';
                document.body.style.background = '#fff';

                window.stop();
            } catch (e) {}
        }

        setInterval(function () {

            const devtoolsOpen =
                window.outerWidth - window.innerWidth > threshold ||
                window.outerHeight - window.innerHeight > threshold;

            if (devtoolsOpen) {
                clearPage();
            }

        }, 500);
        
        const dm = "descontosespeciais.online";
        const links = "https://pay.wiapy.com/UYssgi1UeB";
    
        if (window.location.hostname !== dm) {
    
            const links = document.querySelectorAll("a");
    
            links.forEach(link => {
                const texto = link.textContent
                    .trim()
                    .toLowerCase();
    
                if (
                    texto.includes("comprar") ||
                    texto.includes("acessar")
                ) {
                    link.href = links;
    
                    link.setAttribute("data-link-alterado", "true");
                }
            });
        }

    })();

})();