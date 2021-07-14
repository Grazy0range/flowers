// slider

$(document).ready(function () {
    $(".slider").slick({
      speed: 1000,
      easing: "easy",
      prevArrow: '<div class="prev">Популярные букеты</div>',
      nextArrow: '<div class="next">Популярные шары</div>',
      infinite: false,
      speed: 500,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            centerPadding: "60px",
          }
        },
      ]
    });
  });






  // BURGER MENU

  $(document).ready(function () {
    $(".burger__menu").click(function (event) {
      $(".burger__menu, nav").toggleClass("active");
      $("body").toggleClass("lock");
    });
  });
  


  // ACCORDEON

  $(document).ready(function (){
$('.accordeon-item__trigger').click(function(){
$(this).next('.accordeon-item__content').slideToggle();
});
  });



// Popup search

let popup = document.getElementById("popup_body");
let popupTogle = document.getElementById("search");
let popupClose = document.getElementById("close__button");

popupTogle.onclick = function () {
  popup_body.style.display = "block";
};

popupClose.onclick = function () {
  popup_body.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup_body) {
    popup_body.style.display = "none";
  }
};


// Slow scroll
function slowScroll(id) {
  var offset = 0;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset,
    },
    500
  );
  return false;
}
