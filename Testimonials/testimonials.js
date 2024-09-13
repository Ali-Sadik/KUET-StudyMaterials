const testimonials = [
    {
      name: "Teacher 1",
      position: "Designation 1",
      photo: "blank.webp",
      text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Teacher 2",
      position: "Designation 2",
      photo: "blank.webp",
      text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Teacher 3",
      position: "Designation 3",
      photo: "blank.webp",
      text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Teacher 4",
      position: "Designation 4",
      photo: "blank.webp",
      text: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const testimonialContainer = document.querySelector(
    ".testimonial-container"
  );
  const testimonial = document.querySelector(".testimonial");
  const userImage = document.querySelector(".user-image");
  const username = document.querySelector(".username");
  const role = document.querySelector(".role");

  let idx = 0;

  function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];
    testimonial.innerText = text;
    userImage.src = photo;
    username.innerText = name;
    role.innerText = position;

    idx++;
    if (idx >= testimonials.length) {
      idx = 0;
    }
  }

  setInterval(updateTestimonial, 3000);

  window.onload = updateTestimonial;

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
  const rightSectionElements = document.querySelectorAll(".right-an");
  addRevealEffect(rightSectionElements, "reveal-right", "right-an");
  }