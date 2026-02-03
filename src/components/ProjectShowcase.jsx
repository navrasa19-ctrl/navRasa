import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Breakaway Music Festival",
    more:["Spanning 5 US states with some big name artists."],
    tags: ["Webflow", "Website Design", "CMS"],
    image: "/images/p1.png",
  },
  {
    title: "Egg-basket",
    tags: ["Web Design", "Concept"],
    image: "/images/p2.png",
  },
  {
    title: "Law By Levin",
    more:["Sophisticated lawyers unafraid to keep it simple."],
    tags: ["Web Design", "Webflow", "Blog"],
    image: "/images/p3.png",
  },
];

const ProjectShowcase = () => {
  return (
    <section id="services" className="min-h-screen grid grid-cols-1 md:grid-cols-3 ">
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </section>
  );
};

export default ProjectShowcase;
