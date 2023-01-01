import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "./styles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

interface QuestionItemProps {
  number: number;
  text: string;
}

function QuestionItem({ number, text }: QuestionItemProps) {
  return (
    <div className="question-item-container">
      <small className="question-item-number">{number}</small>
      <span className="question-item-text">{text}</span>
    </div>
  );
}

export default QuestionItem;
