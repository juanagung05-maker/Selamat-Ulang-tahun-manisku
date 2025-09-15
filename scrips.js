const photos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
const messages = [ 
  "Aku bersyukur bisa mengenal kamu dan pengen balikan lagi 💗",
  "Kamu adalah alasan aku tersenyum dan happy setiap hari 🥰",
  "Semoga hari-harimu selalu penuh cinta sepertiku mencintaimu 💖",
];

let index = 0;

const photoEl = document.getElementById("photo");
const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  index = (index + 1) % photos.length;
  photoEl.src = photos[index];
  messageEl.textContent = messages[index];
});
