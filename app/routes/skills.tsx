import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { RiStarSLine } from "@react-icons/all-files/ri/RiStarSLine";
import ContentHeader, {
  links as contentHeaderLinks,
} from "~/components/ContentHeader";

import { getAllSkills } from "~/services/skills";
import stylesUrl from "~/styles/skills.css";

export const links: LinksFunction = () => {
  return [...contentHeaderLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export default function Skills() {
  const { t } = useTranslation();

  const { hardSkills, softSkills } = getAllSkills();

  return (
    <div className="skills-container">
      <ContentHeader title={t("question_skill")} />

      <div className="content">
        <p>{t("skills_description")}</p>

        <span className="skills-category">{t("skills_hard_skill")}</span>
        <div className="skills-list">
          {hardSkills.map((skill) => {
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
          {softSkills.map((skill) => {
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
