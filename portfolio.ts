import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Nisarg Prajapati',
  title: "Hi all, I'm Nisarg",
  description:
    "A passionate software developer, your fellow coder, and a proud tech geek. Let's chat about all things tech and explore the latest innovations together. Keep scrolling to discover more about me.",
  resumeLink:
    'https://drive.google.com/file/d/1y0A4x_Z6pFLhtTliXsrHLVjDmFYWw10G/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'nisarg210',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: '',
  linkedin: 'https://www.linkedin.com/in/nisargprajapati210',
  github: 'https://github.com/nisarg210',
  gmail: 'nprajap@ncsu.edu'
};

export const skillsSection: SkillsSectionType = {
  title: 'WHAT I DO',
  subTitle: 'SOFTWARE DEVELOPER WHO LOVES TECH',
  data: [
    {
      title: 'Full Stack Developer',
      lottieAnimationFile: './lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building RESTful APIs in NodeJs & Django Framework'),
        emoji('⚡ Building responsive websites using React.js'),
        emoji('⚡ Working with Continuous Integration and Deployment (CI/CD) Pipelines'),
        emoji('⚡ Handling Data Validation, Sanitization, and Error Handling Effectively'),
        
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'React',
          iconifyTag: 'logos:react',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'CPP',
          iconifyTag: 'mdi:language-cpp',
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'MaterialUI',
          iconifyTag: 'logos:material-ui',
        },
        {
          skillName: 'Mongo',
          iconifyTag: 'devicon:mongodb-wordmark',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: './lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Sql',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'TypeScript|JavaScript (ReactJs)', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Python (Django, Flask, Numpy, Pandas)',
    progressPercentage: '85',
  },
  {
    Stack: 'C# (DotNet)',
    progressPercentage: '75',
  },
  {
    Stack: 'AWS (EC2, ES, S3, SQS, Lambda, SNS)',
    progressPercentage: '85',
  },
  {
    Stack: 'Database (MySQL, Postgres, MongoDB)',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'North Carolina State University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'August 2022 - Present',
    desc: '',
    grade: 'GPA 4 / 4',
    companyLogo: './img/icons/common/ncstatelogo.png',
    descBullets: [
    ],
  },
  {
    schoolName: 'Dharmsinh Desai Univeristy',
    subHeader: 'Bachelors of Technology in Computer Engineering',
    duration: 'July 2019 - May 2023',
    companyLogo: './img/icons/common/ddulogo.png',
    desc: '',
    grade: 'GPA 8.93 / 10',
    descBullets: [],
  },

  
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Developer',
    company: 'NC State University',
    companyLogo: './img/icons/common/ncstate.png',
    date: 'Jan 2024 – Present',
    desc: 'Developing Probablistic Risk Assesment Tool under Nuclear Engineering Department. Tech: Typescript, ReactJs, NestJS, MongoDB',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Indian Space Research Organisation',
    companyLogo: './img/icons/common/isro.png',
    date: 'Dec 2022 – Apr 2023',
    desc: 'Engineered a scalable and responsive architecture for a data collection web application to streamline data collection for various departments and eliminate redundant tasks for the IT department, reducing manual effort by 30%. Developed robust data validation and cleansing mechanisms, reducing data entry errors by 30% and maintaining data integrity through the use of RESTful APIs and server-side validation',
  },
  {
    role: 'Software Engineer Intern',
    company: 'CodeSchema Solutions',
    companyLogo: './img/icons/common/codeschemalogo.jpg',
    date: 'Sep 2022 – May 2023',
    desc: 'Optimized backend APIs by applying response compression and handled SQL caching to reduce database costs by 40%. Migrated the existing API to a different service, performed API testing, and deprecated the old service. Wrote efficient aggregation pipelines using Mongoose',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Polly',
    companyLogo: './img/icons/common/pollme.webp',
    desc: 'Engineered a fullstack website using TypeScript and AWS EC2 to enables the creation of robust polls that support the use of a large number of users. Each host can create their own virtual room where they can publish their questions and share them with a large number of people',
    github: 'https://github.com/nisarg210/polly',
  },
  {
    name: 'MovieFlix - Movie Recomender',
    companyLogo: './img/icons/common/movieflix.png',
    desc: 'Implemented content-based filtering algorithms, demonstrating a solid understanding of statistical principles in predictive modeling. Developed a full-stack web application, demonstrating an end-to-end understanding of data flow and application architecture in a data engineering context',
    github: 'https://github.com/nisarg210/MoviesFlix-Recommender-System',
  },
  {
    name: 'Learner`s Pax',
    companyLogo: './img/icons/common/learnerspax.webp',
    desc: 'Designed and developed a versatile user-friendly teacher-student document sharing system to facilitate information sharing, including e-notes, assignments, announcements, and syllabus, for all university degree programs, semesters, and courses. Implemented real-time email notifications to keep students updated about new materials and assignments, enhancing communication and engagement.',
    github: 'https://github.com/nisarg210/learners-pax',
  },
  {
    name: 'Covid-19 Tracker',
    companyLogo: './img/icons/common/covid19.jpg',
    desc: 'This platform is build using React.js as frontend and the required data is fetched updates using open-source API. It is a online platform where built people can see all the update of an covid-19 cases on daily basis.',
    github: 'https://github.com/nisarg210/covid19indiatracker',
  },
];

// option to hide or show the ContactUs component
// export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Nisarg Prajapati',
  description:
    'A passionate Software Developer.',
  author: 'Nisarg Prajapati',
  keywords: [
    'Nisarg',
    'Nisarg Prajapati',
    '@nisarg210',
    'nisarg210',
    'Portfolio',
    'Nisarg Portfolio',
    'Nisarg Prajapati Portfolio',
  ],
};
