import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [show, setShow] = useState(false);

  const phoneNumber = "919828251124"; // replace
  const message = "Hi Vivekanand, I saw your portfolio and want to connect!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* 🔥 Blinking Glow */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-70 animate-ping"></span>

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default WhatsAppButton;