import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 6 Months of experience, I have worked with a variety of technologies, including React, Node.js, MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
    {
        year: "Dec 2024 - Present",
        role: "Master of Computer Applications (MCA)",
        company: "Ramaiah Institute Of Technology, Bangalore",
        description: `Currently pursuing my Master's with a focus on advanced topics in Data Engineering, AI, Data Analytics, and Web Development.`,
        cgpa: "CGPA: 8.60",
        technologies: ["Data Analytics", "AI", "Computer Networks"],
    },
    {
        year: "Oct 2021 - June 2024",
        role: "Bachelor of Computer Applications (BCA)",
        company: "Cambridge College, Bangalore",
        description: `Completed my Bachelor's degree, building a strong foundation in Web Development, Database Management, and Software Engineering.`,
        cgpa: "CGPA: 8.40",
        technologies: ["Web Development", "Database Management", "Algorithms"],
    },
];

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Sep 2024",
    role: "Intern as Full Stack Developer",
    company: "LueurTech Software Solutions Pvt.Ltd",
    description: `Assisted in building and maintaining web applications using React.js and Node.js. Designed and Developed database schema in alignment with application requirements. Improved database queries, reducing load times by 5%.`,
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
    title: "Hoo Bank (Banking Website)",
    image: project2,
    description:
      "Designed a demo banking platform with user authentication via account number and PIN. Developed an interactive dashboard with transaction history visualization using Recharts. Built an engaging, responsive UI. Developed Secured API using Node and Express.",
    technologies: ["React.js", "Tailwind CSS", "Recharts", "Git", "JWT", "Bcrypt", "Nodejs", "Expressjs", "MongoDB"],
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
    description:
      "Developed a machine learning model to predict job changes among data scientists using HR analytics. Utilized data preprocessing techniques, including SMOTE to handle data imbalance. Compared multiple classification algorithms and demonstrated that the **KNN model achieved superior performance**.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
  },
];

export const CONTACT = {
  address: "Malur, Karnataka, INDIA -563130 ",
  phoneNo: "+91 9741799939",
  email: "afreed0076@gmail.com",
};