import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import ContentHeader, {
  links as contentHeaderLinks,
} from "~/components/ContentHeader";

import stylesUrl from "~/styles/projects.css";

const PROJECTS = [
  {
    title: "Task Scorer",
    description:
      "A simple website used for scoring tasks in group used for my team at my current company.",
    startDate: "08/2022",
    endDate: "12/2022",
    href: "https://task-scorer-site.vercel.app/",
    stack: [
      "Typescript",
      "SvelteKit",
      "TailwindCSS",
      "DaisyUI",
      "Firebase",
      "Vercel",
    ],
  },
];

export const links: LinksFunction = () => {
  return [...contentHeaderLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects-container">
      <ContentHeader title={t("question_project")} />

      <div className="content">
        {PROJECTS.map((project, index) => {
          let datesInterval = project.endDate
            ? `${project.startDate} - ${project.endDate}`
            : `Since ${project.startDate}`;

          return (
            <div key={index} className="project">
              <div className="project-dates">
                <hr />
                <span>{datesInterval}</span>
                <hr />
              </div>

              <h5>{project.title}</h5>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <small>{project.href}</small>
              </a>

              <p>{project.description}</p>

              <p>
                <strong>Stack:</strong> {project.stack.join(", ")}
              </p>
            </div>
          );
        })}

        <small className="helper-text">More are coming...</small>
      </div>
    </div>
  );
}
