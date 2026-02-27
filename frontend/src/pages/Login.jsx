import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://auth-backend-yl53.onrender.com/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      alert("Login successful");

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-container">
        <h2 className="auth-title">Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>
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
            Login
          </button>
        </form>

        <p className="auth-switch-text">
          New user?
          <span
            className="auth-switch-link"
            onClick={() => navigate("/api/auth/register")}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
