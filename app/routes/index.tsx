import { useTranslation } from "react-i18next";
import type { LinksFunction } from "@remix-run/node";
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill";
import { RiLinkedinBoxFill } from "@react-icons/all-files/ri/RiLinkedinBoxFill";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  let { t } = useTranslation();

  return (
    <div className="content">
      <img
        src="images/me.jpg"
        alt="Lucas Hang looking surprised at the camera"
      />

      <h1>
        {t("greetings")} <span className="highlight-text">Lucas Hang</span>
      </h1>

      <p>{t("resume.summary")}</p>

      <div className="media-links">
        <a
          href="https://www.github.com/LucasHang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiGithubFill size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/lucas-hang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinBoxFill size={22} />
        </a>
      </div>
    </div>
  );
}
