import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { RiStarSLine } from "@react-icons/all-files/ri/RiStarSLine";
import ContentHeader, {
  links as contentHeaderLinks,
} from "~/components/ContentHeader";

import stylesUrl from "~/styles/skills.css";

const SOFT_SKILLS = [
  { titleKey: "skills_communication" },
  { titleKey: "skills_proactivity" },
  { titleKey: "skills_leadership" },
  { titleKey: "skills_management" },
];

const HARD_SKILLS = [
  {
    title: "Typescript",
    experience: "2-4 anos",
    color: "#3178c6",
    highlight: true,
  },
  {
    title: "Node.js",
    experience: "2-4 anos",
    color: "#3c873a",
    highlight: true,
  },
  { title: "React", experience: "2-4 anos", color: "#61dbfb", highlight: true },
  { title: "React Native", experience: "2-4 anos", color: "#61dbfb" },
  { title: "HTML5", experience: "2-4 anos", color: "#e34c26" },
  { title: "CSS3", experience: "2-4 anos", color: "#2965f1" },
  { title: "GIT", experience: "2-4 anos", color: "#f1502f" },
  { title: "Postgres", experience: "2-3 anos", color: "#306281" },
  {
    title: "MySql",
    experience: "2-3 anos",
    color: "#f29111",
  },
  { title: "TDD", experience: "2-3 anos", color: "#d6aaff" },
  { title: "DDD", experience: "1-2 anos", color: "#d6aaff" },
  { title: "Clean Arch", experience: "1-2 anos", color: "#d6aaff" },
  { title: "PHP", experience: "1-2 anos", color: "#787cb5" },
  { title: "Docker", experience: "1-2 anos", color: "#0db7ed" },
  { title: "Scrum", experience: "1-2 anos", color: "#d6aaff" },
  { title: "AWS", experience: "0-1 anos", color: "#ff9900" },
];

export const links: LinksFunction = () => {
  return [...contentHeaderLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="skills-container">
      <ContentHeader title={t("question_skill")} />

      <div className="content">
        <p>{t("skills_description")}</p>

        <span className="skills-category">{t("skills_hard_skill")}</span>
        <div className="skills-list">
          {HARD_SKILLS.map((skill) => {
            return (
              <div
                key={skill.title}
                className="skills-item"
                style={{
                  borderColor: skill.color,
                  boxShadow: `0px 0px 16px 0px ${skill.color}55`,
                }}
              >
                <span>
                  {skill.title}
                  {skill.highlight && <RiStarSLine />}
                </span>
                <small>{skill.experience}</small>
              </div>
            );
          })}
        </div>

        <span className="skills-category">
          {t("skills_soft_skill")}
          <br />
          <small className="helper-text">
            {t("skills_soft_skill_disclaimer")}
          </small>
        </span>
        <div className="skills-list">
          {SOFT_SKILLS.map((skill) => {
            return (
              <div
                key={skill.titleKey}
                className="skills-item"
                style={{
                  borderColor: "#ffffff",
                  boxShadow: `0px 0px 16px 0px #ffffff55`,
                }}
              >
                <span>{t(skill.titleKey)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
