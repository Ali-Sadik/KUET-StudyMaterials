function addRevealEffect(elements, animationClass, customClass = null) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (customClass) {
            entry.target.classList.add(customClass);
          }
          entry.target.classList.add(animationClass, "revealed");
          // Unobserve the element after the first intersection
          observer.unobserve(entry.target);
        } else {
          // Optionally, you can remove the class when not intersecting
          if (customClass) {
            entry.target.className = customClass;
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Only apply animations if the screen width is 768px or more
if (window.innerWidth >= 768) {
  const sectionElements = document.querySelectorAll(".up");
  addRevealEffect(sectionElements, "reveal-down", "up");
  const leftSectionElements = document.querySelectorAll(".left-an");
  addRevealEffect(leftSectionElements, "reveal-left", "left-an");
  const leftSectionElements2 = document.querySelectorAll(".left-an768");
  addRevealEffect(leftSectionElements2, "reveal-left768", "left-an768");
  // Apply separate animations
  const rightSectionElements = document.querySelectorAll(".right-an");
  addRevealEffect(rightSectionElements, "reveal-right", "right-an");
}



const openMenuBtn = document.querySelector("#openMenuBtn");
const closeMenuBtn = document.querySelector("#closeMenuBtn");
const menu = document.querySelector("#menu");


openMenuBtn.addEventListener("click", () => {
  handleViewTransition(openMenu);
});

closeMenuBtn.addEventListener("click", () => {
  handleViewTransition(closeMenu);
});

// Close menu by Press Escape(ESC)
function handleCloseWithESC(e) {
  if (e.key == "Escape") {
    handleViewTransition(closeMenu);
  }
}

function openMenu() {
  menu.classList.add("open");
  closeMenuBtn.focus();
  window.addEventListener("keyup", handleCloseWithESC);
}

function closeMenu() {
  menu.classList.remove("open");
  openMenuBtn.focus();
  window.removeEventListener("keyup", handleCloseWithESC);
}

function handleViewTransition(updateDom) {
  if (!document.startViewTransition) updateDom();
  else document.startViewTransition(() => updateDom());
}

document.querySelectorAll(".NavLink").forEach((link) => {
  link.addEventListener("click", () => handleViewTransition(closeMenu));
});

//  Scroll Animation

let scrollDirection;
const nav = document.querySelector(".Navbar");
document.addEventListener(
  "scroll",
  (e) => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const direction = st > e.target.lastScrollTop ? "down" : "up";
    if (Math.abs(st - e.target.lastScrollTop) > 5)
      document.body.setAttribute("scroll-direction", direction);
    scrollDirection = direction;
    e.target.lastScrollTop = st <= 0 ? 0 : st;
  },
  {
    passive: true,
  }
);





// Get the progress bar element
var progressBar = document.getElementById("myBar");

// Function to set the progress bar width to 100% and then redirect to the specified URL
function redirectTo(url) {
  // Fill the progress bar
  progressBar.style.width = "100%";

  // Redirect after a delay
  setTimeout(function () {
    window.location.href = url;

    // Reset the progress bar after the redirection
    progressBar.style.width = "0%";
  }, 1500); // Change the delay as needed
}

// Intercept link clicks to delay redirection
document.addEventListener("click", function (event) {
  var target = event.target;
  if (
    target.tagName === "A" &&
    target.getAttribute("href") &&
    !target.getAttribute("href").startsWith("#")
  ) {
    event.preventDefault(); // Prevent the default link behavior
    var url = target.getAttribute("href");
    // Call redirectTo function with the URL
    redirectTo(url);
  }
});

// Function to animate the counting effect
function animateCount(targetElement, finalValue, duration) {
  let startTime;
  const initialValue = parseInt(targetElement.innerText);
  const increment = (finalValue - initialValue) / duration;

  function updateCount(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;
    const newValue = Math.floor(initialValue + increment * elapsedTime);
    targetElement.innerText = newValue;

    if (elapsedTime < duration) {
      requestAnimationFrame(updateCount);
    } else {
      targetElement.innerText = finalValue;
    }
  }

  requestAnimationFrame(updateCount);
}

// Call the function for each department
const eeeElement = document.getElementById("contributionsEEE");
animateCount(eeeElement, 22980, 38500); // Adjust duration (in milliseconds) as needed
// Repeat for other departments

// Call the function for each department
const cseElement = document.getElementById("contributionsCSE");
animateCount(cseElement, 21890, 38000); // Adjust duration (in milliseconds) as needed
// Repeat for other departments

// Call the function for each department
const civilElement = document.getElementById("contributionsCIVIL");
animateCount(civilElement, 19740, 37000); // Adjust duration (in milliseconds) as needed
// Repeat for other departments

// Call the function for each department
const mechaElement = document.getElementById("contributionsME");
animateCount(mechaElement, 17180, 36000); // Adjust duration (in milliseconds) as needed
// Repeat for other departments

// Call the function for each department
const eceElement = document.getElementById("contributionsECE");
animateCount(eceElement, 9290, 35000); // Adjust duration (in milliseconds) as needed
// Repeat for other departments

var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

var carousel = document.querySelector("[data-carousel]");
var slides = document.getElementsByClassName("carousel-cell");
var flkty = new Flickity(carousel, options);

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    image.style.backgroundPosition = x + "px";
  });
});

var cards = $("#card-slider .slider-item").toArray();

startAnim(cards);

function startAnim(array) {
  if (array.length >= 4) {
    TweenMax.fromTo(
      array[0],
      0.5,
      { x: 0, y: 0, opacity: 0.75 },
      {
        x: 0,
        y: -120,
        opacity: 0,
        zIndex: 0,
        delay: 0.03,
        ease: Cubic.easeInOut,
        onComplete: sortArray(array),
      }
    );

    TweenMax.fromTo(
      array[1],
      0.5,
      { x: 79, y: 125, opacity: 1, zIndex: 1 },
      {
        x: 0,
        y: 0,
        opacity: 0.75,
        zIndex: 0,
        boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
        ease: Cubic.easeInOut,
      }
    );

    TweenMax.to(array[2], 0.5, {
      bezier: [
        { x: 0, y: 250 },
        { x: 65, y: 200 },
        { x: 79, y: 125 },
      ],
      boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
      zIndex: 1,
      opacity: 1,
      ease: Cubic.easeInOut,
    });

    TweenMax.fromTo(
      array[3],
      0.5,
      { x: 0, y: 400, opacity: 0, zIndex: 0 },
      { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut }
    );
  } else {
    $("#card-slider").append(
      "<p>Sorry, carousel should contain more than 3 slides</p>"
    );
  }
}

function sortArray(array) {
  clearTimeout(delay);
  var delay = setTimeout(function () {
    var firstElem = array.shift();
    array.push(firstElem);
    return startAnim(array);
  }, 3000);
}


