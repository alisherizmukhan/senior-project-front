import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient"; // adjust path if needed

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.firstName,
          last_name: form.lastName,
          student_id: form.studentId,
        },
      },
    });
    if (error) setError(error.message);
    else setSuccess("Registration successful! Check your email.");
  };

  return (
    <div className="register-card" style={{ textAlign: "left" }}>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                fontWeight: 600,
                marginBottom: 6,
                display: "block",
                color: "#111827",
              }}
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              style={{
                marginBottom: 0,
                padding: "0.75rem",
                borderRadius: "0.375rem",
                border: "1px solid #D1D5DB",
                width: "100%",
                fontSize: "0.875rem",
                color: "#111827",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                fontWeight: 600,
                marginBottom: 6,
                display: "block",
                color: "#111827",
              }}
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              style={{
                marginBottom: 0,
                padding: "0.75rem",
                borderRadius: "0.375rem",
                border: "1px solid #D1D5DB",
                width: "100%",
                fontSize: "0.875rem",
                color: "#111827",
              }}
            />
          </div>
        </div>
        <div style={{ marginBottom: "1.25rem" }}>
          <label
            style={{
              fontWeight: 600,
              marginBottom: 6,
              display: "block",
              color: "#111827",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@nu.edu.kz"
            value={form.email}
            onChange={handleChange}
            style={{
              marginBottom: 0,
              padding: "0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #D1D5DB",
              width: "100%",
              fontSize: "0.875rem",
              color: "#111827",
            }}
          />
        </div>
        <div style={{ marginBottom: "1.25rem" }}>
          <label
            style={{
              fontWeight: 600,
              marginBottom: 6,
              display: "block",
              color: "#111827",
            }}
          >
            Student ID
          </label>
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={form.studentId}
            onChange={handleChange}
            style={{
              marginBottom: 0,
              padding: "0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #D1D5DB",
              width: "100%",
              fontSize: "0.875rem",
              color: "#111827",
            }}
          />
        </div>
        <div style={{ marginBottom: "1.25rem" }}>
          <label
            style={{
              fontWeight: 600,
              marginBottom: 6,
              display: "block",
              color: "#111827",
            }}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="•••••••••"
            value={form.password}
            onChange={handleChange}
            style={{
              marginBottom: 0,
              padding: "0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #D1D5DB",
              width: "100%",
              fontSize: "0.875rem",
              color: "#111827",
            }}
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              fontWeight: 600,
              marginBottom: 6,
              display: "block",
              color: "#111827",
            }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="•••••••••"
            value={form.confirmPassword}
            onChange={handleChange}
            style={{
              marginBottom: 0,
              padding: "0.75rem",
              borderRadius: "0.375rem",
              border: "1px solid #D1D5DB",
              width: "100%",
              fontSize: "0.875rem",
              color: "#111827",
            }}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "1rem", fontSize: "0.95rem" }}>
            {error}
          </div>
        )}
        {success && (
          <div style={{ color: "green", marginBottom: "1rem", fontSize: "0.95rem" }}>
            {success}
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            background:
              "linear-gradient(90deg, #FFD36E 0%, #FFB800 100%)",
            color: "#111827",
            fontWeight: 600,
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
            marginBottom: "1.5rem",
            fontSize: "1rem",
            boxShadow: "none",
          }}
        >
          Create Account
        </button>
      </form>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            color: "#111827",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
        >
          Already have an account?
        </div>
        <Link
          to="/login"
          style={{
            display: "block",
            width: "100%",
            padding: "0.75rem",
            border: "1.5px solid #111827",
            borderRadius: "0.5rem",
            background: "white",
            color: "#111827",
            fontWeight: 600,
            textAlign: "center",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}