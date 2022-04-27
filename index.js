import BookClass from './modules/bookclass.js';
import currentDate from './modules/date.js';

const form = document.getElementById('added-book');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const listMenu = document.querySelector('#list-menu');
const formMenu = document.querySelector('#form-menu');
const contactMenu = document.querySelector('#contact-menu');
const formSec = document.querySelector('#add-new');
const listSec = document.querySelector('#list');
const contSec = document.querySelector('#contact');

listMenu.addEventListener('click', () => {
  formSec.style.display = 'none';
  contSec.style.display = 'none';
  listSec.style.display = 'block';
});

formMenu.addEventListener('click', () => {
  formSec.style.display = 'block';
  contSec.style.display = 'none';
  listSec.style.display = 'none';
});

contactMenu.addEventListener('click', () => {
  formSec.style.display = 'none';
  contSec.style.display = 'block';
  listSec.style.display = 'none';
});

const storeBooks = JSON.parse(localStorage.getItem('books'));

if (storeBooks) {
  BookClass.showBooks();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (!title || !author) {
    return;
  }
  const newBook = new BookClass(title, author);
  BookClass.addBook(newBook);
  BookClass.showBooks();
  titleInput.value = '';
  authorInput.value = '';
});

window.onload = currentDate();