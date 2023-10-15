const loadingText = document.getElementById("loading-text");
let dotCount = 0;

function updateLoadingText() {
  const dots = ".".repeat(dotCount);
  loadingText.textContent = `Loading${dots}`;
  dotCount = (dotCount % 3) + 1;
}

setInterval(updateLoadingText, 600);

swiper.on("slideChange", function () {
  const slides = document.querySelectorAll(".swiper-slide");
  slides.forEach((slide, index) => {
    const video = slide.querySelector(".slider-video video");
    if (index === swiper.realIndex) {
      video.classList.remove("inactive");
    } else {
      video.classList.add("inactive");
    }
  });
});
