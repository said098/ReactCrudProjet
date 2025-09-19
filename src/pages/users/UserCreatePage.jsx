// src/pages/users/UserCreatePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { UsersService } from "../../services/user_service";
import UserForm from "../../components/users/UserForm";

export default function UserCreatePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="h3 mb-3">Créer un utilisateur</h1>
      <UserForm
        onSubmit={async (v) => {
          await UsersService.create(v);
          navigate("/users");
        }}
      />
    </div>
  );
}
