const teamData = [
    {
      imgSrc: "public/me.webp",
      name: "Ali Ahmed Sadik",
      title: "Co-founder & Project lead",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/fahim.webp",
      name: "Fardin Alam Fahim",
      title: "Co-founder & Team lead(Manuals)",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/debraj.webp",
      name: "Debraj Rohan",
      title: "Co-founder & Team lead(Notes)",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/ramiya.webp",
      name: "Ramiya Reza",
      title: "Co-founder & Team lead(QB)",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/eesa.webp",
      name: "Eesa Ruhullah Ansari",
      title: "Project manager & Team lead(Books)",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/labib.webp",
      name: "Mahir Mohammed Labib",
      title: "Quality Assurance (QA) Executive",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/maliha.webp",
      name: "Sumaiya Haque Maliha",
      title: "Quality Assurance (QA) Executive",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/tabib.webp",
      name: "Tabib Wasitt Sharthok",
      title: "Quality Assurance (QA) Executive",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/tisha.webp",
      name: "Marufatul Zannath",
      title: "Project manager(Notes)",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/akib.webp",
      name: "Md. Akib Jawad",
      title: "Project manager",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/sinan.webp",
      name: "Awsaf Sinan",
      title: "Project manager",
      subtitle: "ECE 2K21",
    },
    {
      imgSrc: "public/argho.webp",
      name: "Argho Sen",
      title: "Junior web developer(QB)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/raja.webp",
      name: "Hamid Shahriar",
      title: "Junior web developer(QA)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/iyaad.webp",
      name: "Aminul Islam Iyad",
      title: "Junior web developer(Notes)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/roy.webp",
      name: "Arijit Roy",
      title: "Junior web developer(Notes)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/pushpo.webp",
      name: "Israt Jahan Pushpo",
      title: "Junior web developer(QA)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/dipto.webp",
      name: "Zulfiqar Siddique",
      title: "Junior web developer(QB)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/israt.webp",
      name: "Israt Jahan",
      title: "Junior web developer(Manuals)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/sami.webp",
      name: "Samiul Islam Khan Sami",
      title: "Junior web developer(Books)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/sayanta.webp",
      name: "Sayanta Das",
      title: "Junior web developer(Notes)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/mah.webp",
      name: "MD. Mahmudul Hassan",
      title: "Junior web developer(Books)",
      subtitle: "ECE 2K22",
    },
    {
      imgSrc: "public/pias.webp",
      name: "Pias Das",
      title: "Junior web developer(Manuals)",
      subtitle: "ECE 2K22",
    },
  ];

  function createCard(member) {
    const card = document.createElement("div");
    card.className = "person";

    const container = document.createElement("div");
    container.className = "container";

    const containerInner = document.createElement("div");
    containerInner.className = "container-inner";

    const circle = document.createElement("img");
    circle.className = "circle";
    circle.src = "public/smlogo.webp";

    const img = document.createElement("img");
    img.className = "img img1";
    img.src = member.imgSrc;

    containerInner.appendChild(circle);
    containerInner.appendChild(img);
    container.appendChild(containerInner);

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = member.name;

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = member.title;

    const subtitle = document.createElement("div");
    subtitle.className = "subtitle";
    subtitle.textContent = member.subtitle;

    card.appendChild(container);
    card.appendChild(name);
    card.appendChild(title);
    card.appendChild(subtitle);

    return card;
  }

  const teamContainer = document.getElementById("team-container");
  teamData.forEach((member) => {
    teamContainer.appendChild(createCard(member));
  });

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

  document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("developers");
    const texts = [
      " developers",
      " team",
      " builders",
      " designers",
      " squads",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = texts[textIndex];
      if (!isDeleting && charIndex <= currentText.length) {
        element.textContent = currentText.substring(0, charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
      } else if (isDeleting && charIndex > 0) {
        element.textContent = currentText.substring(0, charIndex);
        charIndex--;
        setTimeout(type, 50); // Adjust deleting speed here
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          textIndex = (textIndex + 1) % texts.length;
        }
        setTimeout(type, 500); // Delay before typing starts again
      }
    }

    type();
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
// Show progress bar when page loads
  window.addEventListener("load", function () {
    showProgressBar();
  });