import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Video Editing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Student Library Assistant",
      company_name: "State University of New York at Oswego",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        " Manage interlibrary loan requests, coordinating the borrowing and lending of materials with other libraries to expand user access.",
        " Organize library materials to ensure a user-friendly environment for patrons ",
        " Utilize library databases and online catalogues to support patrons in conducting research ",
        " Collaborating on a deshelving project to streamline the library's collection and improve accessibility for patrons.",
      ],
    },
    {
      title: "Catering Events Assistant",
      company_name: "State University of New York at Oswego",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Assist in the preparation and execution of catering events hosted by the institution.",
        " Collaborate with the catering team to set up event venues, ensuring a welcoming and organized atmosphere.",
        " Contribute to food and beverage service, including assisting with food presentation, replenishing supplies, and maintaining cleanliness and hygiene standards.",
        " Provide attentive and friendly customer service to event attendees, addressing their needs and ensuring a positive experience.",
      ],
    },
    {
      title: "Student Employee, Auxiliary Services",
      company_name: "State University of New York at Oswego",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        " Provide excellent customer service to over 500 customers per day, resulting in a 95% satisfaction rate.",
        " Cross-trained in food service, cash register operation, and dining hall maintenance.",
        " Multi-task in a fast-paced environment, displaying exceptional organizational and time management skills",
      ],
    },
    {
      title: "Student Counselor",
      company_name: "Lovely Professional University",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2022 - July 2022",
      points: [
        " Provided individual student planning and responsive services to support students and their families regarding academic matters.",
        " Assisted over 200 students with academic and educational needs.",
        " Educated students and parents on the university's policies and procedures to ensure a smooth academic experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sorting Visualizer",
      description:
        "It has a very simple UI and it allows the users to select the sorting algorithm, select the array size, and the speed of the visualization and then helps to visualize how they work.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/SejalRana/Sorting_Visualizer",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };