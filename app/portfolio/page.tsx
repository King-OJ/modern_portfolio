import FlipCard from "@/Components/FlipCard";
import { BottomProjectCard, TopProjectCard } from "@/Components/ProjectCard";
import ProjectInfo from "@/Components/ProjectInfo";
import { getProjects } from "@/utils/actions";

async function PortfolioPage() {
  const projects = await getProjects();

  if (!projects) return null;

  return (
    <main className="mt-14 md:mt-12">
      <h2 className="text-2xl font-extrabold my-4 md:my-8 ">
        Project Collections
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 md:grid-rows-[repeat(2,minmax(400px,1fr))] my-8">
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <FlipCard
                front={
                  index == 0 || index == 3 ? (
                    <TopProjectCard project={project} />
                  ) : (
                    <BottomProjectCard project={project} />
                  )
                }
                back={<ProjectInfo project={project} />}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default PortfolioPage;
