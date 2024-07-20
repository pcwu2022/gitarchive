// href: sth.github.io?title=sth&body=sth

let bt = document.getElementById('bt');

let searchStr = location.search;

try {
  let title = searchStr.split('title=')[1].split('&')[0];
  let body = searchStr.split('body=')[1];
  
  
  if (title && body) {
    bt.innerHTML = "";
    let titleEl = document.createElement('h3');
    titleEl.innerText = decodeURI(title);
    let bodyEl = document.createElement('p');
    bodyEl.innerText = decodeURI(body);
    bt.appendChild(titleEl);
    bt.appendChild(bodyEl);
  } else {
  }
} catch (err) {
  console.log(err);
}


bt.addEventListener('click', () => {
  location.href = '/gitarchive/rick.html';
});

setTimeout(() => {
  location.href = '/rick.html';
}, 3000);
