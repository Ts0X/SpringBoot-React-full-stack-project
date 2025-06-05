CREATE DATABASE IF NOT EXISTS book_author_db;

USE book_author_db;

--TABLES
CREATE TABLE authors (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  nationality VARCHAR(100),
  birth_date DATE
);

CREATE TABLE books (
  isbn VARCHAR(20) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  publication_year INT
);

CREATE TABLE book_authors (
  book_isbn VARCHAR(20),
  author_id BIGINT,
  PRIMARY KEY (book_isbn, author_id),
  FOREIGN KEY (book_isbn) REFERENCES books(isbn) ON DELETE CASCADE,
  FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);

--SOME DATAS TO TEST IT 
INSERT INTO authors (name, nationality, birth_date) VALUES
('George Orwell', 'British', '1903-06-25'),
('Harper Lee', 'American', '1926-04-28'),
('J.R.R. Tolkien', 'British', '1892-01-03');

INSERT INTO books (isbn, title, category, publication_year) VALUES
('9780451524935', '1984', 'Dystopian', 1949),
('9780061120084', 'Harper Lee', 'Fiction', 1960),
('9780618260300', 'The Hobbit', 'Fantasy', 1937),
('9780261102354', 'The Lord Of The Rings', 'Epic Fantasy', 1954);

INSERT INTO book_authors (book_isbn, author_id) VALUES
('978-960-123456-7', 1),
('9780061120084', 2),
('9780618260300', 3),
('9780261102354', 3); 