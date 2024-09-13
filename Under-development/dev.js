document.addEventListener("DOMContentLoaded", (event) => {
    const toggleButton = document.getElementById("theme-toggle");

    // Function to set theme
    const setTheme = (theme) => {
      if (theme === "dark-mode") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        toggleButton.checked = true;
      } else {
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