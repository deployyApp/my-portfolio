import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const parseDate = (dateStr) => {
    if (dateStr.includes("Present")) return new Date(9999, 11);
    const [month, year] = dateStr.split(" ");
    return new Date(`${month} 1, ${year}`);
};

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("/experience_data.json")
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data.sort((a, b) => {
                    const getDateValue = (dateStr) => {
                        const parts = dateStr.split(" - ");
                        return parseDate(parts[1] || parts[0]).getTime();
                    };
                    return getDateValue(b.date) - getDateValue(a.date);
                });
                const groupedData = sortedData.reduce((acc, exp) => {
                    if (!acc[exp.id]) {
                        acc[exp.id] = {
                            logo: exp.logo,
                            company: exp.company,
                            location: exp.location,
                            positions: []
                        };
                    }
                    if (acc[exp.id].positions.length > 0) {
                        acc[exp.id].positions.push({ role: "│", date: "" });
                    }
                    acc[exp.id].positions.push({ role: exp.role, date: exp.date });
                    return acc;
                }, {});
                setExperiences(Object.values(groupedData));
            })
            .catch((error) => console.error("Error fetching experiences:", error));
    }, []);

    return (
        <div className="space-y-3 text-left" id="workExperience">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <AnimatePresence initial={false}>
                <motion.div 
                    layout 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-3"
                >
                    {(showAll ? experiences : experiences.slice(0, 5)).map((exp, index) => (
                        <motion.div 
                            key={index} 
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="pb-3 text-left"
                        >
                            <div className="flex items-start gap-5">
                                <img src={exp.logo} alt={`company_${index + 1}`} className="w-14 border rounded-full shadow-md" />
                                <div className="flex flex-col w-full">
                                    <h3 className="font-semibold">{exp.company}</h3>
                                    <span className="text-gray-500 text-sm">{exp.location}</span>
                                    <div className="mt-2 flex flex-col relative">
                                        {exp.positions.map((position, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <span className={position.role === "│" ? "text-gray-400 text-sm pl-0" : "font-medium text-sm flex items-center"}>
                                                    {position.role}
                                                </span>
                                                <span className="text-gray-400 text-sm text-right min-w-[250px] ml-auto">{position.date}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
            {experiences.length > 5 && (
                <motion.button 
                    className="bg-white text-black px-6 py-2 rounded-lg mt-4 flex items-center justify-center w-full text-sm transition"
                    onClick={() => setShowAll(!showAll)}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {showAll ? "View Less" : "View More"}
                    {showAll ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </motion.button>
            )}
        </div>
    );
};

export default Experience;
