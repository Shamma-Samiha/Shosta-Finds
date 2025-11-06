import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+/)) {
      setError("Valid email required");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }
    if (!form.username) {
      setError("Username is required");
      return;
    }
    setSuccess(true);
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-slate-900 text-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="px-4 py-2 rounded bg-slate-800 border border-slate-700 placeholder-slate-400"
          placeholder="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="px-4 py-2 rounded bg-slate-800 border border-slate-700 placeholder-slate-400"
          placeholder="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          className="px-4 py-2 rounded bg-slate-800 border border-slate-700 placeholder-slate-400"
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          className="px-4 py-2 rounded bg-slate-800 border border-slate-700 placeholder-slate-400"
          placeholder="Confirm Password"
          type="password"
          name="confirm"
          value={form.confirm}
          onChange={handleChange}
        />
        <button className="mt-2 px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition font-semibold">
          Register
        </button>
        {error && <div className="text-red-400 text-sm text-center">{error}</div>}
        {success && <div className="text-green-400 text-sm text-center">Registration successful! (dummy form)</div>}
      </form>
      <div className="mt-4 text-center">
        <Link to="/login" className="inline-block px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition font-semibold">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}
