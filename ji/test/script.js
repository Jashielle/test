const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');
const hearts = document.getElementById('hearts');

noBtn.addEventListener('click', () => {
  message.classList.remove('hidden');
  noBtn.disabled = true; // Disable the "No" button after it's clicked.
});

yesBtn.addEventListener('click', () => {
  yesBtn.classList.add('grow'); // Grow the "Yes" button
  hearts.classList.remove('hidden'); // Show hearts animation
  setTimeout(() => {
    hearts.innerHTML = '❤️'.repeat(10); // Show a bunch of hearts
  }, 500);
  yesBtn.disabled = true; // Disable the "Yes" button after it's clicked.
});