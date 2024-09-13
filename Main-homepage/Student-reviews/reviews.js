const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");

let people = [
  {
    photo: "url('public/joya.webp')",
    name: "Joyasree Joya",
    profession: "ECE 2K21",
    description:
      "First of all I am really very grateful for my some batchmates to make this beautiful website.When I came to kuet ,it was very difficult to find information about study.But after few months,some of my friend created this website where I can easily find any study related information.This is really a well organized website and highly recommend.",
  },
  {
    photo: 'url("public/08.webp")',
    name: "Rakib Hasan",
    profession: "ECE 2K22",
    description:
      "At first when I came to KUET, I had little information about the rigorous academic system of KUET.  When I was clueless about how to find my way out, Study Materials came as a silver lining. This website is the best place to access all the notes you would need to not only pass your exams but also to ace it! A really well organised platform for study materials of each subjects taught in year 1 and 2! Highly Recommended !!",
  },
  {
    photo: "url('public/55.webp')",
    name: "Subah Tasnim Proba",
    profession: "ECE 2K22",
    description:
      "Study materials are very helpful.They provide structure and organization to complex subjects. Study materials facilitate self-paced learning and revision. Study materials help me to understand the concepts properly. Without  the help of study materials, I can't think of passing the semesters.",
  },
  {
    photo: "url('public/57.webp')",
    name: "Indrajit Gupta",
    profession: "ECE 2K22",
    description:
      "Study materials has been very convenient for us. We used to search for links on Google Drive or Telegram. But now everything is organized under one website. It saves us a lot of time. It's very helpful.",
  },
  {
    photo: "url('public/21.webp')",
    name: "Shrutti Dutta",
    profession: "ECE 2K22",
    description:
      "As my academics were not in a good condition, I didn't have proper materials to start off. Study materials provided me everything I needed which helped greatly. Forever grateful to the platform!",
  },
  {
    photo: "url('public/25.webp')",
    name: "Kalyan Mondal",
    profession: "ECE 2K22",
    description:
      "As a fresher, I always looked for ways to cope up with the pace but didn't know how to start. As I was a student who notes much, I wanted to know how to start doing it again. And study materials gave me access to the precious materials from our seniors. And that is priceless. Study materials saved my life!",
  },
  {
    photo: "url('public/09.webp')",
    name: "Umma Zarin Toba",
    profession: "ECE 2K22",
    description:
      "Study materials app helps us a lot.From this we can easily get any kind of materials at a time. So this study materials app is very very helpful to us.",
  },
  {
    photo: "url('public/33.webp')",
    name: "H.M Fahim",
    profession: "ECE 2K22",
    description:
      "Study Materials is my academic savior, akin to the legendary Apple of Eden. With its meticulously organized notes, textbooks, lab manuals, and question banks, achieving exam success has never been easier. Gone are the days of endless internet searches or library visits – Study Materials streamlines my study process, saving me valuable time and ensuring top-notch results",
  },
  {
    photo: "url('public/46.webp')",
    name: "Soumitro Paul",
    profession: "ECE 2K22",
    description:
      "It is the most unexpected blessings that I have got as it is helping me all the time in my academic activity. Moreover, I don't need to disturb our respected teachers all the time for any kind of slide.Besides, it saves time. Generally, according to me hard copy is too much diificult to use where soft copy is too much easy to use and it can be handled easily. And with the help of this, finding out notes, slides,lectures has become too much easier.",
  },
  {
    photo: "url('public/38.webp')",
    name: "Md. Asiful Hossain",
    profession: "ECE 2K22",
    description:
      "The Study Materials website offers a robust platform for accessing a wide array of academic resources. Its intuitive interface simplifies navigation, making it effortless for users to find lecture notes, past exams, and supplementary materials. The website's well-organized structure enhances user experience, facilitating efficient studying and exam preparation.Periodic updates could further enrich its contents.",
  },
  {
    photo: "url('public/15.webp')",
    name: "Sheikh Srabon Ahmed",
    profession: "ECE 2K22",
    description:
      "Study Materials is like a magical potion app. What should we do now? Where should we start from? It's not easy to tackle these types of problems. Finding materials is also easy. Since it's on mobile, accessing it from anywhere is easy.",
  },
  {
    photo: "url('public/shuvo.webp')",
    name: "Md. Tamimul Islam Shuvo",
    profession: "ECE 2K21",
    description:
      "KUET Study Materials is an excellent app designed to provide a comprehensive collection of educational resources for KUET students. The app features a well-organized interface and intuitive navigation, making finding and accessing study materials easy . The app's efficient design and user-friendly experience ensure that students can quickly locate the information they need, enhancing their study sessions and academic performance. Overall, KUET Study Materials is a valuable tool for any KUET student seeking to streamline their study process.",
  },
  {
    photo: "url('public/kamru.webp')",
    name: "Kamruzzaman",
    profession: "ECE 2K21",
    description:
      "Study Materials is a great work by my fellow batchmates and teammates. This is the result of so much dedication and effort. This platform will be very helpful for the freshers. I was also looking for something like this when I was a newcomer, but didn't find anything similar.",
  },
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`,
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`,
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0,
  });
}

function setNextCardLeft() {
  currentPerson = (currentPerson + 1) % people.length;
  slide("left", currentPerson);
}

function setNextCardRight() {
  currentPerson = (currentPerson - 1 + people.length) % people.length;
  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

function addRevealEffect(elements, animationClass) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("revealed")
        ) {
          entry.target.classList.add(animationClass, "revealed");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

const testimonialContainers = document.querySelectorAll(".wrapper-for-arrows");
addRevealEffect(testimonialContainers, "reveal-right");
