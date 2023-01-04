import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";

import stylesUrl from "~/styles/resumes.css";
import ResumeDownload, {
  links as resumeDownloadLinks,
} from "~/components/ResumeDownload";
import ContentHeader, {
  links as contentHeaderLinks,
} from "~/components/ContentHeader";

export const links: LinksFunction = () => {
  return [
    ...contentHeaderLinks(),
    ...resumeDownloadLinks(),
    { rel: "stylesheet", href: stylesUrl },
  ];
};

const RESUMES = [
  {
    locale: "en",
    fileName: "CV-Lucas_Hang-English",
    title: "Lucas Hang Resume",
    localeCountry: "united-states",
    localeDescription: "English Version",
  },
  {
    locale: "pt",
    fileName: "CV-Lucas_Hang-Portugues",
    title: "Currículo Lucas Hang",
    localeCountry: "brazil",
    localeDescription: "Versão em Português",
  },
];

export default function Resumes() {
  const { t, i18n } = useTranslation();

  const primaryResume =
    RESUMES.find((r) => r.locale === i18n.language) || RESUMES[0];

  const secondaryResumes = RESUMES.filter(
    (r) => r.locale !== primaryResume.locale
  );

  return (
    <div className="resumes-container">
      <ContentHeader title={t("question_resume")} />

      <div className="content">
        <h4>{t("resumes_title")}</h4>

        <p>
          {t("resumes_description")}
          <br />
          <small className="helper-text">
            {t("resumes_description_helper")}
          </small>
        </p>

        <ResumeDownload primary resumeData={primaryResume} />

        <small className="helper-text">
          {t("resumes_alternative_language")}
        </small>

        <div className="resumes-secondaries-container">
          {secondaryResumes.map((secondaryResume) => (
            <ResumeDownload
              key={secondaryResume.locale}
              primary={false}
              resumeData={secondaryResume}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
