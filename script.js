function findZodiac() {
  const birthdate = document.getElementById('birthdate').value;
  if (!birthdate) {
    alert('Please select your birthdate.');
    return;
  }

  const date = new Date(birthdate);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const zodiacSigns = [
    { sign: "Capricorn", startDate: new Date(date.getFullYear(), 0, 1), endDate: new Date(date.getFullYear(), 0, 19) },
    { sign: "Aquarius", startDate: new Date(date.getFullYear(), 0, 20), endDate: new Date(date.getFullYear(), 1, 18) },
    { sign: "Pisces", startDate: new Date(date.getFullYear(), 1, 19), endDate: new Date(date.getFullYear(), 2, 20) },
    { sign: "Aries", startDate: new Date(date.getFullYear(), 2, 21), endDate: new Date(date.getFullYear(), 3, 19) },
    { sign: "Taurus", startDate: new Date(date.getFullYear(), 3, 20), endDate: new Date(date.getFullYear(), 4, 20) },
    { sign: "Gemini", startDate: new Date(date.getFullYear(), 4, 21), endDate: new Date(date.getFullYear(), 5, 20) },
    { sign: "Cancer", startDate: new Date(date.getFullYear(), 5, 21), endDate: new Date(date.getFullYear(), 6, 22) },
    { sign: "Leo", startDate: new Date(date.getFullYear(), 6, 23), endDate: new Date(date.getFullYear(), 7, 22) },
    { sign: "Virgo", startDate: new Date(date.getFullYear(), 7, 23), endDate: new Date(date.getFullYear(), 8, 22) },
    { sign: "Libra", startDate: new Date(date.getFullYear(), 8, 23), endDate: new Date(date.getFullYear(), 9, 22) },
    { sign: "Scorpio", startDate: new Date(date.getFullYear(), 9, 23), endDate: new Date(date.getFullYear(), 10, 21) },
    { sign: "Sagittarius", startDate: new Date(date.getFullYear(), 10, 22), endDate: new Date(date.getFullYear(), 11, 21) },
    { sign: "Capricorn", startDate: new Date(date.getFullYear(), 11, 22), endDate: new Date(date.getFullYear(), 11, 31) }
  ];

  let zodiac = '';
  for (let i = 0; i < zodiacSigns.length; i++) {
    if (date >= zodiacSigns[i].startDate && date <= zodiacSigns[i].endDate) {
      zodiac = zodiacSigns[i].sign;
      break;
    }
  }

  document.getElementById('result').textContent = `Your Zodiac Sign is ${zodiac}!`;
}

// Starry background animation
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach(star => {
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx = -star.dx;
    if (star.y < 0 || star.y > canvas.height) star.dy = -star.dy;
  });
}

function animateStars() {
  drawStars();
  updateStars();
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars();
});

resizeCanvas();
createStars();
animateStars();
