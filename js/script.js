(function ($) {
  'use strict';

	if ($(window).width() < 992) {
		$('#navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
  }
  
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });



  
  $('.clients-logo-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });

  var scroll = new SmoothScroll('a[href*="#"]');


  function counter() {
    var oTop;
    if ($('.counter').length !== 0) {
      oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  


var lastScrollTop = 0;

$(window).scroll(function () {
  counter();

  var scroll = $(this).scrollTop();

  if (scroll > lastScrollTop) {
    $('.navigation').css('display', 'none');
  } else {
    $('.navigation').css('display', 'block');
  }

  if (scroll === 0) {
    $('.navigation').removeClass('sticky-header');
  } else {
    $('.navigation').addClass('sticky-header');
  }

  lastScrollTop = scroll;
});




$(".card").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(".card").removeClass("active");
    $(this).addClass("active");
  }
});




})(jQuery);



// const tabElms = document.querySelectorAll('a[data-bs-toggle="list"]')
// tabElms.forEach(tabElm => {
//   tabElm.addEventListener('shown.bs.tab', event => {
//     event.target
//     event.relatedTarget
//   })
// })




const scrollList = document.getElementById('scroll-list');
const imageElement = document.getElementById('active-image');
const titleElement = document.querySelector('.title h2');
const paragraphElement = document.querySelector('.title p');

const listItems = scrollList.getElementsByClassName('list-item');

function handleItemHover(event) {
  const listItem = event.target.closest('.list-item');
  const titleText = listItem.getAttribute('data-title');
  const paragraphText = listItem.querySelector('p').textContent;
  const imageLink = getImageLink(titleText);
  
  titleElement.textContent = titleText;
  paragraphElement.textContent = paragraphText;
  imageElement.src = imageLink;
}

Array.from(listItems).forEach((listItem) => {
  listItem.addEventListener('mouseover', handleItemHover);
});

function getImageLink(titleText) {
  switch (titleText) {
    case "Electrical Inspections and Quality Control":
      return "./images/services/Electrical Inspections and Quality Control.jpeg";
    case "Electrical Commissioning":
      return "./images/services/Electrical_Commissioning.jpg";
    case "Switchgear Testing":
      return "./images/portfolio/portfolio-3.jpg";
    case "Thermographic Survey":
      return "./images/portfolio/portfolio-4.jpg";
    case "Partial Discharge Survey":
      return "./images/portfolio/portfolio-5.jpg";
    case "Energy Optimization":
      return "./images/portfolio/portfolio-6.jpg";
    case "Relay Injection Testing":
      return "./images/portfolio/portfolio-7.jpg";
    case "Feasibility Assessments":
      return "./images/portfolio/portfolio-8.jpg";
    case "Training and Compliance":
      return "./images/portfolio/portfolio-9.jpg";
    default:
      return "./images/portfolio/default-image.jpg";
  }
}
