import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 6 Months of experience, I have worked with a variety of technologies, including React, Node.js, MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// export const EDUCATION =[
//   {
//     id:1,
//     date: "Dec 2024 - present",
//     title: "MCA(Master in computer Applications)",
//     institute: "Ramaiah Institute of Technology",
//     description: `Currently pursuing Master in Computer Applications and Engineering, where I am actively engaged in learning and gaining hands-on experience in the field. I am excited about the opportunities and challenges that lie ahead in this dynamic field.`,
//     icon:"school",
//     buttonText:"view",
//   },
//   {
//     id:2,
//     date: "Jun 2024 - Sep 2024",
//     title: "Intern as Full Stack Developer",
//     institute: "LueurTech Software Solutions Pvt.Ltd",
//     description: `Designed and developed user interfaces for web applications using SpringBoot and React. Worked closely with backend developers to integrate frontend components with SpringBoot APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["Javascript", "React.js", "SpringBoot", "MySQL"],
//     icon:"school",
//     buttonText:"view",
//   },
//   {
//     id:3,
//     date: "Oct 2021 -Sep 2024",
//     title: "BCA(Bachelor of Computer Science)",
//     institute: "Cambridge College",
//     description: `Completed my BCA with strong foundation in various subjects. I achieved grade point average of 8.4 CGPA`,
//     icon:"school",
//     buttonText:"view",
//     // technologies: ["Java", "C", "Python", "HTML", "CSS", "JavaScript"],
//   }
  
// ];

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Sep 2024",
    role: "Intern as Full Stack Developer",
    company: "LueurTech Software Solutions Pvt.Ltd",
    description: `Designed and developed user interfaces for web applications using SpringBoot and React. Worked closely with backend developers to integrate frontend components with SpringBoot APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "SpringBoot", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Real-Estate Management system",
    image: project1,
    description:
      "A fully functional Real-Estate Management system website with features like property listing, property Booking and Inquiries, User Management like Builder, Agent and client, Admin Dashboard.",
    technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    url: "https://github.com/Afreed007/Realestate-BlockfernsReality.git" ,
  },
  {
    title: "static-banking-site",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "JavaScript", "React", "Tailwind"],
    url: "https://github.com/Afreed007/static-banking-site.git" ,
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "JavaSript", "React", "tailwind","Framer-Motion"],
    url: "https://github.com/Afreed007/react-portfolio.git" ,
    
  },
  {
    title: "HR Analytics Project: Job Change Prediction",
    image: project4,
    description:"Developed a machine learning model to predict job changes among data scientists using HR analytics. Utilized data preprocessing techniques, including SMOTE to handle data imbalance. Compared multiple classification algorithms and demonstrated that the **KNN model achieved superior performance**.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
  },
];

export const CONTACT = {
  address: "Malur, Karnataka, INDIA -563130 ",
  phoneNo: "+91 9741799939",
  email: "afreed0076@gmail.com",
};
