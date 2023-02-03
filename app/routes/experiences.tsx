import type { LinksFunction } from "@remix-run/node";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import ContentHeader, {
  links as contentHeaderLinks,
} from "~/components/ContentHeader";
import { getHardSkillsByIds } from "~/services/skills";

import stylesUrl from "~/styles/experiences.css";

const EXPERIENCES = [
  {
    jobTitle: "Full-stack Developer",
    companyName: "Pedidos10 Brasil",
    jobModel: "Integral (Hybrid)",
    startDate: "11/2019",
    endDate: null,
    isCurrentJob: true,
    companyLocatedAt: "Blumenau, Santa Catarina, Brazil",
    descriptionKey: "experiences_job_01_description",
    skillsIds: [
      "php",
      "ddd",
      "tdd",
      "scrum",
      "typescript",
      "node",
      "aws",
      "rabbitmq",
      "docker",
      "react-native",
      "git",
      "html5",
      "css3",
      "postgres",
      "react",
    ],
  },
  {
    jobTitle: "Apprentice",
    companyName: "SENAI/SC",
    jobModel: "Part time (In office)",
    startDate: "01/2018",
    endDate: "12/2018",
    isCurrentJob: false,
    companyLocatedAt: "São João Batista, Santa Catarina, Brazil",
    descriptionKey: "experiences_job_02_description",
    skillsIds: [],
  },
  {
    jobTitle: "Apprentice",
    companyName: "SENAI/SC",
    jobModel: "Part time (In office)",
    startDate: "01/2017",
    endDate: "12/2017",
    isCurrentJob: false,
    companyLocatedAt: "São João Batista, Santa Catarina, Brazil",
    descriptionKey: "experiences_job_03_description",
    skillsIds: [],
  },
];

export const links: LinksFunction = () => {
  return [...contentHeaderLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <div className="experiences-container">
      <ContentHeader title={t("question_experience")} />

      <div className="content">
        {EXPERIENCES.map((experience, index) => {
          let datesInterval = experience.isCurrentJob
            ? `Since ${experience.startDate}`
            : `${experience.startDate} - ${experience.endDate}`;

          const skills = getHardSkillsByIds(experience.skillsIds);

          return (
            <div
              key={index}
              className={classNames("experience", {
                "current-job": experience.isCurrentJob,
              })}
            >
              <div className="experience-dates">
                <hr />
                <span>{datesInterval}</span>
                <hr />
              </div>

              <h5>{experience.jobTitle}</h5>
              <span>
                {experience.companyName} | {experience.jobModel}
              </span>

              <br />

              <small>{experience.companyLocatedAt}</small>

              <p>{t(experience.descriptionKey)}</p>

              {Boolean(skills.length) && (
                <p>
                  <strong>Skills:</strong>{" "}
                  {skills.map((s) => s.title).join(", ")}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
