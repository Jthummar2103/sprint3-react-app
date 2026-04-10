import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {users.map(user => (
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <Link to={`/details/${user.id}`} className="btn">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;