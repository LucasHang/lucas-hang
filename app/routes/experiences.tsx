import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/experiences.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Experiences() {
  return (
    <main className="container">
      <div className="content">
        <h1>Experiences page</h1>
        <p>I'm sorry, this page is in development process...</p>
      </div>
    </main>
  );
}
