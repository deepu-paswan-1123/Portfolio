import frontend from "../../assets/images/frontend.png"
import backend from "../../assets/images/backend.png"
import tools from "../../assets/images/tools.png"
import softskill from "../../assets/images/softskill.png"
import WhatsApp_icon from "../../assets/images/WhatsApp_icon.png"
import forum from "../../assets/images/forum.png"
import admin from "../../assets/images/admin.jpg"
import schoolmanagement from "../../assets/images/schoolmanagement.png"
export const SKILLS=[
    {
        title:"Frontend",
        icon:frontend,
        skills:[
            {skill:"HTML",percentage:"80%"},
            {skill:"CSS",percentage:"90%"},
            {skill:"javascript",percentage:"75%"},
            {skill:"React.js",percentage:"80%"},
        ]
    },
    {
        title:"Backend",
        icon:backend,
        skills:[
            {skill:"Node.js",percentage:"70%"},
            {skill:"Express.js",percentage:"65%"},
            
        ]
    },
    {
        title:"Tools",
        icon:tools,
        skills:[
            {skill:"Git & GitHub",percentage:"85%"},
            {skill:"Visual Studio Code",percentage:"75%"},
        ]
    },
    {
        title:"Soft Skills",
        icon:backend,
        skills:[
            {skill:"Problem-Solving",percentage:"80%"},
            {skill:"Collaboration",percentage:"85%"},
            {skill:"Attention to Detail",percentage:"75%"},
            {skill:"Responsive Design",percentage:"75%"},
        ]
    },
]


export const WORK_EXPERIENCE=[
   {
        title:"MERN Stack Developer | Urbanchat.ai",
        Date:"September 2024 - Present",
        responsibilites:[
            "Currently working as a MERN Stack Developer at Urbanchat.ai, focusing on building scalable web applications.",
            "Developing and maintaining full-stack solutions using MongoDB, Express.js, React.js, and Node.js.",
            "Collaborating with cross-functional teams to implement new features and optimize performance.",
            "Leveraging tools like Git, GitHub, and CI/CD pipelines to ensure efficient development workflows.",
        ],
   },
   {
        title:"Web Development Intern | Pizone Infotech Solutions",
        Date:"June 2024 - September 2024",
        responsibilites:[
            "Completed an internship at Pizone Infotech Solutions, focusing on MERN stack development.",
            "Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js and other framework also like Firebase,MaterialUI,etc.",
            "Explored version control and collaboration tools like Git and GitHub and other tools.",
            "Worked on real-world projects, enhancing full-stack development skills and best practices.",
        ]
   },   
   {
        title:"Web Development Training | Pizone Infotech Solutions",
        Date:"July 2023 - August 2023",
        responsibilites:[
            "Completed 45 days of hands-on training in web development and design responsive static web pages.",
            "Gained expertise in HTML, CSS, and JavaScript for building responsive websites.",
            "Worked on real-world projects to enhance understanding of web technologies.",
            "Improved coding skills and learned to create dynamic web applications and problem solving.",
        ],
   },
]


export const My_Projects=[
    {
        title:"WhatsApp Clone",
        image:WhatsApp_icon,
        tools_used:"React.js,MongoDB,Express.js,Node.js,MaterialUI",
        description:[
            "Real-Time Messaging: A seamless chat application enabling real-time text, media, and file sharing between users.",
            "Modern Technologies: Built with React, Node.js, MongoDB, and Socket.io for a robust and scalable architecture.",
            "Key Features: Includes user authentication, dynamic conversations, and real-time status updates (online/offline).",
            "Feature-Rich Interface: Offers essential functionalities like Images uploads, and conversation history."
        ],
        links:"https://dpschoolmanagement87.netlify.app",
    },
    {
        title:"Forum Website",
        image:forum,
        tools_used:"HTML,CSS,Javascript,PHP,Bootsrap",
        description:[
            "Interactive Discussions: A platform for users to engage in meaningful discussions, ask questions, and share knowledge.",
            "User Profiles: Allows members to create profiles, track activity, and personalize their forum experience.",
            "Categorized Topics: Organized into categories and tags for easy navigation and efficient topic discovery.",
            "Moderation Tools: Equipped with admin and moderator controls to ensure a safe and respectful community environment.",
        ],
        links:"https://dpschoolmanagement87.netlify.app",
    },
    {
        title:"Admin Pannel",
        image:admin,
        tools_used:"HTML,CSS,Javascript,Bootsrap",
        description:[
            "Efficient CRUD Operations: Fully functional admin panel to Create, Read, Update, and Delete data with ease.",
            "Authentication System: Integrated signup and login functionalities for secure admin access.",
            "Categorical Data Management: Organized data handling with categorized sections for streamlined operations.",
            "User-Friendly Interface: Simple and intuitive design for seamless navigation and management.",
        ],
        links:"https://dpschoolmanagement87.netlify.app",
    },
    {
        title:"School Management UI",
        image:schoolmanagement,
        tools_used:"React.js,MaterialUI",
        description:[
            "Developed a static user interface for a School Management System using React, leveraging its component-based structure for scalability.",
            "Focused on responsive design to ensure usability across different devices and screen sizes.",
            "Incorporated clean and intuitive layouts, following modern UI/UX design principles.",
            "Utilized React props and state management to structure and manage data flow between components effectively.",
        ],
        links:"https://dpschoolmanagement87.netlify.app",
    },
]