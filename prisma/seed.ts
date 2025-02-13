const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const projectData = [
  {
    showcase: false,
    id: 1,
    createdAt: new Date("2025-02-12T12:00:00Z"),
    title: "Github Users",
    subtitle: "React, Styled Components",
    description:
      "A fullstack react project built with github API and charts to simulate coding activities for github users. Beautiful UI design with authentication and authorization in place.",
    liveLink: "https://clems-github-search-users-app.netlify.app/login",
    codeLink: "https://github.com/King-OJ/search-github-users-react-app",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739377881/portfolio/vujvxbvanvbh4strlkv3.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739377879/portfolio/ptxr5myb98i9kwp9c10q.png",
    ],
  },
  {
    showcase: false,
    id: 2,
    createdAt: new Date("2025-02-12T11:30:00Z"),
    title: "Thrively",
    subtitle: "HTML, TailwindCSS, Typescript",
    description:
      "A beautiful single page application built with typescript to help me understand typescript interface for components. It is responsive on all devices.",
    liveLink: "https://thrively-six.vercel.app/",
    codeLink: "https://github.com/King-OJ/thrively",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739377513/portfolio/lujrwtnwuufpnho016kk.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739377511/portfolio/i2dwz1jxmgvyd9bd3plz.png",
    ],
  },
  {
    showcase: false,
    id: 3,
    createdAt: new Date("2025-02-12T11:50:00Z"),
    title: "Clipboard App",
    subtitle: "React, CSS, Javascript",
    description:
      "A clean single page application I built to help me understand tailwindCSS and apply its configurations to suit my requirements",
    liveLink: "https://myclipboard-tailwindcss.netlify.app/",
    codeLink: "https://github.com/King-OJ/clipboard-website",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739377282/portfolio/jxztrgk2mjcbm9ommorz.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739377278/portfolio/kle1qhsqdotkpqhirbfa.png",
    ],
  },
  {
    showcase: false,
    id: 4,
    createdAt: new Date("2025-02-12T12:00:00Z"),
    title: "Jobify",
    subtitle: "NextJs, TailwindCSS, Clerk",
    description:
      "A fullstack application to showcase CRUD operations with NextJS. Clerk was used to the authentication. The backend hosting service plan may have expired at the time you are viewing this.",
    liveLink: "https://jobify-weld.vercel.app/",
    codeLink: "https://github.com/King-OJ/jobify",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739377136/portfolio/hhvwcbvt1ge124aoyx07.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739377136/portfolio/qubdhuxa2oy0lil56z1u.png",
    ],
  },
  {
    showcase: false,
    id: 5,
    createdAt: new Date("2025-02-12T12:56:00Z"),
    title: "Fylo",
    subtitle: "HTML, CSS, Javascript",
    description:
      "A clean single page application I built to help me understand tailwindCSS and apply its configurations to suit my requirements",
    liveLink: "https://fylo-nine-sage.vercel.app/",
    codeLink: "https://github.com/King-OJ/fylo",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739372241/portfolio/d4mhfbe0etyosnu4pu7x.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739372238/portfolio/dmhmmknzwjesqxjtcrwl.png",
    ],
  },
  {
    showcase: true,
    id: 6,
    createdAt: new Date("2025-02-12T12:59:00Z"),
    title: "Modern GPT-3",
    subtitle: "ReactJS, TailwindCSS",
    description:
      "A modern UI design to showcase my design skills and styles. Everything was beautifully done to suit the websites usecase.",
    liveLink: "https://gpt3-react-modern-ui.netlify.app",
    codeLink: "https://github.com/King-OJ/gpt3ModernUI",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739376428/portfolio/cw8iwoy7oesllftse6fd.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739376418/portfolio/otokmxsensjbjnumttmf.png",
    ],
  },
  {
    showcase: false,
    id: 7,
    createdAt: new Date("2025-02-12T12:40:00Z"),
    title: "Comfy Furnitures",
    subtitle: "ReactJs, Express, Node",
    description:
      "A fullstack application to showcase CRUD operations with NextJS. Clerk was used for the authentication. The backend hosting service plan may have expired at the time you are viewing this.",
    liveLink: "https://comfy-ecommerce-ng.netlify.app",
    codeLink: "https://github.com/King-OJ/e-commerce-comfy-furnitures",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739376229/portfolio/wx8khe5xpfl8x2mgt6au.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739376230/portfolio/txsjixjqyyf7pqinn30w.png",
    ],
  },
  {
    showcase: false,
    id: 8,
    createdAt: new Date("2025-02-12T12:00:00Z"),
    title: "Showcase",
    subtitle: "HTML, TailwindCSS, SASS",
    description:
      "A single page application to showcase grid designs for landing pages. It is web and mobile reponsive on all devices.",
    liveLink: "https://singlepageapp-beryl.vercel.app/",
    codeLink: "https://github.com/King-OJ/grid_layout_design",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739375092/portfolio/jaclxt0s4cy5zssyefhd.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739375090/portfolio/xjb7cxg4pox5pvpzljqc.png",
    ],
  },
  {
    showcase: false,
    id: 9,
    createdAt: new Date("2025-02-12T12:28:00Z"),
    title: "Bookmark",
    subtitle: "ReactJS, TailwindCSS",
    description:
      "A single page application with beautiful UI and color combinations. It is web and mobile reponsive on all devices.",
    liveLink: "https://bookmark-react-tailwind-website.netlify.app",
    codeLink: "https://github.com/King-OJ/bookmark",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739374838/portfolio/oyclonqwdsbcoenvvtuu.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739374836/portfolio/eftbbchnnsipri72klyi.png",
    ],
  },
  {
    showcase: true,
    id: 10,
    createdAt: new Date("2025-02-12T12:56:00Z"),
    title: "Loop Studios",
    subtitle: "React, TailwindCSS",
    description:
      "An application with the most modern UI design concepts and very good SEO and color combinations. It is web and mobile reponsive on all devices.",
    liveLink: "https://loopstudios-five-rho.vercel.app/",
    codeLink: "https://github.com/King-OJ/loopstudios",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739372543/portfolio/ngrapv3u6ytckz6cxu5n.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739372565/portfolio/kvo2ncz6zefzol5xiybh.png",
    ],
  },
  {
    showcase: false,
    id: 11,
    createdAt: new Date("2025-02-12T12:49:00Z"),
    title: "Shortly",
    subtitle: "HTML, CSS, Javascript",
    description:
      "A single page application with beautiful UI and color combinations. It is web and mobile reponsive on all devices.",
    liveLink: "https://my-shortly.vercel.app",
    codeLink: "https://github.com/King-OJ/my_shortly",
    type: "WebApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739376674/portfolio/z0dqxvv20sronyxnvpsj.png",
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739376674/portfolio/qorywywysl80o55iigkk.png",
    ],
  },
  {
    showcase: true,
    id: 12,
    createdAt: new Date("2025-02-12T12:00:00Z"),
    title: "Jobify",
    subtitle: "SwiftUI, Firebase, KingFisher",
    description:
      "A mobile app built to showcase my authentication skill with role based authorization",
    liveLink: "https://#",
    codeLink: "https://github.com/King-OJ/MediaX",
    type: "MobileApp",
    imageUrls: [
      "https://res.cloudinary.com/dhumniqm3/image/upload/v1739374052/portfolio/tvo83tioirzlmz48tvxn.png",
    ],
  },
];

async function main() {
  for (const project of projectData) {
    await prisma.project.create({ data: project });
  }
  console.log("data sent to db");
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
