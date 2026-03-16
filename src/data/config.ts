const config = {
  title: "Abhinandan Jain | AI Enthusiast",
  description: {
    long: "I create AI-driven web products and immersive experiences that solve real problems. From full-stack apps and automation tools to data-backed analytics projects, I focus on clean UX, scalable systems, and measurable impact.",
    short:
      "Discover the portfolio of Abhinandan Jain, a B.Tech CSE student, Developer, Leader, and AI Enthusiast.",
  },
  keywords: [
    "Abhinandan",
    "Abhinandan Jain",
    "abhinandanjain",
    "portfolio",
    "Web Developer",
    "Projects",
    "Resume",
    "AI Enthusiast",
    "creative technologist",
    "web development",
    "interactive websites",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
  ],
  author: "Abhinandan Jain",
  email: "abhinandanjain.cse27@jecrc.ac.in",
  site: "https://abhinandanjain.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://linkedin.com/in/abhinandan-jain-2559a6292",
    instagram: "",
    facebook: "",
    github: "https://github.com/abhinandanjain001",
  },
};
export { config };
