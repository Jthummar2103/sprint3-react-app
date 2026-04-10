import React, { useState } from "react";

function AddItem() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
    };

    // Send POST request
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add user");
        }
        return res.json();
      })
      .then(() => {
        alert("User added successfully");

        // Reset form
        setName("");
        setEmail("");
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };

  return (
    <div>
      <h1>Add User</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddItem;