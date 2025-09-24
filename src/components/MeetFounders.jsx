import React from "react";

export default function MeetFounders() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-10">Meet the Founders</h2>

      {/* Two cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <article className="relative bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          {/* Avatar (overlapping) */}
          <div className="absolute -left-6 top-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 border-[#c45c33] bg-[#ef9b73] shadow-sm">
              {/* inner circle to mimic the image feel */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f2b089]" />
            </div>
          </div>

          {/* content shifted right so avatar doesn't cover text */}
          <div className="ml-14 md:ml-20">
            <div className="flex items-center gap-3">
              <h3 className="text-xl md:text-2xl font-extrabold">Rey Anwar</h3>
              <span className="text-sm text-gray-500">Founder</span>
            </div>

            <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
              I’m <strong>Rey Anwar</strong>, a barber with over six years behind the chair. I lived the queues, the
              no-shows, the last minute rush and became the driving force behind Barbers Time so customers, barbers,
              and shop owners all win.
            </p>

            <div className="mt-6 flex items-start gap-4">
              <div className="w-1.5 h-14 rounded bg-[#c45c33] mt-1" />
              <blockquote className="text-sm md:text-base text-gray-600 italic">
                “From behind the chair to behind the idea - I built Barbers Time to make life easier for customers,
                barbers, and shop owners alike.”
              </blockquote>
            </div>
          </div>
        </article>

        {/* Card 2 */}
        <article className="relative bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          <div className="absolute -left-6 top-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 border-[#c45c33] bg-[#ef9b73] shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f2b089]" />
            </div>
          </div>

          <div className="ml-14 md:ml-20">
            <div className="flex items-center gap-3">
              <h3 className="text-xl md:text-2xl font-extrabold">Ahmed Anwar</h3>
              <span className="text-sm text-gray-500">Co-Founder</span>
            </div>

            <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
              I’m <strong>Ahmed Anwar</strong>, with a Business Management degree and a strong customer-experience
              background. I helped shape Barbers Time around what people truly want - simple, friendly, and reliable.
            </p>

            <div className="mt-6 flex items-start gap-4">
              <div className="w-1.5 h-14 rounded bg-[#c45c33] mt-1" />
              <blockquote className="text-sm md:text-base text-gray-600 italic">
                “By focusing on the customer journey and bringing business strategy to the table, I helped shape
                Barbers Time into an app people love to use.”
              </blockquote>
            </div>
          </div>
        </article>
      </div>

      {/* Joint quote */}
      <div className="mt-10">
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm flex items-start gap-6">
          <div className="w-1.5 h-10 rounded bg-[#c45c33] mt-1" />
          <div className="w-full text-center">
            <h4 className="font-extrabold text-lg mb-2">Joint Quote :</h4>
            <p className="text-sm md:text-base text-gray-700 italic">
              “Barbering insight + customer experience + business expertise - together, we’ve built Barbers Time for
              everyone.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
