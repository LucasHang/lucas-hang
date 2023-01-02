import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";
import { RiDownloadLine } from "@react-icons/all-files/ri/RiDownloadLine";

import stylesUrl from "~/styles/resumes.css";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

/**
 * @todo Translations
 */

const RESUMES = [
  {
    locale: "en",
    fileName: "CV-Lucas_Hang-english",
    title: "Lucas Hang Resume",
    localeCountry: "united-states",
    localeDescription: "English Version",
  },
  {
    locale: "pt",
    fileName: "CV-Lucas_Hang-portugues",
    title: "Currículo Lucas Hang",
    localeCountry: "brazil",
    localeDescription: "Versão em Português",
  },
];

export default function Resumes() {
  const { t, i18n } = useTranslation();

  console.log("i18n", i18n);

  const primaryResume =
    RESUMES.find((r) => r.locale === i18n.language) || RESUMES[0];

  const secondaryResumes = RESUMES.filter(
    (r) => r.locale !== primaryResume.locale
  );

  return (
    <div className="resumes-container">
      <div className="resumes-header">
        <Link to="/">
          <RiArrowLeftSLine size={30} />
        </Link>
        <h2>{t("question_resume")}</h2>
      </div>

      <div className="content">
        <h4>Com toda certeza!</h4>

        <p>
          Vou tentar te apresentar o currículo para download correspondente a
          sua lingua. Caso não esteja disponível ainda, será em inglês.
          <br />
          <small className="helper-text">
            No entanto, não se preocupe, todas as opções disponíveis de
            linguagem estarão acessíveis abaixo.
          </small>
        </p>

        <a
          href={`/resumes/${primaryResume.fileName}.pdf`}
          download={primaryResume.fileName}
          className="resumes-primary-resume"
        >
          <RiDownloadLine size={30} />
          <h6>{primaryResume.title}</h6>
          <small className="resumes-language">
            <img
              src={`/images/${primaryResume.localeCountry}.png`}
              alt={`${primaryResume.localeCountry} flag`}
            />
            {primaryResume.localeDescription}
          </small>
        </a>

        <small className="helper-text">Caso prefira outra versão:</small>

        <div className="resumes-secondaries-container">
          {secondaryResumes.map((secondaryResume) => (
            <a
              key={secondaryResume.locale}
              href={`/resumes/${secondaryResume.fileName}.pdf`}
              download={secondaryResume.fileName}
              className="resumes-secondary-resume"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                <RiDownloadLine size={20} />
                {secondaryResume.title}
              </div>
              <small className="resumes-language">
                <img
                  src={`/images/${secondaryResume.localeCountry}.png`}
                  alt={`${secondaryResume.localeCountry} flag`}
                />
                {secondaryResume.localeDescription}
              </small>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
