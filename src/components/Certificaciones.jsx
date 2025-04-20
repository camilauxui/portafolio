import React, { useState, useEffect } from "react";  
import certificationsData from "../data/certifications.json";  
// Asegúrate que la ruta es correcta, si carousel.tsx está en ui, sería:  
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";  

const Certificaciones = () => {  
  const [certifications, setCertifications] = useState([]);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {  
    // Simular carga o simplemente setear los datos  
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

  // Añadimos un padding horizontal al contenedor principal para dar espacio a los botones  
  return (  
    <section id="certificaciones" className="bg-muted py-16"> {/* Añadimos padding vertical si es necesario */}  
      <div className="container mx-auto text-center mb-12">  
        <h2 className="text-3xl md:text-4xl font-bold">Certificaciones y Cursos</h2>  
        <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>  
        <p className="max-w-2xl mx-auto">  
        Título profesional de Diseñadora Gráfica, Universidad Diego Portales. Bootcamp Diseño UX/UI, Bootcamp Desarrollo ROR, Bootcamp Desarrollo Android y BootcampDesarrollo Front-End. Cursos de postproducción avanzada en Adobe After Effects, copywriting, usabilidad y Agile.  
        </p>  
      </div>  

      {/* Ajustamos el contenedor del Carousel para dar espacio a los botones */}  
      {/* px-16 añade padding a los lados para que los botones no se salgan */}  
      <div className="relative px-20"> {/* Contenedor relativo y con padding */}  
        <Carousel  
          opts={{  
            align: "start", // Opcional: alinear items  
            loop: true,      // Asegúrate que loop sea false si quieres que los botones se deshabiliten  
          }}  
        >  
          
           <CarouselPrevious />  
           <CarouselContent>  
            {certifications.map((certification) => (  
            
              <CarouselItem key={certification.id} className="md:basis-1/2 lg:basis-1/1 p-4"> 
                {/* Contenedor interno para estilizar la tarjeta */}  
                <div className="p-6 rounded-lg shadow-md bg-white h-full flex flex-col justify-between border border-border">  
                  <div>  
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">{certification.name}</h3>  
                    <p className="text-muted-foreground text-sm mb-4">  
                      {certification.description.split('\n').map((line, index) => (  
                        <React.Fragment key={index}>  
                          {line}  
                          <br />  
                        </React.Fragment>  
                      ))}  
                    </p>  
                  </div>  
                  <a  
                    href={certification.url}  
                    target="_blank"  
                    rel="noopener noreferrer"  
                    className="mt-auto bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors self-start" // self-start para alinear abajo a la izquierda  
                  >  
                    Ver Certificación  
                  </a>  
                </div>  
              </CarouselItem>  
            ))}  
          </CarouselContent>  
          <CarouselNext />  
        </Carousel>  
      </div>  
    </section>  
  );  
};  

export default Certificaciones;