const profile = {
  name: "Sharath Venkat",
  education: [
    { school: "Binghamton University - State University Of New York", degree: "Masters in Computer Science", year: "2024-2025"},
    { school: "Rajalakshmi Engineering College - Anna University", degree: "B.Tech in Information Technology", year: "2020-2024"}
  ],
  experience: [
    { company: "VMWare", title: "Software Engineer Intern", dates: "Nov 2022 – Dec 2022", bullets: ["Worked on real-world projects using Java Spring Boot and REST API", "Engaged in daily code development, debugging, and iterative deployment tasks.", "Improved performance by 15%"] }
  ],
  projects: [
    { name: "Portfolio Website", stack: ["React", "Vercel"], summary: "Personal site showcasing projects and experience", role: "Designer & Developer", outcome: "Increased job interview calls by 30%" },
    { name: "AI Chatbot", stack: ["OpenAI API", "Node.js"], summary: "Interactive assistant for FAQs", role: "Full-stack Developer", outcome: "Handled 1,000+ queries" },
    { name: "AI Image Classifier", stack: ["Python", "Streamlit", "TensorFlow", "Keras", "OpenCV", "NumPy", "Python Imaging Library", "MobileNetV2"], summary: "The application allows users to upload images and instantly receive the top three predicted object categories along with confidence scores. It includes image preprocessing with OpenCV and NumPy, efficient model caching for performance, and a responsive UI for seamless user interaction", role: "Full-stack Developer", outcome: "Classifying Images" },
    { name: "AI Resume Analyzer", stack: ["Python", "Streamlit", "OpenAI", "PyPDF", "dotenv"], summary: "It allows users to upload their resumes in PDF or text format and receive personalized, structured feedback on content clarity, skills, experience, and alignment with targeted job roles. By leveraging natural language processing, the app provides actionable insights to help users improve their resumes and boost their chances in the job market.", role: "Full-stack Developer", outcome: "Helps with analyzin resume and gives a high chance of nailing an interview." }
  ],
  skills: ["React", "Node.js", "JavaScript", "Python", "C", "MongoDB", "C++", "Java", "HTML", "CSS", "Express.js", "REST APIs", "Git", "Machine Learning","TypeScript","Kotlin","SQL","Data Structures","Algorithms","OpenAI","Android Development","Figma","Streamlit","OpenCV","NumPy"],
  contact: "Use the contact form on my website."
};

export default profile;
