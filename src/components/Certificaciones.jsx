import React, { useState, useEffect } from "react";  
import certificationsData from "../data/certifications.json";   
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";  

const Certificaciones = () => {  
  const [certifications, setCertifications] = useState([]);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {  
    // Load certifications data  
    setCertifications(certificationsData);  
    setLoading(false);  
  }, []);  

  if (loading) {  
    return (  
      <div className="py-20 flex items-center justify-center">  
        Cargando certificaciones...  
      </div>  
    );  
  }  

  return (  
    <section id="certificaciones" className="bg-muted">  
      <div className="container mx-auto text-center mb-12">  
        <h2 className="text-3xl md:text-4xl font-bold">Certificaciones</h2>  
        <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>  
        <p className="text-gray-600 max-w-2xl mx-auto">  
          Certificaciones en diferentes habilidades y tecnologías.  
        </p>  
      </div>  

      <Carousel>  
        <CarouselPrevious className="left-4" />  
        <CarouselContent>  
          {certifications.map((certification) => (  
            <CarouselItem key={certification.id} className="flex flex-col items-center justify-center p-6">  
              <h3 className="text-xl font-bold mb-2 text-center">{certification.name}</h3>  
              <p className="text-gray-600 mb-8 text-center text-sm">  
                {certification.description.split('\n').map((line, index) => (  
                  <span key={index}>  
                    {line}  
                    <br />  
                  </span>  
                ))}  
              </p>  
              <a  
                href={certification.url}  
                target="_blank"  
                rel="noopener noreferrer"  
                className="bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary/90 transition-colors"  
              >  
                Ver Certificación  
              </a>  
            </CarouselItem>  
          ))}  
        </CarouselContent>  
        <CarouselNext className="right-4" />  
      </Carousel>  
    </section>  
  );  
};  

export default Certificaciones;