import { useTranslation } from "react-i18next";
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  let { t } = useTranslation();

  return (
    <div className="content">
      <img
        src="https://media.licdn.com/dms/image/C4D03AQG15QW6B1NYfg/profile-displayphoto-shrink_400_400/0/1590855285497?e=1677715200&v=beta&t=29CLRHTofOiR75M_MnoaDDm_vSuR3ICzHQRMAbJOVoI"
        alt="Lucas Hang using sunglasses"
      />

      <h1>
        {t("greetings")} <span className="highlight-text">Lucas Hang</span>
      </h1>

      <p>{t("presentation")}</p>
    </div>
  );
}
