import { useEffect, useState } from "react";

const InfoCard = ({ show, setShow }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // 🔹 Hide if user already closed before
  useEffect(() => {
    const isClosed = localStorage.getItem("infoCardClosed");
    if (isClosed === "true") {
      setShow(false);
    }
  }, [setShow]);

  const handleClose = () => {
    localStorage.setItem("infoCardClosed", "true");
    setShow(false);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 BACKEND SUBMIT
  const handleSubmit = async () => {
    setError("");

    // ✅ Validation
    if (!form.name || !form.phone || !form.message) {
      setError("All fields are required");
      return;
    }

    if (!/^[6-9][0-9]{9}$/.test(form.phone)) {
      setError("Enter valid 10 digit phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.phone + "@phone.com", // backend workaround
          message: form.message
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // ✅ Success state
      setSuccess(true);
      setForm({ name: "", phone: "", message: "" });

      // 🔥 Optional: auto close after 3 sec
      setTimeout(() => {
        setShow(false);
        setSuccess(false);
      }, 3000);

    } catch (err) {
      console.error(err);
      setError(err.message || "Server error");
    }

    setLoading(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 right-5 z-50 w-72 bg-white rounded-xl shadow-2xl p-4 animate-fade-in">

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      {/* ✅ SUCCESS UI */}
      {success ? (
        <div className="flex flex-col items-center justify-center text-center py-6">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl mb-3">
            ✓
          </div>
          <h3 className="text-lg font-semibold text-black mb-2">
            Message Sent!
          </h3>
          <p className="text-sm text-gray-600">
            I'll get back to you soon 🚀
          </p>
        </div>
      ) : (
        <>
          {/* FORM UI */}
          <h3 className="text-lg font-semibold mb-2 text-black">
            Let's Work Together 🚀
          </h3>

          <p className="text-sm text-gray-600 mb-3">
            Share your idea or project details
          </p>

          {/* ERROR */}
          {error && (
            <div className="text-red-500 text-sm mb-2">
              {error}
            </div>
          )}

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-2 p-2 border rounded text-black"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Contact"
            className="w-full mb-2 p-2 border rounded text-black"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full mb-3 p-2 border rounded text-black"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </>
      )}
    </div>
  );
};

export default InfoCard;

// import { useEffect, useState } from "react";

// const InfoCard = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShow(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (!show) return null;

//   return (
//     <div className="fixed bottom-24 right-5 z-50 w-72 bg-white rounded-xl shadow-2xl p-4 animate-fade-in">
      
//       {/* Close Button */}
//       <button
//         onClick={() => setShow(false)}
//         className="absolute top-2 right-2 text-gray-500 hover:text-black"
//       >
//         ✕
//       </button>

//       <h3 className="text-lg font-semibold mb-2">
//         Let's Work Together 🚀
//       </h3>

//       <p className="text-sm text-gray-600 mb-3">
//         Share your idea or project details
//       </p>

//       <input
//         type="text"
//         placeholder="Your Name"
//         className="w-full mb-2 p-2 border rounded"
//       />

//       <textarea
//         placeholder="Your Message"
//         className="w-full mb-3 p-2 border rounded"
//       />

//       <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
//         Send
//       </button>
//     </div>
//   );
// };

// export default InfoCard;