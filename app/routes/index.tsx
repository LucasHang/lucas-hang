import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  let { t } = useTranslation();

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>{t("greeting")}, My name is Lucas Hang</h1>

      <main>
        <p>blablablablablabla...</p>

        <Link to="details">details</Link>
      </main>
    </div>
  );
}
