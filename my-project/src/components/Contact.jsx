import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaCommentDots } from "react-icons/fa";

const Contact = ({ darkMode }) => {
    useEffect(() => {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function(){
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/YOUR_TAWKTO_PROPERTY_ID/default'; // edit ini setelah deploy app nya
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-16" id="contact">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
                <span className="bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-clip-text text-transparent">
                    Get in Touch
                </span>
            </h1>

            <p className="text-gray-500 font-semibold text-lg text-center">
                Want to chat? Send me a DM on Discord or chat live with me now!
            </p>

            <div className="bg-white dark:bg-gray-800 shadow-lg w-96 text-center">   
                <motion.a 
                    href="https://discord.com/users/882167428946206781" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-700 text-white w-full py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-600 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaDiscord className="text-xl" /> Send Me a DM
                </motion.a>
            </div>

            <div className="text-center text-gray-500 text-sm mt-6">
                <p>Made with ❤️ and dedication</p>
                <p>Injas Mahendra Berutu</p>
            </div>
        </div>
    );
};

export default Contact;
