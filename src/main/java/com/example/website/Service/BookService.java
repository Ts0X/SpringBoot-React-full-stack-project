package com.example.website.Service;

import com.example.website.dtos.BookDTO;
import com.example.website.Entity.Author;
import com.example.website.Entity.Book;
import com.example.website.Repository.AuthorRepository;
import com.example.website.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private AuthorRepository authorRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Transactional
    public Book createBook(BookDTO dto) {
        Book book = new Book();
        book.setIsbn(dto.getIsbn());
        book.setTitle(dto.getTitle());
        book.setCategory(dto.getCategory());
        book.setPublicationYear(dto.getPublicationYear());

        Set<Author> authors = new HashSet<>(authorRepository.findAllById(dto.getAuthorIds()));
        book.setAuthors(authors);

        return bookRepository.save(book);
    }

    @Transactional
    public Optional<Book> updateBook(String isbn, BookDTO dto) {
        return bookRepository.findById(isbn).map(book -> {
            book.setTitle(dto.getTitle());
            book.setCategory(dto.getCategory());
            book.setPublicationYear(dto.getPublicationYear());

            Set<Author> authors = new HashSet<>(authorRepository.findAllById(dto.getAuthorIds()));
            book.setAuthors(authors);

            return bookRepository.save(book);
        });
    }

    public void deleteBook(String isbn) {
        bookRepository.deleteById(isbn);
    }

    public Optional<Book> getBookByIsbn(String isbn) {
        return bookRepository.findById(isbn);
    }
}
