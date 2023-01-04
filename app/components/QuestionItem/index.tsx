import type { LinksFunction } from "@remix-run/node";
import classNames from "classnames";

import stylesUrl from "./styles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

interface QuestionItemProps {
  /** @note Number 0 is special and will be highlighted */
  number: number;
  text: string;
}

function QuestionItem({ number, text }: QuestionItemProps) {
  return (
    <div
      className={classNames("question-item-container", {
        highlighted: number === 0,
      })}
    >
      <small className="question-item-number">{number}</small>
      <span className="question-item-text">{text}</span>
    </div>
  );
}

export default QuestionItem;
