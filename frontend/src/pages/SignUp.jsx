import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../api";

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      alert(data.message || "Registered!");
      navigate('/api/auth/login');
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-page signup-page">
      <div className="auth-container">
        <h2 className="auth-title">Signup</h2>

        <form className="auth-form" onSubmit={handleSignup}>
          <input
            className="auth-input"
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="auth-button" type="submit">
            Register
          </button>
        </form>

        <p className="auth-switch-text">
          Already have account?
          <span
            className="auth-switch-link"
            onClick={() => navigate("/api/auth/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;