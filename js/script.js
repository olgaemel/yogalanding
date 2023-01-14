// window.addEventListener("DOMContentLoaded", function () {
//   "use strict";
//   let tab = document.querySelectorAll(".info-header-tab"),
//     info = document.querySelector(".info-header"),
//     tabContent = document.querySelectorAll(".info-tabcontent");

//   function hideTabContent(a) {
//     for (let i = a; i < tabContent.length; i++) {
//       tabContent[i].classList.remove("show");
//       tabContent[i].classList.add("hide");
//     }
//   }

//   hideTabContent(1);

//   function showTabContent(b) {
//     if (tabContent[b].classList.contains("hide")) {
//       tabContent[b].classList.remove("hide");
//       tabContent[b].classList.add("show");
//     }
//   }

//   info.addEventListener("click", function (event) {
//     let target = event.target;
//     if (target && target.classList.contains("info-header-tab")) {
//       for (let i = 0; i < tab.length; i++) {
//         if (target == tab[i]) {
//           hideTabContent(0);
//           showTabContent(i);
//           break;
//         }
//       }
//     }
//   });

// Timer

// let deadline = "2023-01-17";

// function getTimeRemaining(endtime) {
//   let t = Date.parse(endtime) - Date.parse(new Date()),
//     seconds = Math.floor((t / 1000) % 60),
//     minutes = Math.floor((t / 1000 / 60) % 60),
//     hours = Math.floor((t / (1000 * 60 * 60)) % 24),
//     days = Math.floor(t / (1000 * 60 * 60) / 24);

//   return {
//     total: t,
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// function setClock(id, endtime) {
//   let timer = document.getElementById(id),
//     days = timer.querySelector(".days"),
//     hours = timer.querySelector(".hours"),
//     minutes = timer.querySelector(".minutes"),
//     seconds = timer.querySelector(".seconds"),
//     timeInterval = setInterval(updateClock, 1000);

//   function updateClock() {
//     let t = getTimeRemaining(endtime);

//     function addZero(num) {
//       if (num <= 9) {
//         return "0" + num;
//       } else return num;
//     }
//     days.textContent = addZero(t.days);
//     hours.textContent = addZero(t.hours);
//     minutes.textContent = addZero(t.minutes);
//     seconds.textContent = addZero(t.seconds);

//     if (t.total <= 0) {
//       clearInterval(timeInterval);
//       days.textContent = "00";
//       hours.textContent = "00";
//       minutes.textContent = "00";
//       seconds.textContent = "00";
//     }
//   }
// }

// setClock("timer", deadline);

//   // Modal

//   let more = document.querySelector(".more"),
//     des = document.querySelectorAll(".description-btn"),
//     overlay = document.querySelector(".overlay"),
//     close = document.querySelector(".popup-close");

//   more.addEventListener("click", function () {
//     overlay.style.display = "block";
//     this.classList.add("more-splash");
//     document.body.style.overflow = "hidden";
//   });

//   for (let i = 0; i < des.length; i++) {
//     des[i].addEventListener("click", function () {
//       overlay.style.display = "block";
//       this.classList.add("more-splash");
//       document.body.style.overflow = "hidden";
//     });
//   }

//   close.addEventListener("click", function () {
//     overlay.style.display = "none";
//     more.classList.remove("more-splash");
//     // desc.classList.remove("more-splash");
//     document.body.style.overflow = "";
//   });

//   // Form

//   let message = {
//     loading: "Загрузка...",
//     success: "Спасибо! Скоро мы с вами свяжемся!",
//     failure: "Что-то пошло не так...",
//   };

//   let form = document.getElementsByClassName("main-form")[1],
//     formBottom = document.getElementById("form"),
//     input = form.getElementsByTagName("input"),
//     statusMessage = document.createElement("div");
//   statusMessage.classList.add("status");

//   function sendForm(elem) {
//     elem.addEventListener("submit", function (e) {
//       e.preventDefault();
//       elem.appendChild(statusMessage);
//       let formData = new FormData(elem);

//       function postData(data) {
//         return new Promise(function (resolve, reject) {
//           let request = new XMLHttpRequest();
//           request.open("POST", "/server.php");

//           request.setRequestHeader(
//             "Content-type",
//             "application/x-www-form-urlencoded"
//           );

//           request.onreadystatechange = function () {
//             if (request.readyState < 4) {
//               resolve();
//             } else if (request.readyState === 4 && request.status == 200) {
//               resolve();
//             } else {
//               reject();
//             }
//           };

//           request.send(data);
//         });
//       }
//     });

//     function clearInput() {
//       for (i = 0; i < input.length; i++) {
//         input[i].value = "";
//       }
//     }

//     postData(formData)
//       .then(() => statusMessage, (innerHTML = message.failure))
//       .then(() => {
//         thanksModal.style.display = "block";
//         mainMobile.style.display = "none";
//         statusMessage.innerHTML = "";
//       })
//       .catch(() => (statusMessage.innerHTML = message.failure))
//       .then(clearInput);
//   }

//   sendForm(form);
//   sendForm(formBottom);

//   //   let message = {
//   //     loading: 'Загрузка...',
//   //     success: 'Спасибо! Скоро мы с вами свяжемся!',
//   //     failure: 'Что-то пошло не так...'
//   // };

//   // let form = document.querySelector('.main-form'),
//   //     input = form.getElementsByTagName('input'),
//   //     statusMessage = document.createElement('div');

//   //     statusMessage.classList.add('status');

//   // form.addEventListener('submit', function(event) {
//   //     event.preventDefault();
//   //     form.appendChild(statusMessage);

//   //     let request = new XMLHttpRequest();
//   //     request.open('POST', 'server.php');
//   //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

//   //     let formData = new FormData(form);

//   //     let obj = {};
//   //     formData.forEach(function(value, key) {
//   //         obj[key] = value;
//   //     });
//   //     let json = JSON.stringify(obj);

//   //     request.send(json);

//   //     request.addEventListener('readystatechange', function() {
//   //         if (request.readyState < 4) {
//   //             statusMessage.innerHTML = message.loading;
//   //         } else if(request.readyState === 4 && request.status == 200) {
//   //             statusMessage.innerHTML = message.success;
//   //         } else {
//   //             statusMessage.innerHTML = message.failure;
//   //         }
//   //     });

//   //     for (let i = 0; i < input.length; i++) {
//   //         input[i].value = '';
//   //     }
//   // });

//   //Slider

//   let slideIndex = 1,
//     slides = document.querySelectorAll(".slider-item"),
//     prev = document.querySelector(".prev"),
//     next = document.querySelector(".next"),
//     dotsWrap = document.querySelector(".slider-dots"),
//     dots = document.querySelectorAll(".dot");

//   showslides(slideIndex);

//   function showslides(n) {
//     slides.forEach((item) => (item.style.display = "none"));
//     // for (let i = 0; i < slides.length; i++) {
//     //     slides[i].style.display = 'none';
//     // }
//     dots.forEach((item) => item.classList.remove("dot-active"));

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].classList.add("dot-active");
//   }
// });

window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadline = "2023-01-17";

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60) / 24);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      days = timer.querySelector(".days"),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      function addZero(num) {
        if (num <= 9) {
          return "0" + num;
        } else return num;
      }
      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }

  setClock("timer", deadline);

  // Modal

  // let more = document.querySelector(".more"),
  //   overlay = document.querySelector(".overlay"),
  //   close = document.querySelector(".popup-close");

  // more.addEventListener("click", function () {
  //   overlay.style.display = "block";
  //   this.classList.add("more-splash");
  //   document.body.style.overflow = "hidden";
  // });

  // close.addEventListener("click", function () {
  //   overlay.style.display = "none";
  //   more.classList.remove("more-splash");
  //   document.body.style.overflow = "";
  // });

  let more = document.querySelector(".more"),
    des = document.querySelectorAll(".description-btn"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close");

  more.addEventListener("click", function () {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  });

  // des.addEventListener("click", function () {
  //   overlay.style.display = "block";
  //   this.classList.add("more-splash");
  //   document.body.style.overflow = "hidden";
  // });

  for (let i = 0; i < des.length; i++) {
    des[i].addEventListener("click", function () {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    });
  }

  close.addEventListener("click", function () {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    // desc.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

  // Form

  let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так...",
  };

  let form = document.querySelector(".main-form"),
    input = form.getElementsByTagName("input"),
    statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");

    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener("readystatechange", function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  });

  // Slider

  let slideIndex = 1,
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none"));
    // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }
    dots.forEach((item) => item.classList.remove("dot-active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  prev.addEventListener("click", function () {
    plusSlides(-1);
  });

  next.addEventListener("click", function () {
    plusSlides(1);
  });

  dotsWrap.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains("dot") &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });
});
