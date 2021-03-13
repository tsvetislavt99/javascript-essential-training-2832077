class Book {
  constructor(title, pages, author, publishedYear) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.publishedYear = publishedYear;
  }
  ripOnePage() {
    --this.pages;
  }
}

export default Book;
