import { useEffect } from "react";
import type { LinksFunction } from "@remix-run/node";
import { Link, useNavigate, useLocation } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import QuestionItem, { links as questionItemLinks } from "../QuestionItem";

import stylesUrl from "./styles.css";

interface Question {
  number: number;
  textKey: string;
  goTo: string;
}

const ALL_QUESTIONS: Array<Question> = [
  { number: 1, textKey: "question_education", goTo: "/educations" },
  { number: 2, textKey: "question_experience", goTo: "/experiences" },
  { number: 3, textKey: "question_skill", goTo: "/skills" },
  { number: 4, textKey: "question_resume", goTo: "/resumes" },
  { number: 5, textKey: "question_project", goTo: "/projects" },
  { number: 6, textKey: "question_contact", goTo: "/contacts" },
  { number: 7, textKey: "question_community", goTo: "/articles" },
  { number: 8, textKey: "question_askAI", goTo: "/askAI" },
  { number: 0, textKey: "question_back_home", goTo: "/" },
];

function getSelectedQuestion(pathname: string): Question | undefined {
  const selectedQuestion = ALL_QUESTIONS.find((q) => {
    if (q.number === 0) {
      return pathname === q.goTo;
    } else {
      return pathname.startsWith(q.goTo);
    }
  });

  return selectedQuestion;
}

export const links: LinksFunction = () => {
  return [...questionItemLinks(), { rel: "stylesheet", href: stylesUrl }];
};

function Questions() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const selectedQuestion = getSelectedQuestion(location.pathname);

  useEffect(() => {
    function onKeyPress(e: KeyboardEvent) {
      if (!e.key || e.key === " ") {
        return;
      }

      const keyNumber = Number(e.key);
      if (!Number.isNaN(keyNumber)) {
        const question = ALL_QUESTIONS.find((q) => q.number === keyNumber);

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
        {ALL_QUESTIONS.map((question) => {
          const disabled = question.number === selectedQuestion?.number;
          const hidden = disabled && selectedQuestion?.number === 0;

          return (
            <li
              key={question.number}
              className={classNames({
                disabled,
                hidden,
              })}
            >
              <Link to={question.goTo} prefetch="intent">
                <QuestionItem
                  number={question.number}
                  text={t(question.textKey)}
                  selected={question.number === selectedQuestion?.number}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <small className="helper-text">{t("questions_helper")}</small>
    </div>
  );
}

export default Questions;
