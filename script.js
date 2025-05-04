// ========== TUMHARA EXISTING CODE (script (1).js) ==========
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelectorAll(".glitch").forEach((element) => {
  element.addEventListener("mouseover", () => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      element.innerText = element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return element.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= element.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  });
});

// ========== NEW CODE (scroll, autoplay, hover) ==========

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Auto Play/Pause Videos When in View
const autoPlayVideos = document.querySelectorAll('video[autoplay]');
const options = {
  threshold: 0.6
};

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
}, options);

autoPlayVideos.forEach(video => {
  videoObserver.observe(video);
});

// Hover Log on Artwork Images
document.querySelectorAll('.artworks img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    console.log(`Hovering on: ${img.alt}`);
  });
});
