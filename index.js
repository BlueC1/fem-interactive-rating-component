const ratingCard = document.querySelector('.card-container');
const thanksCard = document.querySelector('.thanks-container');
const ratingForm = document.querySelector('.ratings');
const ratingInput = document.querySelectorAll('input');
const submitBtn = document.getElementById('submit-btn');
const ratingText = document.getElementById('rating-text');

let starRating = '';

ratingForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

submitBtn.addEventListener('click', () => {
  ratingInput.forEach((input) => {
    if (input.checked) {
      starRating = input.value;
      thanksResults();
    }
  });

  if (!starRating) {
    alert('You must select a rating.');
  }
});

function thanksResults() {
  ratingCard.classList.add('hidden');
  thanksCard.classList.remove('hidden');

  ratingText.textContent = `You selected ${starRating} out of 5 `;
}
