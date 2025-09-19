// src/pages/users/UserEditPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsersService } from "../../services/user_service";
import UserForm from "../../components/users/UserForm";

export default function UserEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setUser(await UsersService.getById(id));
      } catch (e) {
        setErr(e.message);
      }
    })();
  }, [id]);

  if (err) return <p className="text-danger">{err}</p>;
  if (!user) return <p>Chargement…</p>;

  return (
    <div>
      <h1 className="h3 mb-3">Modifier l’utilisateur</h1>
      <UserForm
        initial={user}
        submitLabel="Mettre à jour"
        onSubmit={async (v) => {
          await UsersService.update(user.id, v);
          navigate("/users");
        }}
      />
    </div>
  );
}
