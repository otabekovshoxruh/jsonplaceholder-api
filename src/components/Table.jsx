import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function TableUser({
  id,
  name,
  username,
  email,
  phone,
  website,
  onDelete,
}) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="container primary__wrapper" >
      <h3>USER {id}</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>name</th>
            <th>Username</th>
            <th>Email</th>
            <th>phone</th>
            <th>website</th>
          </tr>
        </thead>

        <tbody>
          <tr key={id}>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td>
              <Button variant="primary" onClick={handleDelete}>
                DELETE
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
