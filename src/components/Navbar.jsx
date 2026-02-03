import Favicon from "../assets/favicon.ico";

const Navbar = () => {
  const navItems = [
    { label: "Home", target: "top" },
    { label: "Services", target: "services" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="relative top-4 sm:top-8 w-full z-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <img src={Favicon} alt="Logo" className="w-16 sm:w-20 md:w-24" />

        <div className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() =>
                item.target === "top"
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : handleScroll(item.target)
              }
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
