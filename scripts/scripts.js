document.getElementById('music-btn').addEventListener('click', function() {
  const iframe = document.getElementById('sc-player');
  iframe.src = iframe.src;
  document.getElementById('music-btn').style.display = 'none';
});

//nmbm
function downloadWallpaper() {
    const select = document.getElementById("wallpaper");
    const value = select.value;

    if (value === "default") {
      return;
    }

    const files = {
      original: "assets/image1/acc_ogratio02232026.jpg",
      pc: "assets/image1/acc_pc02232026.jpg",
      mobile: "assets/image1/acc_mobile02232026.jpg"
    };

    const link = document.createElement("a");
    const path = files[value];
    link.href = path;     
    link.download = path.split("/").pop();
    link.click();
  }