document.addEventListener('DOMContentLoaded', () => {
  // Showcase Videos
  const showcaseVideos = [
    { src: 'videos/showcase1.mp4', thumbnail: 'thumbnails/showcase1.jpg' },
    { src: 'videos/showcase2.mp4', thumbnail: 'thumbnails/showcase2.jpg' },
    { src: 'videos/showcase3.mp4', thumbnail: 'thumbnails/showcase3.jpg' },
    { src: 'videos/showcase4.mp4', thumbnail: 'thumbnails/showcase4.jpg' },
  ];

  const videoGrid = document.getElementById('videoGrid');
  showcaseVideos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';

    const thumb = document.createElement('img');
    thumb.src = video.thumbnail;
    thumb.alt = 'Video Thumbnail';
    thumb.className = 'thumbnail';

    thumb.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <video src="${video.src}" controls autoplay></video>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector('.close').onclick = () => modal.remove();
    });

    videoCard.appendChild(thumb);
    videoGrid.appendChild(videoCard);
  });

  // Photo Edits
  const photoEdits = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg'
  ];

  const photoEditsGrid = document.getElementById('photoEdits');
  photoEdits.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Photo Edit';
    img.className = 'thumbnail';

    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${src}" />
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.close').onclick = () => modal.remove();
    });

    photoEditsGrid.appendChild(img);
  });

  // Blender Renders
  const blenderRenders = [
    'images/render1.jpg',
    'images/render2.jpg',
    'images/render3.jpg',
    'images/render4.jpg'
  ];

  const blenderGrid = document.getElementById('blenderRenders');
  blenderRenders.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Blender Render';
    img.className = 'thumbnail';

    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${src}" />
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.close').onclick = () => modal.remove();
    });

    blenderGrid.appendChild(img);
  });
});
