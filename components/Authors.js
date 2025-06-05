import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    nationality: "",
    birthDate: ""
  });

  useEffect(() => {
    fetchAuthors();
  }, []);

  function fetchAuthors() {
    axios.get("/authors").then(res => setAuthors(res.data));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("/authors", form).then(() => {
      fetchAuthors();
      setForm({ name: "", nationality: "", birthDate: "" });
    });
  }

  function handleDelete(id) {
    axios.delete(`/authors/${id}`).then(() => fetchAuthors());
  }

  return (
    <div>
      <h2>Authors</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="nationality"
          placeholder="Nationality"
          value={form.nationality}
          onChange={handleChange}
        />
        <input
          name="birthDate"
          type="date"
          value={form.birthDate}
          onChange={handleChange}
        />
        <button type="submit">Add Author</button>
      </form>

      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <b>{author.name}</b> - {author.nationality} - {author.birthDate} <br/>
            <button onClick={() => handleDelete(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
