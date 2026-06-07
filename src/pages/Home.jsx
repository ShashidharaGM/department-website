import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const events = [
   {
    title: "Hackathon 2026",
    type: "tech",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "AI Workshop",
    type: "tech",
    image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Web Development Bootcamp",
    type: "tech",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Cultural Fest",
    type: "cultural",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    title: "Music Night",
    type: "cultural",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
  },
  {
    title: "Dance Competition",
    type: "cultural",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e"
  }

];

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Show 2 events at once
  const visibleEvents = [
    events[index],
    events[(index + 1) % events.length]
  ];

  return (
    <div className="home-container">
      <h1>Welcome to Computer Applications Department</h1>
      <p>Explore our latest events and activities</p>

      <div className="carousel">
        {visibleEvents.map((event, i) => (
          <div className="carousel-card" 
          key={i} 
          onClick={() => navigate("/events")}>
            
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}