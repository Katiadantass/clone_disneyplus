document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            escondeTodasAbas();

            removeBotaoAtivo();

            aba.classList.add('shows__list--is-active');

            event.target.classList.add('shows__tabs__button--is-active');
        });
    }

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }

    function escondeTodasAbas() {
        const tabs = document.querySelectorAll('[data-tab-id]');
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('shows__list--is-active');
        }
    }
});