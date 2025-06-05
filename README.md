# SpringBoot-React Full-Stack Project

This is a full-stack web application using React for the frontend, Spring Boot for the backend, and MySQL as the database.

The application allows you to Create, Read, Update, and Delete (CRUD) Books and Authors.

---

## Requirements

- Java 17+ and JDK
- Maven
- Node.js and npm
- MySQL installed and running

---

## Setup Instructions

1. **MySQL Database**

   - Create a new database (e.g., `book_author.sql`).
   - Put inside my database.
   - Configure the connection settings in `src/main/resources/application.properties`:
  
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/Your-Database_name
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.format_sql=true
   ```
2. **Backend**

   - Open the backend folder in your preferred IDE (IntelliJ, Eclipse, etc.).
   - Run the Spring Boot application via IDE or command line:

   ```bash
   mvn spring-boot:run
   ```
3. **Frontend**

   - Navigate to the frontend directory.
   - Install dependencies and start the React app:

4. **Access the Application**

   - Frontend runs at [http://localhost:3000](http://localhost:3000)
   - Backend API runs at [http://localhost:8080](http://localhost:8080)

## Features

- Create, view, update, and delete Books
- Create, view, update, and delete Authors
- Data persistence with MySQL database
- RESTful API backend serving the React frontend

---

## Project Structure

- **Backend:** Spring Boot application (Java)
- **Frontend:** React application

---

## Technologies Used

- Java 17+
- Spring Boot 3.x
- React 18+
- MySQL 8+
- Maven
- Node.js and npm
