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
    <main className="container">
      <div
        className="content"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <h1>{t("greetings")}</h1>

        <p>
          Comecei minha busca por conhecimento individual com cursos de
          aprendizagem industrial, na área da informática. Hoje em dia trabalho
          na empresa Pedidos10 e a cada dia evolúo mais corrigindo erros,
          quebrando paradígmas e aprendendo novas tecnologias. Sei que consigo
          trazer mais conhecimento e também aprender com meus pares. Trabalho
          para que o produto da empresa seja mais resiliente, valorizado e
          seguro.
        </p>

        <Link to="details">details</Link>
      </div>
    </main>
  );
}
