
addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});


const video = document.getElementById("bg-video");
const btn = document.getElementById("soundToggle");

btn.addEventListener("click", () => {
  
  video.muted = !video.muted;
 
  btn.textContent = video.muted ? "🔊" : "🔇";
});
