// Array of showcase video thumbnails and videos
const videos = [
  { thumb: 'assets/thumbnails/video1.jpg', src: 'assets/videos/video1.mp4' },
  { thumb: 'assets/thumbnails/video2.jpg', src: 'assets/videos/video2.mp4' },
  { thumb: 'assets/thumbnails/video3.jpg', src: 'assets/videos/video3.mp4' },
  { thumb: 'assets/thumbnails/video4.jpg', src: 'assets/videos/video4.mp4' }
];

const videoGrid = document.getElementById('videoGrid');

// Create modal for video preview
const videoModal = document.createElement('div');
videoModal.id = 'videoModal';
videoModal.innerHTML = `
  <div class="modal-content">
    <span class="close-button">&times;</span>
    <video id="modalVideo" controls></video>
  </div>
`;
document.body.appendChild(videoModal);

// Inject thumbnails
videos.forEach(video => {
  const thumbEl = document.createElement('img');
  thumbEl.src = video.thumb;
  thumbEl.className = 'video-thumb';
  thumbEl.onclick = () => {
    document.getElementById('modalVideo').src = video.src;
    videoModal.style.display = 'flex';
  };
  videoGrid.appendChild(thumbEl);
});

// Close modal
document.querySelector('.close-button').onclick = () => {
  document.getElementById('modalVideo').pause();
  videoModal.style.display = 'none';
};
