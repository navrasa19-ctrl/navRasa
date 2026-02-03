import { useState } from "react";

const faqs = [
  {
    q: "What is an MVP, and why do startups need it?",
    a: "An MVP helps startups validate ideas with real users, reduce risk, and save development cost."
  },
  {
    q: "How long does it take to build an MVP?",
    a: "Most MVPs are delivered within 4–6 weeks depending on scope and complexity."
  },
  {
    q: "What technologies do you use for MVP development?",
    a: "We use React, Next.js, Node.js, Firebase, AWS, and scalable cloud-native tools."
  },
  {
    q: "Can you help validate my startup idea before development?",
    a: "Yes. We help with market research, UX validation, and technical feasibility."
  },
  {
    q: "Do you work with early-stage startups without funding?",
    a: "Absolutely. Our process is designed for early-stage and bootstrapped founders."
  },
  {
    q: "Will I own the MVP source code after completion?",
    a: "Yes. You get 100% ownership of the source code and IP."
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section className="relative py-32 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">

        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400">
            FAQs
          </span>
        </div>

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-wide mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.slice(0, visibleCount).map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border bg-white/[0.04] transition-all duration-300
                  ${isOpen
                    ? "border-violet-400/60"
                    : "border-white/10 hover:border-violet-400/40"}
                `}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className="text-white font-semibold text-base sm:text-lg">
                    {faq.q}
                  </span>

                  <span
                    className={`text-violet-400 text-2xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-out
                    ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {visibleCount < faqs.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(faqs.length)}
              className="px-8 py-3 rounded-xl border border-violet-400/40
                         text-violet-400 font-semibold hover:bg-violet-500/10 transition"
            >
              Load More FAQs
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default FAQs;
