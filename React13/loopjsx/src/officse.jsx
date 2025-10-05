function Office({user, index}){
 return(
  <>
   <tr>
      <td style={{ padding: "8px",border: "1px solid #000000ff" }}>{index + 1}</td>
      <td style={{ padding: "8px",border: "1px solid #000000ff" }}>{user.name.toUpperCase()}</td>
      <td style={{ padding: "8px",border: "1px solid #000000ff" }}>{user.number}</td>
      <td style={{ padding: "8px",border: "1px solid #000000ff" }}>
        <a href={`mailto:${user.email.toLowerCase()}`}>
          {user.email.toLowerCase()}
        </a>
      </td>
    </tr>

  </>
 )
};
export default Office;