document.addEventListener("DOMContentLoaded", function () {
  /* === SWIPER === */
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  /* === STICKY HEADER === */
  const header = document.getElementById("sticky-header");
  const headerTop = document.getElementById("header-top");
  if (header && headerTop) {
    const stickyOffset = headerTop.offsetHeight;

    window.addEventListener("scroll", function () {
      if (window.scrollY > stickyOffset) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }
});

/* === COUNTERS === */
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 800;

  const runCounter = (counter) => {
    let count = 0;
    const target = +counter.getAttribute("data-count");
    const increment = Math.ceil(target / speed);

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = count;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = counter.hasAttribute("data-plus") ? target + "+" : target;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            counter.innerText = "0";
            runCounter(counter);
          });
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  const section = document.querySelector(".achievements-section");
  if (section) {
    observer.observe(section);
  }
});

/*video-popup*/
$(document).ready(function () {
  $('.popup-video').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});

 document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = Array.from(document.querySelectorAll(".gallery-img"));
    const lightboxImage = document.getElementById("lightboxImage");
    let currentIndex = 0;

    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
      });
    });

    // Show selected image
    function showImage() {
      const img = galleryImages[currentIndex];
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt || "Gallery Image";
    }

    // Next Image
    window.showNextImage = function () {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage();
    };

    // Prev Image
    window.showPrevImage = function () {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage();
    };
  });


/*testimonials*/

$(document).ready(function () {
  $(".testimonial-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    animateIn: 'fadeIn',       // fade in effect
    animateOut: 'fadeOut',     // fade out effect
    smartSpeed: 800,           // transition speed
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
    ]
  });
});


/*bg-image*/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-bg]').forEach(function (section) {
    const bgImage = section.getAttribute('data-bg');
    section.style.backgroundImage = `url(${bgImage})`;
  });
});

/*contact-form*/
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactpage");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            let fname = document.getElementById("fname").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let email = document.getElementById("email").value.trim();
            let subject = document.getElementById("subject").value.trim();
            let msg = document.getElementById("msg").value.trim();
            let messageBox = document.getElementById("form-message");

            if (fname === "" || phone === "" || email === "" || subject === "" || msg === "") {
                messageBox.style.color = "red";
                messageBox.innerText = "⚠️ Please fill all required fields.";
                return;
            }

            let phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                messageBox.style.color = "red";
                messageBox.innerText = "⚠️ Please enter a valid 10-digit phone number.";
                return;
            }

            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailPattern.test(email)) {
                messageBox.style.color = "red";
                messageBox.innerText = "⚠️ Please enter a valid email address.";
                return;
            }

            messageBox.style.color = "green";
            messageBox.innerText = "Thank you! Your message has been submitted successfully.";
            form.reset();
        });
    }
});

/*load-more-btn*/
document.addEventListener("DOMContentLoaded", function () {

  function setupLoadMore(buttonId, containerId) {
    const btn = document.getElementById(buttonId);
    const hiddenCards = document.querySelectorAll(`#${containerId} .d-none`);
    if (!btn) return;

    btn.addEventListener("click", function () {
      hiddenCards.forEach(card => card.classList.remove("d-none"));
      btn.style.display = "none";
    });
  }

  setupLoadMore("loadMoreAll", "all-events");
  setupLoadMore("loadMoreFaculty", "faculty-events");

});
