var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  document.getElementById('logo_btn').addEventListener('click', function() {
    console.log("logo_btn working")
    var localFilePath = './mainpage.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
  });
  document.getElementById('home_btn').addEventListener('click', function() {
    console.log("home_btn working")
    var localFilePath = './mainpage.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
  });
  document.getElementById('library_btn').addEventListener('click', function() {
    console.log("library_btn working")
    var localFilePath = './library.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
  });
  document.getElementById('feedback_link').addEventListener('click', function() {
    console.log("feedback_link working")
    var localFilePath = './feedback.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
  });