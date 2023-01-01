import { useEffect } from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import QuestionItem, { links as questionItemLinks } from "../QuestionItem";

import stylesUrl from "./styles.css";

export const links: LinksFunction = () => {
  return [...questionItemLinks(), { rel: "stylesheet", href: stylesUrl }];
};

const QUESTIONS = [
  { number: 1, textKey: "question_education", goTo: "educations" },
  { number: 2, textKey: "question_experience", goTo: "experiences" },
  { number: 3, textKey: "question_skill", goTo: "skills" },
  { number: 4, textKey: "question_resume", goTo: "resumes" },
  { number: 5, textKey: "question_contact", goTo: "contacts" },
  { number: 6, textKey: "question_community", goTo: "articles" },
];

function Questions() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyPress(e: KeyboardEvent) {
      const keyNumber = Number(e.key);
      if (!Number.isNaN(keyNumber)) {
        const question = QUESTIONS.find((q) => q.number === keyNumber);

        if (question) {
          navigate(question.goTo);
        }
      }
    }

    document.addEventListener("keypress", onKeyPress);

    return () => {
      document.removeEventListener("keypress", onKeyPress);
    };
  }, [navigate]);

  return (
    <div className="questions-container">
      <h5>{t("questions_title")}</h5>

      <ul>
        {QUESTIONS.map((question) => (
          <li key={question.number}>
            <Link to={question.goTo}>
              <QuestionItem
                number={question.number}
                text={t(question.textKey)}
              />
            </Link>
          </li>
        ))}
      </ul>

      <small className="helper-text">{t("questions_helper")}</small>
    </div>
  );
}

export default Questions;
