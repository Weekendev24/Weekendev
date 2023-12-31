//------------------------------------------------- NAVBAR STARTED ----------------------------------------------------------------------------------
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// DARK AND LIGHT MODE !!!
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// SEARCH BOX CODE
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//  SLIDEBAR CODE
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


// Add this script to your existing script.js file or create a new one

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
      if (window.scrollY > 70) { // Adjust the value based on when you want the navbar to become sticky
          nav.classList.add('sticky');
          document.body.classList.add('scrolling');
      } else {
          nav.classList.remove('sticky');
          document.body.classList.remove('scrolling');
      }
  });
});


//------------------------------------------------- NAVBAR COMPLETED ----------------------------------------------------------------------------------




document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider__contents');
    const radioButtons = document.querySelectorAll('.slider__nav');

    // Set initial background image
    setInitialBackground();

    // Add event listener to each radio button
    radioButtons.forEach(function (nav, index) {
        nav.addEventListener('change', function () {
            // Change background image based on the selected slide
            slider.style.backgroundImage = `url(${slides[index].getAttribute('data-bg-image')})`;
        });
    });

    // Function to set initial background image
    function setInitialBackground() {
        const checkedRadio = document.querySelector('.slider__nav:checked');
        const initialIndex = Array.from(radioButtons).indexOf(checkedRadio);
        slider.style.backgroundImage = `url(${slides[initialIndex].getAttribute('data-bg-image')})`;
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider__contents');

    document.querySelectorAll('.slider__nav').forEach(function (nav, index) {
        nav.addEventListener('change', function () {
            slider.style.backgroundImage = `url(${slides[index].getAttribute('data-bg-image')})`;
        });
    });

    document.querySelectorAll('.hover-paragraph').forEach(function (hoverParagraph) {
        const iconWrapper = document.createElement('div');
        iconWrapper.classList.add('icon-wrapper');

        // Add icons to the paragraph
        iconWrapper.innerHTML = '<a href="https://example.com" target="_blank"><i class="fa fa-external-link"></i></a>' +
            '<a href="https://github.com" target="_blank"><i class="fa-brands fa-github"></i></a>';

        hoverParagraph.appendChild(iconWrapper);

        let hoverTimeout;

        // Show icons on hover
        hoverParagraph.addEventListener('mouseover', function () {
            clearTimeout(hoverTimeout);
            iconWrapper.style.display = 'flex';
        });

        // Hide icons after a delay when not hovering
        hoverParagraph.addEventListener('mouseout', function () {
            hoverTimeout = setTimeout(function () {
                iconWrapper.style.display = 'none';
            }, 300); // Adjust the delay (in milliseconds) as needed
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    if (video) {
        video.src = 'WhyUs.webm'; // Set the video source dynamically
    }
});
