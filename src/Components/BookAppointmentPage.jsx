// src/Components/BookAppointmentPage.jsx
import React, { useState } from "react";

const BookAppointmentPage = () => {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!service || !date) {
      alert("Please fill all required fields");
      return;
    }

    await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service,
        date,
        notes,
        tailorId: "PUT_ANY_TAILOR_ID_HERE",
        customerId: "PUT_ANY_CUSTOMER_ID_HERE",
      }),
    });

    alert("Appointment Booked Successfully");

    setService("");
    setDate("");
    setNotes("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Book Appointment</h1>
        <p style={styles.subText}>
          Schedule your fitting with our expert tailors
        </p>

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Service *</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Service</option>
            <option value="Suit">Suit Stitching</option>
            <option value="Shirt">Shirt Stitching</option>
            <option value="Alteration">Alteration</option>
          </select>

          <label style={styles.label}>Appointment Date *</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Additional Notes</label>
          <textarea
            placeholder="Any special instructions (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #1e293b, #020617)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 15px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#0f172a",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 0 40px rgba(255, 193, 7, 0.15)",
    border: "1px solid rgba(255,193,7,0.2)",
  },

  heading: {
    textAlign: "center",
    color: "#facc15",
    fontSize: "28px",
    marginBottom: "5px",
  },

  subText: {
    textAlign: "center",
    color: "#cbd5f5",
    fontSize: "14px",
    marginBottom: "25px",
  },

  label: {
    color: "#e5e7eb",
    fontSize: "14px",
    marginBottom: "6px",
    display: "block",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#020617",
    color: "#fff",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    minHeight: "80px",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#020617",
    color: "#fff",
    marginBottom: "20px",
    resize: "none",
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #facc15, #eab308)",
    color: "#020617",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default BookAppointmentPage;