import React from 'react';

const certificates = [
  {
    id: 1,
    image: '/assets/images/certificates/c1.jpg',
    title: 'Prompt Design in Vertex AI 2025',
    alt: 'forbes-logo'
  },
  {
    id: 2,
    image: '/assets/images/certificates/c2.jpg',
    title: 'HYPERTHOAN 2025 WINNER',
    alt: 'construction-world'
  },
  {
    id: 3,
    image: '/assets/images/certificates/c3.jpg',
    title: 'Power BI',
    alt: 'BNI-logo'
  },
  {
    id: 4,
    image: '/assets/images/certificates/c4.jpg',
    title: 'Intership Test and Certificate',
    alt: 'fastergrowing'
  },
  {
    id: 5,
    image: '/assets/images/certificates/c5.jpg',
    title: 'FANTOMCODE 2025 - Hackathon Participant',
    alt: 'fastergrowing'
  },
  {
    id: 6,
    image: '/assets/images/certificates/c6.jpg',
    title: 'PARSEC- A 36 Hr Hackathon held at IIT Dharwad',
    alt: 'fastergrowing'
  },
  {
    id: 7,
    image: '/assets/images/certificates/c7.jpg',
    title: 'HTML CSS Bootcamp',
    alt: 'fastergrowing'
  },
  {
    id: 8,
    image: '/assets/images/certificates/c8.jpg',
    title: 'Python Bootcamp',
    alt: 'fastergrowing'
  },
  {
    id: 9,
    image: '/assets/images/certificates/c9.jpg',
    title: 'Regional Meet aT KLE TECHNOLOGICAL UNIVERSITY',
    alt: 'fastergrowing'
  },
  {
    id: 10,
    image: '/assets/images/certificates/c10.jpg',
    title: 'Secure Networks in Google Cloud',
    alt: 'fastergrowing'
  },
  {
    id: 11,
    image: '/assets/images/certificates/c11.jpg',
    title: 'Cloud Computing Fundamentals',
    alt: 'fastergrowing'
  },
  {
    id: 12,
    image: '/assets/images/certificates/c12.jpg',
    title: 'Cloud Resource Management',
    alt: 'fastergrowing'
  },
  {
    id: 13,
    image: '/assets/images/certificates/c13.jpg',
    title: 'Cloud Infrastructure Tasks',
    alt: 'fastergrowing'
  },
  {
    id: 14,
    image: '/assets/images/certificates/c14.jpg',
    title: 'Networking and Security Fundamentals',
    alt: 'fastergrowing'
  },
  {
    id: 15,
    image: '/assets/images/certificates/c15.jpg',
    title: 'Data, AI and the Cloud',
    alt: 'fastergrowing'
  },
  {
    id: 16,
    image: '/assets/images/certificates/c16.jpg',
    title: 'The Arcade',
    alt: 'fastergrowing'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-2xl font-bold mb-4">Certificates</h4>
          <p className="text-muted-foreground">
          Here are my professional certifications that demonstrate my expertise in various technologies and platforms. These credentials validate my skills and commitment to continuous learning in the field of software development and cloud computing.
          </p>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex space-x-8 animate-scroll">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="flex-none w-72 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-card rounded-lg p-6 shadow-lg h-full">
                    <div className="mb-4">
                      <img
                        src={cert.image}
                        alt={cert.alt}
                        className="w-full h-32 object-contain"
                      />
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                      {cert.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 