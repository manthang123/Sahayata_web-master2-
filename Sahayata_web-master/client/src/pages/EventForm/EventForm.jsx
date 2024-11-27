import React, { useState } from "react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    month: "",
    date: "",
    subtitle: "",
    title: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission
    console.log(formData);
    
    try {
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const data = await response.json();
      alert(data.message); // Shows the success message from the server
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error creating the event.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID</label>
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Month</label>
        <input
          type="text"
          name="month"
          value={formData.month}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Subtitle</label>
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Details</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit Event</button>
    </form>
  );
};

export default EventForm;
