import { Leaf, Home, FileText, Phone } from "lucide-react";
export default function FeatureCard() {
  return (
    <div>
      <section
        className="py-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/bg-pattern.jpg')" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              Icon: Leaf,
              title: "Environment",
              text: "You are the key to cleaner and pollution-free air. Love to breathe, save the trees. Think green.",
            },
            {
              Icon: Home,
              title: "CSR",
              text: "Successful people have a social responsibility to make the world a better place and not just take from it.",
            },
            {
              Icon: FileText,
              title: "Policies",
              text: "The more seriously you take your growth, the more seriously your people will take you.",
            },
            {
              Icon: Phone,
              title: "Contact Us",
              text: "It can be a very secure path to make you a very successful creative entrepreneur.",
            },
          ].map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Icon className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
