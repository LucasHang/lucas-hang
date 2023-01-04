import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/skills.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Skills() {
  return (
    <main className="container">
      <div className="content">
        <h1>Skills page</h1>
        <p>I'm sorry, this page is in development process...</p>
      </div>
    </main>
  );
}
