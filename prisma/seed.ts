const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const projectData = [
  {
    title: "Loop Studio",
    subtitle: "HTML, TailwindCSS",
    description:
      "This is a responsive application. It was built to showcase my responsive design skills, and beautifully done to fit all device screen size.",
    liveLink: "https://loopstudios-five-rho.vercel.app/",
    codeLink: "github.com",
    type: "webApp",
  },
  {
    title: "Thrively",
    subtitle: "HTML, TailwindCSS",
    description:
      "This is a responsive application. It was built to showcase my responsive design skills, and beautifully done to fit all device screen size.",
    liveLink: "https://thrively-six.vercel.app/",
    codeLink: "github.com",
    type: "webApp",
  },
  {
    title: "Showcase App",
    subtitle: "HTML, CSS, Javascript",
    description:
      "This is a nicely designed landing page application. It was built to showcase my responsive design skills, and beautifully done to fit all device screen size.",
    liveLink: "https://singlepageapp-beryl.vercel.app/",
    codeLink: "github.com",
    type: "webApp",
  },
];

async function main() {
  for (const project of projectData) {
    await prisma.project.create({ data: project });
  }
  console.log("data sent");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
