import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/customers/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", password: "" });

        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert("Registration Failed");
      }
    } catch {
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#020617",
          border: "1px solid rgba(250,204,21,0.25)",
          borderRadius: "14px",
          padding: "35px",
          color: "white",
          boxShadow: "0 0 40px rgba(250,204,21,0.08)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#facc15",
            marginBottom: "6px",
          }}
        >
          Create Account
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#9ca3af",
            fontSize: "14px",
            marginBottom: "25px",
          }}
        >
          Join us and experience premium tailoring
        </p>

        {success && (
          <div
            style={{
              background: "rgba(34,197,94,0.15)",
              border: "1px solid #22c55e",
              color: "#22c55e",
              padding: "10px",
              borderRadius: "6px",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            ✅ Successfully Registered
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {["name", "email", "phone", "password"].map((field) => (
            <input
              key={field}
              type={field === "password" ? "password" : field === "email" ? "email" : "text"}
              name={field}
              placeholder={
                field === "name"
                  ? "Full Name"
                  : field === "email"
                  ? "Email Address"
                  : field === "phone"
                  ? "Phone Number"
                  : "Password"
              }
              value={form[field]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "14px",
                background: "#020617",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "white",
                outline: "none",
              }}
            />
          ))}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: "linear-gradient(135deg, #675a25ff, #eab308)",
              color: "black",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "10px",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Creating Account..." : <>Register <ArrowRight size={16} /></>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;