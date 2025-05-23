import React, { useState, useEffect } from "react";
import personalData from "../data/personal.json";
import logoImage from '../assets/LogoCP.png'; 

const About = () => {
  const [personal, setPersonal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load personal data
    setPersonal(personalData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="py-10 flex items-center justify-center">Cargando...</div>
    );
  }

  // Split the paragraphs based on new lines
  const bioParagraphs = personal.fullBio.split("\n\n");

  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-3">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre Mí</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6 mb-5"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3 flex justify-center">
              <img
                src={logoImage}
                alt={personal.name}
              />
          </div>

          <div className="lg:w-2/3 space-y-4 animate-slide-in">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 pt6  grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center glass-card p-4">
                <div className="text-3xl text-secondary font-bold">20+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-3xl text-secondary font-bold">50+</div>
                <div className="text-gray-600">Proyectos </div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-3xl text-secondary font-bold">10+</div>
                <div className="text-gray-600">Tecnologías</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-3xl text-secondary font-bold">60+</div>
                <div className="text-gray-600">Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
