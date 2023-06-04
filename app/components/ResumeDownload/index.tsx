import type { LinksFunction } from "@remix-run/node";
import { RiDownloadLine } from "@react-icons/all-files/ri/RiDownloadLine";

import stylesUrl from "./styles.css";
import { generateResumePdf } from "~/services/generateResumePdf";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

interface ResumeDownloadProps {
  locale: "pt" | "en";
}

function ResumeDownload({ locale }: ResumeDownloadProps) {
  return (
    <button
      onClick={() => generateResumePdf(locale)}
      className="resumes-primary-resume"
    >
      <RiDownloadLine size={30} />
      <h6>Download</h6>
    </button>
  );
}

export default ResumeDownload;
