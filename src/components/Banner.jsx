import { ArrowRightLeft, Users } from "lucide-react";

export default function Banner({title, desc}) {
  return (
    <section className="bg-base-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row sm:items-center justify-between gap-10">
          
          {/* LEFT SIDE */}
          <div className="lg:text-left">
            <h1 className="text-4xl text-white md:text-5xl font-bold">
              {title}
            </h1>
            <p className="text-base-content/70 mt-4 text-lg">
                {desc}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">
            
            {/* CARD 1 */}
            <div className="flex items-center gap-4">
              <div className="bg-warning text-white p-5 rounded-2xl">
                <ArrowRightLeft size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  $91 <span className="text-warning">Million+</span>
                </h3>
                <div className="badge badge-primary badge-sm mt-2">
                  Total Transactions
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex items-center gap-4">
              <div className="bg-warning text-white p-5 rounded-2xl">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  49.6 <span className="text-warning">Thousand+</span>
                </h3>
                <div className="badge badge-primary badge-sm mt-2">
                  Active Investors
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
