/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tommy Ma's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Tommy Ma Portfolio",
    type: "website",
    url: "http://www.cyinma.com/",
  },
};

//Home Page
const greeting = {
  title: "Tommy Ma",
  logo_name: "Ma Cheung Yin",
  nickname: "MA, Cheung Yin",
  subTitle:
    "A passionate software engineer who always want to work on end to end products that provide great experience to the user.",
  resumeLink: "https://www.linkedin.com/in/cyinma/",
  portfolio_repository: "https://github.com/cyinma",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/cyinma",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/cyinma/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:c.yin.ma@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build scalable server-side applications",
        "⚡ Create robust and reliable highly transactional and event-driven application",
        "⚡ Perform data management and database administration",
      ],
      softwareSkills: [
        {
          skillName: "Go",
          fontAwesomeClassname: "logos:go",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
        },
        {
          skillName: "gRPC",
          fontAwesomeClassname: "simple-icons:google",
          style: {
            color: "#333399",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "logos:kafka-icon",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Create highly transactional and event-driven infrastructure architectures",
        "⚡ Manage, perform, and support cloud environment and system deployment",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "simple-icons:helm",
          style: {
            color: "#091C84",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#323754",
      },
      profileLink: "https://leetcode.com/cyinma/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/c_yin_ma",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/cyinma",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bachelor of Science (Hons) in Computing",
      subtitle: "The Hong Kong Polytechnic University",
      logo_path: "polyu_logo.png",
      alt_name: "PolyU",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ Equips with solid foundations of computer science",
        "⚡ Emphasizes applying computing theories and programming methodologies s to design and develop computing systems and software",
        "⚡ Solving practical problems and developing software for high-performance and intelligent computing systems",
      ],
      website_link: "https://www.comp.polyu.edu.hk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Solutions Architect – Associate",
      subtitle: "AWS Certified",
      logo_path: "AWS-SolArchitect-Associate-2020.png",
      certificate_link:
        "https://www.credly.com/badges/242c947b-d904-4537-8f3f-9f565cd0995f",
      alt_name: "AWS Certified Solutions Architect – Associate",
      color_code: "#FF9900",
    },
    {
      title: "International Academic Qualifications",
      subtitle: "World Education Services Verified",
      logo_path: "wes.png",
      certificate_link:
        "https://www.credly.com/badges/a1dd9b3f-0b0c-43dc-98f3-6391e4be177b",
      alt_name:
        "World Education Services Verified International Academic Qualifications",
      color_code: "#e2f0e8",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Experienced Software Engineer in developing Cloud-native application in Microservices architecture. With a demonstrated history of working in Startup Companies with a multicultural environment.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "YouTrip (You Technologies Group Limited)",
          company_url: "https://www.you.co/sg/",
          logo_path: "youtrip_logo.png",
          duration: "February 2020 - Present",
          location: "Hong Kong",
          description:
            "YouTrip is a multi-currency mobile wallet in Singapore and Thailand, a Principal Member of Mastercard®, and a major payment institution licensed by the Monetary Authority of Singapore.",
          color: "#702d82",
        },
        {
          title: "Backend Developer",
          company: "Hong Kong Movie (Movie6 Limited)",
          company_url: "https://hkmovie6.com/",
          logo_path: "hkm_logo.png",
          duration: "November 2018 - December 2019",
          location: "Hong Kong",
          description:
            "Hong Kong Movie is a movie information multimedia platform in Hong Kong providing a mobile application and website to browse movie and cinema information and buy movie tickets. Movie6 Limited also provides a Cinema Ticketing System solution to the cinema.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Summer Intern",
          company: "Equinix",
          company_url: "https://www.equinix.com/",
          logo_path: "equinix_logo.png",
          duration: "June 2017 - August 2017",
          location: "Hong Kong",
          description:
            "Equinix is an American multinational company headquartered in Redwood City, California, that specializes in Internet connection and data centers. The company is a leader in global colocation data center market share, with 210 data centers in 25 countries on five continents.",
          color: "#ed1c24",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  // avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_tommy.png",
    description:
      "I am available on LinkedIn. I am happy to answer if you have any inquiry.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
