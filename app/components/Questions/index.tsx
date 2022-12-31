import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "./styles.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

function Questions() {
  return (
    <div className="questions-container">
      <Link to="educations" className="fade-in-right">
        educations
      </Link>
      <Link to="experiences" className="fade-in-right">
        experiences
      </Link>
      <Link to="skills" className="fade-in-right">
        skills
      </Link>
    </div>
  );
}

export default Questions;
