export default function Achievements() {
  const achievements = [
    {
    title: "100% Placement Record",
    description: "Our students have consistently achieved top placements in leading tech companies."
  },
  {
    title: "National Level Hackathon Winners",
    description: "Students secured top ranks in national hackathons and coding competitions."
  },
  {
    title: "Research Publications",
    description: "Faculty and students have published papers in reputed international journals."
  },
  {
    title: "Industry Collaborations",
    description: "Partnerships with tech companies for internships and real-world projects."
  },
  {
    title: "Certified Training Programs",
    description: "Students receive industry-recognized certifications in cloud, AI, and full-stack development."
  },
  {
    title: "Strong Alumni Network",
    description: "Our alumni are working in top MNCs and actively mentor current students."
  }
  ];

  return (
    <div className="achievements-section">
      <h2>Our Achievements</h2>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}