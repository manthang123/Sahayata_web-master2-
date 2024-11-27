const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { log } = require("console");

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const events = [
    {
        id: 1,
        month: "Jan",
        date: "2024-12-01",
        subtitle: "Ocean Water",
        title: "Far from the countries Vokalia and Consonantia 2022",
        details: "Sit amet consectetur adipiscing elit sed do eiusmod tempor",
      },
      {
        id: 2,
        month: "Feb",
        date: "2024-14-02",
        subtitle: "Mountain Peaks",
        title: "Exploring the highlands of solitude",
        details: "A beautiful journey through the mountains.",
      },
];

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// app.get("/events/new", (req, res) => {
//   res.render("form.ejs");
//   console.log("form page");
// });

app.get("/events", (req, res) => {
    try {
      res.status(200).json(events); // Send all events as JSON
    } catch (err) {
      console.error("Error retrieving events:", err);
      res.status(500).json({ error: "Failed to retrieve events" });
    }
  });

app.post("/events", (req, res) => {
  //console.log("Received event data:", req.body);

  const { id, month, date, title, subtitle, details } = req.body;


  // Basic validation (you can customize this as needed)
  if (!id || !month || !date || !title || !subtitle || !details) {
    return res.status(400).json({ error: "Please fill out all fields." });
  }

  const newEvent = { id, month, date, title, subtitle, details };
  events.push(newEvent); // Assuming `events` is an array storing your events

  console.log("Event Data Stored:", newEvent);

  // Here, you would save the event data to a database or process it as needed.
  // For demonstration, we'll just log it.
  // console.log("Event Data:", { id, title, subtitle, description, date });

  // Respond back to the frontend
  res.status(201).json({ message: "Event added successfully!" });
});

app.get("/events", (req, res) => {
  res.status(200).json(events); // Send all events as JSON to the frontend
});

console.log("hello");
console.log("from backend");
