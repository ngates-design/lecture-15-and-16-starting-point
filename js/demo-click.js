// These IDs connect this JavaScript to the button and paragraph in index.html.
const button = document.querySelector('#specialButton');
const message = document.querySelector('#specialMessage');

// Wait for the HTML button to be clicked, then replace the paragraph's words.
// Its appearance stays controlled by CSS; JavaScript changes only the text.
button.addEventListener('click', function () {
  message.textContent = 'pizza';
});
