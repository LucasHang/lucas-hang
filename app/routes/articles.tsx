import React from "react";
import type { LinksFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import ContentHeader, {
  links as contentHeaderLinks,
} from "~/components/ContentHeader";

import stylesUrl from "~/styles/articles.css";

const MAIN_ARTICLES = [
  {
    id: 1,
    title: "A perspective about Story Points",
    lead: "Should we point our stories? What unit of measure should we use? Should it be equivalent to time measure units? I'll talk about my researches and experiences on that matters, and at the end, a free website for you and your team point stories.",
    publishedAt: "19/12/2022",
    minutesToRead: 4,
    link: "https://medium.com/@_hanglucas/a-perspective-about-story-points-c8697beb8b54",
  },
  {
    id: 2,
    title:
      "Printing PDF in Node.js with Electron (ElectronForge + pdf-to-printer + webpack)",
    lead: "So you have an Electron app and the feature to print pdf was requested? Come with me",
    publishedAt: "05/06/2022",
    minutesToRead: 3,
    link: "https://medium.com/@_hanglucas/printing-pdf-in-node-js-with-electron-electronforge-pdf-to-printer-webpack-b5c18209cf88",
  },
];

const LINK_TO_MY_MEDIUM = "https://medium.com/@_hanglucas";

export const links: LinksFunction = () => {
  return [...contentHeaderLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export default function Articles() {
  const { t } = useTranslation();

  return (
    <div className="articles-container">
      <ContentHeader title={t("question_community")} />

      <div className="content">
        <h4>{t("articles_title")}</h4>

        <p>{t("articles_description")}</p>

        <div className="article-links">
          {MAIN_ARTICLES.map((article, index) => {
            return (
              <React.Fragment key={article.id}>
                <a
                  href={article.link}
                  className="article"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <small>Publicado em {article.publishedAt}</small>

                  <h5>{article.title}</h5>

                  <p>{article.lead}</p>

                  <small>{article.minutesToRead} min</small>
                </a>

                {index < MAIN_ARTICLES.length - 1 && <hr />}
              </React.Fragment>
            );
          })}
        </div>

        <a href={LINK_TO_MY_MEDIUM} target="_blank" rel="noopener noreferrer">
          {t("articles_link_to_my_medium")}
        </a>
      </div>
    </div>
  );
}
