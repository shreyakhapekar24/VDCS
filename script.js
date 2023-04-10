const fileInput = document.getElementById("file-input");
const video = document.getElementById("video");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  video.src = url;
});

function welcome() {
  window.open("op.mp4");
}

// const fileOutput = document.getElementById('file-output');
// const op = document.getElementById('op');

// fileInput.addEventListener('change', e => {
//   const file = e.target.files[0];
//   const url = URL.createObjectURL(file);
//   op.src = url;
// });
