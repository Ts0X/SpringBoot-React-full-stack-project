import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [form, setForm] = useState({
    isbn: "",
    title: "",
    category: "",
    publicationYear: "",
    authorIds: []
  });
  const [newAuthorName, setNewAuthorName] = useState("");

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, []);

  function fetchBooks() {
    axios.get("/books").then(res => setBooks(res.data));
  }

  function fetchAuthors() {
    axios.get("/authors").then(res => setAuthors(res.data));
  }

  function handleChange(e) {
    const { name, value, type, options } = e.target;
    if (name === "authorIds") {
      const selectedOptions = Array.from(options)
        .filter(option => option.selected)
        .map(option => parseInt(option.value));
      setForm(prev => ({ ...prev, authorIds: selectedOptions }));
    } else {
      setForm(prev => ({ ...prev, [name]: type === "number" ? +value : value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.isbn) {
      axios.post("/books", form).then(() => {
        fetchBooks();
        setForm({ isbn: "", title: "", category: "", publicationYear: "", authorIds: [] });
      });
    }
  }

  function handleDelete(isbn) {
    axios.delete(`/books/${isbn}`).then(() => fetchBooks());
  }

  function handleNewAuthorChange(e) {
    setNewAuthorName(e.target.value);
  }

  function addNewAuthor() {
    if (!newAuthorName.trim()) return;
    axios.post("/authors", { name: newAuthorName })
      .then(() => {
        setNewAuthorName("");
        fetchAuthors();
      })
      .catch(err => {
        console.error("Failed to add author", err);
      });
  }

  return (
    <div>
      <h2>Books</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="isbn"
          placeholder="ISBN"
          value={form.isbn}
          onChange={handleChange}
          required
        />
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          name="publicationYear"
          placeholder="Publication Year"
          type="number"
          value={form.publicationYear}
          onChange={handleChange}
        />

        {/* Field and button to add a new author */}
        <div>
          <input
            type="text"
            placeholder="Add new author"
            value={newAuthorName}
            onChange={handleNewAuthorChange}
          />
          <button type="button" onClick={addNewAuthor}>Add Author</button>
        </div>

        <select
          multiple
          name="authorIds"
          value={form.authorIds}
          onChange={handleChange}
          style={{ height: "100px" }}
        >
          {authors.map(a => (
            <option key={a.id} value={a.id}>{a.name}</option>
          ))}
        </select>

        <button type="submit">Add Book</button>
      </form>

      <ul>
        {books.map(book => (
          <li key={book.isbn}>
            <b>{book.title}</b> ({book.isbn}) - {book.category} - {book.publicationYear} <br />
            Authors: {book.authors.map(a => a.name).join(", ")} <br />
            <button onClick={() => handleDelete(book.isbn)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
