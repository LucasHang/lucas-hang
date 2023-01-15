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
    jobTitle: "Desenvolvedor full stack",
    companyName: "Pedidos10 Brasil",
    jobModel: "Tempo integral (Híbrido)",
    startDate: "11/2019",
    endDate: null,
    isCurrentJob: true,
    companyLocatedAt: "Blumenau, Santa Catarina, Brasil",
    description:
      "Iniciei dando suporte e fazendo melhorias em dois sistemas web internos da empresa, o primeiro em PHP com Postgres e o segundo em Angularjs consumindo uma API em PHP. Ao longo do segundo ano trabalhei no desenvolvimento de uma nova aplicação desktop feita em Electron para controle de pedidos e impressão, ao mesmo tempo expandindo a área de logística da empresa, com um sistema PHP para gestão por parte dos operadores e um aplicativo mobile com React Native usada por entregadores para receber, acompanhar e finalizar entregas de pedidos. Desde o inicio de 2022 atuo como Scrum Master de um time em um novo produto da empresa para gestão interna completa de restaurante, além de ajudar no desenvolvimento e em decisões técnicas ou de domínio.",
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
    jobTitle: "Aprendiz",
    companyName: "SENAI/SC",
    jobModel: "Meio período (Presencial)",
    startDate: "01/2018",
    endDate: "12/2018",
    isCurrentJob: false,
    companyLocatedAt: "São João Batista, Santa Catarina, Brasil",
    description:
      "Curso de Aprendizagem Industrial de Suporte e Manutenção em Microcomputadores e Redes Locais",
    skillsIds: [],
  },
  {
    jobTitle: "Aprendiz",
    companyName: "SENAI/SC",
    jobModel: "Meio período (Presencial)",
    startDate: "01/2017",
    endDate: "12/2017",
    isCurrentJob: false,
    companyLocatedAt: "São João Batista, Santa Catarina, Brasil",
    description: "Curso de Aprendizagem Industrial em Informática",
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
      <ContentHeader title={t("question_skill")} />

      <div className="content">
        {EXPERIENCES.map((experience, index) => {
          let datesInterval = experience.isCurrentJob
            ? `Desde ${experience.startDate}`
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

              <p>{experience.description}</p>

              {Boolean(skills.length) && (
                <p>
                  <strong>Habilidades:</strong>{" "}
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
