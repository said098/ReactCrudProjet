// src/components/users/UsersTable.jsx
import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function UsersTable({ users, onDelete, loading }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th style={{ width: 160 }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr><td colSpan={5}>Loading...</td></tr>
        ) : users.length === 0 ? (
          <tr><td colSpan={5}>Aucun utilisateur</td></tr>
        ) : (
          users.map((u, i) => (
            <tr key={u.id}>
              <td>{i + 1}</td>
              <td>{u.first_Name}</td>
              <td>{u.last_Name}</td>
              <td>{u.email}</td>
              <td>
                <div className="d-flex gap-2">
                  <Link className="btn btn-outline-primary btn-sm" to={`/users/${u.id}/edit`}>
                    Modifier
                  </Link>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(u.id)}
                  >
                    Supprimer
                  </Button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}
