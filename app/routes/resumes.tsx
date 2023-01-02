import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";

import stylesUrl from "~/styles/education.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

/**
 * @todo Finalizar estilização
 * @todo TItulo com flechinha pra voltar
 * @todo Bandeirinhas para cada linguagem
 * @todo Translations
 */

export default function Resumes() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <h2>{t("question_resume")}</h2>

      <h4>Com toda certeza!</h4>

      <small>
        Vou tentar te apresentar o currículo para download correspondente a sua
        lingua. Caso não esteja disponível ainda, será em inglês. No entanto,
        não se preocupe, todas as opções disponíveis de linguagem estarão
        acessíveis abaixo.
      </small>

      <a
        href="/resumes/CV-Lucas_Hang-english.pdf"
        download="CV-Lucas_Hang-english"
      >
        Lucas Hang Resume - English Version
      </a>
      <a
        href="/resumes/CV-Lucas_Hang-portugues.pdf"
        download="CV-Lucas_Hang-portugues"
      >
        Currículo Lucas Hang - Versão em Português
      </a>
    </div>
  );
}
