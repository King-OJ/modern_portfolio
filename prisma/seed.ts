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
    photosUrl: [
      "https://media-hosting.imagekit.io//ec3906bc668e4ed3/showcase.png?Expires=1832344153&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=od85PDDW3uew2iQFK14IOyoDULwTzhZUGMeLBqn8kNpBxvPJ0os-JZEOGYau2AfWdHYck2SjAv5ywdvFYvNDS72B-EzwrZuXn29mKYzRDga2Hq6ZtsQUJg2LzFA105~uKPzUIORbUqnwYKs3Ep7FBY1q8cKLQlufI8O7XiAyjUiH7lFMX8mK87Fw21uokIoRN2nRWOG1EHIkjCn-qr9WIRDIsYCjebXR5s~B8~9Nwe6LWm9SNcAH~0xg4DnP8tSYFBMYnNscnv5XLaXOEZ-RovE8bHH5T6T~XMd7BX6nPpwUDSsKOU9Aemri9lMWqXwtVK5J50WP8yRueayhlM5sQA__",
    ],
  },
  {
    title: "Thrively",
    subtitle: "HTML, TailwindCSS",
    description:
      "This is a responsive application. It was built to showcase my responsive design skills, and beautifully done to fit all device screen size.",
    liveLink: "https://thrively-six.vercel.app/",
    codeLink: "github.com",
    type: "webApp",
    photosUrl: [
      "https://media-hosting.imagekit.io//ec3906bc668e4ed3/showcase.png?Expires=1832344153&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=od85PDDW3uew2iQFK14IOyoDULwTzhZUGMeLBqn8kNpBxvPJ0os-JZEOGYau2AfWdHYck2SjAv5ywdvFYvNDS72B-EzwrZuXn29mKYzRDga2Hq6ZtsQUJg2LzFA105~uKPzUIORbUqnwYKs3Ep7FBY1q8cKLQlufI8O7XiAyjUiH7lFMX8mK87Fw21uokIoRN2nRWOG1EHIkjCn-qr9WIRDIsYCjebXR5s~B8~9Nwe6LWm9SNcAH~0xg4DnP8tSYFBMYnNscnv5XLaXOEZ-RovE8bHH5T6T~XMd7BX6nPpwUDSsKOU9Aemri9lMWqXwtVK5J50WP8yRueayhlM5sQA__",
    ],
  },
  {
    title: "Showcase App",
    subtitle: "HTML, CSS, Javascript",
    description:
      "This is a nicely designed landing page application. It was built to showcase my responsive design skills, and beautifully done to fit all device screen size.",
    liveLink: "https://singlepageapp-beryl.vercel.app/",
    codeLink: "github.com",
    type: "webApp",
    photosUrl: [
      "https://media-hosting.imagekit.io//ec3906bc668e4ed3/showcase.png?Expires=1832344153&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=od85PDDW3uew2iQFK14IOyoDULwTzhZUGMeLBqn8kNpBxvPJ0os-JZEOGYau2AfWdHYck2SjAv5ywdvFYvNDS72B-EzwrZuXn29mKYzRDga2Hq6ZtsQUJg2LzFA105~uKPzUIORbUqnwYKs3Ep7FBY1q8cKLQlufI8O7XiAyjUiH7lFMX8mK87Fw21uokIoRN2nRWOG1EHIkjCn-qr9WIRDIsYCjebXR5s~B8~9Nwe6LWm9SNcAH~0xg4DnP8tSYFBMYnNscnv5XLaXOEZ-RovE8bHH5T6T~XMd7BX6nPpwUDSsKOU9Aemri9lMWqXwtVK5J50WP8yRueayhlM5sQA__",
    ],
  },
];

async function main() {
  const allProjects = await prisma.project.findMany();
  for (const project of allProjects) {
    await prisma.project.delete({
      where: {
        id: project.id,
      },
    });
  }
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
