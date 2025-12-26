/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Supriya Biradar",
  title: "Hi all, I'm Supriya",
  subTitle: emoji(
    "A passionate Software Developer with experience in web development, data visualization, and ML-powered applications 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ij1T9cgLp0sJyl1l7mQtolUJt59-yrVk/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Supriya2912",
  linkedin: "https://www.linkedin.com/in/supriyabiradar/",
  gmail: "supriya2912biradar@gmail.com",
   leetcode : "https://leetcode.com/u/supriya2912biradar/",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:  "Software Developer with hands-on experience in Web Development, Data Science, and Machine Learning",
   skills: [
    "⚡ Build interactive web applications using HTML, CSS, JavaScript, and React",
    "⚡ Develop data dashboards and visualizations using Python & Plotly",
    "⚡ Implement ML models for real-world use cases like drowsiness detection",
    "⚡ Experience with Git, REST APIs, and cloud deployment",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
   
{
  skillName: "java",
  fontAwesomeClassname: "fab fa-java"
},
{
  skillName: "typescript",
  fontAwesomeClassname: "fab fa-js"  // TypeScript uses JS icon in FontAwesome
},
{
  skillName: "machine learning",
  fontAwesomeClassname: "fas fa-robot" // Using robot icon as a common representation
},
{
  skillName: "playwright",
  fontAwesomeClassname: "fas fa-theater-masks" // No official icon, using theater masks for automation/testing
}

    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "G.H. Raisoni College of Engineering and Management,Pune",
      logo: require("./assets/images/ghrcem.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "June 2020 - June 2024",
      desc: "Mentored juniors for resume building and guided them in learning Data Structures and Algorithms (DSA).",
  descBullets: [
    "Provided one-on-one mentorship sessions to juniors for resume preparation and career guidance.",
    "Taught Data Structures and Algorithms concepts through workshops and coding sessions."
  ]
    },
    {
      schoolName: "Maharashtra Udayagiri Mahavidyalaya, Udgir",
      logo: require("./assets/images/highschool.png"),
      subHeader: "Higher Secondary Education (12th) in Science",
      duration: "March 2019 - March 2020",
      desc: "Achieved 74.62% in Higher Secondary Certificate (HSC) examination.",
      
    },
     {
      schoolName: "Shyamarya Kanya Vidhyalay, Udgir",
      logo: require("./assets/images/school.png"),
      subHeader: "Secondary Education (10th)",
  duration: "March 2017 - March 2018",
  desc: "Achieved 91% in Secondary School Certificate (SSC) examination."
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
  Stack: "Data Structures & Algorithms",
  progressPercentage: "90%"
},
{
  Stack: "Machine Learning",
  progressPercentage: "70%"
},
{
  Stack: "C++",
  progressPercentage: "80%"
},
{
  Stack: "Python",
  progressPercentage: "80%"
},
   
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.png"),
      date: "April 2025 – Present",
 desc: "Developed scalable enterprise applications and automation frameworks, contributing to microservices architecture and CI/CD pipelines.",
  descBullets: [
    "Built software components and automation frameworks using TypeScript, Java, and Python for 15+ microservices.",
    "Implemented REST-based workflows and service validations ensuring functional correctness and data integrity.",
    "Created reusable, object-oriented modules to improve maintainability and development efficiency.",
    "Integrated applications with CI/CD pipelines (Jenkins, Git, Maven), reducing release cycles by 25%.",
    "Collaborated with Agile teams to support releases, debugging, and production readiness."
  ]
    },
    {
      role: "Data Science Trainee",
  company: "SEED Infotech Institute, Pune, India",
      companylogo: require("./assets/images/seed.png"),
      date: "June 2024 – Dec 2024",
  desc: "Completed intensive Data Science training and led applied ML projects, including predictive modeling and recommendation systems.",
  descBullets: [
    "Developed a Movie Recommendation System using Python, Pandas, and Scikit-learn to process and model large user-movie rating datasets.",
    "Implemented and evaluated multiple ML models to optimize recommendation accuracy and predictive analysis.",
    "Performed extensive Exploratory Data Analysis (EDA) and feature engineering to ensure robust, data-driven outputs."
  ] },
    {
     role: "Software Engineer Intern",
  company: "India Meteorological Department, Pune, India",
      companylogo: require("./assets/images/imd.png"),
      date: "June 2023 – Dec 2023",
  desc: "Developed cloud-based data visualization dashboards and collaborated with government stakeholders for meteorological insights.",
  descBullets: [
    "Built a cloud-based interactive dashboard using Python and Dash Plotly, processing 5+ years of meteorological data for 28 states.",
    "Led technical discussions with government executives to gather requirements and define project scope for actionable insights.",
    "Deployed production-grade solutions on cloud with 99.9% uptime; reduced data retrieval time by 50% through optimized filtering algorithms."
  ] }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
       title: "Google Cloud Certified Generative AI Leader",
    subtitle: "Achieved Google Cloud certification for Generative AI expertise (Aug 2025).",
     image: require("./assets/images/googlecloud.png"),
      imageAlt: "Google cloud Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1yiU8rFCPi9E6_-ljv208VchIrXFADakT/view?usp=drive_link"
        },
    
      ]
    },
    {
     title: "Databricks Certified Generative AI Engineer Associate",
    subtitle: "Certified in Generative AI engineering by Databricks (Nov 2025).",
     image: require("./assets/images/databricks.png"),
      imageAlt: "Databricks  Logo",
      footerLink: [
        {
           name: "Certification",
        url: "https://credentials.databricks.com/daad09d6-c01b-46ef-be3e-86d764a3f992#acc.qrSgLvDG"
        }
      ]
    },

    {
       title: "Databricks Certified Data Engineer Associate",
    subtitle: "Certified in Data Engineering fundamentals by Databricks (Oct 2025).",
    image: require("./assets/images/databricks.png"),
    imageAlt: "Databricks Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://credentials.databricks.com/8545860c-a1b8-45ac-9908-c08d2c2bd223#acc.6TLi5zNk"
        }
      ]
    },
     {
    title: "Microsoft Azure Developer Associate (AZ-204)",
    subtitle: "Currently pursuing Microsoft Azure Developer Associate certification.",
    image: require("./assets/images/azure.png"),
    imageAlt: "Azure Logo",
    footerLink: [
      {
        name: "Certification Info",
        // url: "https://www.your-cert-link.com"
      }
    ]
  },
  {
  title: "McKinsey.org Forward Program",
  subtitle:
    "Completed the McKinsey.org Forward Program by McKinsey & Company, focused on problem-solving, structured thinking, adaptability, and professional skills.",
  image: require("./assets/images/mckinseyLogo.png"),
  imageAlt: "McKinsey & Company Logo",
  footerLink: [
    {
      name: "Credential",
      url: "https://www.credly.com/badges/17bebc09-9219-41b8-bdde-167e89fe7e06/public_url"
    }
  ]
}
,
   {
    title: "2nd Place - National Hackathon",
    subtitle: "Secured 2nd rank among 500+ teams for an AI-powered road safety solution.",
    image: require("./assets/images/national.png"),
    imageAlt: "Hackathon Logo",
    footerLink: [
      // {
      //   name: "Project Demo",
      //   url: "https://github.com/yourusername/drivesmart-project"
      // }
    ]
  },
   {
    title: "6th Place - Smart Pune Health Hackathon",
    subtitle: "Ranked 6th nationwide in the final round for an innovative health-tech solution.",
    image: require("./assets/images/smartpune.png"),
    imageAlt: "Hackathon Logo",
    footerLink: [
      {
        name: "Project Details",
        url: "https://github.com/Supriya2912/Aarogyam-ChatBot"
      }
    ]
  },
   {
    title: "500+ LeetCode Problems Solved",
    subtitle: "Strengthened Data Structures & Algorithms proficiency by solving over 500 coding problems on LeetCode.",
    image: require("./assets/images/leetcode.png"),
    imageAlt: "LeetCode Logo",
    footerLink: [
      {
        name: "LeetCode Profile",
        url: "https://leetcode.com/u/supriya2912biradar/"
      }
    ]
  }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
 // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
 // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
 subtitle:
    "Actively seeking software engineering and data-focused roles. Open to full-time and collaboration opportunities.",
  number: "+91-8600409418",
  email_address: "supriya2912biradar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
