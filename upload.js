const url = 'https://doc2text-api.herokuapp.com/process_binary/odt';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const file = document.querySelector('[type=file]').files;
  const formData = new FormData();
  const markdownContent = document.getElementById('markdownContent');
  formData.append('odt_file', file[0]);

  fetch(url, {
    method: 'POST',
    body: formData
  }).then(response => {
    response.text().then(function(val) {
      markdownContent.innerHTML = val;});
  });
});
