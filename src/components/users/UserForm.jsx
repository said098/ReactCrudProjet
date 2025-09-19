// src/components/users/UserForm.jsx
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UserForm({ initial, onSubmit, submitLabel = "Enregistrer" }) {
  const [values, setValues] = useState({ first_Name: "", last_Name: "", email: "" });

  useEffect(() => {
    if (initial) {
      setValues({
        first_Name: initial.first_Name ?? "",
        last_Name: initial.last_Name ?? "",
        email: initial.email ?? "",
      });
    }
  }, [initial]);

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(values);
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control name="firstName" value={values.first_Name} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control name="lastName" value={values.last_Name} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={values.email} onChange={handleChange} required />
      </Form.Group>

      <Button type="submit">{submitLabel}</Button>
    </Form>
  );
}
