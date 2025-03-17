import education1 from "/education-1.jpg"
import education2 from "/education-2.jpg"
import education3 from "/education-3.png"

const Education = () => {
    return (
        <div className="space-y-3" id="education">
                    <h2 className="text-xl font-bold">Education</h2>
        
                    <div className="flex items-center gap-5">
                        <img src={education1} alt="company_1" className="w-14 border rounded-full shadow-md" />
                        
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col">
                                <h3 className="font-semibold">BINUS University</h3>
                                <span className="font-medium text-gray-500 text-sm">Information Systems</span>
                            </div>
        
                            <span className="text-gray-400 text-sm">
                                Sep 2020 - Nov 2024
                            </span>
                        </div>
                    </div>
        
                    <div className="flex items-center gap-5">
                        <img src={education2} alt="company_1" className="w-14 border rounded-full shadow-md" />
                        
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col">
                                <h3 className="font-semibold">Hotsuma International School</h3>
                                <span className="font-medium text-gray-500 text-sm">Japanese Language and Literature</span>
                            </div>
        
                            <span className="text-gray-400 text-sm">
                                Oct 2017 - Mar 2019
                            </span>
                        </div>
                    </div>
        
                    <div className="flex items-center gap-5">
                        <img src={education3} alt="company_1" className="w-14 border rounded-full shadow-md" />
                        
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col">
                                <h3 className="font-semibold">SMAN 5 Karawang</h3>
                                <span className="font-medium text-gray-500 text-sm">Social Science</span>
                            </div>
        
                            <span className="text-gray-400 text-sm">
                                Jul 2014 - May 2017
                            </span>
                        </div>
                    </div>
                </div>
    )
}

export default Education;