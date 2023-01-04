import type { LinksFunction } from "@remix-run/node";
import { RiDownloadLine } from "@react-icons/all-files/ri/RiDownloadLine";

import stylesUrl from "./styles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

interface ResumeData {
  locale: string;
  fileName: string;
  title: string;
  localeCountry: string;
  localeDescription: string;
}

interface ResumeDownloadProps {
  primary: boolean;
  resumeData: ResumeData;
}

function ResumeDownload({ primary, resumeData }: ResumeDownloadProps) {
  if (primary) {
    return (
      <a
        href={`/resumes/${resumeData.fileName}.pdf`}
        download={resumeData.fileName}
        className="resumes-primary-resume"
      >
        <RiDownloadLine size={30} />
        <h6>{resumeData.title}</h6>
        <small className="resumes-language">
          <img
            src={`/images/${resumeData.localeCountry}.png`}
            alt={`${resumeData.localeCountry} flag`}
          />
          {resumeData.localeDescription}
        </small>
      </a>
    );
  }

  return (
    <a
      key={resumeData.locale}
      href={`/resumes/${resumeData.fileName}.pdf`}
      download={resumeData.fileName}
      className="resumes-secondary-resume"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
        <RiDownloadLine size={20} />
        {resumeData.title}
      </div>
      <small className="resumes-language">
        <img
          src={`/images/${resumeData.localeCountry}.png`}
          alt={`${resumeData.localeCountry} flag`}
        />
        {resumeData.localeDescription}
      </small>
    </a>
  );
}

export default ResumeDownload;
