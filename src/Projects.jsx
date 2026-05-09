import { useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    desc: 'Personal portfolio using HTML, CSS & React',
    image: './portfolio.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Rental Hub',
    desc: 'RentalHub is a full-stack property rental and marketplace platform that allows users to rent Houses/Apartments, Hostels Rooms, Private Rooms, and Shops.',
    image: './rentalhub.png',
    // link: 'https://www.rentalhub.com',
  },
  {
    id: 3,
    title: ' Standard Calculator',
    desc: 'Using HtML, CSS & JavaScript, created a standard calculator that performs basic arithmetic operations.',
    image: './Calculator.jpg',
    link: 'https://saeedahmedbl68-lab.github.io/Standard-Calculator/',
  },
    {
    id: 4,
    title: ' Whack-A-Mole Game',
    desc: 'Using HtML, CSS & JavaScript, created a Whack-A-Mole game where players click on appearing moles to score points within a time limit.',
    image: './mole.jpg',
    link: 'https://saeedahmedbl68-lab.github.io/Whack-a-Mole/',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll('.fade-in')
              .forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-inner">
        <h2 className="section-title">My Projects</h2>

        <div
          className="section-underline-center"
          style={{ background: '#c9a8f5' }}
        ></div>

        <p className="section-subtitle">
          Some of my recent work using HTML, CSS, JavaScript &amp; React
        </p>

        <div className="projects-grid">
          {projectsData.map((proj) => (
            <div key={proj.id} className="project-card fade-in">
              
              {/* Project Image */}
              <div className="project-img-container">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-img"
                />
              </div>

              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>

                <a
                  href={proj.link}
                  className="view-btn"
                  target="_blank"
                  // rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;