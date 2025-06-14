# 🧠 CLI Task Manager – Spring Boot Backend

This is the **backend API** for the CLI Task Manager project, built using **Spring Boot**. It provides a simple RESTful interface for managing tasks, including creating, updating, retrieving, and deleting tasks. It is designed to work seamlessly with a React frontend.

---

## 📦 Tech Stack

- Java 21
- Spring Boot
- Spring Web (REST)
- Spring Data JPA
- H2 (in-memory database)
- Maven

---

## 🚀 Features

- 📄 Create a task with a title
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- 📋 Fetch all tasks
- 🔄 Automatically persists in an in-memory database (H2)

---

## 📁 Project Structure

src/
└── main/
├── java/com/example/taskmanager/
│ ├── controller/
│ │ └── TaskController.java
│ ├── model/
│ │ └── Task.java
│ ├── repository/
│ │ └── TaskRepository.java
│ └── TaskManagerApplication.java
└── resources/
├── application.properties


The app will start at
http://localhost:8080
