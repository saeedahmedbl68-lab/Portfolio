import { useEffect, useRef, useState } from 'react';

const skillsData = [
  {
    name: 'HTML',
    image: './html.png',
    desc: 'Level: Intermediate',
    color: '#e44d26',
  },
    {
    name: 'XML',
    image: './xml.jpg',
    desc: 'Level: Intermediate',
    color: '#e44d26',
  },
  {
    name: 'CSS',
    image: './css.png',
    desc: 'Level: Intermediate',
    color: '#264de4',
  },
  {
    name: 'JavaScript',
    image: './javascript.png',
    desc: 'Level: Intermediate',
    color: '#f7df1e',
  },
  {
    name: 'Bootstrap',
    image: './bootstrap.png',
    desc: 'Level: Beginner',
    color: '#7952b3',
  },
  {
    name: 'React',
    image: './react.jpg',
    desc: 'Level: Beginner',
    color: '#61dafb',
  },
];

const SkillCard = ({ skill}) => (
  <div className="skill-card fade-in">
    
    {/* Skill Image */}
    <div className="skill-image-wrapper">
      <img
        src={skill.image}
        alt={skill.name}
        className="skill-image"
      />
    </div>

    <h3>{skill.name}</h3>
    <p>{skill.desc}</p>

    </div>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimate(true);

            e.target
              .querySelectorAll('.fade-in')
              .forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-inner">
        <h2 className="section-title">My Skills</h2>

        <div className="section-underline-center"></div>

        <p className="section-subtitle">
          I love creating beautiful and functional websites. I have
          hands-on experience in Front-End technologies and love
          turning ideas into interactive designs.
        </p>

        <div className="skills-grid">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;