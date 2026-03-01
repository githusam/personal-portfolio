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
      "I'm a software developer with a passion for building scalable and efficient systems.",
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
    title: "Open to full stack roles — let's build something great",
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
    title: "LLM Analyzer",
    des: "A comprehensive tool for analyzing and visualizing large language models.",
    img: `${basePath}/p1.png`,
    iconLists: ["re.svg", "tail.svg", "ts.svg", "pythonlogo.png", "gpt.png"],
    link: "https://github.com/ArjunB3hl/prompt-app/tree/main",
  },
  {
    id: 2,
    title: "License Plate Recognition",
    img: `${basePath}/p6.png`,
    des: "A system for recognizing license plates using deep learning.",
    iconLists: ["pythonlogo.png", "yolo.svg", "opencv.png"],
    link: "https://github.com/githusam/License-Plate-Detector", 
  },
  {
    id: 3,
    title: "TMUsic - Music Social App",
    des: "A social media platform for music lovers to connect and share their tracks.",
    img: `${basePath}/p2.png`,
    iconLists: ["re.svg", "php.svg", "tail.svg", "ts.svg", "sql.png"],
    link: "https://github.com/vijaysatchi/tmu-music",
  },
  {
    id: 4,
    title: "Greenspace Manager",
    des: "A comprehensive urban management system for greenspaces.",
    img: `${basePath}/gms_schedule.png`,
    iconLists: [
      "re.svg",
      "javascript.png",
      "pythonlogo.png",
      "sql.png",
      "docker.png",
    ],
    link: "https://github.com/githusam/Greenspace-Management-System",
  },
   {
    id: 5,
    title: "Robot Maze Solver",
    des: "A robot that solves a maze using a microprocessor.",
    img: `${basePath}/robot.png`,
    iconLists: [
      "assembly.png",
    ],
    link: "https://github.com/githusam/Greenspace-Management-System",
  },
  {
    id: 6,
    title: "Weather Application",
    des: "A simple weather application that provides real-time weather updates.",
    img: `${basePath}/weatherapp.png`,
    iconLists: ["re.svg", "javascript.png", "node.png"],
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
    title: "Fullstack Developer @ Si Supplies",
    desc: `• Developed a QuickBooks Online API integration using REST APIs, OAuth 2.0, and PHP, syncing live inventory, orders, and customer data across 100+ accounts and hundreds of products between in-store and online platforms

• Built internal tools using React and Electron to manage inventory/customer data, improving operational efficiency

• Integrated Net 14/30/60 payment terms and credit limits from QuickBooks using PHP, enabling approved accounts to purchase on credit and track outstanding balances through the website

• Implemented role-based access control restricting pricing visibility and order placement to admin-approved users`,
    className: "md:col-span-2",
    thumbnail: "exp2.svg",
    link: "https://sisupplies.ca",
  },
  {
    id: 2,
    title: "Fullstack Application Developer @ Kenna",
    desc: `• Enhanced UI/UX based on user feedback to boost usability and engagement

• Developed and optimized RESTful APIs with Node.js and Express.js, reducing response times by 25%

• Designed efficient SQL database schemas to improve query performance and data integrity

• Collaborated with a large team using Git and Bitbucket to streamline workflows and maintain release schedules

• Engineered responsive front-end components with React and Redux, reducing initial page load time by 20% and improving cross-device consistency`,
    className: "md:col-span-2",
    thumbnail: "exp1.svg",
    link: "https://kenna.ca",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "git.svg",
    link: "https://github.com/githusam",
  },
  {
    id: 2,
    img: "link.svg",
    link: "https://www.linkedin.com/in/husamkassab/",
  },
];
