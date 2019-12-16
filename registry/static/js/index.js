/* accordian */
document.querySelectorAll('.accordion__trigger').forEach(function (el) {
    el.onclick = function () {
        const wrapper_element = document.querySelector('.accordion');
        const target_element = document.querySelector('.accordion__extra');
        wrapper_element.classList.toggle('accordion--expanded');
        if (target_element.hasAttribute('aria-hidden')) {
            target_element.removeAttribute('aria-hidden')
        } else {
            target_element.setAttribute('aria-hidden', '')
        }
    };
});

/* top bar */
document.querySelectorAll('.top-bar__menu-trigger, .off-canvas-menu__trigger').forEach(function (el) {
    el.onclick = function () {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.toggle('off-canvas-menu--expanded');
        if (offCanvasMenu.hasAttribute('aria-hidden')) {
            offCanvasMenu.removeAttribute('aria-hidden')
        } else {
            offCanvasMenu.setAttribute('aria-hidden', '')
        }
    };
});
