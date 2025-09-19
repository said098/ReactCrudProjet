// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UsersListPage from "../pages/users/UsersListPage";
import UserCreatePage from "../pages/users/UserCreatePage";
import UserEditPage from "../pages/users/UserEditPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/users" element={<UsersListPage />} />
      <Route path="/users/new" element={<UserCreatePage />} />
      <Route path="/users/:id/edit" element={<UserEditPage />} />
      <Route path="*" element={<div className="p-3">Page non trouvée</div>} />
    </Routes>
  );
}
