import { useState } from "react";
import project1 from "/project-1.png";
import project2 from "/project-2.png";
import project3 from "/project-3.png";
import project4 from "/project-4.jpg";

const certificates = [
  { image: project1, title: "Certificate 1", date: "Jan 2024 - Feb 2024" },
  { image: project2, title: "Certificate 2", date: "Jan 2024 - Feb 2024" },
  { image: project3, title: "Certificate 3", date: "Jan 2024 - Feb 2024" },
  { image: project4, title: "Certificate 4", date: "Jan 2024 - Feb 2024" }
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-5 pt-10">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
        <span className="bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent">
          My Certificates
        </span>
      </h1>

      <h3 className="font-semibold text-gray-500 text-xl text-center">
        Here are some of the Certificates I'm most proud of.
      </h3>

      {/* Grid for certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-1 cursor-pointer hover:-translate-y-1"
            onClick={() => setSelectedImage(cert)}
          >
            <img src={cert.image} className="w-[300px] rounded-md" alt={cert.title} />
            <h3 className="text-lg font-bold">{cert.title}</h3>
            <span className="text-sm text-gray-500 font-semibold">
              {cert.date}
            </span>
          </div>
        ))}
      </div>

      {/* Modal View Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setSelectedImage(null)} // Click shadow to close
        >
          {/* Close button in top-right */}
          <button
            className="absolute top-5 right-5 text-white text-lg font-bold bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Prevent click inside modal from closing */}
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing if clicked inside modal
          >
            <img src={selectedImage.image} className="max-w-full max-h-screen rounded-lg" alt={selectedImage.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
