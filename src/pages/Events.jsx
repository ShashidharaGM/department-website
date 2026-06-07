import { useState } from "react";
import { toast } from "react-toastify";
import EventCard from "../components/EventCard";

const eventsData = [
  {
    title: "Hackathon 2026",
    type: "tech",
    date: "March 15, 2026",
    description: "A 24-hour coding challenge where students build innovative software solutions and compete for prizes.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "AI Workshop",
    type: "tech",
    date: "April 10, 2026",
    description: "Hands-on workshop covering machine learning basics, AI tools, and real-world applications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Web Development Bootcamp",
    type: "tech",
    date: "May 5, 2026",
    description: "An intensive bootcamp focusing on HTML, CSS, JavaScript, and modern web frameworks.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Cultural Fest",
    type: "cultural",
    date: "June 20, 2026",
    description: "A vibrant celebration of art, music, dance, and cultural diversity with various performances.",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Music Night",
    type: "cultural",
    date: "July 12, 2026",
    description: "An exciting evening filled with live music performances from student bands and artists.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Dance Competition",
    type: "cultural",
    date: "August 3, 2026",
    description: "A high-energy dance competition showcasing talent across various dance styles.",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=800&q=60"
  }
];

export default function Events(){
  const [filter, setFilter] = useState("all");

  const handleFilter = (type) => {
    setFilter(type);
    toast.info(`${type.toUpperCase()} events shown`);
  };

  const filteredEvents =
    filter === "all"
      ? eventsData
      : eventsData.filter((e) => e.type === filter);

  return (
    <div className="events-container">
      <h1>Our Events</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("tech")}>Tech</button>
        <button onClick={() => handleFilter("cultural")}>Cultural</button>
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}