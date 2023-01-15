const SOFT_SKILLS = [
  { id: "communication", titleKey: "skills_communication" },
  { id: "proactivity", titleKey: "skills_proactivity" },
  { id: "leadership", titleKey: "skills_leadership" },
  { id: "management", titleKey: "skills_management" },
];

const HARD_SKILLS = [
  {
    id: "typescript",
    title: "Typescript",
    experience: "2-4 anos",
    color: "#3178c6",
    highlight: true,
  },
  {
    id: "node",
    title: "Node.js",
    experience: "2-4 anos",
    color: "#3c873a",
    highlight: true,
  },
  {
    id: "react",
    title: "React",
    experience: "2-4 anos",
    color: "#61dbfb",
    highlight: true,
  },
  {
    id: "react-native",
    title: "React Native",
    experience: "2-4 anos",
    color: "#61dbfb",
  },
  { id: "html5", title: "HTML5", experience: "2-4 anos", color: "#e34c26" },
  { id: "css3", title: "CSS3", experience: "2-4 anos", color: "#2965f1" },
  { id: "git", title: "GIT", experience: "2-4 anos", color: "#f1502f" },
  {
    id: "postgres",
    title: "Postgres",
    experience: "2-3 anos",
    color: "#306281",
  },
  {
    id: "mysql",
    title: "MySql",
    experience: "2-3 anos",
    color: "#f29111",
  },
  { id: "tdd", title: "TDD", experience: "2-3 anos", color: "#d6aaff" },
  { id: "ddd", title: "DDD", experience: "1-2 anos", color: "#d6aaff" },
  {
    id: "clean-arch",
    title: "Clean Arch",
    experience: "1-2 anos",
    color: "#d6aaff",
  },
  { id: "php", title: "PHP", experience: "1-2 anos", color: "#787cb5" },
  { id: "docker", title: "Docker", experience: "1-2 anos", color: "#0db7ed" },
  { id: "scrum", title: "Scrum", experience: "1-2 anos", color: "#d6aaff" },
  { id: "aws", title: "AWS", experience: "0-1 anos", color: "#ff9900" },
];

export function getAllSkills() {
  return {
    hardSkills: HARD_SKILLS,
    softSkills: SOFT_SKILLS,
  };
}

export function getHardSkillsByIds(ids: Array<string>) {
  return HARD_SKILLS.filter((skill) => ids.includes(skill.id));
}
