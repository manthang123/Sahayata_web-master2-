import React, { useState } from "react";
import { useEffect } from "react";
//import { events } from "../data/data.js";
const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    subtitle: "",
    date: "",
    month: "",
    details: "",
  });


  //const [events, setEvents] = useState(events);
  const [error, setError] = useState(""); // Track error state

  useEffect(() => {
    console.log("use effect is running");
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        //setEvents(data);
        console.log(data);
        console.log("data coming from backend");
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Unable to fetch events. Please try again later.");
      }
    };

    fetchEvents();
  }, []);

  const validateForm = () => {
    console.log("Form Data for validation:", formData);

    if (
      !formData.id ||
      !formData.title ||
      !formData.subtitle ||
      !formData.date ||
      !formData.month ||
      !formData.details
    ) {
      setError("Please fill out all fields.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    // Handle event submission logic here
    try {
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Event Submitted", formData);

        // const newEvent = {
        //   id: events.length + 1, // Generate new ID based on the current length
        //   ...formData, // Spread the formData to add the new event's details
        // };

        //setEvents((prevEvents) => [...prevEvents, newEvent]);

        setFormData({
          id: "",
          title: "",
          subtitle: "",
          date: "",
          month: "",
          details: "",
        });
        //console.log(events);
        alert("Event added successfully!");
        setError(""); // Reset any error message
      } else {
        // Handle error response from the backend
        setError(data.error || "Failed to add event.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred while submitting the event.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "2rem",
      background: "linear-gradient(135deg, #8e44ad, #3498db)",
      minHeight: "100vh",
      fontFamily: "'Poppins', Arial, sans-serif",
    },
    header: {
      color: "#fff",
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
    },
    form: {
      background: "#fff",
      borderRadius: "15px",
      padding: "2rem",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      width: "90%",
      maxWidth: "500px",
    },
    inputGroup: {
      marginBottom: "1.5rem",
      textAlign: "left",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "0.9rem",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontSize: "1rem",
      marginBottom: "0.5rem",
    },
    textarea: {
      width: "100%",
      padding: "0.9rem",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontSize: "1rem",
      minHeight: "100px",
    },
    button: {
      width: "100%",
      padding: "1rem",
      border: "none",
      borderRadius: "10px",
      background: "#3498db",
      color: "#fff",
      fontSize: "1.2rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      background: "#2980b9",
    },
    error: {
      color: "red",
      fontSize: "1rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Dashboard - Add Event</h1>

      {error && <div style={styles.error}>{error}</div>}

      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="id" style={styles.label}>
            Event ID
          </label>
          <input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter event ID"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="month" style={styles.label}>
            Event Month
          </label>
          <input
            type="text"
            id="month"
            name="month"
            value={formData.month}
            onChange={handleChange}
            placeholder="Enter event month (e.g., Jan)"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="date" style={styles.label}>
            Event Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="title" style={styles.label}>
            Event Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter event title"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="subtitle" style={styles.label}>
            Event Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Enter event subtitle"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="details" style={styles.label}>
            Event Details
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter detailed description of the event"
            style={styles.textarea}
          ></textarea>
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.background = styles.buttonHover.background)
          }
          onMouseOut={(e) =>
            (e.target.style.background = styles.button.background)
          }
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
