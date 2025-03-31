import { cisco, coursera, eth, globant,talentotech } from "../assets/images";
import { 
    car, snapgram, estate, summiz,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    threads,
    r,
    lcl,
    tableau,
    splunk,
    selenium,
    seaborn,
    python,
    pandas,
    numpy,
    mysql,
    junit,
    jira,
    java,
    illustrator,
    chronicle
} from "../assets/icons";

export const skills = [    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Analysis",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Develop",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Analysis",
    },
    {
        imageUrl: numpy,
        name: "Numpy",
        type: "Analysis",
    },
    {
        imageUrl: seaborn,
        name: "Seaborn",
        type: "Visualization",
    },
    {
        imageUrl: tableau,
        name: "Tableau",
        type: "Visualization",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "DataBases",
    },
    {
        imageUrl: lcl,
        name: "Linux command line",
        type: "OS",
    },            
    {
        imageUrl: splunk,
        name: "Splunk",
        type: "CiberSecurity",
    },
    {
        imageUrl: chronicle,
        name: "Chronicle",
        type: "CiberSecurity",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Management",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Develop",
    },    
    {
        imageUrl: junit,
        name: "JUnit",
        type: "Testing",
    },
    {
        imageUrl: selenium,
        name: "Selenium",
        type: "Automation",
    },
    {
        imageUrl: illustrator,
        name: "Adobe Illustrator",
        type: "Visualization",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Ethical Hacking",
        company_name: "CISCO Networking Academy",
        icon: cisco,
        iconBg: "#03A63C",
        date: "February 2025 - IN PROGRESS",
        points: [
            "Understanding ethical hacking methodologies and penetration testing frameworks.",
            "Identifying and exploiting vulnerabilities in networks, systems, and applications using ethical hacking tools.",
            "Applying countermeasures and security controls to mitigate cyber threats and protect infrastructures.",
            "Using Kali Linux, Metasploit, and other cybersecurity tools to conduct security assessment and forensic analysis.",
        ],
    },
    {
        title: "Google Cybersecurity Professional Certificate",
        company_name: "Coursera",
        icon: coursera,
        iconBg: "#2295D8",
        date: "October 2024 - February 2025",
        points: [
            "Understanding fundamental cybersecurity principles, including security policies and risk management.",
            "Applying network defense strategies and analyzing cyber threats.",
            "Using SIEM tools and methodologies for incident detection, monitoring and response.",
            "Implementing security frameworks such as NIST and CIA triad model.",
        ],
    },
    {
        title: "Quality Control Automation",
        company_name: "Globant University",
        icon: globant,
        iconBg: "#FFF2BA",
        date: "September 2024 - IN PROGRESS",
        points: [
            "Implementing Agile methodologies in quality assurance processes.",
            "Identifying and mitigating risks in development and production environments.",
            "Applying  test automation techniques to improve software quality.",
            "Developing functional and non-functional tests using automation frameworks.",
        ],
    },
    {
        title: "Data Analyst",
        company_name: "Bootcamp TalentoTech",
        icon: talentotech,
        iconBg: "#A63F82",
        date: "June 2024 - September 2024",
        points: [
            "Managing tools for data analysis and report generation.",
            "Applying SQL and Python for data manipulation and visualization.",
            "Using data cleaning techniques and processing large volumes of information.",
            "Interpreting data to support strategic decision-making in bussiness environments.",
        ],
    },
    {
        title: "Introduction to Blockchain Development",
        company_name: "ETH Bogotá",
        icon: eth,
        iconBg: "#D3C4F4",
        date: "March 2024 - May 2024",
        points: [
            "Understanding Ethereum architecture, smart contracts, and decentralized applications (dApps).",
            "Developing and deploying smart contracts using Solidity and best security practices.",
            "Working with Web3.js and Ethers.js to interact with the Ethereum blockchain.",
            "Implementing token standards (ERC-20, ERC-721) and blockchain security measures.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'QA automation',
        description: 'Developed an automation project using Java and Selenium to streamline web testing processes, applying my acquired skills to enhance efficiency and accuracy in automated tasks.',
        link: 'https://github.com/SoyEdwinCabrera/Automation-Project',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'HTB BADGES',
        description: 'I am actively solving cybersecurity challenges on Hack The Box, developing penetration testing skills, enhancing problem-solving abilities, and earning badges that showcase my progress.',
        // link: 'https://new.express.adobe.com/webpage/vUL5nRGqQAXBC',
        link: 'https://new.express.adobe.com/webpage/C6Swdj3Iki2hU',
    },
    // {
    //     iconUrl: car, 
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];