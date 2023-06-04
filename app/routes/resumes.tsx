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

export default function Resumes() {
  const { t, i18n } = useTranslation();

  const locale = (i18n.language || "en") as "pt" | "en";

  return (
    <div className="resumes-container">
      <ContentHeader title={t("question_resume")} />

      <div className="content">
        <h4>{t("resumes_title")}</h4>

        <p>{t("resumes_description")}</p>

        <ResumeDownload locale={locale} />
      </div>
    </div>
  );
}
