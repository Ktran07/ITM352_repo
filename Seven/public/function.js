document.addEventListener("DOMContentLoaded", function() {
    function updateNavMenu() {
        let path = window.location.pathname.split('/').pop();

        let navItems = document.querySelectorAll('.navmenu a');

        navItems.forEach(item => {
            if (item.getAttribute('href') === path) {
                item.style.display = 'none';
            }
        });
    }

    updateNavMenu();
});
