import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import ContentHeader, {
  links as contentHeaderLinks,
} from "~/components/ContentHeader";

import stylesUrl from "~/styles/educations.css";

const EDUCATIONS = [
  {
    title: "Data Science",
    institution: "Descomplica Faculdade Digital",
    degree: "Technologist",
    startDate: "01/2023",
    endDate: "07/2025",
    skillsIds: [
      "big-data",
      "analytics",
      "machine-learning",
      "artificial-intelligence",
      "python",
    ],
  },
  {
    title: "Systems development",
    institution: "SENAI/SC",
    degree: "Systems development and maintenance technician",
    startDate: "02/2018",
    endDate: "07/2019",
    skillsIds: [
      "ruby",
      "sql",
      "agile",
      "software-documentation",
      "java",
      "network",
    ],
  },
];

export const links: LinksFunction = () => {
  return [...contentHeaderLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export default function Educations() {
  const { t } = useTranslation();

  return (
    <div className="educations-container">
      <ContentHeader title={t("question_education")} />

      <div className="content">
        {EDUCATIONS.map((education, index) => {
          let datesInterval = `${education.startDate} - ${education.endDate}`;

          //   const skills = getHardSkillsByIds(education.skillsIds);

          return (
            <div key={index} className="education">
              <div className="education-dates">
                <hr />
                <span>{datesInterval}</span>
                <hr />
              </div>

              <h5>{education.title}</h5>
              <span>{education.institution}</span>

              <br />

              <small>{education.degree}</small>

              {Boolean(education.skillsIds.length) && (
                <p>
                  <strong>Skills:</strong> {education.skillsIds.join(", ")}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
