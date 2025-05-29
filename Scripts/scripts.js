
function showSidebar() {
    const sidebar = document.querySelector('.sidebar'); // ✅ Correct variable name
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

const videos = [
    "7405011318920465669",
    "7493981214395714838",
    "7338366535972556064",
    "7425265380358114593",
    "7500350480086830342",
    "7481746700210801922",
    "7480581741896535319",
    "7411885983156702497",
    "7495961125457055006",


  ];
  
  let index = 0;
  
  function loadPrevious() {
    index = (index - 1 + videos.length) % videos.length;
    showVideoByIndex(index);
  }
  
  function loadNext() {
    index = (index + 1) % videos.length;
    showVideoByIndex(index);
  }
  
  function showVideoByIndex(i) {
    const videoId = videos[i];
    const container = document.getElementById("video-embed");
    const spinner = document.getElementById("loading-spinner");


    spinner.style.display = "block";

  
    container.innerHTML = `
      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@hp_vrx/video/${videoId}" 
        data-video-id="${videoId}" style="max-width: 605px; min-width: 325px;">
        <section></section>
      </blockquote>
    `;
  
    reloadTikTokEmbedScript();
    setTimeout(() => {
        spinner.style.display = "none";
      }, 1500); // adjust if needed based on your experience
  }
  
  function reloadTikTokEmbedScript() {
    const oldScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (oldScript) oldScript.remove();
  
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
  
  window.onload = loadNext;

// theme switch
document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme");
  const themeSwitches = document.querySelectorAll(".theme-switch");

  console.log("Found theme switch elements:", themeSwitches.length); // should be 2

  const enableLightmode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("theme", "light");
  };

  const disableLightmode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("theme", "dark");
  };

  if (theme === "light") {
    enableLightmode();
  }

  themeSwitches.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      theme = localStorage.getItem("theme");
      theme !== "light" ? enableLightmode() : disableLightmode();
    });
  });
});


  