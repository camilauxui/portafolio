import personal from "../data/personal.json";
import logoImage from "../assets/logo_firma3.jpg";
import cv from "../assets/CV_Camila_Peña_2026 - DiseñadoraUXUI.pdf";

const About = () => {
  const bioParagraphs = personal.fullBio.split("\n\n");

  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-3">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre Mí</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6 mb-5"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3 flex justify-center">
            <img
              src={logoImage}
              alt={personal.name}
              className="max-w-xs rounded-xl"
            />
          </div>

          <div className="lg:w-2/3 space-y-4 animate-slide-in">
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-6">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir currículum en PDF en una nueva pestaña"
                className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-5 py-2 hover:opacity-80 transition"
              >
                📄 Ver CV en PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;