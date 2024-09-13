// Function to wait for the window and document to fully load
window.onload = function () {
  // Add loaded class to body for styling purposes
  document.querySelector("body").classList.add("loaded");
};

// Function to handle clicking on #cs-down button
document.querySelector("#cs-down").addEventListener("click", function (e) {
  e.preventDefault();

  console.log("Button clicked."); // Check if the click event is being triggered

  // Access the parent document from within the iframe
  const parentDocument = window.parent.document;

  // Scroll to the 'discover' section in the parent document
  const discoverSection = parentDocument.querySelector("#discover");
  if (discoverSection) {
    console.log("Discover section found."); // Check if the element is found
    discoverSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Element '#discover' not found in parent document.");
  }
});


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

if (window.innerWidth >= 768) {
const sectionElements = document.querySelectorAll(".up");
addRevealEffect(sectionElements, "reveal-down", "up");
const leftSectionElements = document.querySelectorAll(".left-an");
addRevealEffect(leftSectionElements, "reveal-left", "left-an");

// Apply separate animations
const rightSectionElements = document.querySelectorAll(".right-an");
addRevealEffect(rightSectionElements, "reveal-right", "right-an");
}