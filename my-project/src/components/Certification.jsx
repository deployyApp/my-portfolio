import { useState } from "react";
import project1 from "/project-1.png";
import project2 from "/project-2.png";
import project3 from "/project-3.png";
import project4 from "/project-4.jpg";

const certificates = [
    { image: project1, title: "Certification 1", date: "Jan 2024 - Feb 2024" },
    { image: project2, title: "Certification 2", date: "Jan 2024 - Feb 2024" },
    { image: project3, title: "Certification 3", date: "Jan 2024 - Feb 2024" },
    { image: project4, title: "Certification 4", date: "Jan 2024 - Feb 2024" }
];

const Certification = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="space-y-5 pt-10" id="certification_and_certificates">
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl text-center">
                <span className="bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent">
                    My License & certifications
                </span>
            </h1>

            <h3 className="font-semibold text-gray-500 text-xl text-center">
                Here are some of the Certifications I'm most proud of.
            </h3>

            {/* Grid untuk sertifikasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-baseline text-left gap-2 max-w-[300px] 
                        border rounded-lg p-5 hover:shadow-xl transition-all duration-1 cursor-pointer hover:-translate-y-1"
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
                    onClick={() => setSelectedImage(null)} // Klik shadow untuk close
                >
                    {/* Tombol Close di Pojok Kanan Atas Layar */}
                    <button
                        className="absolute top-5 right-5 text-white text-lg font-bold bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>

                    {/* Prevent klik dalam modal menutup modal */}
                    <div 
                        className="relative"
                        onClick={(e) => e.stopPropagation()} // Mencegah close jika klik dalam modal
                    >
                        <img src={selectedImage.image} className="max-w-full max-h-screen rounded-lg" alt={selectedImage.title} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certification;