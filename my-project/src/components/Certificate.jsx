import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const itemsPerPage = 6; // 2 rows x 3 columns

  useEffect(() => {
    fetch("/certificate_data.json")
      .then((response) => response.json())
      .then((data) => setCertificates(data))
      .catch((error) => console.error("Error fetching certificates:", error));
  }, []);

  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);
  const isEnd = currentPage >= totalPages - 1;

  const visibleCertificates = certificates.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
    }
  };

  const handleNext = () => {
    if (!isEnd) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    }
  };

  return (
    <div className="space-y-5 pt-10 text-center relative">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
        <span className="bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent">
          My Certificates
        </span>
      </h1>

      <h3 className="font-semibold text-gray-500 text-xl">
        Here are some of the Certificates I'm most proud of.
      </h3>

      <div className="relative flex items-center justify-center w-full">
        {currentIndex > 0 && (
          <button
            className="absolute left-[-60px] z-10 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 hover:scale-110"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 place-items-center transition-all duration-500 ease-in-out">
          {visibleCertificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              <img
                src={cert.image}
                className="w-[300px] rounded-md transition-all duration-300 hover:opacity-90"
                alt={cert.title}
              />
              <h3 className="text-lg font-bold">{cert.title}</h3>
              <span className="text-sm text-gray-500 font-semibold">{cert.date}</span>
            </div>
          ))}
        </div>

        {!isEnd && (
          <button
            className="absolute right-[-60px] z-10 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 hover:scale-110"
            onClick={handleNext}
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="max-w-full max-h-full rounded-lg shadow-lg" alt="Certificate Preview" />
        </div>
      )}
    </div>
  );
};

export default Certificates;
