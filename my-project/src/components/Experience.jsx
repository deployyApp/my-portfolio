import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo1 from "/1.png";
import logo2 from "/2.png";
import logo3 from "/3.png";
import logo4 from "/4.png";
import logo5 from "/5.png";
import logo6 from "/6.png";

const rawExperiences = [
    { logo: logo1, company: "Sendbird", role: "Software Quality Assurance Tester Staff", date: "Feb 2025 - Present", location: "Seoul, South Korea" },
    { logo: logo1, company: "Sendbird", role: "Software Quality Assurance Tester Intern", date: "Oct 2024 - Feb 2025", location: "Seoul, South Korea" },
    { logo: logo2, company: "PT. Murni Solusindo Nusantara", role: "Support & Deployment Software", date: "Sep 2024 - Oct 2024", location: "Jakarta, Indonesia" },
    { logo: logo3, company: "PT. Bumi Amartha Teknologi Mandiri", role: "Data Engineer Intern", date: "Feb 2023 - Feb 2024", location: "Jakarta, Indonesia" },
    { logo: logo4, company: "Sushiro", role: "Kitchen Staff", date: "May 2019 - Dec 2019", location: "Aichi, Japan" },
    { logo: logo5, company: "Genki Sushi", role: "Kitchen Staff", date: "May 2018 - Feb 2019", location: "Gifu, Japan" },
    { logo: logo6, company: "成田食品工業（株)", role: "Food Production Staff", date: "Nov 2017 - May 2018", location: "Gifu, Japan" }
];

const parseDate = (dateStr) => {
    if (dateStr.includes("Present")) return new Date(9999, 11);
    const [month, year] = dateStr.split(" ");
    return new Date(`${month} 1, ${year}`);
};

const sortedExperiences = rawExperiences.sort((a, b) => {
    const getDateValue = (dateStr) => {
        const parts = dateStr.split(" - ");
        return parseDate(parts[1] || parts[0]).getTime();
    };
    return getDateValue(b.date) - getDateValue(a.date);
});

const groupedExperiences = sortedExperiences.reduce((acc, exp) => {
    const existingCompany = acc.find(item => item.company === exp.company);
    if (existingCompany) {
        existingCompany.positions.push({ role: "│", date: "" });
        existingCompany.positions.push({ role: exp.role, date: exp.date });
        existingCompany.positions.sort((a, b) => parseDate(b.date.split(" - ")[0]) - parseDate(a.date.split(" - ")[0]));
    } else {
        acc.push({
            logo: exp.logo,
            company: exp.company,
            location: exp.location,
            positions: [{ role: exp.role, date: exp.date }]
        });
    }
    return acc;
}, []);

const Experience = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleExperiences = showAll ? groupedExperiences : groupedExperiences.slice(0, 5);

    return (
        <div className="space-y-3 text-center" id="workExperience">
            <h2 className="text-xl font-bold">Work Experience</h2>
            {visibleExperiences.map((exp, index) => (
                <div key={index} className="pb-3 text-left">
                    <div className="flex items-start gap-5">
                        <img src={exp.logo} alt={`company_${index + 1}`} className="w-14 border rounded-full shadow-md" />
                        <div className="flex flex-col w-full">
                            <h3 className="font-semibold">{exp.company}</h3>
                            <span className="text-gray-500 text-sm">{exp.location}</span>
                            <div className="mt-2 flex flex-col relative">
                                {exp.positions.map((position, idx) => (
                                    <div key={idx} className="flex items-start">
                                        {position.role === "│" ? (
                                            <span className="text-gray-400 text-sm pl-0">│</span>
                                        ) : (
                                            <span className="font-medium text-sm flex items-center">{position.role}</span>
                                        )}
                                        <span className="text-gray-400 text-sm text-right min-w-[250px] ml-auto">{position.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {groupedExperiences.length > 5 && (
                <button 
                    className="bg-gray-200 text-black px-6 py-2 rounded-lg mt-4 flex items-center justify-center w-full text-sm hover:bg-gray-300 transition"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "View Less" : "View More"}
                    {showAll ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>
            )}
        </div>
    );
};

export default Experience;