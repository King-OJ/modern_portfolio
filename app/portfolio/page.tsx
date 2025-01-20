import FlipCard from "@/Components/FlipCard";
import { BottomProjectCard, TopProjectCard } from "@/Components/ProjectCard";
import ProjectInfo from "@/Components/ProjectInfo";
import { ProjectDetails } from "@/utils/types";

function PortfolioPage() {
  const projectCollections: Array<ProjectDetails> = [
    {
      title: "Responsive UI design",
      subtitle: "HTML, CSS",
      photosUrl: ["/assets/showcase_1.png", "/assets/showcase.png"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur consequatur quidem itaque reprehenderit, commodi, aliquam adipisci quas enim dolore expedita tempora nobis qui nam quis impedit delectus consectetur amet",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Krist Ecommerce",
      subtitle: "NextJs, Prisma, Firebase, TailwindCss",
      photosUrl: [
        "/assets/krist-ecommerce.png",
        "/assets/krist-ecommerce2.png",
      ],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur consequatur quidem itaque reprehenderit, commodi, aliquam adipisci quas enim dolore expedita tempora nobis qui nam quis impedit delectus consectetur amet",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Responsive UI design",
      subtitle: "HTML, CSS",
      photosUrl: ["/assets/showcase_1.png", "/assets/showcase.png"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur consequatur quidem itaque reprehenderit, commodi, aliquam adipisci quas enim dolore expedita tempora nobis qui nam quis impedit delectus consectetur amet",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Krist Ecommerce",
      subtitle: "NextJs, Prisma, Firebase, TailwindCss",
      photosUrl: [
        "/assets/krist-ecommerce.png",
        "/assets/krist-ecommerce2.png",
      ],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur consequatur quidem itaque reprehenderit, commodi, aliquam adipisci quas enim dolore expedita tempora nobis qui nam quis impedit delectus consectetur amet",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <main className="mt-10 md:mt-12">
      <h2 className="text-2xl font-extrabold my-4 md:my-8 ">
        Project Collections
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 md:grid-rows-[repeat(2,minmax(400px,1fr))] my-8">
        {projectCollections.map((project, index) => {
          return (
            <li key={index}>
              <FlipCard
                front={
                  index == 0 || index == 3 ? (
                    <TopProjectCard
                      title={project.title}
                      subtitle={project.subtitle}
                      photosUrl={project.photosUrl}
                    />
                  ) : (
                    <BottomProjectCard
                      title={project.title}
                      subtitle={project.subtitle}
                      photosUrl={project.photosUrl}
                    />
                  )
                }
                back={
                  <ProjectInfo
                    about={project.desc!}
                    githubLink={project.codeLink!}
                    siteLink={project.liveLink!}
                  />
                }
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default PortfolioPage;
