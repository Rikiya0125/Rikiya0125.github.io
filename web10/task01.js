function searchBook() {
  const code = document.getElementById('isbn').value;
  const parent = document.getElementById('bookinfo');
  parent.textContent = null;

  fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + code)
      .then(response =>  {
        return response.json();
      }).then( res => {
    const data = "書籍名:" + res.items[0].volumeInfo.title;
    parent.append(data);
  }).catch(function (error) {
    parent.append(error);
  });
}