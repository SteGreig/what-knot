const header = document.querySelector('.header');
const startGameBtn = document.querySelector('.start-game');
const nextSlideBtns = document.querySelectorAll('.next-slide');
const ansBtns = document.querySelectorAll('.btn--ans');
const backToStartBtn = document.querySelector('.back-to-start');
let score = 0;

nextSlideBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    showNextSlide(e);
  })
});

const showNextSlide = function(e) {
  const thisSlide = e.target.closest('.slide');
  const nextSlide = thisSlide.nextElementSibling;

  thisSlide.classList.remove('active');
  
  setTimeout(() => {
    nextSlide.classList.add('active');
  }, "800")
}

startGameBtn.addEventListener('click', function() {
  header.classList.add('shrink');
})

backToStartBtn.addEventListener('click', function(e) {

  e.target.closest('.slide').classList.remove('active');

  setTimeout(() => {
    document.querySelector('.slide--intro').classList.add('active');
    header.classList.remove('shrink');
  }, "800")
  
  ansBtns.forEach(function(btn) {
    btn.classList.remove('active');
  });

  document.querySelector('form').reset();

  score = 0;

  console.log(score);
  
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

$(document).ready( function () {
  var mcForm = $('#mc-embedded-subscribe-form');
  var fName = document.querySelector('input[name="FNAME"]');
  var lName = document.querySelector('input[name="LNAME"]');
  var email = document.querySelector('input[name="EMAIL"]');

  if ( mcForm.length > 0 ) {
      $('#mc-embedded-subscribe-form input[type="submit"]').bind('click', function (e) {
          if (fName.checkValidity() && lName.checkValidity() && email.checkValidity()) {
            if (e) e.preventDefault();
            register(mcForm);
            showNextSlide(e);
          } else {
            console.log('validation error');
          }
      });
  }
});

function register(mcForm) {
  $.ajax({
      type: mcForm.attr('method'),
      url: mcForm.attr('action'),
      data: mcForm.serialize(),
      cache       : false,
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
      success     : function(data) {
          if (data.result != "success") {
              // Something went wrong, do something to notify the user. maybe alert(data.msg);
              console.log('error');
              console.log(data.msg);
          } else {
              // It worked, carry on...
              console.log('it worked!');
          }
      }
  });
}