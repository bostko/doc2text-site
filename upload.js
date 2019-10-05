const url = 'https://doc2text-api.herokuapp.com/process_binary/odt';
const form = document.querySelector('form');

function startSpinner() {
  var loader = document.getElementsByClassName('loader')[0];
  loader.style.display = 'block';
}

function stopSpinner() {
  var loader = document.getElementsByClassName('loader')[0];
  loader.style.display = 'none';
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const file = document.querySelector('[type=file]').files;
  startSpinner();
  const formData = new FormData();
  const markdownContent = document.getElementById('markdownContent');
  formData.append('odt_file', file[0]);

  fetch(url, {
    method: 'POST',
    body: formData
  }).then(response => {
    response.text().then(function(val) {
      stopSpinner();
      markdownContent.innerHTML = val;
    });
  });
});
