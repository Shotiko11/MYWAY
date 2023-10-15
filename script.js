const loadingText = document.getElementById("loading-text");
let dotCount = 0;

function updateLoadingText() {
  const dots = ".".repeat(dotCount);
  loadingText.textContent = `Loading${dots}`;
  dotCount = (dotCount % 3) + 1 ; 
}

setInterval(updateLoadingText, 500); 
