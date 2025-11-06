import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ user: "", pass: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.user) {
      setError("Username or email required");
      return;
    }
    if (!form.pass) {
      setError("Password required");
      return;
    }
    setSuccess(true);
  }
  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-slate-900 text-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="px-4 py-2 rounded bg-slate-800 border border-slate-700 placeholder-slate-400"
          placeholder="Username or Email"
          name="user"
          value={form.user}
          onChange={handleChange}
        />
        <input
          className="px-4 py-2 rounded bg-slate-800 border border-slate-700 placeholder-slate-400"
          placeholder="Password"
          type="password"
          name="pass"
          value={form.pass}
          onChange={handleChange}
        />
        <button className="mt-2 px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition font-semibold">
          Log In
        </button>
        {error && <div className="text-red-400 text-sm text-center">{error}</div>}
        {success && <div className="text-green-400 text-sm text-center">Login successful! (dummy form)</div>}
      </form>
      <div className="mt-4 text-center">
        <Link to="/register" className="inline-block px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition font-semibold">
          Need an account? Register
        </Link>
      </div>
    </div>
  );
}
