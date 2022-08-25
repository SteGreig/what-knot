const header = document.querySelector('.header');
const startGameBtn = document.querySelector('.start-game');
const nextSlideBtns = document.querySelectorAll('.next-slide');
const ansBtns = document.querySelectorAll('.btn--ans');
const backToStartBtn = document.querySelector('.back-to-start');
let score = 0;

nextSlideBtns.forEach(function(btn) {

  btn.addEventListener('click', function(e) {

    const thisSlide = e.target.closest('.slide');
    const nextSlide = thisSlide.nextElementSibling;

    thisSlide.classList.remove('active');
    
    setTimeout(() => {
      nextSlide.classList.add('active');
    }, "800")

  })

});


startGameBtn.addEventListener('click', function() {
  header.classList.add('shrink');
})

backToStartBtn.addEventListener('click', function() {
  window.location.reload();
})


ansBtns.forEach(function(btn) {

  btn.addEventListener('click', function(e) {

    const ans = e.target.getAttribute('data-ans');

    if (ans === "1") {
      score += 1;
    }

    console.log(score);

    document.querySelector('.score span').textContent = score;

    const thisSlide = e.target.closest('.slide');
    const nextSlide = thisSlide.nextElementSibling;

    const thisSlideBtns = thisSlide.querySelectorAll('.btn--ans');

    thisSlideBtns.forEach(function(btn) {
      btn.classList.add('active');
    });

    setTimeout(() => {
      thisSlide.classList.remove('active');
    }, "1500")
    
    setTimeout(() => {
      nextSlide.classList.add('active');
    }, "2300")

  });

  const ans = btn.getAttribute('data-ans');
  const tick = `<img class="absolute -right-16 top-1/2 -translate-y-1/2 opacity-0 transition duration-700" src="img/tick-icon.svg">`;

  if (ans === "1") {
    btn.insertAdjacentHTML('afterend', tick)
  }

});