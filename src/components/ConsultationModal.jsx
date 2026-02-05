import { X } from "lucide-react";

const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-md bg-gray-950 rounded-2xl p-8 shadow-7xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-50"
        >
          <X />
        </button>

        <p className="text-gray-500 text-sm mb-6">
          Fill out the form and we’ll get back to you soon.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
          />

          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows="4"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm resize-none focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-[#ef5da8] py-3 text-white font-medium hover:bg-black hover:text-[#ef5da8] border border-[#ef5da8] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
