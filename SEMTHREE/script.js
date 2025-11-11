document.addEventListener("DOMContentLoaded", () => {
  // BOOKS PAGE -----------------------------
  const booksTable = document.querySelector("#booksTable tbody");
  const addBookBtn = document.getElementById("addBookBtn");

  let books = [
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", year: 1988 },
    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Novel", year: 1925 },
    { title: "Moby Dick", author: "Herman Melville", genre: "Adventure", year: 1851 }
  ];

  function renderBooks() {
    if (!booksTable) return;
    booksTable.innerHTML = "";
    books.forEach((book, i) => {
      const row = `
        <tr>
          <td>${i + 1}</td>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.genre}</td>
          <td>${book.year}</td>
        </tr>`;
      booksTable.innerHTML += row;
    });
  }

  if (addBookBtn) {
    addBookBtn.addEventListener("click", () => {
      const newBooks = [
        { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", year: 1997 },
        { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937 },
        { title: "Inferno", author: "Dan Brown", genre: "Thriller", year: 2013 }
      ];
      books.push(...newBooks);
      renderBooks();
      alert("3 new books added!");
    });
  }

  renderBooks();

  // MEMBERS PAGE -----------------------------
  const membersTable = document.querySelector("#membersTable tbody");
  const addMemberBtn = document.getElementById("addMemberBtn");

  let members = [
    { name: "John Doe", email: "john@example.com", type: "Premium", join: "2023-05-01" },
    { name: "Jane Smith", email: "jane@example.com", type: "Regular", join: "2024-01-15" },
    { name: "Alice Johnson", email: "alice@example.com", type: "Student", join: "2022-11-09" },
    { name: "Robert Brown", email: "robert@example.com", type: "Regular", join: "2024-07-22" }
  ];

  function renderMembers() {
    if (!membersTable) return;
    membersTable.innerHTML = "";
    members.forEach((member, i) => {
      const row = `
        <tr>
          <td>${i + 1}</td>
          <td>${member.name}</td>
          <td>${member.email}</td>
          <td>${member.type}</td>
          <td>${member.join}</td>
        </tr>`;
      membersTable.innerHTML += row;
    });
  }

  if (addMemberBtn) {
    addMemberBtn.addEventListener("click", () => {
      const newMembers = [
        { name: "Emily Davis", email: "emily@example.com", type: "Premium", join: "2025-03-10" },
        { name: "Chris Wilson", email: "chris@example.com", type: "Student", join: "2024-09-05" }
      ];
      members.push(...newMembers);
      renderMembers();
      alert("2 new members added!");
    });
  }

  renderMembers();
});
