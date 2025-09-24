import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient"; // adjust path if needed

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    // else: redirect or show success
  };

  return (
    <div className="auth-card" style={{ textAlign: "left", maxWidth: 440 }}>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <label
          style={{
            fontWeight: 600,
            marginBottom: 6,
            display: "block",
            color: "#111827",
          }}
        >
          Your email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginBottom: "0.7rem", // smaller gap to password
            padding: "0.85rem 1.25rem",
            borderRadius: "0.5rem",
            border: "1px solid #D1D5DB",
            width: "100%",
            fontSize: "1rem",
            color: "#111827",
            boxSizing: "border-box",
          }}
        />

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
        <div style={{ position: "relative", marginBottom: "2.2rem" }}>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              marginBottom: 0,
              padding: "0.85rem 1.25rem",
              borderRadius: "0.5rem",
              border: "1px solid #D1D5DB",
              width: "100%",
              fontSize: "1rem",
              color: "#111827",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "right",
            marginTop: "-1.6rem",
            marginBottom: "2.2rem",
            color: "#2563eb",
            fontWeight: "600",
            fontSize: "0.875rem",
          }}
        >
          <Link
            to="#"
            style={{
              color: "#6b7280",
              fontSize: "0.9rem",
              textDecoration: "underline",
            }}
          >
            Forgot your password?
          </Link>
        </div>
        {error && (
          <div
            style={{
              color: "red",
              marginBottom: "1rem",
              fontSize: "0.95rem",
            }}
          >
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.85rem",
            background:
              "linear-gradient(90deg, #FFD36E 0%, #FFB800 100%)",
            color: "#111827",
            fontWeight: 600,
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
            marginBottom: "2.2rem", // bigger gap after button
            fontSize: "1rem",
            boxShadow: "none",
          }}
        >
          Login
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
          Don’t have an account?
        </div>
        <Link
          to="/register"
          style={{
            display: "block",
            width: "100%",
            padding: "0.85rem",
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
          Sign up
        </Link>
      </div>
    </div>
  );
}
