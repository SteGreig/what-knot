/*

// Modal Active / Non-active Classes
const modalActiveClasses = ["visible","opacity-100"];
const modalNonActiveClasses = ["invisible","opacity-0"];


// Launch modal when trigger is clicked
const modalTriggers = document.querySelectorAll('[data-modal-target]')

modalTriggers.forEach(element => {
  element.addEventListener("click", function(e) {
    
    const target = this.getAttribute('data-modal-target');
    const modal = document.querySelector("[data-modal='"+target+"']");

    modal.classList.add(...modalActiveClasses);
    modal.classList.remove(...modalNonActiveClasses);

    document.querySelector('body').classList.add('overflow-hidden');
  });
});


// Close modal when any close buttons are clicked
const closeModalBtns = document.querySelectorAll("[data-modal-close]");

closeModalBtns.forEach(element => {
  element.addEventListener("click", function(e) {

    if(e.target.hasAttribute('data-modal-close') || e.target.localName === "path") {
      document.querySelector('body').classList.remove('overflow-hidden');

      const modals = document.querySelectorAll("[data-modal]");

      modals.forEach(el => {
        el.classList.remove(...modalActiveClasses);
        el.classList.add(...modalNonActiveClasses);
      });
    }

  });
});

*/