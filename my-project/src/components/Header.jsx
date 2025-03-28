import profileImage from "/image.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

const roles = [
    "Content Writer",
    "Freelancer",
    "Photographer",
    "Quality Assurance"
];

const Header = () => {
    const [currentText, setCurrentText] = useState("I'm a ");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < roles[roleIndex].length) {
                setCurrentText((prev) => prev + roles[roleIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (!isDeleting && charIndex === roles[roleIndex].length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex > 0) {
                setCurrentText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-3 md:gap-8" id="home">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-nowrap tracking-tighter">
                    Hi, I'm <span className="bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent">
                        Injas </span>
                        👋
                </h1>
                <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
                    {currentText}<span className="animate-blink">|</span>
                </p>
                <p className="max-w-[490px] text-lg md:text-xl ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="flex gap-4 mt-4">
                    <a href="https://www.linkedin.com/in/imb27/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-full shadow-lg hover:opacity-80 transition">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-lg hover:opacity-80 transition">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:opacity-80 transition">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-full shadow-lg hover:opacity-80 transition">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>

            <img 
                src={profileImage} 
                alt="Profile" 
                className="w-32 sm:w-40 md:w-52 lg:w-60 xl:w-72 h-auto rounded-full object-cover shadow-xl"
            />
        </div>
    );
};

export default Header;