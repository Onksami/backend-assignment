const logotext = "Sami Önk";
const meta = {
  title: "Sami Önk",
  description: "I’m Sami, Front-End devloper",
};


const introdata = {
  title: "I’m Sami Önk.",
  animated: {
    first: "From Front to Back, I've Got Your Stack..",
    second: "Empowering the Digital Backbone: Backend Brilliance.",
  },

  description:
    "I made this website to show my Front-end skills to apply for the Back-end Developer course. For the requirement in the assignment, I made a different component. In order to reach the questions and the answers, please click 'Back-end Dev. question' button . I also put the same  button to the 'toggle' in the 'Header'.", //   your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
  your_img_url: require("../src/assets/images/sam2.jpeg"),
};

const dataabout = {
  title: "Mahmut Sami Önk",
  aboutme:
    "I was born in 1995. I got my bachelor degree in the department of Translation and Interpreting of Turkish, English, and French. I am an extreme sport lover like paragliding and long distance running. Computer games are extremely interesting for me and I admire them. I love reading a lot, especially biography or autobiography. I am an open minded. Most of my friends describe me as Valued Team Member and Problem Solver. ",
};

const worktimeline = [
  {
    jobtitle: "Front-End Developer",
    where: "Freelance",
    date: "2023-",
  },
  {
    jobtitle: "Translator & English Teacher",
    where: "Turkiye",
    date: "2021-2022",
  },
  {
    jobtitle: "English Teacher Assistant",
    where: "Šiauliai / Lithuania",
    date: "2020",
  },
];

const skills = [
  {
    name: "HTML5",
    value: 95,
  },
  {
    name: "CSS3",
    value: 90,
  },
  {
    name: "Bootstrap",
    value: 85,
  },
  {
    name: "Javascript",
    value: 95,
  },
  {
    name: "React",
    value: 90,
  },
  {
    name: "Next",
    value: 85,
  },
];

const services = [
  {
    title: "Github",
    description:
      "I am developing my GITHUB repository and uploading new project and version everytime. You can reach it out by clicking the GITHUB image on the page.",
  },
  {
    title: "LinkedIn",
    description:
      "To create a professional network especially in the same field, I am also on Linkedin that I am always online. Click the Linkedin image to reach me on Linkedin. ",
  },
  {
    title: " X & Facebook ",
    description:
      "You can reach me on Facebook & X I use actively by sending friend request, follow or direct message.",
  },
];

const contactConfig = {
  YOUR_EMAIL: "onksami@gmail.com",
  YOUR_FONE: "+46 76 751 71 31",
  description:
    "This page is not useable. I made it to show my frontend skills ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  SERVICE_ID: "service_id",
  TEMPLATE_ID: "template_id",
  USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/Onksami?tab=repositories",
  facebook: "https://www.facebook.com/sami.onk.5/",
  linkedin: "https://www.linkedin.com/in/sami-%C3%B6nk-600882199/",
  twitter: "https://twitter.com/samink49377294",
};
export {
  meta,
  dataabout,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
