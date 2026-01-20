document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            const targetTab = this.getAttribute('data-tab');

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(targetTab).classList.add('active');
        });
    });
});