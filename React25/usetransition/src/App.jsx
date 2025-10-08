import { useState, useTransition } from "react";

function App() {
  const [pending, startTransition] = useTransition();
  const [users, setUsers] = useState([]);

  const handleButton = () => {
    startTransition(async () => {
      // API call
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      // Simulate delay for demo
      await new Promise((res) => setTimeout(res, 1500));

      setUsers(data);
    });
  };

  return (
    <>
      <h1>useTransition Hook with API Call</h1>

      {pending && (
        <img
          style={{ width: "100px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="loader"
        />
      )}

      <button disabled={pending} onClick={handleButton}>
        {pending ? "Loading..." : "Fetch Users"}
      </button>

      <div style={{ marginTop: "20px" }}>
        {users.length > 0 && (
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
