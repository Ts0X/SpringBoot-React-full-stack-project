package com.example.website.Service;

import com.example.website.dtos.AuthorDTO;
import com.example.website.Entity.Author;
import com.example.website.Repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    public Author createAuthor(AuthorDTO dto) {
        Author author = new Author();
        author.setName(dto.getName());
        author.setNationality(dto.getNationality());
        author.setBirthDate(dto.getBirthDate());
        return authorRepository.save(author);
    }

    public Optional<Author> updateAuthor(Long id, AuthorDTO dto) {
        return authorRepository.findById(id).map(author -> {
            author.setName(dto.getName());
            author.setNationality(dto.getNationality());
            author.setBirthDate(dto.getBirthDate());
            return authorRepository.save(author);
        });
    }

    public void deleteAuthor(Long id) {
        authorRepository.deleteById(id);
    }

    public Optional<Author> getAuthorById(Long id) {
        return authorRepository.findById(id);
    }
}
