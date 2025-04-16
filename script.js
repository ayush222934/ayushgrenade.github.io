
window.onload = function () {
  const videoGrid = document.getElementById("videoGrid");
  const photoEdits = document.getElementById("photoEdits");
  const blenderRenders = document.getElementById("blenderRenders");

  const videos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"];
  videos.forEach((v) => {
    const vid = document.createElement("video");
    vid.src = "videos/" + v;
    vid.controls = true;
    vid.className = "fade-in";
    videoGrid.appendChild(vid);
  });

  const photos = ["edit1.jpg", "edit2.jpg", "edit3.jpg"];
  photos.forEach((p) => {
    const img = document.createElement("img");
    img.src = "images/photo-edits/" + p;
    img.className = "fade-in";
    photoEdits.appendChild(img);
  });

  const renders = ["render1.jpg", "render2.jpg"];
  renders.forEach((r) => {
    const img = document.createElement("img");
    img.src = "images/blender-renders/" + r;
    img.className = "fade-in";
    blenderRenders.appendChild(img);
  });
};
