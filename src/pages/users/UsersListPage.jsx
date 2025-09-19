// src/pages/users/UsersListPage.jsx
import React, { useEffect, useState } from "react";
import { UsersService } from "../../services/user_service";
import UsersTable from "../../components/users/UsersTable";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function UsersListPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const data = await UsersService.getAll();
      setUsers(Array.isArray(data) ? data : data?.data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet utilisateur ?")) return;
    await UsersService.remove(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h3 m-0">Utilisateurs</h1>
        <Link to="/users/new">
          <Button>+ Ajouter</Button>
        </Link>
      </div>

      <UsersTable users={users} loading={loading} onDelete={handleDelete} />
    </div>
  );
}
