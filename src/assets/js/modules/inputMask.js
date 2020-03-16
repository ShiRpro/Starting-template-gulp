// InputMask
(function() {
    const selector = document.querySelectorAll(".maskPhone");
    const mobilePhone = new Inputmask("+7(999)999-99-99");

    selector.forEach(element => mobilePhone.mask(element));
})();
