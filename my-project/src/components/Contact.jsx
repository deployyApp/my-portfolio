import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const emailParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send(
            "service_pzh0c8j", 
            "template_v8nebop", 
            emailParams, 
            "nqguc2-7wY0_BI8LW"
        ).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                setIsSending(false);
                setIsOpen(false);
                setFormData({ name: "", email: "", message: "" });
            },
            (error) => {
                console.log("FAILED...", error);
                setIsSending(false);
            }
        );
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-16" id="contact">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Get in Touch
                </span>
            </h1>

            <p className="text-gray-500 font-semibold text-lg text-center">
                Want to chat? Send me an E-mail through this button and I'll respond whenever I can.
            </p>

            <button 
                className="bg-black rounded-lg px-5 py-3 text-white font-bold text-lg hover:-translate-y-3 transition-all duration-300 border-2 hover:bg-white hover:border-black hover:text-black"
                onClick={() => setIsOpen(true)}
            >
                Contact Me
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h2 className={`text-xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-black'}`}>Write a message</h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your name" 
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded mb-3 dark:bg-gray-700 ${darkMode ? 'text-white' : 'text-black'}`} 
                                required
                            />
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Your email" 
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded mb-3 dark:bg-gray-700 ${darkMode ? 'text-white' : 'text-black'}`} 
                                required
                            />
                            <textarea 
                                name="message"
                                placeholder="Message" 
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded mb-3 dark:bg-gray-700 ${darkMode ? 'text-white' : 'text-black'}`} 
                                required
                            ></textarea>
                            <div className="flex justify-between">
                                <button 
                                    type="button"
                                    className="bg-gray-300 dark:bg-gray-600 px-10 py-2 rounded hover:scale-110" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="bg-black text-white px-10 py-2 rounded hover:scale-110"
                                    disabled={isSending}
                                >
                                    {isSending ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="text-center text-gray-500 text-sm mt-6">
                <p>Made with ❤️ and dedication</p>
                <p>Injas Mahendra Berutu</p>
            </div>
        </div>
    );
};

export default Contact;