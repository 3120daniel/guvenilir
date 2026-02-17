import {
  ShieldCheck,
  Home,
  KeyRound,
  Briefcase,
  Users,
  Headphones,
  Server,
  Lock,
} from "lucide-react";
import Buttons from "./Buttons";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Legal Company",
      description:
        "Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe.",
      icon: <Home size={40} />,
    },
    {
      title: "High reliability",
      description:
        "We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks.",
      icon: <KeyRound size={40} />,
    },
    {
      title: "Quick Withdrawal",
      description:
        "Our all retreats are treated spontaneously once requested. There are high maximum limits.",
      icon: <Briefcase size={40} />,
    },
    {
      title: "Referral Program",
      description:
        "We are offering 10% (percent) of referral income through our referral program. You can increase your income by simply referring people.",
      icon: <Users size={40} />,
    },
    {
      title: "24/7 Support",
      description:
        "We provide 24/7 customer support through e-mail, telegram, whatsapp and livechat.",
      icon: <Headphones size={40} />,
    },
    {
      title: "Dedicated Server",
      description:
        "We are using a dedicated server for the website which allows us exclusive use of the resources of the entire server.",
      icon: <Server size={40} />,
    },
    {
      title: "SSL Secured",
      description:
        "Comodo Essential SSL Security encryption confirms that the presented content is genuine and legitimate.",
      icon: <ShieldCheck size={40} />,
    },
    {
      title: "DDOS Protection",
      description:
        "We are using one of the most experienced, professional, and trusted DDoS Protection and mitigation providers.",
      icon: <Lock size={40} />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0d0f14] via-[#111318] to-[#1a1d23] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <div className="bg-primary text-black text-center py-4 rounded-xl text-2xl md:text-3xl font-bold">
            Why choose Güvenilir-varlıklar 
          </div>
        </div>

        {/* Grid */}
        <div className="relative grid md:grid-cols-2 gap-y-12 gap-x-16">
          
          {/* Vertical Divider (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10"></div>

          {features.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start gap-6"
            >
              {/* Text Content */}
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-white/30 inline-block"></span>
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  {item.description}
                </p>

                <Buttons btnTitle="Join Us" btnStyles="hover:text-primary" withArrow={true} />
              </div>

              {/* Icon */}
              <div className="text-gray-500 shrink-0 hidden sm:block">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
