import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div className="flip-card">
      <div className="flip-card-inner">

        {/* FRONT */}
        <div className="flip-card-front">
          <img src={event.image} alt={event.title} />
          <h3>{event.title}</h3>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p>{event.description}</p>

          <button onClick={() => navigate("/contact")}>
            Register
          </button>
        </div>

      </div>
    </div>
  );
}

export default EventCard;