document.addEventListener("DOMContentLoaded", (event) => {
  const toggleButton = document.getElementById("theme-toggle");

  // Function to set theme
  const setTheme = (theme) => {
    if (theme === "dark-mode") {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      toggleButton.checked = true;
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      toggleButton.checked = false;
    }
    updateScrollbarColor(theme); // Update scrollbar color based on theme
  };

  // Function to detect and apply system theme preference
  const applySystemThemePreference = () => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkScheme ? "dark-mode" : "light-mode");
  };

  // Load user's theme preference from localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    setTheme(currentTheme);
  } else {
    applySystemThemePreference(); // Apply system theme preference initially
  }

  // Listen for changes in the theme toggle button
  toggleButton.addEventListener("change", () => {
    const newTheme = toggleButton.checked ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    // Save user's preference to localStorage
    if (newTheme === "dark-mode") {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.removeItem("theme");
    }
  });

  // Listen for changes in system theme preference
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        // Only change if user has not set a preference
        applySystemThemePreference();
      }
    });

  // Function to update scrollbar color based on theme
  const updateScrollbarColor = (theme) => {
    // Determine the scrollbar thumb color based on the theme
    const scrollbarThumbColor = theme === "dark-mode" ? "#333" : "#ccc";
    // Set the scrollbar thumb color dynamically using CSS variables
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      scrollbarThumbColor
    );
  };
});
const buttons = document.querySelectorAll(".button");
const search = document.querySelector(".search__input");
const grid = document.querySelector(".grid");
const gridItems = Array.from(grid.querySelectorAll(".card"));

function showAllCards() {
  gridItems.forEach((item) => {
    item.classList.remove("--inactive");
    item.classList.add("slide-up");
  });
}

// Initialize the page to show all cards by default
showAllCards();

// Set the "all" button as active by default
document.querySelector(".button[data-filter='all']").classList.add("--active");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((item) => {
      item.classList.remove("--active");
    });
    button.classList.add("--active");

    const location = button.textContent.toLowerCase();
    const filteredItems = gridItems.filter(
      (item) =>
        item.querySelector(".card__location").textContent.toLowerCase() ===
        location
    );

    if (location === "all") {
      showAllCards();
      return;
    }

    gridItems.forEach((item) => {
      item.classList.add("--inactive");
      item.classList.remove("slide-up");
    });
    filteredItems.forEach((item) => {
      item.classList.remove("--inactive");
      // Trigger reflow to restart the animation
      void item.offsetWidth;
      item.classList.add("slide-up");
    });
  });
});

search.addEventListener("input", function () {
  const searchText = search.value.toLowerCase();
  gridItems.forEach((item) => {
    const city = item.querySelector(".card__title").textContent.toLowerCase();
    if (!city.includes(searchText)) {
      item.classList.add("--inactive");
      item.classList.remove("slide-up");
    } else {
      item.classList.remove("--inactive");
      // Trigger reflow to restart the animation
      void item.offsetWidth;
      item.classList.add("slide-up");
    }
  });
});

// Function to show progress bar for 1 second
function showProgressBar(callback) {
  // Show progress bar
  document.getElementById("progress-bar").style.display = "block";

  // Hide progress bar after 1 second
  setTimeout(function () {
    document.getElementById("progress-bar").style.display = "none";
    if (callback) {
      callback(); // Execute callback function
    }
  }, 1000);
}

document.getElementById("home").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  showProgressBar(function () {
    window.location.href = "../index.html"; // Redirect after progress bar animation completes
  }); // Show progress bar when link is clicked
});

// Show progress bar when page loads
window.addEventListener("load", function () {
  showProgressBar();
});
