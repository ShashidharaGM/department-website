import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
    title: "Coding Environment"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    title: "Laptop Coding"
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60",
    title: "Developer Workspace"
  },

  {
    src: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60",
    title: "Cultural Stage Lights"
  },
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=60",
    title: "Music Event"
  },
  {
    src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=800&q=60",
    title: "Dance Performance"
  },
  {
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=60",
    title: "Gaming / Dev Setup"
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    title: "Tech Workspace"
  },
 
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    title: "Event Setup"
  }
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>

      {/* Grid */}
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setSelected(img.src)}
          >
            <img src={img.src} alt={img.title} />

            {/* Overlay */}
            <div className="gallery-overlay">
              <h4>{img.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img src={selected} alt="preview" />
        </div>
      )}
    </div>
  );
}