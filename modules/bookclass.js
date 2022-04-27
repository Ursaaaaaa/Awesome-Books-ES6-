const bookList = document.querySelector('.books');
let pastebooks = [];

class BookClass {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  bookCode = () => `<article class="added-book"><p class="title">${this.title}</p>
                 <p>${this.author}</p>
                <button data-id=${this.id} class="remove">Remove</button>
                </article><hr>`

  static addBook = (book) => {
    let id = 1;
    if (pastebooks.length > 0) {
      id = pastebooks[pastebooks.length - 1].id + 1;
    }
    book.id = id;
    pastebooks.push(book);
    localStorage.setItem('pastebooks', JSON.stringify(pastebooks));
  }

  static remove = (id) => {
    pastebooks = pastebooks.filter((b) => b.id !== Number(id));
    localStorage.setItem('pastebooks', JSON.stringify(pastebooks));
  }

  static showBooks = () => {
    const booksCode = pastebooks
      .map((book) => new BookClass(book.title, book.author, book.id).bookCode());
    bookList.innerHTML = booksCode.join('');
    const deleteBtn = document.querySelectorAll('.remove');
    deleteBtn.forEach((el) => {
      el.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        BookClass.remove(id);
        BookClass.showBooks();
      });
    });
  }
}

export default BookClass;