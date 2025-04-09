export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const gridItems = [
  {
    id: 1,
    title:
      "Code is only as strong as the teamwork behind it — clarity and collaboration come first.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: `${basePath}/b1.svg`,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: `${basePath}/grid.svg`,
    spareImg: `${basePath}/b4.svg`,
  },

  {
    id: 5,
    title: "Currently building an LLM Analyzer",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: `${basePath}/b5.svg`,
    spareImg: `${basePath}/grid.svg`,
  },
  {
    id: 6,
    title: "Check out my Resume!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Large Language Model Analyzer",
    des: "A comprehensive tool for analyzing and visualizing large language models.",
    img: `${basePath}/p1.png`,
    iconLists: [
      `${basePath}/re.svg`,
      `${basePath}/tail.svg`,
      `${basePath}/ts.svg`,
      `${basePath}/pythonlogo.png`,
      `${basePath}/gpt.png`,
    ],
    link: "https://github.com/ArjunB3hl/prompt-app/tree/main",
  },
  {
    id: 2,
    title: "TMUsic - Music Social App",
    des: "A social media platform for music lovers to connect and share their tracks.",
    img: `${basePath}/p2.png`,
    iconLists: [
      `${basePath}/re.svg`,
      `${basePath}/php.svg`,
      `${basePath}/tail.svg`,
      `${basePath}/ts.svg`,
      `${basePath}/sql.png`,
    ],
    link: "https://github.com/vijaysatchi/tmu-music",
  },
  {
    id: 3,
    title: "Greenspace Management System",
    des: "A comprehensive urban management system for greenspaces.",
    img: `${basePath}/p3.png`,
    iconLists: [
      `${basePath}/re.svg`,
      `${basePath}/javascript.png`,
      `${basePath}/pythonlogo.png`,
      `${basePath}/sql.png`,
      `${basePath}/docker.png`,
    ],
    link: "https://github.com/githusam/Greenspace-Management-System",
  },
  {
    id: 4,
    title: "Weather Application",
    des: "A simple weather application that provides real-time weather updates.",
    img: `${basePath}/p4.png`,
    iconLists: [`${basePath}/re.svg`, `${basePath}/javascript.png`, `${basePath}/node.png`],
    link: "https://github.com/githusam/weather-app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Developer Intern @ Kenna",
    desc: "I worked on a project that involved  and maintaining a web application using React and Node.js. I was responsible for implementing the frontend and backend features, as well as integrating APIs. I also collaborated with the design team to ensure a seamless user experience. I learned a lot about web development best practices and gained valuable experience in working with a team.",
    className: "md:col-span-2",
    thumbnail: `${basePath}/exp1.svg`,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/githusam",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/husamkassab/",
  },
];
