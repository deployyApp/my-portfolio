import { useState, useEffect } from "react";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch("/education_data.json")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) => console.error("Error fetching education data:", error));
  }, []);

  return (
    <div className="space-y-3" id="education">
      <h2 className="text-xl font-bold">Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="flex items-center gap-5">
          <img src={edu.image} alt={edu.title} className="w-14 border rounded-full shadow-md" />
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <h3 className="font-semibold">{edu.institution}</h3>
              <span className="font-medium text-gray-500 text-sm">{edu.field}</span>
            </div>
            <span className="text-gray-400 text-sm">{edu.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;